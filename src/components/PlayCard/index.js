import Taro, { Component } from '@tarojs/taro'
import { View, Image,Button,Text } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import {img} from '../../assets/image/img.png'

import './index.scss'

/**
 * hasHeader:boolean
 */
class Index extends Component {

    config = {
        navigationBarTitleText: '美术作品竞赛'
    }

    componentWillReceiveProps(nextProps) {
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    handleClick = (...args) => {
    }
    render() {
        return (
            <View className='palyer-card'>
                <View className='layer header'>
                  <View className='name' > <Text>name</Text></View>
                  <View  className='button' onClick={this.handleClick}> 投票</View>
                </View>
                <View className='content'>
                  <Image
                    style='width: 100%;height:100%;'
                    src={img}
                  />
                </View>
                <View className='layer footer'>
                  <View > ID:234234</View>
                  <View > 234234票</View>
                </View>
            </View>
        )
    }
}

export default Index
