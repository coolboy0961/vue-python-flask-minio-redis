# Import the required dependencies
import os
from dotenv import load_dotenv

load_dotenv(verbose=True)
# Set the current environment
env = os.environ.get('STAGE')
if env:
    print("current environment is " + env)


# Load the appropriate .env file
if env == 'local-confirm':
    load_dotenv('./env/.env.local-confirm')
elif env == 'dev':
    load_dotenv('./env/.env.dev')
elif env == 'qa':
    load_dotenv('./env/.env.qa')
else:
    load_dotenv('./env/.env')

STAGE = os.environ.get("STAGE")
BASE_URL = os.environ.get("BASE_URL")
