from flask_restful import Resource, Api
from marshmallow import Schema, fields
from apispec.ext.marshmallow import MarshmallowPlugin
from flask_apispec.extension import FlaskApiSpec
from flask_apispec.views import MethodResource
from flask_apispec import marshal_with, doc, use_kwargs
from api.organizations.models import Organizations


class OrganizationSchema(Schema):
    _id = fields.String()
    name = fields.String()
    description = fields.String()


class OrganizationController(MethodResource, Resource):
    @doc(description="Get all organizations", tags=["Organization"])
    @marshal_with(OrganizationSchema(many=True))
    def get(self):
        all_organizations = Organizations.objects()
        return all_organizations

    @doc(
        description="Add a organization",
        tags=["Organization"],
    )
    @marshal_with(OrganizationSchema())
    @use_kwargs({"name": fields.Str(), "description": fields.Str()}, location="json")
    def post(self, **kwargs):
        project = Organizations(
            name=kwargs.get("name"), description=kwargs.get("description")
        )
        project.save()
        return project


class SingleOrganizationController(MethodResource, Resource):
    @doc(
        description="Get a single organization",
        tags=["Organization"],
    )
    def get(self, organization_id, **kwargs):
        project = Organizations.objects.get_or_404(_id=organization_id)
        return project

    @doc(
        description="Delete a single organization",
        tags=["Organization"],
    )
    def delete(self, organization_id, **kwargs):
        project = Organizations.objects.get(_id=organization_id)
        return project.delete()
