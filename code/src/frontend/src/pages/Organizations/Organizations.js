import { Fragment, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Title from "components/Title";
import Button from "@mui/material/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { getOpenAPI } from "openapi";
import OrganizationRow from "components/Organizations/OrganizationRow";
import Alert from "@mui/material/Alert";

export default function Organizations() {
  let navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const loadOrganizations = async () => {
      getOpenAPI()
        .then((client) => {
          return client.apis.Organization["get_organizations"]();
        })
        .then((result) => {
          setRows(result.obj);
        });
    };
    loadOrganizations();
  }, [location.key]);

  return (
    <Fragment>
      <Title>Organizations</Title>
      <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/dashboard/organizations/add")}
        >
          New Organization
        </Button>
      </Box>
      {rows?.length > 0 && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <OrganizationRow key={row._id} row={row} />
            ))}
          </TableBody>
        </Table>
      )}
      {rows?.length === 0 && (
        <Alert severity="info">No organizations found</Alert>
      )}
    </Fragment>
  );
}
