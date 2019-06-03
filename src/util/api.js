import Taro, { Component } from '@tarojs/taro'

// eslint-disable-next-line import/prefer-default-export
export function getUserInfo(success){
 Taro.getSetting().then(e=>{
    if(e.authSetting['scope.userInfo']){
       Taro.getUserInfo().then(e=>{
         success(e)
       })
    }
})
}