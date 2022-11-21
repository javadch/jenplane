from fastapi import APIRouter, Depends, HTTPException, Body
from fastapi.encoders import jsonable_encoder

from jenplane_backend.adapters.input.rest_api.dependencies import organization_use_cases
from jenplane_backend.api.organizations import OrganizationUseCases
from jenplane_backend.domain.organization import Organization

router = APIRouter(
    prefix="/organizations",
    tags=["organizations"],
    # responses={},
)


@router.get("/")
def list_all_organizations(use_case: OrganizationUseCases = Depends(organization_use_cases)):
    return use_case.list_all()


@router.get("/{organization_id}")
def find_organization_by_id(organization_id: str, use_case: OrganizationUseCases = Depends(organization_use_cases)):
    response = use_case.list(organization_id)
    if response is None:
        raise HTTPException(status_code=404, detail=f"Organization with ID <{organization_id}> not found")
    return response


@router.post("/", response_model=Organization)
def create_organization(body: Organization = Body(...),
                        use_case: OrganizationUseCases = Depends(organization_use_cases)):
    organization = jsonable_encoder(body)
    return use_case.create(organization)  # TODO: JSONResponse


@router.delete("/{organization_id}")
def delete_organization_by_id(organization_id: str, use_case: OrganizationUseCases = Depends(organization_use_cases)):
    use_case.delete(organization_id)
