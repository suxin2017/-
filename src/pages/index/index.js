import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, Button, Navigator } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import {
  AtCountdown,
  AtButton,
  AtCurtain,
  AtMessage,
  AtCard,
  AtTabBar,
  AtModalAction,
  AtModalContent,
  AtModal,
  AtModalHeader
} from "taro-ui";
import PlayerCard from "./PlayCard";
import { add, minus, asyncAdd } from "../../actions/counter";
import { getUserByLimit } from "../../util/db";
import Footer from "../../components/Footer";
import baseconfig from "@/util/db/baseconfig";
import "./index.scss";
import { setCurrentTabBar } from "@/util/wxapp";
import { handleCouldData } from "@/util/helper";
import moment from "moment";
import { getUserInfoList } from "@/util/db/user";
import { getUsersData,insertWxUser } from "@/util/db/wxUser";

class Index extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      isOpened: false,
      userdata: [],
      expirationTime: ""
    };
  }
  config = {};

  componentWillReceiveProps(nextProps) {}

  componentWillUnmount() {}

  componentDidShow() {
    setCurrentTabBar.call(this, 0);

    // 获取时间
    baseconfig
      .getBaseConfig()
      .then(res => {
        const data = handleCouldData(res);
        const expirationTime = data[0].expiration_time;
        return expirationTime;
      })
      .then(expirationTime => {
        wx.cloud.callFunction({
          name: "now",
          data: {
            a: 1,
            b: 2
          },
          success: res => {
            const result = Date.parse(expirationTime) - res.result.data;
            this.setState({ expirationTime: result });
          },
          fail: console.error
        });
      });

    getUserInfoList().then(res => {
      this.setState({ userdata: res.data });
    });

    Taro.getSetting().then(e => {
      if (!e.authSetting["scope.userInfo"]) {
        this.setState({ isOpened: true });
      }
    });
  }

  componentDidHide() {}
  handleClick = value => {
    switch (value) {
      case 1:
        Taro.navigateTo({ url: "../rankinglist/index" });
        break;
      case 3:
        Taro.navigateTo({ url: "../award/index" });
        break;
      case 4:
        Taro.navigateTo({ url: "../cooperate/index" });
        break;
      default:
        Taro.navigateTo({ url: "../palyer/index" });
    }
  };
  handleChange() {
    this.setState({
      isOpened: true
    });
  }
  onClose() {
    this.setState({
      isOpened: false
    });
  }
  getUserInfo = e => {
    const {currentTarget} = e;
    const {userInfo} = currentTarget;
   getUsersData(userInfo).then(res=>{
      const [user] = res.data;
      if(!user){
        userInfo.vote =0;
        insertWxUser(userInfo)
      }
    });
    if(userInfo){
      this.onClose();
    }

  };
  render() {
    let userOddView = this.state.userdata.map((item, i) => {
      return <PlayerCard key={item._id} data={item}></PlayerCard>;
    });

    const date = moment(this.state.expirationTime);
    let expiration = {
      day: date.day(),
      hours: date.hours(),
      minutes: date.minutes(),
      seconds: date.seconds()
    };

    return (
      <View className="index">
        <AtMessage />
        <AtModal isOpened={this.state.isOpened}>
          <AtModalHeader>授权请求</AtModalHeader>
          <AtModalContent>
            没有用户信息将不能投票,请你授权用户信息
          </AtModalContent>
          <AtModalAction>
            <Button
              ref="button"
              open-type="getUserInfo"
              lang="zh_CN"
              onGetuserinfo={this.getUserInfo}
            >
              开启授权
            </Button>
          </AtModalAction>
        </AtModal>

        <View className="title">
          <Image
            style="width: 100%;"
            src="cloud://sign-8a5778.7369-sign-8a5778/aware/横幅.png"
          />
        </View>
        <View className="contern-body">
          <View className="countdown">
            <AtCard title="活动倒计时">
              <AtCountdown
                isShowDay
                day={expiration.day}
                hours={expiration.hours}
                minutes={expiration.minutes}
                seconds={expiration.seconds}
              />
            </AtCard>
          </View>
          <View className="at-row feature-view">
            <View
              className="at-col"
              style="margin-left:8px;"
              onClick={() => {
                wx.switchTab({
                  url: "/pages/upload/index"
                });
              }}
            >
              <Image
                src="cloud://sign-8a5778.7369-sign-8a5778-1257631768/icon/join.png"
                className="image"
              ></Image>
            </View>
            <View
              className="at-col"
              onClick={() => {
                Taro.navigateTo({
                  url: "/pages/search/index"
                });
              }}
            >
              <Image
                src="cloud://sign-8a5778.7369-sign-8a5778-1257631768/icon/search.png"
                className="image"
                style="margin-right:8px;"
              ></Image>
            </View>
          </View>
          {/* <View>
            <Image src={guagngaopng} className='image' style='height:100px;margin:0 10px;'></Image>
          </View> */}
          <View style="column-count: 2;column-gap: 0;">{userOddView}</View>
        </View>

        <Footer></Footer>
      </View>
    );
  }
}

export default Index;
