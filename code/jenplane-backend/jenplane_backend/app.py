from fastapi import FastAPI, Depends

from .api.example_usecase import ExampleUseCase

app = FastAPI()


class DummyExampleUseCase(ExampleUseCase):
    def __init__(self):
        pass

    def hello_world(self):
        return {"message": "Hello World"}


@app.get("/")
def root(use_case: ExampleUseCase = Depends(DummyExampleUseCase)):
    return use_case.hello_world()
