import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const RequestTable = () => {
  const { filteredClaims } = useSelector((state) => state.claims);
  const [totalPages] = useState(Math.ceil(filteredClaims.length / 8));

  return <Wrapper></Wrapper>;
};

export default RequestTable;

const Wrapper = styled.div``;
