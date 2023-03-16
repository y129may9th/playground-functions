import functions = require("firebase-functions");
import mysql = require("promise-mysql");

import dotenv = require("dotenv");
dotenv.config();

// =======================================
// 取得
// =======================================
export async function select() {
  // MySQLへ接続
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  try {
    const results = await connection.query("SELECT * FROM users WHERE id = 10");
    return results;
  } catch (e: unknown) {
    if (e instanceof Error) {
      // Error型であることを確認したらエラーメッセージを投げる。
      throw new functions.https.HttpsError("internal", e.message);
    } else {
      // Error型でなかった場合も何らかthrowを書かないとエラーになる
      throw console.log("other issues");
    }
  } finally {
    await connection.end();
  }
}
