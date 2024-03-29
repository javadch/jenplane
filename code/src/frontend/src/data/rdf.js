export const RDF = `@prefix rdf: 		<http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: 	    <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: 		<http://www.w3.org/2002/07/owl#> .
@prefix xsd: 		<http://www.w3.org/2001/XMLSchema#> .
@prefix dc: 		<http://purl.org/dc/elements/1.1/> .
@prefix xml: 		<http://www.w3.org/XML/1998/namespace> .
@prefix foaf: 	    <http://xmlns.com/foaf/0.1/> .
@prefix skos:       <http://www.w3.org/2004/02/skos/core#> .
@prefix dcat:       <http://www.w3.org/ns/dcat#> .
@prefix dcterms:	<http://purl.org/dc/terms/> .
@prefix jpn: 		<http://jenplane.org/> .
@prefix dbx:		<http://databri-x.eu/> .
@base 	    	    <http://databri-x.eu/> .

:jenplane1 a jpn:Process ;
    rdfs:label "databrix-1";
    rdfs:comment "The default process template recommended by DataBri-X for JenPlane-based data management projects." ;
    jpn:version "1.0.0" ;
    jpn:phases :phases ;
    jpn:disciplines :disciplines .

:phases a rdf:Seq ;
    rdf:li :conception ;
    rdf:li :implementation ;
    rdf:li :publishing ;
    rdf:li :preservation .

:disciplines a rdf:Seq ;
    rdf:li :analyze ;
    rdf:li :integrate ;
    rdf:li :discover ;
    rdf:li :preserve ;
    rdf:li :describe ;
    rdf:li :assure ;
    rdf:li :acquire ;
    rdf:li :plan ;
    rdf:li :manage ;
    rdf:li :maintain .

:conception     a jpn:Phase ;
    rdfs:label "Conception";
    jpn:iterations "3"^^xsd:integer .
:implementation a jpn:Phase ;
    rdfs:label "Implementation";
    jpn:iterations "3"^^xsd:integer .
:publishing     a jpn:Phase ;
    rdfs:label "Publishing";
    jpn:iterations "3"^^xsd:integer .
:preservation   a jpn:Phase ;
    rdfs:label "Preservation";
    jpn:iterations "3"^^xsd:integer .

:analyze    a jpn:Discipline ;
    rdfs:label "Analyze" .
:integrate  a jpn:Discipline ;
    rdfs:label "Integrate" .
:discover   a jpn:Discipline ;
    rdfs:label "Discover" .
:preserve   a jpn:Discipline ;
    rdfs:label "Preserve" .
:describe   a jpn:Discipline ;
    rdfs:label "Describe" .
:assure     a jpn:Discipline ;
    rdfs:label "Assure" .
:acquire    a jpn:Discipline ;
    rdfs:label "Acquire" .
:plan       a jpn:Discipline ;
    rdfs:label "Plan" .
:manage     a jpn:Discipline ;
    rdfs:label "Manage" .
:maintain   a jpn:Discipline ;
    rdfs:label "Maintain".

:act_get_data_from_web a jpn:Activity ;
    jpn:hasPhase :conception ;
    jpn:hasDiscipline :analyze ;
    jpn:preferredColor "red" ;
    jpn:duration "18"^^xsd:integer ;
    jpn:effort "8"^^xsd:integer .

:act_publish_data_on_repo a jpn:Activity ;
    jpn:hasPhase :publishing, :preservation , :conception ;
    jpn:hasDiscipline :describe, :preserve, :analyze ;
    jpn:preferredColor "#FFBF00" ;
    jpn:duration "12"^^xsd:integer ;
    jpn:effort "8"^^xsd:integer .

:act_publish_data_on_repo1 a jpn:Activity ;
    jpn:hasPhase :publishing, :preservation ;
    jpn:hasDiscipline :describe, :preserve ;
    jpn:preferredColor "#FFBF88" ;
    jpn:duration "12"^^xsd:integer ;
    jpn:effort "8"^^xsd:integer .`;
