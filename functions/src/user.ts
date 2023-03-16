import users = require("./table/users");

// ========================================================================
// ユーザー情報 取得
// ========================================================================
export async function selectUser(data: any) {
  // 結果返却用
  const result = {
    message: "",
    record: null,
    data: data,
  };

  try {
    // =======================================
    // 取得
    // =======================================
    const record = await users.select();

    // =======================================
    // 処理終了
    // =======================================
    if (record) {
      result.message = "取得成功しました。";
      result.record = record;
      return result;
    } else {
      result.message = "取得失敗しました。";
      return result;
    }
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
    result.message = "取得失敗しました。";
    return result;
  }
}
