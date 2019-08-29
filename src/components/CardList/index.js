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
        navigationBarTitleText: '思潮儿童美术班作品竞赛'
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
            <View>

            </View>
        )
    }
}

export default Index
