from setup import get_query_engine
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

# from threading import Thread


app = Flask(__name__)
CORS(app)  # Enable CORS globally, not just for specific routes


query_engine = get_query_engine()


@app.route("/")
def hello():
    return "hello world"


@app.route("/test", methods=["POST"])
def test():
    query = request.json["query"]
    response = str(query_engine.query(query))
    print(response)
    return {"response": response}
