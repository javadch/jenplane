from fastapi import Depends

from jenplane_backend.adapters.output.organizations import MongoOrganizationRepository
from jenplane_backend.adapters.output.example_repository import InMemoryExampleRepository
from jenplane_backend.domain.example_service import ExampleService
from jenplane_backend.adapters.input.rest_api.settings import ApplicationSettings
from jenplane_backend.adapters.output.mongo_db import MongoDatabase, MongoConnectionProvider
from jenplane_backend.domain.organization_service import OrganizationService
from jenplane_backend.spi.example_repository import ExampleRepository
from jenplane_backend.spi.organizations import OrganizationRepository

settings = ApplicationSettings()

mongodb = MongoDatabase(
    MongoConnectionProvider(
        settings.MONGO_INITDB_ROOT_USERNAME,
        settings.MONGO_INITDB_ROOT_PASSWORD,
        settings.MONGO_INITDB_DATABASE,
        settings.MONGODB_HOSTNAME,
        settings.MONGODB_PORT
    )
)


def mongo_database():
    yield mongodb.create_database()


# Do all the "heavy lifting" of dependency injection.
# We do not add types here, because it leads to warnings. These are all API interfaces.

def organization_repository(database: MongoDatabase = Depends(mongo_database)):
    yield MongoOrganizationRepository(database)


def organization_use_cases(repository: OrganizationRepository = Depends(organization_repository)):
    yield OrganizationService(repository)


def example_repository():
    yield InMemoryExampleRepository()


def example_use_case(repo: ExampleRepository = Depends(example_repository)):
    yield ExampleService(repo)
