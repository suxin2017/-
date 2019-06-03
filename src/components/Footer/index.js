import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

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

  render() {
    return (
      <View className='index'>
        <Text>人家也是有底线的喽～～</Text>
        <Text> (*^__^*)</Text>
      </View>
    )
  }
}

export default Index
