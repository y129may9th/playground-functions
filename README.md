# playground-functions
- .env ファイルの用意
```bash
cp .env.example .env
```

- functions ディレクトリに移動
```bash
cd fuctions
```

- npm パッケージのインストール
```bash
npm ci
```

- ローカルでサーバ立ち上げ
```bash
npm run watch
npm start
```

- curl を使用して関数にリクエストを送信
```bash
curl localhost:8080
```

- デプロイ
```bash
firebase deploy
firebase deploy --only functions:<関数名>
```

## ドキュメントなど
- [Functions Framework &nbsp;|&nbsp; Google Cloud Functions に関するドキュメント](https://cloud.google.com/functions/docs/functions-framework?hl=ja)
- [GitHub - GoogleCloudPlatform/functions-framework-nodejs: FaaS (Function as a service) framework for writing portable Node.js functions](https://github.com/GoogleCloudPlatform/functions-framework-nodejs)

- 作業メモ
https://github.com/y129may9th/TIL/blob/master/TIL/230315.md 
