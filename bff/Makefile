# install all dependencies
install:
	pip install -r requirements.txt

# すでにインストールしたパッケージをrequirements.txtに同期
sync-lib:
	rm -f requirements.txt
	pip freeze > requirements.txt

# developmentモードでAPIサーバーを起動(port: 5000)
run-local-confirm:
	flask -e env/.env.local-confirm run

# productionモードでAPIサーバーを起動
run-production:
	gunicorn -e STAGE=local-confirm -w 1 -b 0.0.0.0:8000 wsgi:server

# 単体テスト
unit-test:
	pytest --cov=src --cov-report=xml --cov-branch -s tests/unit-test

# APIテスト(結合)
api-test:
	pytest -s tests/api-test

