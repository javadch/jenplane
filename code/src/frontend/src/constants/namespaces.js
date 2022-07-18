import * as rdflib from "rdflib";

const NAME_SPACES = {
  jenplaneNS: new rdflib.Namespace("http://jenplane.org/"),
  defaultURI: new rdflib.Namespace("http://jenplane.org/#"),
  rdfsNS: new rdflib.Namespace("http://www.w3.org/2000/01/rdf-schema#"),
  rdfNS: new rdflib.Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#"),
};
export default NAME_SPACES;
