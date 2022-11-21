from jenplane_backend.api.example_usecase import ExampleUseCase
from jenplane_backend.spi.example_repository import ExampleRepository


class ExampleService(ExampleUseCase):
    def __init__(self, repository: ExampleRepository):
        self._repo = repository

    def hello_world(self):
        return {"message": self._repo.get_message()}
