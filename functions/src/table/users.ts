import functions = require("firebase-functions");
import mysql = require("promise-mysql");

import dotenv = require("dotenv");
dotenv.config();

// =======================================
// 作成
// =======================================
export async function create(params: object) {
  // MySQLへ接続
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  const columns: string[] = [];
  const data: any[] = [];

  Object.entries(params).forEach(([key, value]) => {
    columns.push(key);
    data.push(value);
  });

  try {
    const results = await connection.query(
        "INSERT INTO users (??) VALUES (?)",
        [columns, data]
    );
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

// =======================================
// 取得
// =======================================
export async function select(params: { id: number }) {
  // MySQLへ接続
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  });

  const userId = params.id;

  try {
    const results = await connection.query("SELECT * FROM users WHERE id = ?", [
      userId,
    ]);
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
