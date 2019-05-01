from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb://127.0.0.1:27017/krediti"
mongo = PyMongo(app)

#https://stackoverflow.com/questions/7907596/json-dumps-vs-flask-jsonify
'''
@app.route("/")
def hello():
    docs = []
    for doc in mongo.db.juzers_data.find():
        doc.pop('_id')
        docs.append(doc)
    return jsonify(docs)
'''

@app.route("/add", methods = ['POST'])
def add():
    credit_data = mongo.db.credit_data

    return credit_data.insert(request.get_json())



