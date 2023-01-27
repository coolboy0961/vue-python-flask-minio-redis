# install all dependencies
install:
	pip install -r requirements.txt

# すでにインストールしたパッケージをrequirements.txtに同期
sync-lib:
	rm -f requirements.txt
	pip freeze > requirements.txt

# バッチ処理を起動
run:
	python batch.py

# 単体テスト
unit-test:
	python -m pytest tests/unit-test

# APIテスト(結合)
api-test:
	python -m pytest tests/api-test

