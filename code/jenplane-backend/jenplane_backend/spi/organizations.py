from typing import Protocol


class OrganizationRepository(Protocol):
    def find_all(self):
        raise NotImplementedError
