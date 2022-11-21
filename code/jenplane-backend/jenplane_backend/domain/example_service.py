from jenplane_backend.api.example_usecase import ExampleUseCase


class ExampleService(ExampleUseCase):
    # Empty constructor required by FastAPI
    def __init__(self):
        pass

    def hello_world(self):
        return {"message": "Hello World"}
