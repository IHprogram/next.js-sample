import fetch from "node-fetch";

// 100個のブログデータが入っている
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getAllPostsData() {
  // エンドポイントからデータを取得し、結果をresという変数に格納
  const res = await fetch(new URL(apiUrl));
  // 結果であるresをjson形式に変換し、そのまま関数の返り値にする
  const posts = await res.json();
  return posts;
}