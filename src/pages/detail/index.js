import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text,  } from "@tarojs/components";
import {AtButton} from 'taro-ui';
import { getUserById, addContribute } from "../../util/db";
import "./index.scss";
import { updateUserData, getUsersData } from "@/util/db/wxUser";
import { updateUserInfo } from "@/util/db/user";



class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isOpened: false,
      userdata: {}
    };
  }
  config = {};


  componentDidShow() {
    console.log(this.props,'props')
    // const {userId} = this.props;
    // getUserById(userId).then(res => {
    //   this.setState({ userdata: res[0] });
    // });
  }
  componentDidHide() {}
  handleClick = () => {};
  sendVote = ()=>{
    Taro.getUserInfo({lang:'zh_CN'}).then(res=>{
      const {userInfo} = res;
      if(userInfo){
        getUsersData(userInfo).then(uRes=>{
          const [wxUser] = uRes.data;
          if(wxUser){
            if(wxUser.vote === 1){
              Taro.atMessage({
                type: "error",
                message: `每个用户只能投一次票`
              });
            }else{
              const data = {...wxUser};
              data.vote = 1;
              updateUserData(userInfo,data)
              this.submitPoll();
            }
          }
         
        })
      }
    })
  }
  submitPoll = () => {
    let {
      userdata
    } = this.state;
        if (!userdata.poll) {
          userdata.poll = 0;
        }
        userdata.poll += 1;
        updateUserInfo(userdata._id, { poll: userdata.poll });
  };
  onClose() {
    this.setState({
      isOpened: false
    });
  }
  getUserInfo = e => {
    this.onClose();
  };
  render() {
    let { userdata={} } = this.state;
    let { filesList = [], name, _id, description } = userdata;
    console.log(this.props,'props')
    return (
      <View className="index">
        {filesList.map(item => {
          return (
            <View key={item} className="img-production">
              <Image
                src={item}
                style="width: 100%;height:100%;"
                mode="widthFix"
                lazy-load
              ></Image>
              <View className="img-footer">
                <span style="margin-right:15rpx">{name}</span>
                <span>{String(_id).substr(0, 5)}</span>
              </View>
            </View>
          );
        })}
        <View>
        {description}
        </View>
        <View style="padding: 10rpx 20rpx;">
              <AtButton
                type="primary"
                style="background:#ff9915;"
                onClick={this.sendVote}
              >
                投一票
              </AtButton>
          </View>
      </View>
    );
  }
}

export default Index;
