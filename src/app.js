import '@tarojs/async-await'
import 'taro-ui/dist/style/index.scss'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import Index from './pages/index'
import configStore from './store'
import './app.scss'
import { getUserInfo } from './util/api'
import { getBaseConfig } from './util/db/baseconfig';
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
      'pages/detail/index',
      'pages/award/index',
      'pages/cooperate/index',
      'pages/upload/index',
      'pages/search/index',
    ],
    "cloud": true,
    window: {
      enablePullDownRefresh: true,
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '美术作品竞赛',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
      "custom": true,
      "selectedColor": "#000000",
      "backgroundColor": "#000000",
      "position": "top",
      "list": [
        {
          pagePath: "pages/index/index",
          iconPath: "/assets/index.png",
          selectedIconPath: "/assets/index.png",
          text: "首页"
        },
        {
          pagePath: "pages/award/index",
          iconPath: "/assets/aware.png",
          selectedIconPath: "/assets/aware.png",
          text: "奖品"
        },
        {
          pagePath: "pages/upload/index",
          iconPath: "/assets/upload.png",
          selectedIconPath: "/assets/upload.png",
          text: "上传作品"
        },
        {
          pagePath: "pages/rankinglist/index",
          iconPath: "/assets/rankinglist.png",
          selectedIconPath: "/assets/rankinglist.png",
          text: "排行"
        },
        {
          pagePath: "pages/cooperate/index",
          iconPath: "/assets/compare.png",
          selectedIconPath: "/assets/compare.png",
          text: "合作"
        },
      ]
    },
  }
  componentDidMount() {
    wx.cloud.init();


    getUserInfo((e) => {
    })
    Taro.getSetting().then(e => {
      if (e.authSetting['scope.userInfo']) {
        Taro.getUserInfo({
          success(res) {

          }
        })
      }
    })
  }

  componentDidShow() {

   }

  componentDidHide() { }

  componentCatchError() { }

  componentDidCatchError() { }


  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
