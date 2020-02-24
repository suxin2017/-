import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Button, Navigator } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import PlayerCard from '../index/PlayCard'
import { getUserByLimit } from '../../util/db'
import { getUserInfoListByName } from '@/util/db/user'
class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      userdata: [],
      name:'',
    }
  }
  config = {
  }

  componentWillUnmount() { }
  getList=()=>{
    const {name}= this.state;
    getUserInfoListByName(0,10,name).then(res => {
      console.log(name,res)
      this.setState({ userdata: res.data })
    })
  }
  componentDidShow() {
    this.getList()
  }
  componentDidHide() { }
  render() {
    let userOddView = this.state.userdata.map((item, i) => {
      return (
        <PlayerCard key={item._id} data={item}></PlayerCard>)
    })
    return (
      <View className='index'>
        <AtSearchBar 
          value={this.state.name || ""} 
          onChange={(v) => {
          this.setState({  name:v })
          }}
          
          onActionClick={this.getList}
        />
        <View style='column-count: 2;column-gap: 0;'>
          {userOddView}
        </View>
      </View>
    )
  }
}

export default Index
