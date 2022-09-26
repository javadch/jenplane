import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
//import canvas from "assets/img/canvas1.png";
import { useEffect, useState } from "react";
import { getOpenAPI } from "openapi";

export default function Process(props) {
  const { id } = useParams();
  const [process, setProcess] = useState(false);

  useEffect(() => {
    const loadProcess = async () => {
      const client = await getOpenAPI();
      const result = await client.apis.Process["get_processes__process_id_"]({
        process_id: id,
      });

      setProcess({ ...result.obj, id: id });
    };
    loadProcess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="h3" component="div" gutterBottom>
          {process.name}
        </Typography>
        <Typography>RDF Content:</Typography>
        <hr />
        <pre> {process.rdf_content}</pre>
      </Grid>
    </Grid>
  );
}
