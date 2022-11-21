from unittest.mock import Mock

from fastapi import FastAPI
from fastapi.testclient import TestClient

from jenplane_backend.adapters.input.rest_api.organizations import router
from jenplane_backend.adapters.input.rest_api.dependencies import organization_use_cases
from jenplane_backend.api.organizations import OrganizationUseCases

# Only test the organization router. No need to bring up the full app.
app = FastAPI()
app.include_router(router)

client = TestClient(app)


def test_read_by_id_not_found(fastapi_dep):
    fake_response: OrganizationUseCases = Mock()
    fake_response.list.return_value = None

    with fastapi_dep(app).override({organization_use_cases: lambda: fake_response}):
        response = client.get("/organizations/TEST_ID")
        assert response.status_code == 404
        assert response.json() == {'detail': 'Organization with ID <TEST_ID> not found'}
