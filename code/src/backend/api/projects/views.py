from api.processes.models import Processes
from api.organizations.models import Organizations
from flask_restful import Resource, Api
from marshmallow import Schema, fields
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec
from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, doc, use_kwargs
from api.projects.models import Projects
from api.organizations.views import OrganizationSchema
from api.processes.views import ProcessSchema


class ProjectSchema(Schema):
    _id = fields.String()

    name = fields.String()

    description = fields.String()

    organization = fields.Nested(OrganizationSchema)

    process = fields.Nested(ProcessSchema)

    rdf_content = fields.String()


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
    @use_kwargs(
        {
            "name": fields.Str(required=True),
            "description": fields.Str(),
            "organization": fields.Str(required=True),
            "process": fields.Str(required=True),
            "rdf_content": fields.Str(),
        },
        location="json",
    )
    def post(self, **kwargs):
        organization = Organizations.objects.with_id(kwargs["organization"])
        process = Processes.objects.with_id(kwargs["process"])
        project = Projects(
            name=kwargs["name"],
            description=kwargs["description"],
            organization=organization,
            process=process,
            rdf_content=process.rdf_content,
        )
        project.save()
        return project


class SingleProjectController(MethodResource, Resource):
    @doc(
        description="Get a single project",
        tags=["Projects"],
    )
    @marshal_with(ProjectSchema())
    def get(self, project_id, **kwargs):
        project = Projects.objects.get_or_404(_id=project_id)
        return project

    @doc(
        description="Update a single project",
        tags=["Projects"],
    )
    @marshal_with(ProjectSchema())
    @use_kwargs(
        {
            "rdf_content": fields.Str(),
        },
        location="json",
    )
    def put(self, project_id, **kwargs):
        project = Projects.objects.get_or_404(_id=project_id)
        project.rdf_content = kwargs["rdf_content"]
        project.save()
        return project

    @doc(
        description="Delete a single project",
        tags=["Projects"],
    )
    def delete(self, project_id, **kwargs):
        project = Projects.objects.get(_id=project_id)
        return project.delete()
