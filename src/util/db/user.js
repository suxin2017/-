const db = wx.cloud.database();
const _ = db.command;
const COLLECTION = "user";
const client = db.collection(COLLECTION);

// 首页
export async function getUserInfoList(skip = 0, limit = 10) {
  return await client
    .limit(limit)
    .skip(skip)
    .get();
}

export async function getUserCount() {
  return await client.count().then(res => res.total);
}

//排名
export async function getUserRanking(id) {
  const { data: currentUser } = await client.doc(id).get();
  const resTotal = await getUserCount();
  const resPollTotal = await client
    .where({
      poll: _.gt(currentUser.poll || 0)
    })
    .count();
  const resPollList = await client
    .where({
      poll: _.gt(currentUser.poll || 0)
    })
    .get();
  const current = resPollTotal.total;
  const [nextUser = null] = resPollList.data;
  return [current, nextUser];
  //  return await client.count().then(res => res.total);
}

// 搜索
export async function getUserInfoListByName(skip = 0, limit = 20, name) {
  return client
    .limit(limit)
    .skip(skip)
    .where({
      name: db.RegExp({
        regexp: name,
        options: "ig"
      })
    })
    .get();
}

// 排行
export async function getUserInfoRankingList(skip = 0, limit = 10) {
  return client
    .orderBy("poll", "desc")
    .limit(limit)
    .skip(skip)
    .get();
}

export async function addUserInfo(data) {
  return client.add({ data });
}
export async function updateUserInfo(id, data) {
  client.doc(id).update({ data });
}

export async function getUser(data){
  return client.where(data).get();
}

export async function getParticipationCount(id, data) {
 return await client.count();
}


export default {
  addUserInfo,
  getUserInfoList,
  getUserInfoRankingList,
  updateUserInfo
};
