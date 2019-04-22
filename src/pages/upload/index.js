import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCountdown, AtCard, AtTabBar } from 'taro-ui'

import { add, minus, asyncAdd } from '../../actions/counter'
import bg from '../../img/bg.jpg'

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      url:"cloud://sign-8a5778.7369-sign-8a5778-1257631768/images/my-photo.png"
    }
 
  }
  config = {
    
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }
  componentDidMount() {
   
  }
  
  componentWillUnmount() { }

  componentDidShow() {

   }

  componentDidHide() { }
  uploadImg = ()=>{
    wx.cloud.init();
    Taro.chooseImage({
      count:1,
      success:(res)=>{
            // 将图片上传至云存储空间
            wx.cloud.uploadFile({
              // 指定上传到的云路径
              cloudPath: 'images/my-photo.png',
              // 指定要上传的文件的小程序临时文件路径
              filePath: res.tempFilePaths[0],
              // 成功回调
              success: d => {
                console.log('上传成功', d)
              },
              fail: console.error
            })
        this.setState({url:res.tempFilePaths[0]})
        Taro.getImageInfo({
          src:res.tempFilePaths[0],
          success:(info)=>{
            console.log(info);
          }
        })
      }
    })
  }
  render() {
    return (
      <View className='index'>
        <View>

        <Image mode="widthFix" style="width: 48vw;margin:0 8rpx; height: 200px; background-color: #eeeeee;" src={this.state.url}></Image>
        <Image mode="widthFix" style="width: 48vw;margin:0 8rpx; height: 200px; background-color: #eeeeee;" src={this.state.url}></Image>
      </View>
        <View>
        <Image mode="widthFix" style="width: 48vw;margin:0 8rpx; height: 200px; background-color: #eeeeee;" src={this.state.url}></Image>
        <Image mode="widthFix" style="width: 48vw; margin:0 8rpx; height: 200px; background-color: #eeeeee;" src={this.state.url}></Image>
        </View>
        <View onClick={this.uploadImg}>上传图片
        </View>
      </View>
    )
  }
}

export default Index
