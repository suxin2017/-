import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import uploadIcon from '../assets/upload.png'
import compareIcon from '../assets/compare.png'
import awareIcon from '../assets/aware.png'
import rankingIcon from '../assets/rankinglist.png'
import indexIcon from '../assets/index.png'
import './index.scss'



class Index extends Component {
    constructor (props) {
        super(props)
        this.state = { 
            list:[
              { title: ' 首页', img: indexIcon,},
              { title: '排行榜', img: rankingIcon },
              { title: '上传作品', img: uploadIcon,content:true },
                { title: '奖品', img: awareIcon },
                { title: '合作', img: compareIcon }
                ]
        }
     
      }

  componentWillUnmount() { }

  componentDidMount() {
      this.setState(this.props)
  }

  componentDidHide() { }
  
  handleClick(value){
    
    switch(value){
      case 1:
      Taro.navigateTo({url:'../rankinglist/index'}).then(console.log("成功转跳页面"))
      break;
      case 2:
      Taro.navigateTo({url:'../upload/index'}).then(console.log("成功转跳页面"))
      break;
      case 3:
      Taro.navigateTo({url:'../award/index'}).then(console.log("成功转跳页面"))
      break;
      case 4:
      Taro.navigateTo({url:'../cooperate/index'}).then(console.log("成功转跳页面"))
      break;
      default:
    }
  }
  render() {
    let {list} =  this.state;
    return (
      <View className='index' >
      {list.map((item,index)=>{
      // eslint-disable-next-line
      return <View taroKey={String(index)} class='tab' onClick={this.handleClick.bind(this,index)} >
        <view class={`icon ${item.content?"content":""}`}>
          <cover-image src={item.img} ></cover-image>
        </view>
        <view class='title'>
          {item.title}
        </view>
      </View>
    })}
   
      </View>
    )
  }
}


export default Index
