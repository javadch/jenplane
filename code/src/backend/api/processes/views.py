from flask_restful import Resource, Api
from marshmallow import Schema, fields
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec
from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, doc, use_kwargs
from api.processes.models import Processes


class ProcessSchema(Schema):
    _id = fields.String()
    name = fields.String()
    rdf_content = fields.String()


class ProcessController(MethodResource, Resource):
    @doc(description="Get all processes", tags=["Process"])
    @marshal_with(ProcessSchema(many=True))
    def get(self):
        all_processes = Processes.objects()
        return all_processes

    @doc(
        rdf_content="Add a process",
        tags=["Process"],
    )
    @marshal_with(ProcessSchema())
    @use_kwargs({"name": fields.Str(), "rdf_content": fields.Str()}, location="json")
    def post(self, **kwargs):
        project = Processes(
            name=kwargs.get("name"), rdf_content=kwargs.get("rdf_content")
        )
        project.save()
        return project


class SingleProcessController(MethodResource, Resource):
    @doc(
        description="Get a single process",
        tags=["Process"],
    )
    def get(self, process_id, **kwargs):
        project = Processes.objects.get_or_404(_id=process_id)
        return project

    @doc(
        description="Delete a single process",
        tags=["Process"],
    )
    def delete(self, process_id, **kwargs):
        project = Processes.objects.get(_id=process_id)
        return project.delete()
