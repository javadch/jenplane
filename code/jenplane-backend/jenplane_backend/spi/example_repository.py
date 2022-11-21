from typing import Protocol


class ExampleRepository(Protocol):
    def get_message(self) -> str:
        pass
