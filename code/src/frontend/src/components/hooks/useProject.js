import { useEffect, useState } from "react";
import { setProject, setMetaData } from "slices/projectSlice";
import { useDispatch, useSelector } from "react-redux";
import { RDF } from "data/rdf";
import * as rdflib from "rdflib";
import NAME_SPACES from "constants/namespaces";
import { CELL_TYPES } from "data/projects";

function useProject({ rdfContent = RDF, id }) {
  const dispatch = useDispatch();
  const projectData = useSelector((state) => state.project.data);
  const metaData = useSelector((state) => state.project.metaData);
  var store = rdflib.graph();
  const [storeState, setStoreState] = useState(store);
  //dispatch(setProject(rdfLayoutDATA));
  //const [layout, setLayout] = useState(JSON.parse(JSON.stringify(rdfLayout)));
  useEffect(() => {
    const loadProject = async () => {
      try {
        rdflib.parse(rdfContent, store, "http://jenplane.org/", "text/turtle");
      } catch (err) {
        console.log(err);
      }
      //disciplines
      let disciplines = store.match(
        null,
        NAME_SPACES.jenplaneNS("disciplines"),
        null
      );
      let disciplinesList = store.match(
        disciplines[0].object,
        NAME_SPACES.rdfNS("li"),
        null
      );
      //phases
      let phases = store.match(null, NAME_SPACES.jenplaneNS("phases"), null);
      let listPhases = store.match(
        phases[0].object,
        NAME_SPACES.rdfNS("li"),
        null
      );
      //Activities
      let activities = store.match(
        null,
        null,
        NAME_SPACES.jenplaneNS("Activity")
      );
      // Data
      const rdfLayoutDATA = [
        ...disciplinesList.map((d, i) => {
          let label = store.match(d.object, NAME_SPACES.rdfsNS("label"), null);
          return {
            id: d.object.value,
            cell_type: CELL_TYPES.DISCIPLINE,
            label: label[0].object.value,
          };
        }),
        ...listPhases.map((p, i) => {
          let label = store.match(p.object, NAME_SPACES.rdfsNS("label"), null);
          let iterations = store.match(
            p.object,
            NAME_SPACES.jenplaneNS("iterations"),
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
          let duration = store.match(
            a.subject,
            NAME_SPACES.jenplaneNS("duration"),
            null
          );
          let effort = store.match(
            a.subject,
            NAME_SPACES.jenplaneNS("effort"),
            null
          );
          let hasDiscipline = store.match(
            a.subject,
            NAME_SPACES.jenplaneNS("hasDiscipline"),
            null
          );
          let hasPhase = store.match(
            a.subject,
            NAME_SPACES.jenplaneNS("hasPhase"),
            null
          );
          let preferredColor = store.match(
            a.subject,
            NAME_SPACES.jenplaneNS("preferredColor"),
            null
          );
          let currentDiscipline = store.match(
            a.subject,
            NAME_SPACES.jenplaneNS("currentDiscipline"),
            null
          );
          let currentPhase = store.match(
            a.subject,
            NAME_SPACES.jenplaneNS("currentPhase"),
            null
          );
          let iteration = store.match(
            a.subject,
            NAME_SPACES.jenplaneNS("iteration"),
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
            currentDiscipline:
              currentDiscipline?.[0]?.object.value ??
              hasDiscipline[0].object.value,
            hasPhase: hasPhase.map((c) => c.object.value),
            currentPhase:
              currentPhase?.[0]?.object.value ?? hasPhase[0].object.value,
            iteration: iteration?.[0]?.object.value ?? 0,
          };
        }),
      ];
      setStoreState(store);

      dispatch(setProject(rdfLayoutDATA));
      dispatch(
        setMetaData({
          disciplinesNodeId: disciplines[0].object.value,
          phasesNodeId: phases[0].object.value,
        })
      );
    };
    loadProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateStatement = (s, aNode, predicate, value) => {
    // update preferredColor
    let statement = s.match(aNode, predicate, undefined)?.[0];
    statement && s.removeStatement(statement);
    s.add(aNode, predicate, value);
  };

  const updateDisciplinesPhases = (store) => {
    // update preferredColor
    let statements = store.match(
      rdflib.sym(metaData.disciplinesNodeId),
      NAME_SPACES.rdfNS("li"),
      undefined
    );
    statements?.length &&
      statements.map((statement) => store.removeStatement(statement));
    projectData
      .filter((c) => c.cell_type === CELL_TYPES.DISCIPLINE)
      .map((c) => {
        return store.add(
          rdflib.sym(metaData.disciplinesNodeId),
          NAME_SPACES.rdfNS("li"),
          rdflib.sym(c.id)
        );
      });
  };

  const updateActivityInStore = (store, activity) => {
    let activityNode = rdflib.sym(activity.id);
    // update preferredColor
    updateStatement(
      store,
      activityNode,
      NAME_SPACES.jenplaneNS("preferredColor"),
      activity.preferredColor
    );
    // update duration
    updateStatement(
      store,
      activityNode,
      NAME_SPACES.jenplaneNS("duration"),
      activity.duration
    );
    // update effort
    updateStatement(
      store,
      activityNode,
      NAME_SPACES.jenplaneNS("effort"),
      activity.effort
    );
    // update currentDiscipline
    updateStatement(
      store,
      activityNode,
      NAME_SPACES.jenplaneNS("currentDiscipline"),
      rdflib.sym(activity.currentDiscipline)
    );
    // update currentPhase
    updateStatement(
      store,
      activityNode,
      NAME_SPACES.jenplaneNS("currentPhase"),
      rdflib.sym(activity.currentPhase)
    );
    // update iteration
    updateStatement(
      store,
      activityNode,
      NAME_SPACES.jenplaneNS("iteration"),
      activity.iteration
    );
    return store;
  };

  const saveProject = async () => {
    let store = storeState;
    projectData
      .filter((c) => c.cell_type === CELL_TYPES.ACTIVITY)
      .map((c) => {
        return updateActivityInStore(store, c);
      });
    updateDisciplinesPhases(store);
    setStoreState(store);
    console.log(store.serialize("text/turtle"));
  };

  return { store: storeState, saveProject };
}

export default useProject;
