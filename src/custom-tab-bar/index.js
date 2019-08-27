Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
        pagePath: "/pages/index/index",
        iconPath: "/assets/index.png",
        selectedIconPath: "/assets/index.png",
        text: "首页"
      },
      {
        pagePath: "/pages/award/index",
        iconPath: "/assets/aware.png",
        selectedIconPath: "/assets/aware.png",
        text: "奖品"
      },
      {
        pagePath: "/pages/upload/index",
        iconPath: "/assets/upload.png",
        selectedIconPath: "/assets/upload.png",
        text: "上传作品"
      },
      {
        pagePath: "/pages/rankinglist/index",
        iconPath: "/assets/rankinglist.png",
        selectedIconPath: "/assets/rankinglist.png",
        text: "排行"
      },
      {
        pagePath: "/pages/cooperate/index",
        iconPath: "/assets/compare.png",
        selectedIconPath: "/assets/compare.png",
        text: "合作"
      },
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      console.log(e,"test")
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})