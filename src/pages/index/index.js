import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCountdown, AtButton, AtCurtain, AtMessage, AtCard, AtTabBar } from 'taro-ui'
import PlayerCard from './PlayCard'
import { add, minus, asyncAdd } from '../../actions/counter'
import TabBar from './TabBar'
import { getUserByLimit } from '../../util/db'
import joinpng from './assets/join.png'
import searchpng from './assets/search.png'
import guagngaopng from './assets/guanggao.png'
import './index.scss'


@connect(({ global }) => ({
  global
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
  constructor() {
    super(...arguments)
    this.state = {
      isOpened: false,
      userdata: [[{}, {}]]
    }
  }
  config = {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() { }

  componentDidShow() {

    console.log(this.props)
    getUserByLimit().then(res => {
      let arr = [];
      console.log(res)
      for (let i = 0; i < res.data.length; i = i + 2) {
        const a1 = res.data[i];
        const a2 = res.data[i + 1] || null;
        arr.push([a1, a2])
      }
      console.log(arr, 'ddd')
      this.setState({ userdata: arr })
    })

    Taro.getSetting().then(e => {
      if (!e.authSetting['scope.userInfo']) {
        this.setState({ isOpened: true })
      }

    })

  }
  onAddSuccess = () => {
    getUserByLimit().then(res => {
      Taro.atMessage({
        'message': '上传成功',
        'type': 'success',
      })
      let arr = [];
      console.log(res)
      for (let i = 0; i < res.data.length; i = i + 2) {
        const a1 = res.data[i];
        const a2 = res.data[i + 1] || null;
        arr.push([a1, a2])
      }
      console.log(arr, 'ddd')
      this.setState({ userdata: arr })
    })

  }
  componentDidHide() { }
  handleClick = (value) => {
    switch (value) {
      case 1:
        Taro.navigateTo({ url: '../rankinglist/index' }).then(console.log("成功转跳页面"))
        break;
      case 3:
        Taro.navigateTo({ url: '../award/index' }).then(console.log("成功转跳页面"))
        break;
      case 4:
        Taro.navigateTo({ url: '../cooperate/index' }).then(console.log("成功转跳页面"))
        break;
      default:
        Taro.navigateTo({ url: '../palyer/index' }).then(console.log("成功转跳页面"))


    }
  }
  handleChange() {
    this.setState({
      isOpened: true
    })
  }
  onClose() {
    this.setState({
      isOpened: false
    })
  }
  getUserInfo = (e) => {
    console.log(e)
    this.onClose()
  }
  render() {
    let userOddView = this.state.userdata.map((item, i) => {
      if (i % 2 == 0) {
        return (<PlayerCard key={i} data={item[0]}></PlayerCard>)
      }
    })
    let userEvenView = this.state.userdata.map((item, i) => {
      if (i % 2 !== 0) {
        return (<PlayerCard key={i} data={item[0]}></PlayerCard>)
      }
    })
    return (
      <View className='index'>
        <AtMessage />
        {/* TODO 获取用户信息权限弹框 */}
        <AtCurtain
          isOpened={this.state.isOpened}
          onClose={this.handleChange.bind(this)}
        >
          <Button ref="button" open-type="getUserInfo" lang="zh_CN" onGetuserinfo={this.getUserInfo}>
            点击按钮授权
          </Button>
        </AtCurtain>
        <View className='title'>
          <Image
            style='width: 100%;'
            src='cloud://sign-8a5778.7369-sign-8a5778/aware/横幅.png'
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
          <TabBar onAddSuccess={this.onAddSuccess}></TabBar>
          <View className='at-row feature-view'>
            <View className='at-col' style='margin-left:8px;'>
              <Image src={joinpng} className='image'></Image>
            </View>
            <View className='at-col'>
              <Image src={searchpng} className='image' style='margin-right:8px;'></Image>
            </View>
          </View>
          <View>
            <Image src={guagngaopng} className='image' style='height:100px;margin:0 10px;'></Image>
          </View>
          <View className='at-row feature-view'>
            <View className='at-col'>
              {userOddView}
            </View>
            <View className='at-col'>
              {userEvenView}
            </View>
          </View>
        </View>




      </View>
    )
  }
}

export default Index
