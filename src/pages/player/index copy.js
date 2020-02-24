import Taro, { Component } from "@tarojs/taro";
import { View, Image, Form, Button, Textarea } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import Gift from "./Gift";
import { add, minus, asyncAdd } from "../../actions/counter";
import { AtActivityIndicator } from 'taro-ui'
import "./index.scss";
import { addContribute, getUserById } from "@/util/db";
import { updateUserInfo, getUserRanking } from "@/util/db/user";

class Index extends Component {
  config = {};

  componentWillUnmount() {}

  componentDidShow() {
    let routers = Taro.getCurrentPages();
    let currentRouter = routers[routers.length - 1];
    getUserById(currentRouter.options.id).then(res => {
      const state = this.state;
      const [currentPlayer] = res;

      getUserRanking(currentRouter.options.id).then(resRanking => {
        const [currentRanking, nextUser] = resRanking;
        const currentPoll = currentPlayer.poll || 0;
        console.log(nextUser, "zzz");
        const nextPoll = (nextUser && nextUser.poll) || 0;
        const totalPoll = currentPoll + nextPoll;

        let currentParent, nextParent;

        if (totalPoll === 0 ) {
          currentParent = 0;
          nextParent = 0;
        } else {
          currentParent = Number(currentPoll / totalPoll).toFixed(2);
          console.log(currentParent)
          nextParent = (1 - currentParent)*100;
        }

        Taro.getUserInfo({
          success: ({ userInfo }) => {
            const state = this.state;
            const { nickName, avatarUrl } = userInfo;
            this.setState({
              ...state,
              userId: currentRouter.options.id,
              nickName,
              currentRanking,
              nextUser,
              avatarUrl,
              nextParent,
              currentPlayer
            });
          }
        });
      });
    });
  }

  componentDidHide() {}
  submitPoll = () => {
    let {
      userId,
      nickName,
      avatarUrl,
      giftName,
      giftScore,
      currentPlayer
    } = this.state;
    let param = { userId, nickName, avatarUrl, giftName, giftScore };
    addContribute(param).then(res => {
      if (res) {
        if (!currentPlayer.poll) {
          currentPlayer.poll = 0;
        }
        currentPlayer.poll += giftScore;
        updateUserInfo(currentPlayer._id, { poll: currentPlayer.poll });
      }
    });
  };
  giftClick = data => {
    const { name: giftName, score: giftScore } = data;
    const state = this.state;
    this.setState({ ...state, giftName, giftScore });
  };

  render() {
    const { currentPlayer, nextUser, currentRanking, nextParent } = this.state;
    return (
      <AtActivityIndicator content='加载中...'>

      <View className='index'>
        <View className='user-info'>
          <View className='at-row'>
            <View className='at-col-3'>
              <View id='touxiang'>
                <Image
                  src={currentPlayer.avatarUrl}
                  style='margin:auto;width:128rpx;height:128rpx;border-radius:50%;display:block;'
                  ></Image>
              </View>
            </View>
            <View className='at-col' style='padding-top:40rpx;'>
              <View className='at-row'>
                <View className='text-center'>{currentPlayer.name}</View>
              </View>
              <View className='text-center' style='font-size:20rpx;'>
                给他送上一份礼物吧
              </View>
            </View>
          </View>
        </View>
        <View className='review'>
          <View className='left'>
            <Image
              src='cloud://sign-8a5778.7369-sign-8a5778/icon/huangguan.png'
              style='width: 58rpx;height: 58rpx;'
              ></Image>
            <View>排名 : {currentRanking + 1}</View>
          </View>
          {nextUser && (
            <View className='dddprogress'>
              <View
                className='right-progress'
                style={`width:${nextParent}%;`}
                ></View>
            </View>
          )}
          {nextUser && (
            <View className='right'>
              <Image
                src='cloud://sign-8a5778.7369-sign-8a5778/icon/huangguan.png'
                style='width: 58rpx;height: 58rpx;'
                ></Image>
              <View>排名 : {currentRanking}</View>
            </View>
          )}
        </View>
        <View className='rankingInfo at-row'>
          <View className='at-col'>
            <View>选手编号</View>
            <View>{currentPlayer.id}</View>
          </View>
          <View className='at-col'>
            <View>当前票数</View>
            <View>{poll || 0}</View>
          </View>
        </View>
        <View className='gift-box'>
          <Gift onClick={this.giftClick}></Gift>
        </View>
        <View className='comment'>
          <Form onSubmit={this.submitPoll}>
            <Textarea maxLength={200} placeholder='备注' />
            <Button formType='submit'>送出礼物</Button>
          </Form>
        </View>
      </View>
          </AtActivityIndicator>
    );
  }
}

export default Index;
