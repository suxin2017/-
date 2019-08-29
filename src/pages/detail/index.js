import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { getUserById } from '../../util/db'

import './index.scss'


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
