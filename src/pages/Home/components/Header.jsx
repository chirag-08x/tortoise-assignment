import styled from "styled-components";
import { NewspaperClipping } from "@phosphor-icons/react";
import { PrimaryBtn } from "../../../styles/Button";
import { useState } from "react";
import { filterBtns } from "../../../data/data";
import IphoneBanner from "../../../assets/iphone-banner.png";
import { filterByType, toggleStaus } from "../../../features/Claims/claims";
import { useDispatch } from "react-redux";

const Header = () => {
  const [selectedBtnIdx, setSelectedBtnIdx] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (idx, name) => {
    if (selectedBtnIdx === idx) {
      setSelectedBtnIdx(null);
      dispatch(toggleStaus("all"));
      dispatch(filterByType());
      return;
    }
    setSelectedBtnIdx(idx);
    dispatch(toggleStaus(name));
    dispatch(filterByType());
  };

  return (
    <Wrapper>
      <div>
        <div className="title-wrapper">
          <NewspaperClipping color="var(--green)" size={26} />
          <h3 className="title-600">Claims</h3>
        </div>
        <div className="filter-btns">
          {filterBtns.map(({ id, name }, idx) => {
            return (
              <PrimaryBtn
                className={
                  selectedBtnIdx === idx ? "btn-active" : "btn-default"
                }
                onClick={() => handleClick(idx, name)}
                key={id()}
                $pt={"8px"}
                $pb={"8px"}
              >
                {name}
              </PrimaryBtn>
            );
          })}
        </div>
      </div>
      <div className="banner">
        <div className="img-wrapper">
          <img src={IphoneBanner} alt="" />
        </div>
        <div className="requests-text">
          <p className="p-600">
            17 employees want to claim their device allowances
          </p>
          <p className="p-400">
            Review their requests at the earliest to ensure a great benefit
            claim experience
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  > div:first-child {
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .title-wrapper {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .filter-btns {
    display: flex;
    gap: 0.5rem;

    .btn-default {
      background: var(--grey-600);
      color: var(--grey-800);
    }
  }

  .banner {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 2rem;
    background-color: var(--grey-600);
    margin-top: 1rem;
    padding: 0 1.5rem;
    border-top: 1px solid rgb(0, 0, 0, 0.05);

    .p-600 {
      margin-bottom: 5px;
      color: var(--grey-150);
    }
    .p-400 {
      font-size: 14px;
      color: var(--grey-150);
    }
  }
`;
