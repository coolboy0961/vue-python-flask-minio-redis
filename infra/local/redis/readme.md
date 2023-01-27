# prepare
## install podman
https://podman-desktop.io/

## install podman-compose
```
pip3 install podman-compose
```

# create redis server
```
podman-compose -f redis.yml up -d
```

# 操作方法
## すべてのキーをリスト
```
KEYS *
```
## キーでバリューを取得する
```
GET samplekey
```