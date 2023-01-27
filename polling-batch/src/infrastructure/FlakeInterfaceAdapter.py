from flask import Flask, make_response
from flask.wrappers import Response
import json


class ControllerRequest:
    def __init__(self, headers, query_parameters, body):
        self.headers = headers
        self.query_parameters = query_parameters
        self.body = body


# クラス定義
class FlaskInterfaceAdapter:
    # コンストラクタ定義

    # メソッド定義
    def call(self, controller_call_function, flask_request: Flask.request_class):
        data = controller_call_function(
            self.to_controller_request(flask_request))
        data_json = {}
        if type(data) == list:
            data_json = json.dumps([ob.__dict__ for ob in data])
        else:
            data_json = json.dumps(data)
        response = make_response(data_json)
        response.headers['Content-Type'] = 'application/json'
        return response

    def to_controller_request(self, flask_request: Flask.request_class) -> ControllerRequest:
        headers = dict(flask_request.headers)
        query_parameters = json.dumps(flask_request.args)
        print("flask_request.__dict__")
        print(flask_request.__dict__)
        body = {}
        try:
          body = flask_request.json
        except Exception as e:
          print("Exception:")
          print(e)
          body = {}
        return ControllerRequest(headers, query_parameters, body)
