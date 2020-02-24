const db = wx.cloud.database();
const _ = db.command;
const COLLECTION = "wx-user";
const client = db.collection(COLLECTION);

// 添加当前微信用户
export async function insertWxUser(data) {
  return  client.add({data});
}

// 获取浏览人数
export async function getLookUsers() {
  return  client.count();
}

// 获取当前投票数
export async function getUsersVote() {
  return  client.where({ vote: 1 }).count();
}

// 获取用户
export async function getUsersData(data) {
    return  client.where(data).get();
  }

//  更新当前用户
export async function updateUserData(data) {
    const {_id,...param} = data;
    return  client.doc(_id).update({data:param});
  }