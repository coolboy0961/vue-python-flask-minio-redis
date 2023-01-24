from flask import Flask, request
import json

from src.infrastructure.FlakeInterfaceAdapter import FlaskInterfaceAdapter
from src.interface.controllers.UserController import UserController

def create_app():
    app = Flask(__name__)
    adapter = FlaskInterfaceAdapter()

    @app.route("/")
    def hello():
        return "Hello, World!"

    @app.get("/users")
    def users_get():
        user_controller = UserController()
        return adapter.call(user_controller.get, request)

    @app.get("/test")
    def test_get():
        print("request.headers:")
        print(dict(request.headers))
        print("request.args:")
        print(request.args)
        print("request.args.json:")
        print(json.dumps(request.args))
        return ""


    @app.post("/test")
    def test_post():
        print("request.headers:")
        print(dict(request.headers))
        print("request.args:")
        print(request.args)
        print("request.json:")
        print(request.json)
        return ""

    return app





