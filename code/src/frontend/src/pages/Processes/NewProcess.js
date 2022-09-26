import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Title from "components/Title";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getOpenAPI } from "openapi";
import { toast } from "react-toastify";
import { RDF } from "data/rdf";

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
        toast.dismiss();
        toast.success("Process created");
        navigate("/dashboard/processes");
      })
      .catch((err) => {
        toast.dismiss();
        toast.error("Error creating process");
      });
  };
  const addSampleRDFContent = () => {
    setRDFContent(RDF);
  };
  const showFile = async (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      setRDFContent(text);
    };
    reader.readAsText(e.target.files[0]);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            sx={{
              ml: 2,
            }}
            variant="contained"
            component="label"
          >
            Upload
            <input
              hidden
              accept="text/turtle"
              type="file"
              onChange={(e) => showFile(e)}
            />
          </Button>
          <TextField
            style={{ marginTop: "20px" }}
            fullWidth
            id="outlined-multiline-static"
            label="RDF Content"
            multiline
            rows={8}
            value={rdf_content}
            onChange={(e) => setRDFContent(e.target.value)}
          />
          <Button
            sx={{
              ml: 2,
            }}
            variant="outlined"
            color="primary"
            onClick={() => addSampleRDFContent()}
          >
            Sample RDF content
          </Button>
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
