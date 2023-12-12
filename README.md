# vue3-pinia

## 起動方法

1. Docker Compose Up

```
docker compose -f "docker-compose.yml" up -d --build
```

2. コンテナにアタッチ

```
docker exec -it vue-app sh
```

3. ディレクトリに移動

```
cd vue-app/src
```

4. ライブラリのインストール

```
yarn install
```

5. 起動

```
yarn run dev
```

6. ブラウザで<a href="http://127.0.0.1:8080/">http://127.0.0.1:8080/</a>にアクセス
