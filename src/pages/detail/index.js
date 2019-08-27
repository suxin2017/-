import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCountdown, AtButton, AtCurtain, AtMessage, AtCard, AtTabBar } from 'taro-ui'
import PlayerCard from './PlayCard'
import { add, minus, asyncAdd } from '../../actions/counter'
import TabBar from './TabBar'
import { getUserById } from '../../util/db'
import joinpng from './assets/join.png'
import searchpng from './assets/search.png'
import guagngaopng from './assets/guanggao.png'
import Footer from '../../components/Footer'

import './index.scss'


@connect(({ global }) => ({
  global
}), () => ({

}))
class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      isOpened: false,
      userdata: {},
    }
  }
  config = {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() { }

  componentDidShow() {
    let routers = Taro.getCurrentPages()
    console.log(routers[routers.length - 1])
    let currentRouter = routers[routers.length - 1];
    getUserById(currentRouter.options.id).then((res) => {
      this.setState({ userdata: res[0] })

    }
    )


  }
  componentDidHide() { }
  handleClick = () => {

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
    let { userdata } = this.state;
    let {fileId='',name,_id} = userdata;
    return (
      <View className='index'>
        <View className='img-production' >
          <Image src={fileId}
            style='width: 100%;height:100%;'
            mode='widthFix'
            lazy-load
          ></Image>
          <View className='img-footer'>
      {name}
      {_id}
          </View>
        </View>
      </View>
    )
  }
}

export default Index
