from bson import ObjectId
from api.extensions import db


class Processes(db.Document):
    _id = db.ObjectIdField(default=ObjectId, primary_key=True)

    name = db.StringField(
        max_length=60,
        required=True,
    )

    rdf_content = db.StringField(required=True)

    def __unicode__(self):
        return self.name

    def __repr__(self):
        return self.name
