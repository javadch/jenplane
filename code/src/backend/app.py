from dotenv import load_dotenv

load_dotenv()

from api import app, api, docs
from api.projects.views import ProjectsController, SingleProjectController
from api.organizations.views import OrganizationController, SingleOrganizationController

api.add_resource(ProjectsController, "/projects")
api.add_resource(SingleProjectController, "/projects/<project_id>")
docs.register(ProjectsController)
docs.register(SingleProjectController)


api.add_resource(OrganizationController, "/organizations")
api.add_resource(SingleOrganizationController, "/organizations/<organization_id>")
docs.register(OrganizationController)
docs.register(SingleOrganizationController)
