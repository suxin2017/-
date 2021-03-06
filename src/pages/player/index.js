import Taro, { Component } from "@tarojs/taro";
import { View, Image, Form, Button, Textarea } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import Gift from "./Gift";
import { add, minus, asyncAdd } from "../../actions/counter";
import { AtActivityIndicator, AtMessage } from 'taro-ui'
import "./index.scss";
import { addContribute, getUserById } from "@/util/db";
import { updateUserInfo, getUserRanking } from "@/util/db/user";
import Detail from './detail'
import { getUsersData, updateUserData } from "@/util/db/wxUser";
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
 
  giftClick = data => {
    const { name: giftName, score: giftScore } = data;
    const state = this.state;
    this.setState({ ...state, giftName, giftScore });
  };

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
              delete data._openid;
              updateUserData(data)
              this.submitPoll();
            }
          }
         
        })
      }
    })
  }
  submitPoll = () => {
    let {
      currentPlayer
    } = this.state;
        if (!currentPlayer.poll) {
          currentPlayer.poll = 0;
        }
        currentPlayer.poll += 1;
        updateUserInfo(currentPlayer._id, { poll: currentPlayer.poll }).then(()=>{
          Taro.atMessage({
            type: "sucess",
            message: `更新成功`
          });
          getUserById(currentPlayer._id).then(res => {
            const [play] = res;
            this.setState({currentPlayer:play})
          })      
        });
  };

  render() {
    const { currentPlayer={}, nextUser, currentRanking, nextParent } = this.state;
    const {_id} = currentPlayer
    return (

      <View className='index'>
                <AtMessage />
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
     
        <View className='rankingInfo at-row'>
          <View className='at-col'>
            <View>选手编号</View>
            <View>{String(_id).substr(0,6)}</View>
          </View>
          <View className='at-col'>
            <View>当前票数</View>
            <View>{currentPlayer.poll || 0}</View>
          </View>
        </View>
        <View style="padding:10rpx">

        <Detail user={currentPlayer}></Detail>
        </View>
        <View className='comment'>
            <Button
             type="primary"
             style="background:#ff9915;"
            onClick={this.sendVote}>投上一票</Button>
        </View>
      </View>
    );
  }
}

export default Index;
