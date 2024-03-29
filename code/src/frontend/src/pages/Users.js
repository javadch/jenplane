import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "components/Title";
import rows from "data/users";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import PreviewIcon from "@mui/icons-material/Preview";

function preventDefault(event) {
  event.preventDefault();
}

export default function Users() {
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <Title>Users</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell align="right">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell align="right">
                <IconButton
                  color="inherit"
                  onClick={() => navigate(`/project/${row.id}`)}
                >
                  <PreviewIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more users
      </Link>
    </React.Fragment>
  );
}
