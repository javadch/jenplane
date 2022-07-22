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
import ProcessRow from "components/Processes/ProcessRow";

export default function Processes() {
  let navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const loadProcesses = async () => {
      getOpenAPI()
        .then((client) => {
          return client.apis.Process["get_processes"]();
        })
        .then((result) => {
          setRows(result.obj);
        });
    };
    loadProcesses();
  }, [location.key]);

  return (
    <Fragment>
      <Title>Processes</Title>
      <Box m={1} display="flex" justifyContent="flex-end" alignItems="flex-end">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/dashboard/processes/add")}
        >
          New Process
        </Button>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <ProcessRow key={row._id} row={row} />
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
}
