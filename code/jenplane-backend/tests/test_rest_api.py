from fastapi.testclient import TestClient

# Test the full app. This is an integration test.
from jenplane_backend.rest_api import app

client = TestClient(app)


def test_get_root(no_cover):
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello, world!"}
