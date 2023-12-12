import styled from "styled-components";

export const ListItem = styled.li`
  max-width: 274px;
  max-height: 426px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
`;

export const Title = styled.span`
  color: #121417;

  &:last-child {
    margin-left: auto;
    margin-right: 8px;
  }
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const TextWrapper = styled.div`
  font-family: "Manrope", sans-serif;
`;

export const Text = styled.span`
  font-family: "Manrope", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  position: relative;
  color: rgba(18, 20, 23, 0.5);

  &:not(&:last-child){
  padding-right: 12px;
  }

   &:not(&:last-child)&:after {
    position: absolute;
    bottom: 0;
    right: 6px;
    content: "";
    width: 1px;
    height: 16px;
    border-radius: 2px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

export const Type = styled.span`
  text-transform: capitalize;
`;
