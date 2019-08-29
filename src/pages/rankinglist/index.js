import Taro, { Component } from '@tarojs/taro'
import { View, Image, } from '@tarojs/components'
import { setCurrentTabBar } from '@/util/wxapp';
import King from './component/King'
import { getUserByLimitRank, getCount } from '../../util/db'

import './index.scss'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topUserData: [],
      userdata: [],
      countListData: [{
        title: "参与选手",
        count: 35,
      },
      {
        title: "累计投票",
        count: 2165,
      }, {
        title: "浏览人次",
        count: 3124,
      }
      ]
    }
  }
  config = {
    navigationBarTitleText: '思潮儿童美术班作品竞赛'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)

  }

  componentWillUnmount() { }

  componentDidShow() {
    setCurrentTabBar.call(this, 3)
    getUserByLimitRank({ skip: 3, limit: 7 }).then(res => {
      this.setState({ userdata: res.data })
    })
    getUserByLimitRank({ skip: 0, limit: 3 }).then(res => {
      this.setState({ topUserData: res.data })
    })
    getCount().then(res => {
      let countListData = this.state;
      countListData[0].count = res.total
      this.setState({})
    })
  }
  onClick() {
    Taro.navigateTo({ url: '../player/index' })
  }
  componentDidHide() { }

  render() {
    let rankinglist = this.state.userdata.map((item, i) => {
      return (<View key={i} className='flat-card' style=' border-top: 1px solid #bbb;'>
        <View className='at-row'>
          <View className='at-col-3'>
            <View>
              <Image src={`${item.avatarUrl}`} style='margin:auto;margin-top:15rpx;width:100rpx;height:100rpx;border-radius:50%;display:block;'></Image>
            </View>
          </View>
          <View className='at-col'>
            <View className='at-row'>
              <View className='at-col'>
                <View className='text-center name'>{item.name}</View>
                <View className='text-center ranking'>排名:{i + 4}</View>
              </View>
              <View className='at-col-5' style='padding-top:40rpx;'>
                <View className='at-row'>
                  <View className='text-center ticket '>{item.poll}票数</View>
                  <View className='text-center help' onClick={this.onClick}>帮他</View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>)
    })
    return (
      <View className='index'>
        <King data={this.state.topUserData}></King>
        <View className='box '>
          <View className='at-row'>
            {this.state.countListData.map((item, k) => {
              return <View key={k} className='at-col container'>
                <View className='title'>
                  {item.title}
                </View>
                <View className='count'>
                  {item.count}
                </View>
              </View>
            })}
          </View>
        </View>
        {rankinglist}
      </View>
    )
  }
}

export default Index
