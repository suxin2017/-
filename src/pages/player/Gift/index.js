/* eslint-disable taro/no-stateless-component */
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCountdown, AtCard, AtTabBar } from 'taro-ui'

import './index.scss'

const data = [[{
  addNum: +5,
  name: '比心',
  consume: 1,
  imgUrl: 'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
}, {
  addNum: +5,
  name: '比心',
  consume: 1,
  imgUrl: 'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
}, {
  addNum: +5,
  name: '比心',
  consume: 1,
  imgUrl: 'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
}], [{
  addNum: +5,
  name: '比心',
  consume: 1,
  imgUrl: 'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
}, {
  addNum: +5,
  name: '比心',
  consume: 1,
  imgUrl: 'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
}, {
  addNum: +5,
  name: '比心',
  consume: 1,
  imgUrl: 'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
}], [{
  addNum: +5,
  name: '比心',
  consume: 1,
  imgUrl: 'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
}, {
  addNum: +5,
  name: '比心',
  consume: 1,
  imgUrl: 'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
}, {
  addNum: +5,
  name: '比心',
  consume: 1,
  imgUrl: 'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
}]];


class Index extends Component {

  config = {

  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  render() {
    return (
      <View className='gift-box'>
        {data.map((i, ind) => {
          return <View key={ind} className='at-row'>
            {i.map((item, index) => {
              return <View key={index} className='at-col gift-bg' >
                <View style='margin-left:20rpx;'>+{item.addNum}</View>
                <View style='text-align:center;'>
                  <Image style='width:70rpx;  max-height:80rpx;' mode='widthFix' src={item.imgUrl}></Image>
                  <View className='gift-name'>{item.name}</View>
                  <View className='gift-consume'>{item.consume}</View>
                </View>
              </View>
            })}
          </View>
        })
        }
      </View>
    )
  }
}

export default Index
