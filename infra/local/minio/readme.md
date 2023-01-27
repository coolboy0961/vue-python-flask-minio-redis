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