import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Button, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCountdown, AtButton, AtCurtain, AtMessage, AtCard, AtTabBar } from 'taro-ui'
import PlayerCard from './PlayCard'
import { add, minus, asyncAdd } from '../../actions/counter'
import { getUserByLimit } from '../../util/db'
import Footer from '../../components/Footer'
import baseconfig from '@/util/db/baseconfig'
import './index.scss'
import { setCurrentTabBar } from '@/util/wxapp';
import { handleCouldData } from '@/util/helper';
import moment from 'moment'

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
      userdata: [[{}, {}]],
      expirationTime:"",
    }
  }
  config = {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() { }

  componentDidShow() {
    setCurrentTabBar.call(this,0)
    baseconfig.getBaseConfig().then(res=>{
      const data = handleCouldData(res)
     const expirationTime =  data[0].expiration_time
      return expirationTime;
    }).then(expirationTime=>{
      wx.cloud.callFunction({
        // 云函数名称
        name: 'now',
        // 传给云函数的参数
        data: {
          a: 1,
          b: 2,
        },
        success: (res)=> {
          console.log(res.result) // 3
          const result = Date.parse(expirationTime) - res.result.data;
          console.log(expirationTime)
          // const expirationTime =this.expirationTime - res.result
          console.log(result,moment(result),moment(result).day())

          this.setState({expirationTime:result})
        },
        fail: console.error
      })
    })

    getUserByLimit().then(res => {
      this.setState({ userdata: res.data })
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

      for (let i = 0; i < res.data.length; i = i + 2) {
        const a1 = res.data[i];
        const a2 = res.data[i + 1] || null;
        arr.push([a1, a2])
      }

      this.setState({ userdata: arr })
    })

  }
  componentDidHide() { }
  handleClick = (value) => {
    switch (value) {
      case 1:
        Taro.navigateTo({ url: '../rankinglist/index' })
        break;
      case 3:
        Taro.navigateTo({ url: '../award/index' })
        break;
      case 4:
        Taro.navigateTo({ url: '../cooperate/index' })
        break;
      default:
        Taro.navigateTo({ url: '../palyer/index' })

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

    this.onClose()
  }
  render() {
    let userOddView = this.state.userdata.map((item, i) => {
      return (
           <PlayerCard key={i} data={item}></PlayerCard>)
    })

    const date = moment(this.state.expirationTime);
    let expiration = {
      day:date.day(),
      hours:date.hours(),
      minutes:date.minutes(),
      seconds:date.seconds()
    }
    console.log(expiration)

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
                day={expiration.day}
                hours={expiration.hours}
                minutes={expiration.minutes}
                seconds={expiration.seconds}
              />
            </AtCard>
          </View>
          {/* <TabBar onAddSuccess={this.onAddSuccess}></TabBar> */}
          <View className='at-row feature-view'>
            <View className='at-col' style='margin-left:8px;'
            onClick={
              ()=>{
                console.log(123)
                wx.switchTab({
                  url: '/pages/upload/index'
                })
              }
            } >
              <Image src={'cloud://sign-8a5778.7369-sign-8a5778-1257631768/icon/join.png'} className='image'></Image>
            </View>
            <View className='at-col'
              onClick={
                ()=>{
                  console.log(123)
                Taro.navigateTo({
                    url: '/pages/search/index'
                  })
                }
              }>
              <Image src={'cloud://sign-8a5778.7369-sign-8a5778-1257631768/icon/search.png'} className='image' style='margin-right:8px;'></Image>
            </View>
          </View>
          {/* <View>
            <Image src={guagngaopng} className='image' style='height:100px;margin:0 10px;'></Image>
          </View> */}
          <View style='column-count: 2;column-gap: 0;'>
              {userOddView}
          </View>
        </View>


        <Footer></Footer>

      </View>
    )
  }
}

export default Index
