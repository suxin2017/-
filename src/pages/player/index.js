import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCountdown, AtCard, AtTabBar } from 'taro-ui'

import { add, minus, asyncAdd } from '../../actions/counter'
import bg from '../../img/bg.jpg'
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
            1232
        </View>
        <View className='gift-box'>
            gitft
        </View>
        <View className='comment'>
        comment
        </View>
      </View>
    )
  }
}

export default Index
