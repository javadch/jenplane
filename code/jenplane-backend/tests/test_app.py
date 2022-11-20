from fastapi.testclient import TestClient

from jenplane_backend.api.example_usecase import ExampleUseCase
from jenplane_backend.app import app, example_use_case

client = TestClient(app)


def test_get_root(fastapi_dep):
    class FakeExampleService(ExampleUseCase):
        def hello_world(self):
            return {"message": "Hello, tests!"}

    with fastapi_dep(app).override({example_use_case: FakeExampleService()}):
        response = client.get("/")
        assert response.status_code == 200
        assert response.json() == {"message": "Hello, tests!"}
