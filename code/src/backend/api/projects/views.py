from flask_restful import Resource, Api
from marshmallow import Schema, fields
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec
from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, doc, use_kwargs
from api.projects.models import Projects


class ProjectSchema(Schema):
    _id = fields.String()
    name = fields.String()
    description = fields.String()


class ProjectsController(MethodResource, Resource):
    @doc(description="Get all projects", tags=["Projects"])
    @marshal_with(ProjectSchema(many=True))
    def get(self):
        all_projects = Projects.objects()
        return all_projects

    @doc(
        description="Add a project",
        tags=["Projects"],
    )
    @marshal_with(ProjectSchema())
    @use_kwargs({"name": fields.Str(), "description": fields.Str()})
    def post(self, **kwargs):
        project = Projects(name=kwargs["name"], description=kwargs["description"])
        project.save()
        return project


class SingleProjectController(MethodResource, Resource):
    @doc(
        description="Get a single project",
        tags=["Projects"],
    )
    def get(self, project_id, **kwargs):
        project = Projects.objects.get_or_404(_id=project_id)
        return project

    @doc(
        description="Delete a single project",
        tags=["Projects"],
    )
    def delete(self, project_id, **kwargs):
        project = Projects.objects.get(_id=project_id)
        return project.delete()
