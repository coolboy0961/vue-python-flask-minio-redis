install:
	pip install -r requirements.txt

sync-lib:
	rm -f requirements.txt
	pip freeze > requirements.txt

start-development:
	flask run

start-production:
  gunicorn -w 1 -b 0.0.0.0:8000 wsgi:server

test:
	python -m pytest

unit-test:
	python -m pytest tests/unit-test

api-test:
	python -m pytest tests/api-test

