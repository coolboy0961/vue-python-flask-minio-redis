# prepare
## install podman
https://podman-desktop.io/

## install podman-compose
```
pip3 install podman-compose
```

# create minio server
```
cd infra/local/minio
podman-compose -f minio.yml up -d
```

# stop minio server
podman-compose -f minio.yml down -v

# 補足
minio.ymlの createbuckets サービスで初期バケットを作成している。