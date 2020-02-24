import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text, ScrollView } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import { setCurrentTabBar } from "@/util/wxapp";
import { AtCountdown, AtCard, AtTabBar, AtCurtain } from "taro-ui";
import CardList from "./component/CardList";
import { add, minus, asyncAdd } from "../../actions/counter";
import bg from "./img/bg.gif";
import weixinIcon from "./img/weixin.gif";
import phoneIcon from "./img/phone.png";
import "./index.scss";

class Index extends Component {
  state = {
    isOpened: false
  };

  config = {
    navigationBarTitleText: "美术作品竞赛"
  };

  componentWillReceiveProps(nextProps) {}

  componentWillUnmount() {}

  componentDidShow() {
    setCurrentTabBar.call(this, 4);
  }

  componentDidHide() {}
  handleClick = (...args) => {
    Taro.switchTab({ url: "page/index/index" });
  };
  render() {
    return (
      <ScrollView
        className="index"
        scrollY
        scrollWithAnimation
        style="height: 100vh;"
      >
     
        <View className="title">
          <Image
            style="width: 100%;"
            mode="widthFix"
        
            src="cloud://sign-8a5778.7369-sign-8a5778-1257631768/bg/bg.png"
          />
        </View>
        <View>
          <View className="at-row feature-view">
            <View
              className="at-col"
             
            >
              <AtCard className="at-card-no-header"
               onClick={()=>{
                Taro.previewImage({
                  current:"cloud://sign-8a5778.7369-sign-8a5778-1257631768/bg/wx.png",
                  urls:["cloud://sign-8a5778.7369-sign-8a5778-1257631768/bg/wx.png"]
                })
              }}>
                <View style="display:flex;">
                  <Image
                    src={weixinIcon}
                    style="width:48rpx;height:48rpx;margin-right:10rpx;"
                  ></Image>
                  <View style="height:48rpx;">
                    <Text>添加微信进一步的了解我</Text>
                  </View>
                </View>
              </AtCard>
            </View>
          </View>

          <CardList></CardList>
        </View>
      </ScrollView>
    );
  }
}

export default Index;
