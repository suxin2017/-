import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import giftlist from '@/util/db/giftlist';
import {handleCouldData} from '@/util/helper';
import { connect } from '@tarojs/redux'
import { AtCountdown, AtCard, AtTabBar } from 'taro-ui'

import './index.scss'


class Index extends Component {

  config = {

  }
  constructor(props){
    super(props);
    this.state = {
      giftList : [],
    }
  }
  componentWillReceiveProps(nextProps) {}

  componentWillUnmount() { }

  componentDidShow() {
    giftlist.getGiftlist().then(res=>{
        let data = handleCouldData(res);
        console.log(data);
        this.setState({giftList:data})
    });
  }

  componentDidHide() { }


  render() {
    const {giftList} = this.state;
    return (
      <View className='gift-box'>
        {giftList.map((item, ind) => {
          return  <View key={ind} className='gift-bg' >
                <View style='margin-left:20rpx;'>+{item.score}</View>
                <View style='text-align:center;'>
                  <Image style='width:70rpx;  max-height:80rpx;' mode='widthFix' src={item.imgurl}></Image>
                  <View className='gift-name'>{item.name}</View>
                  <View className='gift-consume'>{item.consume}</View>
                </View>
              </View>
          })
        }
      </View>
    )
  }
}

export default Index
