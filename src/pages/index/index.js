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
  }
  render() {
    return (
      <View className='index'>
        <View className='title'>
          <Image
            style='width: 100%;'
            src={bg}
          />
        </View>
        <View className='contern-body'>
          <View className='countdown'>
            <AtCard title='活动倒计时'>
              <AtCountdown
                isShowDay
                day={2}
                hours={1}
                minutes={1}
                seconds={10}
              />
            </AtCard>
          </View>
          <View className='at-row feature-view'>
            <View className='at-col'>
              <AtCard
                className='at-card-no-header'
              >
                <Text>我也要参加</Text>
              </AtCard>
            </View>
            <View className='at-col'>
              <AtCard
                className='at-card-no-header'
              >
                <Text>查找选手编号</Text>
              </AtCard>
            </View>
          </View>

          <View className='at-row feature-view'>
            <AtCard
              className='at-card-no-header'
            >
              <View style='width:86vw;'>我是广告</View>
            </AtCard>
          </View>

          <View className='at-row feature-view'>
            <View className='at-col'>
              <AtCard
                className='at-card-no-header'
              >
                <Text>选手信息</Text>
              </AtCard>
            </View>
            <View className='at-col'>
              <AtCard
                className='at-card-no-header'
              >
                <Text>选手信息</Text>
              </AtCard>
            </View>
          </View>
          <View className='at-row feature-view'>
            <View className='at-col'>
              <AtCard
                className='at-card-no-header'
              >
                <Text>选手信息</Text>
              </AtCard>
            </View>
            <View className='at-col'>
              <AtCard
                className='at-card-no-header'
              >
                <Text>选手信息</Text>
              </AtCard>
            </View>
          </View>

        </View>
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'home', text: 'new' },
            { title: '排行榜', iconType: 'analytics' },
            { title: '上传作品', iconType: 'camera', },
            { title: '奖品', iconType: 'star' },
            { title: '上传作品', iconType: 'share-2' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}

export default Index
