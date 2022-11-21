from jenplane_backend.adapters.output.mongo_db import MongoConnectionProvider


def test_happy_path():
    provider = MongoConnectionProvider("USERNAME", "PASSWORD", "DATABASE", "HOSTNAME", 12345)
    assert "mongodb://USERNAME:PASSWORD@HOSTNAME:12345/DATABASE?authSource=admin" == provider.connection_url()
