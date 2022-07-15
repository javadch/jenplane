import { forwardRef } from "react";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  border: 2px #4f8d7b solid;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  background: #dbe5dc;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Discipline = forwardRef(({ style, className, ...props }, ref) => {
  return (
    <StyledContainer style={{ ...style }} className={className} ref={ref}>
      {props.name}
    </StyledContainer>
  );
});

export default Discipline;
