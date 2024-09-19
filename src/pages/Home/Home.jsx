import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper className="page-100">
      <div className="inner-wrapper"></div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.main`
  /* display: flex; */
  /* align-items: center; */
  display: flex;
  align-items: center;

  .inner-wrapper {
    background-color: var(--white);
    height: 95%;
    width: 99%;
    border-radius: 8px;
    box-shadow: var(--shadow-2), var(--shadow-3), var(--shadow-4);
  }
`;
