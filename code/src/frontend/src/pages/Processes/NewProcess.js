import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Title from "components/Title";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getOpenAPI } from "openapi";
import { toast } from "react-toastify";

function NewProcess() {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [rdf_content, setRDFContent] = useState("");
  const saveProcess = () => {
    getOpenAPI()
      .then((client) => {
        return client.apis.Process["post_processes"]({
          body: {
            name: name,
            rdf_content: rdf_content,
          },
        });
      })
      .then((result) => {
        toast.success("Process created");
        navigate("/dashboard/processes");
        // Status 2xx but invalid data
        return Promise.reject({
          code: "auth/http_error/invalid_server_response",
        });
      });
  };

  return (
    <Fragment>
      <Title>New Process</Title>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2 },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            style={{ marginTop: "20px" }}
            fullWidth
            id="outlined-multiline-static"
            label="RDF Content"
            multiline
            rows={8}
            onChange={(e) => setRDFContent(e.target.value)}
          />
          <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => saveProcess()}
            >
              Save
            </Button>
          </Box>
        </div>
      </Box>
    </Fragment>
  );
}

export default NewProcess;
