import styled from "@emotion/styled";

const StyledTable = styled.table`
  border-collapse: collapse;
  margin-top: 2rem;
  tbody tr.bordered {
    border-top: 3px solid #000;
  }
  tbody tr.slightly-bordered {
    border-bottom: 1px solid #000;
  }
  tbody td.milestone {
    border-right: 3px solid #000;
  }
  tbody td.iteration {
    padding: 2px;
    margin: 0;
    border-left: 1px dotted #000;
    background-clip: padding-box;
  }
`;

const JenPlane = (props) => {
  return <StyledTable>{props.children}</StyledTable>;
};

export default JenPlane;
