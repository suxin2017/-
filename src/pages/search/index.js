import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text, Button, Navigator } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import PlayerCard from '../index/PlayCard'
import { getUserByLimit } from '../../util/db'
class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      userdata:[]
    }
  }
  config = {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() { }

  componentDidShow(){
    getUserByLimit().then(res => {
      this.setState({ userdata: res.data })
    })


  }
  componentDidHide() { }
  render() {
    let userOddView = this.state.userdata.map((item, i) => {
      return (
           <PlayerCard key={i} data={item}></PlayerCard>)
    })
     return (
      <View className='index'>

<AtSearchBar value={this.state.value||""} onChange={(v)=>{
              this.setState({value:v})
            }}
      />
      <View style="column-count: 2;column-gap: 0;">
              {userOddView}
          </View>
        </View>
    )
  }
}

export default Index
