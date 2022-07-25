from flask import Flask, render_template, request, url_for, redirect
from flask_restful import Api
from apispec import APISpec
from marshmallow import Schema, fields
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec
from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, doc, use_kwargs
from bson.objectid import ObjectId
import os
from .extensions import db
from api.projects.models import Projects
from flask_cors import CORS
from flask import jsonify


app = Flask(__name__)  # Flask app instance initiated
CORS(app)

api = Api(app)  # Flask restful wraps Flask app around it.d
app.config.update(
    {
        "APISPEC_SPEC": APISpec(
            title="JenPlane",
            version="v1",
            plugins=[MarshmallowPlugin()],
            openapi_version="2.0.0",
            info=dict(description="A Data Management Process Designer API"),
        ),
        "APISPEC_SWAGGER_URL": os.environ["APISPEC_SWAGGER_URL"],
        "APISPEC_SWAGGER_UI_URL": os.environ["APISPEC_SWAGGER_UI_URL"],
        "MONGODB_SETTINGS": {
            "host": (
                "mongodb://"
                + os.environ["MONGO_INITDB_ROOT_USERNAME"]
                + ":"
                + os.environ["MONGO_INITDB_ROOT_PASSWORD"]
                + "@"
                + os.environ["MONGODB_HOSTNAME"]
                + ":27017/"
                + os.environ["MONGO_INITDB_DATABASE"]
                + "?authSource=admin"
            )
        },
    }
)
db.init_app(app)
docs = FlaskApiSpec(app)

# Return validation errors as JSON
@app.errorhandler(422)
@app.errorhandler(400)
def handle_error(err):
    headers = err.data.get("headers", None)
    messages = err.data.get("messages", ["Invalid request."])
    if headers:
        return jsonify({"errors": messages}), err.code, headers
    else:
        return jsonify({"errors": messages}), err.code


@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")
