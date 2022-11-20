from fastapi import FastAPI, Depends

from jenplane_backend.api.example_usecase import ExampleUseCase
from jenplane_backend.domain.example_service import ExampleService

app = FastAPI()

example_use_case = ExampleService


@app.get("/")
def root(use_case: ExampleUseCase = Depends(example_use_case)):
    return use_case.hello_world()
