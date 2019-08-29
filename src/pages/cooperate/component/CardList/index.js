import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCountdown, AtCard, AtTabBar } from 'taro-ui'
import "taro-ui/dist/style/components/flex.scss";
import img from '../../../../assets/image/img.png'
import './index.scss'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listData: [{
        title: "广告传播",
        describe: '提供公司旗下网站、软件平台、公众号平台广告营销服务'
      }, {
        title: "品牌设计，装横设计",
        describe: '吹牛皮设计团队，挖坑为主的设计模型，为您提供专业挖坑设计输出'

      }, {
        title: "智慧社区",
        describe: '互联网+物业，带来前所未有的管理和生活方式'

      }, {
        title: "网站，app，小程序定制",
        describe: '洞察康业行为特征，发掘用户需求，为企业大招专属网站，app'

      }

      ]
    }
  }
  config = {
    navigationBarTitleText: '思潮儿童美术班作品竞赛'
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
            <View className='at-col-3'> <Image style="width:128rpx;height:128rpx;" src={img}></Image></View>
            <View className='at-col-9'>
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
