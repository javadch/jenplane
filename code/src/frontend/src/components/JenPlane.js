import styled from "@emotion/styled";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const StyledTable = styled.table`
  border-collapse: collapse;
  tbody tr.bordered {
    border-top: 3px solid #000;
  }
  tbody tr.slightly-bordered {
    border-bottom: 1px solid #000;
  }
  tbody td {
    min-width: 80px;
  }
  tbody td.milestone {
    border-right: 3px solid #000;
  }
  tbody td.iteration {
    border-left: 1px dotted #000;
  }
`;

const JenPlane = (props) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <StyledTable>{props.children}</StyledTable>
    </DndProvider>
  );
};

export default JenPlane;
