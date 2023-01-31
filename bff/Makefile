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
	pytest --cov=src --cov-report=xml --cov-branch --junitxml=xunit-report.xml -s tests/unit-test

# APIテスト(結合)
api-test:
	pytest -s tests/api-test

# sonarqube連携
sonar-scanner:
	./sonar-scaner/sonar-scanner-4.7.0.2747-macosx/bin/sonar-scanner
