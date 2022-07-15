import { useEffect } from "react";
import { setProject } from "slices/projectSlice";
import { useDispatch } from "react-redux";
import { RDF } from "data/rdf";
import * as rdflib from "rdflib";
import { CELL_TYPES } from "data/projects";

function useProject({ rdfContent = RDF, id }) {
  const dispatch = useDispatch();

  var store = rdflib.graph();

  //dispatch(setProject(rdfLayoutDATA));
  //const [layout, setLayout] = useState(JSON.parse(JSON.stringify(rdfLayout)));
  useEffect(() => {
    const loadProject = async () => {
      try {
        rdflib.parse(rdfContent, store, "http://jenplane.org/", "text/turtle");
      } catch (err) {
        console.log(err);
      }
      //Namespaces
      const jenplaneNS = new rdflib.Namespace("http://jenplane.org/");
      const rdfNS = new rdflib.Namespace(
        "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
      );
      const rdfsNS = new rdflib.Namespace(
        "http://www.w3.org/2000/01/rdf-schema#"
      );
      //disciplines
      let disciplines = store.match(null, jenplaneNS("disciplines"), null);
      let disciplinesList = store.match(
        disciplines[0].object,
        rdfNS("li"),
        null
      );
      //phases
      let phases = store.match(null, jenplaneNS("phases"), null);
      let listPhases = store.match(phases[0].object, rdfNS("li"), null);
      //Activities
      let activities = store.match(null, null, jenplaneNS("Activity"));
      // Data
      const rdfLayoutDATA = [
        ...disciplinesList.map((d, i) => {
          let label = store.match(d.object, rdfsNS("label"), null);
          return {
            id: d.object.value,
            cell_type: CELL_TYPES.DISCIPLINE,
            label: label[0].object.value,
          };
        }),
        ...listPhases.map((p, i) => {
          let label = store.match(p.object, rdfsNS("label"), null);
          let iterations = store.match(
            p.object,
            jenplaneNS("iterations"),
            null
          );
          return {
            id: p.object.value,
            cell_type: CELL_TYPES.PHASE,
            label: label[0].object.value,
            iterations: parseInt(iterations[0].object.value),
          };
        }),
        ...activities.map((a, i) => {
          let duration = store.match(a.subject, jenplaneNS("duration"), null);
          let effort = store.match(a.subject, jenplaneNS("effort"), null);
          let hasDiscipline = store.match(
            a.subject,
            jenplaneNS("hasDiscipline"),
            null
          );
          let hasPhase = store.match(a.subject, jenplaneNS("hasPhase"), null);
          let preferredColor = store.match(
            a.subject,
            jenplaneNS("preferredColor"),
            null
          );
          return {
            id: a.subject.value,
            cell_type: CELL_TYPES.ACTIVITY,
            label: a.subject.value,
            duration: duration.map((c) => c.object.value).join(", "),
            effort: effort.map((c) => c.object.value).join(", "),
            preferredColor: preferredColor
              .map((c) => c.object.value)
              .join(", "),
            hasDiscipline: hasDiscipline.map((c) => c.object.value),
            currentDiscipline: hasDiscipline[0].object.value,
            hasPhase: hasPhase.map((c) => c.object.value),
            currentPhase: hasPhase[0].object.value,
            iteration: 0,
          };
        }),
      ];

      dispatch(setProject(rdfLayoutDATA));
    };
    loadProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { store };
}

export default useProject;
