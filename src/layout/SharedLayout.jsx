import { Sidebar } from "../components";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const SharedLayout = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 244px 1fr;
  background-color: var(--beige);
`;
