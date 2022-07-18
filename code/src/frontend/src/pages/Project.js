import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import rows, { CELL_TYPES } from "data/projects";
//import canvas from "assets/img/canvas1.png";
import Discipline from "components/Grid/Discipline";
import Phase from "components/Grid/Phase";
import Activity from "components/Grid/Activity";
import Iteration from "components/Grid/Iteration";
import JenPlane from "components/JenPlane";
import { useEffect } from "react";
import capitalize from "capitalize";
import { RDF } from "data/rdf";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import * as rdflib from "rdflib";
import useProject from "components/hooks/useProject";
import { sortedIndex } from "lodash";

export default function Project(props) {
  const { id } = useParams();
  const project = rows.find((c) => c.id.toString() === id);
  const projectData = useSelector((state) => state.project.data);

  // eslint-disable-next-line no-unused-vars
  const { store, saveProject } = useProject({ rdfContent: RDF, id });

  useEffect(() => {
    document.title = `${project.name}`;
  }, [project.name]);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={9}>
        <Typography variant="h3" component="div" gutterBottom>
          {project.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {project.description}
        </Typography>
        <JenPlane>
          <tbody>
            {projectData
              ?.filter((l) => l.cell_type === CELL_TYPES.DISCIPLINE)
              .map((c) => {
                return (
                  <tr key={c.id} className="slightly-bordered">
                    <td className="milestone">
                      <Discipline name={capitalize(c.label)} />
                    </td>
                    {projectData
                      .filter((l) => l.cell_type === CELL_TYPES.PHASE)
                      .map((phase) => {
                        let n = new Array(phase.iterations).fill(undefined);
                        return n.map((i, index) => (
                          <Iteration
                            key={index}
                            n={n}
                            index={index}
                            phase={phase.id}
                            discipline={c.id}
                            iteration={index}
                          >
                            {projectData
                              .filter(
                                (l) =>
                                  l.cell_type === CELL_TYPES.ACTIVITY &&
                                  l.currentPhase === phase.id &&
                                  l.currentDiscipline === c.id &&
                                  index === parseInt(l.iteration)
                              )
                              .map((a) => (
                                <Activity
                                  key={a.id}
                                  name={capitalize(a.label)}
                                  data={a}
                                />
                              ))}
                          </Iteration>
                        ));
                      })}
                  </tr>
                );
              })}
            <tr className="bordered">
              <td></td>
              {projectData
                ?.filter((l) => l.cell_type === CELL_TYPES.PHASE)
                .map((phase) => {
                  return (
                    <td key={phase.id} colSpan={phase.iterations}>
                      <Phase name={capitalize(phase.label)} />
                    </td>
                  );
                })}
            </tr>
          </tbody>
        </JenPlane>
        <Button sx={{ mt: 3 }} variant="contained" onClick={saveProject}>
          Generate RDF
        </Button>
      </Grid>
    </Grid>
  );
}
