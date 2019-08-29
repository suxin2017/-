const db = wx.cloud.database()
const COLLECTION = "gift_list"

export async function getGiftlist(){
  return await db.collection(COLLECTION).get();
}

export default{
 getGiftlist,
}
