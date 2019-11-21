const db = wx.cloud.database()
const COLLECTION = "user"
const client = db.collection(COLLECTION);

export async function getUserInfoList({skip=0,limit=10}){
  return  client.limit(limit).skip(skip).orderBy('poll', 'asc').get()
}
export async function addUserInfo(data){
  return  client.add({data})
}
export default{
  addUserInfo,getUserInfoList
}
