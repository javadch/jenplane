import { useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { getOpenAPI } from "openapi";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmationDialogRaw from "./ConfirmationDialogRaw";
import { toast } from "react-toastify";
import PreviewIcon from "@mui/icons-material/Preview";

function ProjectRow(props) {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClickListItem = (item) => {
    setOpen(true);
  };

  const handleClose = (newValue) => {
    setOpen(false);

    if (newValue) {
      getOpenAPI()
        .then((client) => {
          return client.apis.Projects["delete_projects__project_id_"]({
            project_id: props.row._id,
          });
        })
        .then((result) => {
          toast.dismiss();
          toast.success("Project deleted");
          navigate("/dashboard/projects");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setOpen(false);
        });
    }
  };

  return (
    <TableRow>
      <TableCell>{props.row._id}</TableCell>
      <TableCell>
        <Link to={`/dashboard/project/${props.row._id}`}>{props.row.name}</Link>
      </TableCell>
      <TableCell>{props.row.organization?.name ?? "Unknown"}</TableCell>
      <TableCell>{props.row.process?.name ?? "Unknown"}</TableCell>
      <TableCell align="right">
        <IconButton
          color="inherit"
          onClick={() => handleClickListItem(props.row)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          color="inherit"
          onClick={() => navigate(`/dashboard/project/${props.row._id}`)}
        >
          <PreviewIcon />
        </IconButton>
        <ConfirmationDialogRaw
          id="delete-project-dialog"
          keepMounted
          open={open}
          onClose={handleClose}
          value={props.row}
        />
      </TableCell>
    </TableRow>
  );
}

export default ProjectRow;
