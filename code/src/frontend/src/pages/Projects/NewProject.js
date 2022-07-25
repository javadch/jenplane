import { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Title from "components/Title";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getOpenAPI } from "openapi";
import { toast } from "react-toastify";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

function NewProject() {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [organization, setOrganization] = useState("");
  const [process, setProcess] = useState("");
  const [organizations, setOrganizations] = useState([]);
  const [processes, setProcesses] = useState([]);

  const saveProject = () => {
    getOpenAPI()
      .then((client) => {
        return client.apis.Projects["post_projects"]({
          body: {
            name: name,
            description: description,
            organization: organization,
            process: process,
          },
        });
      })
      .then((result) => {
        toast.dismiss();
        toast.success("Project created");
        navigate("/dashboard/projects");
        // Status 2xx but invalid data
        return Promise.reject({
          code: "auth/http_error/invalid_server_response",
        });
      })
      .catch((err) => {
        toast.dismiss();
        toast.error("Error creating project");
      });
  };

  useEffect(() => {
    const loadOrganizations = async () => {
      getOpenAPI()
        .then((client) => {
          return client.apis.Organization["get_organizations"]();
        })
        .then((result) => {
          setOrganizations(result.obj);
        });
    };
    const loadProcesses = async () => {
      getOpenAPI()
        .then((client) => {
          return client.apis.Process["get_processes"]();
        })
        .then((result) => {
          setProcesses(result.obj);
        });
    };
    loadOrganizations();
    loadProcesses();
  }, []);

  return (
    <Fragment>
      <Title>New Project</Title>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 0 },
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
            label="Description"
            multiline
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
          />
          <FormControl fullWidth style={{ marginTop: "20px" }}>
            <InputLabel id="demo-simple-select-label">Organization*</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={organization}
              label="Organization"
              onChange={(event) => setOrganization(event.target.value)}
            >
              {organizations.map((org) => (
                <MenuItem key={org._id} value={org._id}>
                  {org.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth style={{ marginTop: "20px" }}>
            <InputLabel id="simple-select-label">Process*</InputLabel>
            <Select
              labelId="simple-select-label"
              id="simple-select"
              value={process}
              label="Process"
              onChange={(event) => setProcess(event.target.value)}
            >
              {processes.map((proc) => (
                <MenuItem key={proc._id} value={proc._id}>
                  {proc.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => saveProject()}
            >
              Save
            </Button>
          </Box>
        </div>
      </Box>
    </Fragment>
  );
}

export default NewProject;
