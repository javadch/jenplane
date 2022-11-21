from jenplane_backend.adapters.output.mongo_db import MongoDatabase
from jenplane_backend.spi.organizations import OrganizationRepository


class MongoOrganizationRepository(OrganizationRepository):

    def find_all(self):
        raise NotImplementedError

    def __init__(self, database: MongoDatabase) -> None:
        self._database = database

    def __call__(self, *args, **kwargs):
        pass
