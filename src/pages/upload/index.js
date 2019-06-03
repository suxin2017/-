import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCountdown, AtCard, AtTabBar } from 'taro-ui'

import { add, minus, asyncAdd } from '../../actions/counter'
import bg from '../../img/bg.jpg'
import {uploadFile} from '../../util/file'

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
  
    uploadFile()
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
