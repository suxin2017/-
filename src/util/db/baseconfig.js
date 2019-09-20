const db = wx.cloud.database()
const COLLECTION = "base_config"

export async function getBaseConfig(){
  return await db.collection(COLLECTION).get();
}

export default{
  getBaseConfig,
}
