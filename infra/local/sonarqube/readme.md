# prepare
## install podman
https://podman-desktop.io/

## install podman-compose
```
pip3 install podman-compose
```

# create sonarqube server
```
cd infra/local/sonarqube
podman-compose -f sonarqube.yml up -d
```

# 操作方法
初期のログイン情報は下記の通りです。

User: admin  
Password: admin