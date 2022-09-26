import { useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { getOpenAPI } from "openapi";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmationDialogRaw from "./ConfirmationDialogRaw";
import { toast } from "react-toastify";
import PreviewIcon from "@mui/icons-material/Preview";

function ProcessRow(props) {
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
          return client.apis.Process["delete_processes__process_id_"]({
            process_id: props.row._id,
          });
        })
        .then((result) => {
          toast.dismiss();
          toast.success("Process deleted");
          navigate("/dashboard/processes");
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
      <TableCell>{props.row.name}</TableCell>
      <TableCell align="right">
        <IconButton
          color="inherit"
          onClick={() => handleClickListItem(props.row)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          color="inherit"
          onClick={() => navigate(`/dashboard/process/${props.row._id}`)}
        >
          <PreviewIcon />
        </IconButton>
        <ConfirmationDialogRaw
          id="delete-process-dialog"
          keepMounted
          open={open}
          onClose={handleClose}
          value={props.row}
        />
      </TableCell>
    </TableRow>
  );
}

export default ProcessRow;
