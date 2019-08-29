import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text,ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { setCurrentTabBar } from '@/util/wxapp';
import { AtCountdown, AtCard, AtTabBar } from 'taro-ui'
import CardList from './component/CardList'
import { add, minus, asyncAdd } from '../../actions/counter'
import bg from './img/bg.gif'
import weixinIcon from './img/weixin.gif'
import phoneIcon from './img/phone.png'
import './index.scss'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '思潮儿童美术班作品竞赛'
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() { }

  componentDidShow() {
    setCurrentTabBar.call(this,4)
  }

  componentDidHide() { }
  handleClick = (...args) => {
    Taro.switchTab({url:'page/index/index'})
  }
  render() {
    return (

          <ScrollView className='index' scrollY  scrollWithAnimation  style='height: 100vh;' >

        <View className='title'>
          <Image
            style='width: 100%;'
            mode='widthFix'
            src='cloud://sign-8a5778.7369-sign-8a5778/bg/bg.gif'
          />
        </View>
        <View>

          <View className='at-row feature-view'>
            <View className='at-col'>
              <AtCard
                className='at-card-no-header'
              >
              <View style='display:flex;'>
              <Image src={weixinIcon} style='width:48rpx;height:48rpx;'></Image>
              <View style='height:48rpx;'>
              <Text>添加微信咨询</Text>
              </View>
              </View>
              </AtCard>
            </View>
            <View className='at-col'>
              <AtCard
                className='at-card-no-header'
              >
              <View style='display:flex;'>
              <Image src={phoneIcon} style='width:48rpx;height:48rpx;'></Image>
              <View style='height:48rpx;'>
              <Text>打电话咨询</Text>
              </View>
              </View>
              </AtCard>
            </View>
          </View>

          <View className='at-row feature-view'>
            <AtCard
              className='at-card-no-header'
            >
              <View style='width:90vw;'>思科信息科技官网</View>
            </AtCard>
          </View>
          <CardList></CardList>


        </View>

      </ScrollView>
    )
  }
}

export default Index
