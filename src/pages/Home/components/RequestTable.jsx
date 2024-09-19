import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PrimaryBtn } from "../../../styles/Button";
import { SearchBox } from "../../../styles/SearchBox";
import { Funnel, ListChecks } from "@phosphor-icons/react";
import ClaimsList from "./ClaimsList";

const RequestTable = () => {
  const { filteredClaims, itemsPerPage } = useSelector((state) => state.claims);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredClaims.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredClaims.slice(indexOfFirstItem, indexOfLastItem);

  console.log("fi", currentItems);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Wrapper>
      <div className="options">
        <div>
          <SearchBox placeholder={`Search by name`} />
        </div>
        <div className="filter-btns">
          <PrimaryBtn
            $bg="var(--white)"
            $color="var(--grey-200)"
            $border="1px solid var(--grey-700)"
            $bs="0px 1px 0px 0px var(--grey-300)"
          >
            <Funnel size={16} weight="fill" /> Filters
          </PrimaryBtn>
          <PrimaryBtn
            $bg="var(--white)"
            $color="var(--grey-200)"
            $border="1px solid var(--grey-700)"
            $bs="0px 1px 0px 0px var(--grey-300)"
          >
            <ListChecks size={16} />
            Bulk Action
          </PrimaryBtn>
        </div>
      </div>

      <ClaimsList items={currentItems} />
    </Wrapper>
  );
};

export default RequestTable;

const Wrapper = styled.div`
  .options {
    padding: 1.5rem 0 1rem 0;
    display: flex;
    justify-content: space-between;

    .filter-btns {
      display: flex;
      gap: 1rem;

      button {
        display: flex;
        align-items: center;
        gap: 3px;
      }
    }
  }
`;
