from flask_cors import CORS
import awsgi
from flask import Flask, jsonify, request




BASE_ROUTE = "/listing"
app = Flask(__name__)
CORS(app)

@app.route(BASE_ROUTE, methods = ['GET'])
def list_items():
    return jsonify(message = "hello world")

def handler(event, context):
    return awsgi.response(app, event, context)

