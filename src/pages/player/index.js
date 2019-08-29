import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Gift from './Gift'
import { add, minus, asyncAdd } from '../../actions/counter'
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


  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  render() {

    return (
      <View className='index'>
        <View className='user-info'>
          <View className='at-row'>
            <View className='at-col-3'>
              <View  id='touxiang' >
              <Image src='https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epIau7LiaOu2wWCCmViaZxQwJQYB3q6ROdXL1kxXDofHNqTvURuzGqgI8ZUhDmDfPUSGdd9sYfRFLicg/132' style='margin:auto;width:128rpx;height:128rpx;border-radius:50%;display:block;'></Image>
              </View>

            </View>
            <View className='at-col-5' style='padding-top:40rpx;'>
            <View className='at-row'>
                <View>icon</View>
                <View className='text-center'>王帅</View>
            </View>
                <View className='text-center' style='font-size:20rpx;'>给他送上一份礼物吧</View>
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
