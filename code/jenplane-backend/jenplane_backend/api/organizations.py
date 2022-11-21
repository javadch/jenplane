from typing import Protocol

from jenplane_backend.domain.organization import Organization


class OrganizationUseCases(Protocol):
    def create(self, organization: Organization) -> str:
        raise NotImplementedError

    def list_all(self) -> list[Organization]:
        raise NotImplementedError

    def list(self, organization_id: str) -> Organization | None:
        raise NotImplementedError

    def delete(self, organization_id: str) -> None:
        raise NotImplementedError
