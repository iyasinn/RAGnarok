from setup import get_query_engine
from flask import Flask, request
from flask_cors import CORS, cross_origin

# from threading import Thread


app = Flask(__name__)


query_engine = get_query_engine()

# thread = Thread(target=get_query_engine, daemon=True)
# thread.start()


@app.route("/")
def hello():
    return "hello world"


@app.route("/test", methods=["POST"])
@cross_origin(supports_credentials=True)
def test():
    query = request.json['query']
    print("query", query)
    response = str(query_engine.query(query))
    return {"response": response}
