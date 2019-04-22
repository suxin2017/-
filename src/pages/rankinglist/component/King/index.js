import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCountdown, AtCard, AtTabBar } from 'taro-ui'
import img from '../../../../assets/image/img.png'

import kingIcon from '../../assets/king.png'
import kingB1Icon from '../../assets/kingb1.png'
import king2Icon from '../../assets/king2.png'
import kingB2Icon from '../../assets/kingb2.png'
import king3Icon from '../../assets/king3.png'
import kingB3Icon from '../../assets/kingb3.png'
import './index.scss'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: {
                name: '张帅',
                ticket: 123,
            }, second: {
                name: '张帅',
                ticket: 123,
            }, third: {
                name: '张帅',
                ticket: 123,
            }
        }
    }
    config = {
        navigationBarTitleText: '思潮儿童美术班作品竞赛'
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        let { first, second, third } = this.state;
        return (
            <View className='index'>
                <View className='title' style='padding-top:10%;background:#ff984d;height:400rpx;'>
                    {/* header */}
                    <View className='card-box' style='display:flex;'>
                        <View className='card'>
                            <Image className='king' style='width:64rpx;height:64rpx;' src={king2Icon}></Image>
                            <Image src={img} style='margin:auto;width:128rpx;height:128rpx;border-radius:50%;display:block;'></Image>
                            <Image className='bottom' style='width:160rpx;height:50rpx;' src={kingB2Icon}></Image>
                            <View className='text-center name'>{second.name}</View>
                            <View className='text-center ticket '>{second.ticket}票数</View>
                            <View className='text-center help'>帮他</View>

                        </View>
                        <View className='card first'>
                            <View className='before'></View>
                            <View className='content'>
                                <Image className='king' style='width:64rpx;height:64rpx;' src={kingIcon}></Image>
                                <Image src={img} style='margin:auto;width:128rpx;height:128rpx;border-radius:50%;display:block;'></Image>
                                <Image className='bottom' style='width:160rpx;height:50rpx;' src={kingB1Icon}></Image>
                                <View className='text-center name' >{first.name}</View>
                                <View className='text-center ticket '>{first.ticket}票数</View>
                                <View className='text-center help'>帮他</View>

                            </View>
                            <View className='after'></View>
                        </View>
                        <View className='card'>
                            <Image className='king' style='width:64rpx;height:64rpx;' src={king3Icon}></Image>
                            <Image src={img} style='margin:auto;width:128rpx;height:128rpx;border-radius:50%;display:block;'></Image>
                            <Image className='bottom' style='width:160rpx;height:50rpx;' src={kingB3Icon}></Image>
                            <View className='text-center name'>{third.name}</View>
                            <View className='text-center ticket '>{third.ticket}票数</View>
                            <View className='text-center help'>帮他</View>

                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default Index
