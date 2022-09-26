import { forwardRef } from "react";
import styled from "@emotion/styled";
const StyledContainer = styled.div`
  border: 0 #4f8d7b solid;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  font-weight: bold;
  background: #a4c7e7;
  flex: 1;
`;

const Phase = forwardRef(({ style, className, ...props }, ref) => {
  return (
    <StyledContainer style={{ ...style }} className={className} ref={ref}>
      {props.name}
    </StyledContainer>
  );
});

export default Phase;
