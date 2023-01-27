# install all dependencies
install:
	pip install -r requirements.txt

# すでにインストールしたパッケージをrequirements.txtに同期
sync-lib:
	rm -f requirements.txt
	pip freeze > requirements.txt

# usersバッチ処理を起動
run-users:
	python batch.py 1

# 単体テスト
unit-test:
	pytest -s tests/unit-test

# インテーグレーションテスト(結合)
integration-test:
	pytest -s tests/integration-test

