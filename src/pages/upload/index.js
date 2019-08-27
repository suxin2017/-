import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import {uploadFile} from '@/util/file';
import { setCurrentTabBar } from '@/util/wxapp';

class Index extends Component {
  constructor (props) {
    super(props)
    this.state = { 
    }
 
  }
  config = {
    
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }
  componentDidShow() {
    setCurrentTabBar.call(this,2)
    // uploadFile((file)=>{
    //   getUserInfo((data)=>{
    //     data.userInfo.fileId = file;
    //     data.userInfo.name = data.userInfo.nickName;
    //     let arg = data.userInfo;
    //     add(arg).then(e=>{
    //       Taro.hideLoading()
    //       console.log(e,'addsuccess')
    //       this.props.onAddSuccess(e);
    //     })
    //   })
    // })
   
  }
  
  componentWillUnmount() { }

  

  componentDidHide() { }
  uploadImg = ()=>{
  
    uploadFile()
  }
  render() {
    return (
      <View className='index'>

        <View onClick={this.uploadImg}>上传图片
        </View>
      </View>
    )
  }
}

export default Index
