import uvicorn
from fastapi import FastAPI, Depends

from jenplane_backend.adapters.input.rest_api import organizations
from jenplane_backend.adapters.input.rest_api.dependencies import organization_use_cases, example_use_case
from jenplane_backend.api.example_usecase import ExampleUseCase

app = FastAPI(
    dependencies=[
        Depends(organization_use_cases),
        Depends(example_use_case),
    ]
)

app.include_router(organizations.router)


@app.get("/")
def root(use_case: ExampleUseCase = Depends(example_use_case)):
    return use_case.hello_world()


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
