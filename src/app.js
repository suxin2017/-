import '@tarojs/async-await'
import 'taro-ui/dist/style/index.scss'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import { AtTabBar  } from 'taro-ui'
import Index from './pages/index'
import configStore from './store'
import './app.scss'
import aware from './assets/aware.png'
import {getUserInfo} from './util/api'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/rankinglist/index',
      'pages/player/index',
      'pages/award/index',
      'pages/cooperate/index',
    ],
    "cloud": true,
    window: {
      enablePullDownRefresh:true,
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '思潮儿童美术班作品竞赛',
      navigationBarTextStyle: 'black'
    },
    // "tabBar": {
    //   "selectedColor": "#000000",
    //   "backgroundColor": "#000000",
    //   "position":"top",
    //   "list":[{
    //     "pagePath":'pages/award/index',
    //     "text":"abc",
    //     "iconPath":aware,
    //   },{
    //     "pagePath":'pages/player/index',
    //     "text":"abc",
    //     "iconPath":aware,
    //   }]
    // },
    // "usingComponents": {}
  }

  componentDidMount () {
    wx.cloud.init();
    getUserInfo((e)=>{
      console.log(e.userInfo,'123')
    })
    Taro.getSetting().then(e=>{
      if(e.authSetting['scope.userInfo']){
        Taro.getUserInfo({
          success(res) {
            console.log(res.userInfo)
          }
      })
      }
  })
  }

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}


  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
