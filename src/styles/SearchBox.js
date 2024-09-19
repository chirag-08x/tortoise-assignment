import styled from "styled-components";

export const SearchBox = styled.input`
  width: ${(props) => (props.$w ? props.$w : "286px")};
  padding-top: ${(props) => (props.$pt ? props.$pt : "6px")};
  padding-right: ${(props) => (props.$pr ? props.$pr : "8px")};
  padding-bottom: ${(props) => (props.$pb ? props.$pb : "6px")};
  padding-left: ${(props) => (props.$pl ? props.$pl : "8px")};
  font-size: ${(props) => (props.$size ? props.$size : "13px")};
  font-weight: ${(props) => (props.$weight ? props.$weight : 400)};
  border-radius: 8px;
  border: 1px solid var(--grey-700);

  ::placeholder {
    font-size: 13px;
    font-weight: 500;
    color: rgba(117, 117, 117, 1);
  }
`;
