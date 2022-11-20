from jenplane_backend.api.example_usecase import ExampleUseCase


class ExampleService(ExampleUseCase):
    def hello_world(self):
        return {"message": "Hello World"}
