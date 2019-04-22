import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtCountdown, AtCard, AtTabBar } from 'taro-ui'
import King from './component/King'
import { add, minus, asyncAdd } from '../../actions/counter'
import bg from '../../img/bg.jpg'
import './index.scss'
import img from '../../assets/image/img.png'


class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countListData: [{
        title: "参与选手",
        count: 35,
      },
      {
        title: "累计投票",
        count: 2165,
      }, {
        title: "浏览人次",
        count: 3124,
      }
      ]
    }
  }
  config = {
    navigationBarTitleText: '思潮儿童美术班作品竞赛'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>

        <King></King>
        <View className='box '>
          <View className='at-row'>
            {this.state.countListData.map((item, k) => {
              return <View key={k} className='at-col container'>
                <View className='title'>
                  {item.title}
                </View>
                <View className='count'>
                  {item.count}
                </View>
              </View>
            })}

          </View>

        </View>
        <View className='flat-card' style=' border-top: 1px solid #bbb;'>
          <View className='at-row'>
            <View className='at-col-3'>
              <View>
                <Image src={img} style='margin:auto;margin-top:15rpx;width:100rpx;height:100rpx;border-radius:50%;display:block;'></Image>
              </View>

            </View>
            <View className='at-col'>
              <View className='at-row'>
                <View className='at-col'>
                  <View className='text-center name'>张帅</View>
                  <View className='text-center ranking'>排名:12</View>
                </View>
                <View className='at-col-5' style='padding-top:40rpx;'>
                  <View className='at-row'>

                    <View className='text-center ticket '>123票数</View>

                    <View className='text-center help'>帮他</View>
                  </View>
                </View>
              </View>


            </View>


          </View>
        </View>
        <View className='flat-card' style=' border-top: 1px solid #bbb;'>
          <View className='at-row'>
            <View className='at-col-3'>
              <View>
                <Image src={img} style='margin:auto;margin-top:15rpx;width:100rpx;height:100rpx;border-radius:50%;display:block;'></Image>
              </View>

            </View>
            <View className='at-col'>
              <View className='at-row'>
                <View className='at-col'>
                  <View className='text-center name'>张帅</View>
                  <View className='text-center ranking'>排名:12</View>
                </View>
                <View className='at-col-5' style='padding-top:40rpx;'>
                  <View className='at-row'>

                    <View className='text-center ticket '>123票数</View>

                    <View className='text-center help'>帮他</View>
                  </View>
                </View>
              </View>


            </View>


          </View>
        </View>
        <View className='flat-card' style=' border-top: 1px solid #bbb;'>
          <View className='at-row'>
            <View className='at-col-3'>
              <View>
                <Image src={img} style='margin:auto;margin-top:15rpx;width:100rpx;height:100rpx;border-radius:50%;display:block;'></Image>
              </View>

            </View>
            <View className='at-col'>
              <View className='at-row'>
                <View className='at-col'>
                  <View className='text-center name'>张帅</View>
                  <View className='text-center ranking'>排名:12</View>
                </View>
                <View className='at-col-5' style='padding-top:40rpx;'>
                  <View className='at-row'>

                    <View className='text-center ticket '>123票数</View>

                    <View className='text-center help'>帮他</View>
                  </View>
                </View>
              </View>


            </View>


          </View>
        </View>
        <View className='flat-card' style=' border-top: 1px solid #bbb;'>
          <View className='at-row'>
            <View className='at-col-3'>
              <View>
                <Image src={img} style='margin:auto;margin-top:15rpx;width:100rpx;height:100rpx;border-radius:50%;display:block;'></Image>
              </View>

            </View>
            <View className='at-col'>
              <View className='at-row'>
                <View className='at-col'>
                  <View className='text-center name'>张帅</View>
                  <View className='text-center ranking'>排名:12</View>
                </View>
                <View className='at-col-5' style='padding-top:40rpx;'>
                  <View className='at-row'>

                    <View className='text-center ticket '>123票数</View>

                    <View className='text-center help'>帮他</View>
                  </View>
                </View>
              </View>


            </View>


          </View>
        </View>
        <View className='flat-card' style=' border-top: 1px solid #bbb;'>
          <View className='at-row'>
            <View className='at-col-3'>
              <View>
                <Image src={img} style='margin:auto;margin-top:15rpx;width:100rpx;height:100rpx;border-radius:50%;display:block;'></Image>
              </View>

            </View>
            <View className='at-col'>
              <View className='at-row'>
                <View className='at-col'>
                  <View className='text-center name'>张帅</View>
                  <View className='text-center ranking'>排名:12</View>
                </View>
                <View className='at-col-5' style='padding-top:40rpx;'>
                  <View className='at-row'>

                    <View className='text-center ticket '>123票数</View>

                    <View className='text-center help'>帮他</View>
                  </View>
                </View>
              </View>


            </View>


          </View>
        </View>
        <View className='flat-card' style=' border-top: 1px solid #bbb;'>
          <View className='at-row'>
            <View className='at-col-3'>
              <View>
                <Image src={img} style='margin:auto;margin-top:15rpx;width:100rpx;height:100rpx;border-radius:50%;display:block;'></Image>
              </View>

            </View>
            <View className='at-col'>
              <View className='at-row'>
                <View className='at-col'>
                  <View className='text-center name'>张帅</View>
                  <View className='text-center ranking'>排名:12</View>
                </View>
                <View className='at-col-5' style='padding-top:40rpx;'>
                  <View className='at-row'>

                    <View className='text-center ticket '>123票数</View>

                    <View className='text-center help'>帮他</View>
                  </View>
                </View>
              </View>


            </View>


          </View>
        </View>
        <View className='flat-card' style=' border-top: 1px solid #bbb;'>
          <View className='at-row'>
            <View className='at-col-3'>
              <View>
                <Image src={img} style='margin:auto;margin-top:15rpx;width:100rpx;height:100rpx;border-radius:50%;display:block;'></Image>
              </View>

            </View>
            <View className='at-col'>
              <View className='at-row'>
                <View className='at-col'>
                  <View className='text-center name'>张帅</View>
                  <View className='text-center ranking'>排名:12</View>
                </View>
                <View className='at-col-5' style='padding-top:40rpx;'>
                  <View className='at-row'>

                    <View className='text-center ticket '>123票数</View>

                    <View className='text-center help'>帮他</View>
                  </View>
                </View>
              </View>


            </View>


          </View>
        </View>
        <View className='flat-card' style=' border-top: 1px solid #bbb;'>
          <View className='at-row'>
            <View className='at-col-3'>
              <View>
                <Image src={img} style='margin:auto;margin-top:15rpx;width:100rpx;height:100rpx;border-radius:50%;display:block;'></Image>
              </View>

            </View>
            <View className='at-col'>
              <View className='at-row'>
                <View className='at-col'>
                  <View className='text-center name'>张帅</View>
                  <View className='text-center ranking'>排名:12</View>
                </View>
                <View className='at-col-5' style='padding-top:40rpx;'>
                  <View className='at-row'>

                    <View className='text-center ticket '>123票数</View>

                    <View className='text-center help'>帮他</View>
                  </View>
                </View>
              </View>


            </View>


          </View>
        </View>
        <View className='flat-card' style=' border-top: 1px solid #bbb;'>
          <View className='at-row'>
            <View className='at-col-3'>
              <View>
                <Image src={img} style='margin:auto;margin-top:15rpx;width:100rpx;height:100rpx;border-radius:50%;display:block;'></Image>
              </View>

            </View>
            <View className='at-col'>
              <View className='at-row'>
                <View className='at-col'>
                  <View className='text-center name'>张帅</View>
                  <View className='text-center ranking'>排名:12</View>
                </View>
                <View className='at-col-5' style='padding-top:40rpx;'>
                  <View className='at-row'>

                    <View className='text-center ticket '>123票数</View>

                    <View className='text-center help'>帮他</View>
                  </View>
                </View>
              </View>


            </View>


          </View>
        </View>
       


      </View>
    )
  }
}

export default Index
