import users = require("./table/users");

// ========================================================================
// ユーザー 作成
// ========================================================================
export async function createUser(params: any) {
  console.log("===== params =====");
  console.log(params);

  // 結果返却用
  const result = {
    message: "",
    record: null,
    data: params,
  };

  try {
    const record = await users.create(params);

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

// ========================================================================
// ユーザー情報 取得
// ========================================================================
export async function selectUser(params: any) {
  // 結果返却用
  const result = {
    message: "",
    record: null,
    data: params,
  };

  try {
    // =======================================
    // 取得
    // =======================================
    const record = await users.select(params);

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
