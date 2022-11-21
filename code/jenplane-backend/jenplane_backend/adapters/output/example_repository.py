from jenplane_backend.spi.example_repository import ExampleRepository


class InMemoryExampleRepository(ExampleRepository):
    def get_message(self) -> str:
        return "Hello, world!"
