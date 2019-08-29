import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'

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
    Taro.switchTab({url:'page/index/index'})
  }
  render() {
    return (
      // eslint-disable-next-line taro/no-spread-in-props
      <View className='at-row feature-view' >
      <View className='at-col'>
        <AtCard className='at-card-no-header'>
          <View >{this.props.children}</View>
        </AtCard>
        </View>
      </View>
    )
  }
}
Index.defaultProps = {
  noHeader: true,
  hasPadding:false
}
export default Index
