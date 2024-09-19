import styled from "styled-components";
import { Header, RequestTable } from "./components";

const Home = () => {
  return (
    <Wrapper className="page-100">
      <div className="inner-wrapper">
        <Header />
        <RequestTable />
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  padding: 2rem 0;

  .inner-wrapper {
    background-color: var(--white);
    /* height: 95%; */
    width: 99%;
    border-radius: 16px;
    box-shadow: var(--shadow-2), var(--shadow-3), var(--shadow-4);
    padding: 1.5rem 2rem;
  }
`;
