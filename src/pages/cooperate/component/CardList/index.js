import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCountdown, AtCard, AtTabBar, AtIcon } from 'taro-ui'
import "taro-ui/dist/style/components/flex.scss";
import img from '../../../../assets/image/img.png'
import './index.scss'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: [{
        title: "个人技能",
        describe: 'React、Less、JavaScript、Css、Vue、Es语法'
      }, {
        title: "个人描述",
        describe: '学习能力很强,能够独立分析解决问题.个人兴趣广泛,喜欢研究前沿技术.为人友善,能够快速融入团队'

      }, {
        title: "工作经历",
        describe: '工作期间一直用react 进行前端页面开发,做过echart 的报表页面,大屏等真实项目'

      }

      ]
    }
  }
  config = {
    navigationBarTitleText: '美术作品竞赛'
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { listData } = this.state;
    const view = listData.map((item, index) => {
      return <View key={index} className='at-row feature-view'>
        <AtCard
          className='at-card-no-header'
        >
          <View className='at-row' style='width:90vw'>
            <View className='at-col-2'> <AtIcon  value='tags' size='30' color='#666'></AtIcon></View>
            <View className='at-col-10'>
              <View className="title">{item.title}</View>
              <View className="describe">{item.describe}</View>

            </View>
          </View>

        </AtCard>
      </View>
    })
    return (
      <View className='index'>
        {view}

      </View>
    )
  }
}

export default Index
