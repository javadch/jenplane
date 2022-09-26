import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { CELL_TYPES } from "constants/projects";
//import canvas from "assets/img/canvas1.png";
import Discipline from "components/Grid/Discipline";
import Phase from "components/Grid/Phase";
import Activity from "components/Grid/Activity";
import Iteration from "components/Grid/Iteration";
import JenPlane from "components/JenPlane";
import { useEffect } from "react";
import capitalize from "capitalize";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import useProject from "components/hooks/useProject";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MemoryIcon from "@mui/icons-material/Memory";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import Box from "@mui/material/Box";

export default function Project(props) {
  const { id } = useParams();
  const projectData = useSelector((state) => state.project.data);

  // eslint-disable-next-line no-unused-vars
  const { project, store, saveProject, loadProject } = useProject({ id });

  useEffect(() => {
    loadProject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        {project && (
          <>
            <Typography variant="h3" component="div" gutterBottom>
              {project.name}
            </Typography>
            <Box m={1} display="flex">
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="flex-start"
                style={{ flexGrow: 1 }}
              >
                <Typography mr={1} variant="body1" gutterBottom>
                  <CorporateFareIcon
                    fontSize={"small"}
                    style={{
                      verticalAlign: "middle",
                      display: "inline-flex",
                    }}
                  />{" "}
                  Organization: <b>{project.organization?.name ?? "Unknown"}</b>
                </Typography>
                <Typography mr={1} variant="body1" gutterBottom>
                  <MemoryIcon
                    fontSize={"small"}
                    style={{
                      verticalAlign: "middle",
                      display: "inline-flex",
                    }}
                  />{" "}
                  Process: <b>{project.process?.name ?? "Unknown"}</b>
                </Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
                selfAlign="flex-end"
              >
                <Button variant="contained" onClick={saveProject}>
                  Save Changes
                </Button>
              </Box>
            </Box>
            {project.description && (
              <Typography mr={1} variant="body1" gutterBottom>
                Description: {project.description}
              </Typography>
            )}

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
                                phase={phase.id}
                                discipline={c.id}
                                iteration={index}
                                n={n}
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

            <br />
            <Accordion sx={{ mt: 3 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>RDF Content</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <pre> {project.rdf_content}</pre>
              </AccordionDetails>
            </Accordion>
          </>
        )}
      </Grid>
    </Grid>
  );
}
