from fastapi import FastAPI, Depends

from jenplane_backend.api.example_usecase import ExampleUseCase
from jenplane_backend.domain.example_service import ExampleService

app = FastAPI()


@app.get("/")
def root(use_case: ExampleUseCase = Depends(ExampleService)):
    return use_case.hello_world()
