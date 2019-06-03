/* eslint-disable taro/no-stateless-component */
import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCountdown, AtCard, AtTabBar } from 'taro-ui'
import Gift from './Gift'
import { add, minus, asyncAdd } from '../../actions/counter'
import bg from '../../img/bg.jpg'
import './index.scss'

const data = [[{
  addNum:+5,
  name:'比心',
  consume:1,
  imgUrl:'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
},{
  addNum:+5,
  name:'比心',
  consume:1,
  imgUrl:'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
},{
  addNum:+5,
  name:'比心',
  consume:1,
  imgUrl:'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
}],[{
  addNum:+5,
  name:'比心',
  consume:1,
  imgUrl:'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
},{
  addNum:+5,
  name:'比心',
  consume:1,
  imgUrl:'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
},{
  addNum:+5,
  name:'比心',
  consume:1,
  imgUrl:'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
}], [{
  addNum:+5,
  name:'比心',
  consume:1,
  imgUrl:'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
},{
  addNum:+5,
  name:'比心',
  consume:1,
  imgUrl:'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
},{
  addNum:+5,
  name:'比心',
  consume:1,
  imgUrl:'cloud://sign-8a5778.7369-sign-8a5778/gift/图层 19.png'
}]];

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
        <View className='user-info'>
          <View className='at-row'>
            <View className='at-col'>
              <View className='text-center name'>张帅</View>
              <View className='text-center ranking'>排名:12</View>
            </View>
            <View className='at-col-5' style='padding-top:40rpx;'>
              <View className='at-row'>
                <View className='text-center ticket '>123票数</View>
                <View className='text-center help'>帮他</View>
              </View>
            </View>
          </View>
        </View>
        <View className='gift-box'>
          <Gift></Gift>
        </View>
        <View className='comment'>
          comment
        </View>
      </View>
    )
  }
}

export default Index
