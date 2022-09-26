import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Tippy from "@tippyjs/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CELL_TYPES } from "constants/projects";
import { useDrag } from "react-dnd";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDuration,
  updateEffort,
  updatePreferredColor,
  getBiggestEffort,
  getLongestDuration,
} from "slices/projectSlice";
import { BlockPicker } from "react-color";

const BoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #d07f00",
  boxShadow: 24,
  p: 4,
};

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0;
`;

const StyledContainer = styled.div`
  border: 2px #d07f00 solid;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  //background: #ef9b1c;
  display: block;
  align-items: center;
  justify-content: center;
`;

const MAX_HEIGHT = 70;
const Activity = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [effort, setEffort] = useState(props.data?.effort);
  const [duration, setDuration] = useState(props.data?.duration);
  const [preferredColor, setPreferredColor] = useState(
    props.data?.preferredColor
  );
  const biggestEffort = useSelector((state) =>
    getBiggestEffort(state.project.data)
  );
  const longestDuration = useSelector((state) =>
    getLongestDuration(state.project.data)
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: CELL_TYPES.ACTIVITY,
    item: { data: props.data },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleClose = () => setOpen(false);

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
    dispatch(updateDuration({ value: event.target.value, id: props.data.id }));
  };

  useEffect(() => {
    setEffort(props.data?.effort);
    setDuration(props.data?.duration);
    setPreferredColor(props.data?.preferredColor);
  }, [props.data?.duration, props.data?.effort, props.data?.preferredColor]);

  const handleEffortChange = (event) => {
    setEffort(event.target.value);
    dispatch(updateEffort({ value: event.target.value, id: props.data.id }));
  };

  const handlePreferredColorChange = (color, event) => {
    setEffort(color.hex);
    dispatch(updatePreferredColor({ value: color.hex, id: props.data.id }));
  };

  return (
    <StyledWrapper
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
      }}
    >
      <Tippy content={props.name}>
        <span>
          <StyledContainer
            style={{
              backgroundColor: props.data?.preferredColor,
              height:
                (((props.data?.effort * 100) / biggestEffort) * MAX_HEIGHT) /
                  100 +
                "px",
              width: (props.data?.duration * 100) / longestDuration + "px",
            }}
            onClick={handleOpen}
          ></StyledContainer>
        </span>
      </Tippy>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={BoxStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {props.name}
          </Typography>
          <div id="modal-modal-description" sx={{ mt: 3 }}>
            Details about the activity
            <br />
            <br />
            <TextField
              size="small"
              value={duration}
              onChange={handleDurationChange}
              variant="outlined"
              type={"number"}
              label="Duration"
            />
            <br />
            <br />
            <TextField
              size="small"
              value={effort}
              onChange={handleEffortChange}
              variant="outlined"
              type={"number"}
              label="Effort"
            />
            <br />
            <br />
            Preferred color :{" "}
            <BlockPicker
              value={preferredColor}
              color={preferredColor}
              onChange={handlePreferredColorChange}
              triangle={"hide"}
            />
            <br />
            Current Discipline : {props.data?.currentDiscipline}
            <br />
            Current Phase : {props.data?.currentPhase}
            <br />
            Iteration number : {props.data?.iteration}
          </div>
        </Box>
      </Modal>
    </StyledWrapper>
  );
};

export default Activity;
