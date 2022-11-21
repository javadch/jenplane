from dataclasses import dataclass

from pymongo import MongoClient
from pymongo.database import Database


@dataclass
class MongoConnectionProvider:
    username: str
    password: str
    database: str
    hostname: str
    port: int

    def connection_url(self) -> str:
        # TODO: verify if options are needed (e.g. authSource)
        return f"mongodb://{self.username}:{self.password}@{self.hostname}:{self.port}/{self.database}?authSource=admin"


class MongoDatabase:
    def __init__(self, provider: MongoConnectionProvider):
        self.provider = provider

    def create_database(self) -> Database:
        client = MongoClient(self.provider.connection_url())
        return client[self.provider.database]
