import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import Footer from '../../components/Footer'
import  {setCurrentTabBar}  from '@/util/wxapp';

class Index extends Component {

  config = {
    navigationBarTitleText: '思潮儿童美术班作品竞赛'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { 
    setCurrentTabBar.call(this,1)
  }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
      <Image src='cloud://sign-8a5778.7369-sign-8a5778/aware/特等奖1.png' style='width:99vw;height:280rpx;margin-top:25rpx;' />
            <Image src='cloud://sign-8a5778.7369-sign-8a5778/aware/特等奖2.png' style='width:99vw;height:280rpx;' />
            <Image src='cloud://sign-8a5778.7369-sign-8a5778/aware/一等奖.png' style='width:99vw;height:280rpx;' />
            <Image src='cloud://sign-8a5778.7369-sign-8a5778/aware/二等奖.png' style='width:99vw;height:280rpx;' />
            <Image src='cloud://sign-8a5778.7369-sign-8a5778/aware/二等奖-1.png' style='width:99vw;height:280rpx;' />
            <Image src='cloud://sign-8a5778.7369-sign-8a5778/aware/二等奖-2.png' style='width:99vw;height:280rpx;' />
            <Footer></Footer>
            </View>
    )
  }
}

export default Index
