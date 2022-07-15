import { CELL_TYPES } from "data/projects";
import { useDispatch } from "react-redux";
import { moveActivity } from "slices/projectSlice";
import { useDrop } from "react-dnd";
import styled from "@emotion/styled";

const StyledIteration = styled.td`
  > div {
    display: flex;
    flex-grow: 1;
    flex: 1;
    height: 100%;
    flex-direction: column-reverse;
  }
`;

const Iteration = (props) => {
  const dispatch = useDispatch();

  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: CELL_TYPES.ACTIVITY,
      canDrop: (item) =>
        item.data.hasDiscipline.includes(props.discipline) &&
        item.data.hasPhase.includes(props.phase),
      drop: (item) => {
        dispatch(
          moveActivity({
            ...item.data,
            currentPhase: props.phase,
            currentDiscipline: props.discipline,
            iteration: props.iteration,
          })
        );
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [props.phase, props.discipline]
  );

  return (
    <StyledIteration
      ref={drop}
      key={props.iteration}
      className={
        props.iteration + 1 !== props.n.length
          ? `iteration`
          : " iteration milestone"
      }
      style={{ position: "relative" }}
    >
      <div>
        {props.children}
        {(isOver || (!isOver && canDrop)) && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              zIndex: 1,
              opacity: 0.5,
              backgroundColor: isOver ? (canDrop ? "green" : "red") : "yellow",
            }}
          />
        )}
      </div>
    </StyledIteration>
  );
};

export default Iteration;
