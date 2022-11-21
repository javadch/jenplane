from pydantic import BaseSettings


class ApplicationSettings(BaseSettings):
    """
    Configuration information for the application.

    The configuration settings are automatically read from a `.env` file and validated with instantiated.
    """
    MONGO_INITDB_ROOT_USERNAME: str
    MONGO_INITDB_ROOT_PASSWORD: str
    MONGO_INITDB_DATABASE: str
    MONGODB_HOSTNAME: str
    MONGODB_PORT: int = 27017

    class Config:
        env_file = './.env'
