import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Title from "components/Title";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getOpenAPI } from "openapi";
import { toast } from "react-toastify";

function NewOrganization() {
  let navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const saveOrganization = () => {
    getOpenAPI()
      .then((client) => {
        return client.apis.Organization["post_organizations"]({
          body: {
            name: name,
            description: description,
          },
        });
      })
      .then((result) => {
        toast.dismiss();
        toast.success("Organization created");
        navigate("/dashboard/organizations");
      })
      .catch((err) => {
        toast.dismiss();
        toast.error("Error creating organization");
      });
  };

  return (
    <Fragment>
      <Title>New Organization</Title>
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
            label="Description"
            multiline
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
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
              onClick={() => saveOrganization()}
            >
              Save
            </Button>
          </Box>
        </div>
      </Box>
    </Fragment>
  );
}

export default NewOrganization;
