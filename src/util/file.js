/* eslint-disable import/prefer-default-export */
import Taro, { Component } from '@tarojs/taro'

/**
 *
 * 和文件相关的api
 */
export function uploadFile(files) {
  return Promise.all(files.map(file => {
    console.log(file)
    return wx.cloud.uploadFile({
      cloudPath: `images/${Math.random()*10}_${Math.random()*10}_${Math.random()*10}`,
      filePath: file.url,
    })
  }
  ))
}
