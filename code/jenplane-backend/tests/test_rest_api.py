from unittest.mock import Mock

from fastapi.testclient import TestClient

from jenplane_backend.api.example_usecase import ExampleUseCase
from jenplane_backend.rest_api import app, example_use_case

client = TestClient(app)


def test_get_root(fastapi_dep):
    fake_example_use_case: ExampleUseCase = Mock()
    fake_example_use_case.hello_world.return_value = {"message": "Hello, tests!"}

    with fastapi_dep(app).override({example_use_case: lambda: fake_example_use_case}):
        response = client.get("/")
        assert response.status_code == 200
        assert response.json() == {"message": "Hello, tests!"}
