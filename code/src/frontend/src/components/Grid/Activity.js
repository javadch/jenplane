import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Tippy from "@tippyjs/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { CELL_TYPES } from "data/projects";
import { useDrag } from "react-dnd";
import Slider from "@mui/material/Slider";
import { useDispatch } from "react-redux";
import { updateDuration, updateEffort } from "slices/projectSlice";

const BoxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #d07f00",
  boxShadow: 24,
  p: 4,
};

const StyledWrapper = styled.div`
  height: 60px;
  position: relative;
  display: block;
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

const Activity = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [effort, setEffort] = useState(props.data?.effort);
  const [duration, setDuration] = useState(props.data?.duration);
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

  const handleDurationChange = (event, newValue) => {
    setDuration(newValue);
    dispatch(updateDuration({ value: newValue, id: props.data.id }));
  };

  useEffect(() => {
    setEffort(props.data?.effort);
    setDuration(props.data?.duration);
  }, [props.data?.duration, props.data?.effort]);

  const handleEffortChange = (event, newValue) => {
    setEffort(newValue);
    dispatch(updateEffort({ value: newValue, id: props.data.id }));
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
              height: (props.data?.effort * 100) / 8 + "%",
              width: (props.data?.duration * 100) / 18 + "%",
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
          <Typography id="modal-modal-description" sx={{ mt: 3 }}>
            Details about the activity
            <br />
            <br />
            Duration :{" "}
            <Slider
              size="small"
              defaultValue={props.data?.duration}
              aria-label="Small"
              valueLabelDisplay="auto"
              value={duration}
              onChange={handleDurationChange}
            />
            <br />
            Effort:
            <Slider
              size="small"
              defaultValue={props.data?.effort}
              aria-label="Small"
              valueLabelDisplay="auto"
              value={effort}
              onChange={handleEffortChange}
            />
            <br />
            Preferred color : {props.data?.preferredColor}
            <br />
            Current Discipline : {props.data?.currentDiscipline}
            <br />
            Current Phase : {props.data?.currentPhase}
            <br />
            Iteration number : {props.data?.iteration}
          </Typography>
        </Box>
      </Modal>
    </StyledWrapper>
  );
};

export default Activity;
