from bson import ObjectId
from pydantic import BaseModel, Field

from jenplane_backend.adapters.output.mongo_db import PyObjectId


# FIXME: We currently share our models between controller and database. Also, we access the DB directly.
#        This is usually a bad idea and should be refactored at some point.


class Organization(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    name: str = Field(...)
    description: str = Field(...)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
