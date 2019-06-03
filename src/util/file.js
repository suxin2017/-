/* eslint-disable import/prefer-default-export */
import Taro, { Component } from '@tarojs/taro'

export function uploadFile(success){
  Taro.chooseImage({
    count:1,
    success:(res)=>{
      Taro.showLoading({
        title: '上传中',
      })
      console.log(res)
          // 将图片上传至云存储空间
          wx.cloud.uploadFile({
            // 指定上传到的云路径
            cloudPath: `images/${Date.now().toString().substr(5)}`,
            // 指定要上传的文件的小程序临时文件路径
            filePath: res.tempFilePaths[0],
            // 成功回调
            success: d => {
              console.log('上传成功', d)
              success(d.fileID)
            },
            fail: console.error
          })
 
      Taro.getImageInfo({
        src:res.tempFilePaths[0],
        success:(info)=>{
          console.log(info);
        }
      })
    }
  })
}
