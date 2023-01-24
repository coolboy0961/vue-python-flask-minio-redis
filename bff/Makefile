install:
	pip install -r requirements.txt

sync-lib:
	rm -f requirements.txt
	pip freeze > requirements.txt

start:
	flask run

test:
	python -m pytest

unit-test:
	python -m pytest tests/unit-test

api-test:
	python -m pytest tests/api-test

