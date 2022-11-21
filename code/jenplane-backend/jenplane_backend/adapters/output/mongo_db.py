from dataclasses import dataclass

from bson import ObjectId
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

    def __call__(self, *args, **kwargs):
        return self.create_database()

    def create_database(self) -> Database:
        client = MongoClient(self.provider.connection_url())
        return client[self.provider.database]


class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid object ID")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")
