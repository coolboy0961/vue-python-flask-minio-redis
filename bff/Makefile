# install all dependencies
install:
	pip install -r requirements.txt

# すでにインストールしたパッケージをrequirements.txtに同期
sync-lib:
	rm -f requirements.txt
	pip freeze > requirements.txt

# developmentモードでAPIサーバーを起動(port: 5000)
run-development:
	flask run

# productionモードでAPIサーバーを起動
run-production:
  gunicorn -w 1 -b 0.0.0.0:8000 wsgi:server

# 単体テスト
unit-test:
	python -m pytest tests/unit-test

# APIテスト(結合)
api-test:
	python -m pytest tests/api-test

