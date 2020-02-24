import Taro, { Component } from "@tarojs/taro";
import { uploadFile } from "@/util/file";
import { setCurrentTabBar } from "@/util/wxapp";
import { View, Image, Text, Card, Button } from "@tarojs/components";
import {
  AtInput,
  AtButton,
  AtTextarea,
  AtImagePicker,
  AtMessage
} from "taro-ui";
import "./index.scss";
import { addUserInfo, getUserCount } from "@/util/db/user";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sex: "",
      description: "",
      filesList: [],
      avatarUrl: ""
    };
  }
  config = {};

  componentWillReceiveProps(nextProps) {}
  componentDidShow() {
    setCurrentTabBar.call(this, 2);
  
    Taro.getUserInfo().then(res => {
      this.setState({ avatarUrl: res.userInfo.avatarUrl });
    });
  }

  componentWillUnmount() {}

  componentDidHide() {
  
  }

  chooseImage = files => {
    this.setState({ filesList: files });
  };
  onSubmit = e => {
    let flag = true;
    const rules = [
      {
        key: "name",
        message: "姓名"
      },
      {
        key: "phone",
        message: "电话"
      },
      {
        key: "sex",
        message: "性别"
      },
      {
        key: "filesList",
        message: "图片"
      }
    ];

    rules.forEach(item => {
      if (item.key === "filesList") {
        if (flag) {
          if (this.state[item.key].length < 1) {
            Taro.atMessage({
              type: "error",
              message: `请上传${item.message}`
            });
            flag = false;
          }
       
        }
      }
      if (!this.state[item.key]) {
        if (flag) {
          Taro.atMessage({
            type: "error",
            message: `请填写${item.message}`
          });

          flag = false;
        }
      }
    });

    if (flag) {
      Taro.showLoading({
        title: "上传中"
      });
      const { filesList, ...param } = this.state;

      uploadFile(filesList)
        .then(res => {
          if (res) {
            let fileIDs = res.map(item => {
              return item.fileID;
            });

            param.filesList = fileIDs;

            const {
              sex,
              phone,
              name,
              description = "",
              avatarUrl,
              filesList: files
            } = param;

            getUserCount().then(id => {
              addUserInfo({
                id: id + 1,
                sex,
                phone,
                name,
                description,
                avatarUrl,
                filesList: files,
                poll: 0
              });
            });
          }
        })
        .then(() => {
          Taro.atMessage({
            message: "提交成功",
            type: "success"
          });
          
          setTimeout(() => {
            this.setState({
              name: "",
              sex: "",
              phone:"",
              description: "",
              filesList: [],
              avatarUrl: ""
            })
            Taro.switchTab({ url: "../index/index" });
          }, 1000);
        })
        .catch(err => {
          Taro.atMessage({
            message: "文件上传失败",
            type: "error"
          });
        })
        .finally(() => {
          Taro.hideLoading();
        });
    }
  };
  handleChange = (type, value) => {
    const state = this.state;
    state[type] = value;
    this.setState(state);
  };
  render() {
    const { filesList, name, phone, sex, description } = this.state;
    return (
      <View className="index">
        <AtMessage />
        <View style="margin:20rpx 10rpx 30rpx 10rpx;">填写个人信息</View>
        <Form onSubmit={this.onSubmit}>
          <AtInput
            name="name"
            title="姓名"
            placeholder="请输入姓名"
            value={name}
            onChange={this.handleChange.bind(this, "name")}
            type="text"
          ></AtInput>
          <AtInput
            name="phone"
            title="电话"
            placeholder="请输入数字"
            value={phone}
            onChange={this.handleChange.bind(this, "phone")}
            type="phone"
          ></AtInput>
          <AtInput
            name="sex"
            title="性别"
            placeholder="请输入性别"
            value={sex}
            onChange={this.handleChange.bind(this, "sex")}
            type="text"
          ></AtInput>
          <View style="padding: 10rpx 20rpx;">
            <AtTextarea
              name="description"
              onChange={event =>
                this.handleChange("description", event.target.value)
              }
              value={description}
              title="描述"
              placeholder="添加点描述吧..."
            ></AtTextarea>
          </View>
          <View className="label">上传图片</View>
          <AtImagePicker files={filesList} onChange={this.chooseImage} />
          <View style="padding: 10rpx 20rpx;">
            <View style="margin-bottom: 10rpx;">
              <Button
                type="primary"
                style="background:#ff9915;"
                formType="submit"
                
              >
                提交
              </Button>
            </View>
          </View>
        </Form>
      </View>
    );
  }
}

export default Index;
