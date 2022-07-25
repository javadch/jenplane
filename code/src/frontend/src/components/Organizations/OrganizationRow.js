import { useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { getOpenAPI } from "openapi";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmationDialogRaw from "./ConfirmationDialogRaw";
import { toast } from "react-toastify";

function OrganizationRow(props) {
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
          return client.apis.Organization[
            "delete_organizations__organization_id_"
          ]({
            organization_id: props.row._id,
          });
        })
        .then((result) => {
          toast.dismiss();
          toast.success("Organization deleted");
          navigate("/dashboard/organizations");
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
      <TableCell>{props.row.description}</TableCell>
      <TableCell align="right">
        <IconButton
          color="inherit"
          onClick={() => handleClickListItem(props.row)}
        >
          <DeleteIcon />
        </IconButton>
        <ConfirmationDialogRaw
          id="delete-organization-dialog"
          keepMounted
          open={open}
          onClose={handleClose}
          value={props.row}
        />
      </TableCell>
    </TableRow>
  );
}

export default OrganizationRow;
