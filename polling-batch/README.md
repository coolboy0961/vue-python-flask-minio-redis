# 環境構築
venv で Flask をインストールする

```bash
python3 -m venv .venv
source .venv/bin/activate
make install
```

venv環境から離脱
```
deactivate
```

新しいモジュールのインストール
```
pip install new-module
# ライブラリの状態をrequirements.txtに同期
make sync-lib
```