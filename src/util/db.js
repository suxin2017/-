/* eslint-disable import/prefer-default-export */
import {userinfo} from '../dao'
const db = wx.cloud.database()

export async function add(data){
  return await  db.collection('myapp').add({
    // data 字段表示需新增的 JSON 数据
    data: Object.assign(userinfo,data),
  }).then(res =>{
    console.log(res)
    return res
  })
}

export async function getUserById(id){
  return await db.collection('myapp').where({
    _id:id// _openid: 'xxx' // 填入当前用户 openid
  }).get()
}

export async function getUserByLimit(){
  return await db.collection('myapp').limit(100).get()
}
export async function getUserByLimitRank({skip=0,limit=10}){
  return await db.collection('myapp').limit(limit).skip(skip).orderBy('poll', 'asc').get()
}

export async function getCount(){
  return await db.collection('myapp').count();

}

export async function getPollCount(){
  
  return await db.collection('myapp');
}