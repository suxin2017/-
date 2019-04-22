import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCountdown, AtCard, AtTabBar } from 'taro-ui'
import PlayerCard from './PlayCard'
import { add, minus, asyncAdd } from '../../actions/counter'
import TabBar from './TabBar'
import Card from '../../components/Card'
import LeftRightCard from '../../components//LeftRightCard'
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

  config = {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() { }

  componentDidShow() { 
    console.log(this.props)

  }

  componentDidHide() { }
  handleClick = (value) => {
    switch(value){
      case 1:
      Taro.navigateTo({url:'../rankinglist/index'}).then(console.log("成功转跳页面"))
      break;
      case 3:
      Taro.navigateTo({url:'../award/index'}).then(console.log("成功转跳页面"))
      break;
      case 4:
      Taro.navigateTo({url:'../cooperate/index'}).then(console.log("成功转跳页面"))
      break;
      default:
      Taro.navigateTo({url:'../palyer/index'}).then(console.log("成功转跳页面"))
        
      
    }
  }
  render() {
    return (
      <View className='index'>
 
        <View className='title'>
          <Image
            style='width: 100%;'
            src='cloud://sign-8a5778.7369-sign-8a5778/images/16pic_388730_b.jpg'
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
        <TabBar></TabBar>
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

              <PlayerCard></PlayerCard>
              <PlayerCard></PlayerCard>

            
            </View>

            <View className='at-col'>
              <PlayerCard></PlayerCard>
              <PlayerCard></PlayerCard>


            </View>
          </View>
          

        </View>

       

        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'home', text: 'new' },
            { title: '排行榜', iconType: 'analytics' },
            { title: '上传作品', iconType: 'share'},
            { title: '奖品', iconType: 'star' },
            { title: '合作', iconType: 'share-2' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }
}

export default Index
