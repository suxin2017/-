import Taro, { Component } from '@tarojs/taro'
import { View, Image, Form, Button, Textarea } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Gift from './Gift'
import { add, minus, asyncAdd } from '../../actions/counter'
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
              <View id='touxiang' >
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
        <View className='review'>
          <View className='left'>
            <Image src='cloud://sign-8a5778.7369-sign-8a5778/icon/huangguan.png' style='width: 58rpx;height: 58rpx;'></Image>
            <View>排名 : </View>
          </View>
          <View className='dddprogress'>
            <View className='right-progress' style='width:50%;'></View>
          </View>
          <View className='right'>
            <Image src='cloud://sign-8a5778.7369-sign-8a5778/icon/huangguan.png' style='width: 58rpx;height: 58rpx;'></Image>
            <View>排名 : </View>
          </View>
        </View>
        <View className='rankingInfo at-row'>
          <View className='at-col'>
            <View>选手编号</View>
            <View>025</View>

          </View>
          <View className='at-col'>
            <View>当前票数</View>
            <View>123</View>
          </View>
          <View className='at-col'>
            <View>互动热度</View>
            <View>123</View>
          </View>
        </View>
        <View className='gift-box'>
          <Gift></Gift>
        </View>
        <View className='comment'>
          <Form >
            <Textarea
              maxLength={200}
              placeholder='你的问题是...'
            />
            <Button formType='submit'>送出礼物</Button>
          </Form>
        </View>
      </View>
    )
  }
}

export default Index
