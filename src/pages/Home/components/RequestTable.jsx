import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { PrimaryBtn } from "../../../styles/Button";
import { SearchBox } from "../../../styles/SearchBox";
import {
  Funnel,
  ListChecks,
  CaretRight,
  CaretLeft,
} from "@phosphor-icons/react";
import ClaimsList from "./ClaimsList";

const RequestTable = () => {
  const { filteredClaims, itemsPerPage, status } = useSelector(
    (state) => state.claims
  );
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredClaims.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredClaims.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCurrentPage(1);
  }, [status]);

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

      <div className="pagination">
        <div>
          <p className="p-500" style={{ fontSize: "14px" }}>
            Showing {itemsPerPage} out of {filteredClaims.length} people
          </p>
        </div>
        <div className="pages">
          <button
            className="caret-btns"
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          >
            <CaretLeft size={18} />
          </button>
          {Array.from({ length: totalPages }).map((item, idx) => {
            return (
              <PrimaryBtn
                className={
                  currentPage === idx + 1 ? "page-btn active-btn" : "page-btn"
                }
                $w="auto"
                $bg="var(--grey-600)"
                $color="var(--grey-900)"
                onClick={() => setCurrentPage(idx + 1)}
              >
                {idx + 1}
              </PrimaryBtn>
            );
          })}
          <button
            className="caret-btns"
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
          >
            <CaretRight size={18} />
          </button>
        </div>
      </div>
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

  .pagination {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;

    .caret-btns {
      display: grid;
      place-items: center;
      border: none;
      background: none;
      color: var(--grey-800);
    }

    .pages {
      display: flex;
      gap: 0.5rem;

      .page-btn {
        box-shadow: var(--shadow-1);
      }

      .active-btn {
        background: var(--grey-150);
        color: var(--white);
      }
    }
  }
`;
