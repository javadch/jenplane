import uvicorn
from fastapi import FastAPI, Depends

from jenplane_backend.adapters.input.rest_api.settings import ApplicationSettings
from jenplane_backend.adapters.output.mongo_db import MongoDatabase, MongoConnectionProvider
from jenplane_backend.api.example_usecase import ExampleUseCase
from jenplane_backend.domain.example_service import ExampleService

settings = ApplicationSettings()

mongodb = MongoDatabase(MongoConnectionProvider(
    settings.MONGO_INITDB_ROOT_USERNAME,
    settings.MONGO_INITDB_ROOT_PASSWORD,
    settings.MONGO_INITDB_DATABASE,
    settings.MONGODB_HOSTNAME,
    settings.MONGODB_PORT
))

# database = mongodb.create_database()

app = FastAPI()

example_use_case = ExampleService


@app.get("/")
def root(use_case: ExampleUseCase = Depends(example_use_case)):
    return use_case.hello_world()


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
