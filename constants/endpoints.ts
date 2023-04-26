// API Endpoints
export enum ENDPOINT {
  ME = "api/me",
  REGISTER = "/api/register",
  CREATE_PRODUCT = "/api/products",
}

// HTTP Request Methods
export enum REQUEST_METHOD {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
  HEADER = "HEADER",
}

// HTTP Status Codes
export enum HTTP_STATUS_CODE {
  CONTINUE = 100, // The server has received the request headers and the client should proceed to send the request body.
  SWITCHING_PROTOCOLS = 101, // The server is switching protocols according to the client's request.
  OK = 200, // The request has succeeded.
  CREATED = 201, // The request has been fulfilled and a new resource has been created.
  ACCEPTED = 202, // The request has been accepted for processing, but the processing has not been completed.
  NON_AUTHORITATIVE_INFORMATION = 203, // The request was successful but the response is not authoritative.
  NO_CONTENT = 204, // The request was successful but there is no representation to return.
  RESET_CONTENT = 205, // The request was successful but the response requires resetting of the document view.
  PARTIAL_CONTENT = 206, // The server is delivering only part of the resource due to a range header sent by the client.
  MULTIPLE_CHOICES = 300, // The requested resource has multiple representations, each with its own URI, and the server cannot determine which one to provide.
  MOVED_PERMANENTLY = 301, // The requested resource has been assigned a new permanent URI and any future references to this resource should use one of the returned URIs.
  FOUND = 302, // The requested resource has been assigned a new temporary URI and the client should follow the provided URI.
  SEE_OTHER = 303, // The response to the request can be found under a different URI and should be retrieved using a GET method on that resource.
  NOT_MODIFIED = 304, // The requested resource has not been modified and the client should use its cached copy.
  USE_PROXY = 305, // The requested resource must be accessed through the proxy given by the location field.
  TEMPORARY_REDIRECT = 307, // The requested resource has been assigned a new temporary URI and the client should follow that URI.
  PERMANENT_REDIRECT = 308, // The requested resource has been assigned a new permanent URI and the client should follow that URI.
  BAD_REQUEST = 400, // The request cannot be fulfilled due to bad syntax.
  UNAUTHORIZED = 401, // The request requires user authentication.
  FORBIDDEN = 403, // The server understands the request but refuses to authorize it.
  NOT_FOUND = 404, // The requested resource could not be found.
  METHOD_NOT_ALLOWED = 405, // The method specified in the request is not allowed for the resource identified by the URI.
  NOT_ACCEPTABLE = 406, // The resource identified by the request is only capable of generating response entities that have content characteristics not acceptable according to the accept headers sent in the request.
  CONFLICT = 409, // The request could not be completed due to a conflict with the current state of the resource.
  GONE = 410, // The requested resource is no longer available at the server and no forwarding address is known.
  LENGTH_REQUIRED = 411, // The server requires a content-length in the request.
  PRECONDITION_FAILED = 412, // The precondition given in the request header fields evaluated to false when it was tested on the server.
  PAYLOAD_TOO_LARGE = 413, // The server is refusing to process a request because the request payload is too large.
  UNSUPPORTED_MEDIA_TYPE = 415, // The server is refusing to service the request because the entity of the request is in a format not supported by the requested resource for the requested method.
  TOO_MANY_REQUESTS = 429, // The user has sent too many requests in a given amount of time.
  INTERNAL_SERVER_ERROR = 500, // The server encountered an unexpected condition that prevented it from fulfilling the request.
  NOT_IMPLEMENTED = 501, // The server does not
}
