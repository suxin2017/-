import Taro, { Component } from '@tarojs/taro'
import { View, Image,Button,Text } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import img from '../assets/img.png'
import './index.scss'

/**
 * hasHeader:boolean 
 */
class Index extends Component {

    config = {
        navigationBarTitleText: '思潮儿童美术班作品竞赛'
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }
    handleClick = (...args) => {
        console.log(args)
        Taro.navigateTo({ url: '../player/index' }).then(console.log("成功转跳页面"))
    }
    goToDetail=(data)=>{
    
      console.log('详情')
      Taro.navigateTo({ url: `/pages/detail/index?id=${data._id}` }).then((res)=>{
        console.log(res)
      })
    }
    render() {
      const {data} = this.props;
      console.log(data,'darta')
        return (
            <View className='palyer-card' onClick={this.goToDetail.bind(this,data)}>
                <View className='layer header'>
                  <View className='name' > <Text>{data.name}</Text></View>
                  <View  className='button' onClick={this.handleClick}> 投票</View>
                </View>
                <View className='content'>
                  <Image
                    style='width: 100%;height:100%;'
                    mode='widthFix'
                    lazy-load
                    src={data.fileId}
                  />
                </View>
                <View className='layer footer'>
                  <View > ID:{data._id}</View>
                  <View > {data.poll}票</View>
                </View>
            </View>
        )
    }
}

export default Index
