import SwaggerClient from "swagger-client";
//import spec from "./swagger.json";

let _openapi_client;

const OPENAPI_URL = "http://127.0.0.1:5000/swagger/";

export function initOpenAPI(store) {
  return SwaggerClient({
    url: OPENAPI_URL,
    requestInterceptor(req) {
      req.headers["content-type"] = "application/json";
      return req;
    },
  }).then((client) => {
    _openapi_client = client;
    return Promise.resolve(client);
  });
}

export function getOpenAPI() {
  return _openapi_client
    ? Promise.resolve(_openapi_client)
    : Promise.reject({ code: "openapi/not_initialized_yet" });
}
