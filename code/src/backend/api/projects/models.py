from concurrent.futures import process
from bson import ObjectId
from api.extensions import db
from api.organizations.models import Organizations
from api.processes.models import Processes


class Projects(db.Document):
    _id = db.ObjectIdField(default=ObjectId, primary_key=True)

    name = db.StringField(
        max_length=60,
        required=True,
    )

    description = db.StringField()

    organization = db.ReferenceField(
        "Organizations", reverse_delete_rule=db.NULLIFY, check_reference=False
    )

    process = db.ReferenceField(
        "Processes", reverse_delete_rule=db.NULLIFY, check_reference=False
    )

    rdf_content = db.StringField()

    def __unicode__(self):
        return self.name

    def __repr__(self):
        return self.name
