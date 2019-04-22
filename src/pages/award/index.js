import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import award from '../../assets/one.png'



class Index extends Component {

  config = {
    navigationBarTitleText: '思潮儿童美术班作品竞赛'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
            <Image src={award} style='width:99vw;height:280rpx;' />
            <Image src={award} style='width:99vw;height:280rpx;' />
            <Image src={award} style='width:99vw;height:280rpx;' />
            <Image src={award} style='width:99vw;height:280rpx;' />
            <Image src={award} style='width:99vw;height:280rpx;' />
            <Image src={award} style='width:99vw;height:280rpx;' />
            <Image src={award} style='width:99vw;height:280rpx;' />
            <Image src={award} style='width:99vw;height:280rpx;' />

      </View>
    )
  }
}

export default Index
