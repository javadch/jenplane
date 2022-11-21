from jenplane_backend.api.organizations import OrganizationUseCases
from jenplane_backend.domain.organization import Organization
from jenplane_backend.spi.organizations import OrganizationRepository


class OrganizationService(OrganizationUseCases):
    def __init__(self, repository: OrganizationRepository) -> None:
        # Constructor required for FastAPI
        self._repo = repository

    def create(self, organization: Organization) -> str:
        # TODO: insert_one
        # TODO: return inserted_id / or: find_one
        return ""  # FIXME

    def list_all(self) -> list[Organization]:
        return []

    def list(self, organization_id: str) -> Organization | None:
        return None

    def delete(self, organization_id: str) -> None:
        return None
