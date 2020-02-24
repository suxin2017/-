import Taro, { Component } from "@tarojs/taro";
import { View, Image, Button, Text } from "@tarojs/components";
import { AtCard } from "taro-ui";
import img from "../assets/img.png";
import "./index.scss";

/**
 * hasHeader:boolean
 */
class Index extends Component {
  config = {
    navigationBarTitleText: "美术作品竞赛"
  };

  componentWillReceiveProps(nextProps) {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  handleClick = (...args) => {
    const { data } = this.props;
    Taro.navigateTo({ url: `../player/index?id=${data._id}` });
  };
  goToDetail = data => {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${data._id}`
    });
  };
  render() {
    const { data={} } = this.props;
    return (
      <View className="palyer-card" onClick={this.handleClick.bind(this,data)}>
        <View className="layer header">
          <View className="name">
            {" "}
            <Text>{data.name}</Text>
          </View>
          <View className="button" >
            {" "}
            投票
          </View>
        </View>
        <View className="content">
          <Image
            style="width: 100%;height:100%;"
            mode="widthFix"
            lazy-load
            src={data.filesList && data.filesList[0]}
          />
        </View>
        <View className="layer footer">
          <View> ID:{String(data._id).substring(20)}</View>
          <View> {data.poll || 0}票</View>
        </View>
      </View>
    );
  }
}

export default Index;
