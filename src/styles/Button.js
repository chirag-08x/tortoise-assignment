import styled from "styled-components";

export const PrimaryBtn = styled.button`
  border: ${(props) => (props.$border ? props.$border : `none`)};
  background: ${(props) => (props.$bg ? props.$bg : `var(--grey-700)`)};
  color: ${(props) => (props.$color ? props.$color : `var(--grey-75)`)};
  padding-top: ${(props) => (props.$pt ? props.$pt : "6px")};
  padding-right: ${(props) => (props.$pr ? props.$pr : "12px")};
  padding-bottom: ${(props) => (props.$pb ? props.$pb : "6px")};
  padding-left: ${(props) => (props.$pl ? props.$pl : "12px")};
  font-size: ${(props) => (props.$size ? props.$size : "13px")};
  border-radius: 8px;
  text-transform: capitalize;
  font-weight: ${(props) => (props.$weight ? props.$weight : 600)};
  width: ${(props) => (props.$w ? props.$w : "auto")};
  box-shadow: ${(props) => (props.$bs ? props.$bs : `initial`)};
`;

export const SecondaryBtn = styled(PrimaryBtn)``;
