import styled from "styled-components";
import Logo from "../../assets/logo.svg";
import { sidebarCards, sidebarLinks } from "../../data/data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="logo-wrapper">
        <img src={Logo} alt="Logo" />
        <h4 className="p-300">tortoise</h4>
      </div>
      <hr />

      <div className="sidebar-cards">
        {sidebarCards.map(({ id, icon, name, value }, idx) => {
          return (
            <Link
              to={"#"}
              key={id()}
              className={idx === 0 ? `sidebar-card active` : `sidebar-card`}
            >
              <div>
                {icon}
                <p className="p-600">{name}</p>
              </div>
              <div>
                <p className="p-400">{value}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <hr />

      <div className="sidebar-links">
        {sidebarLinks.map(({ id, icon, name }) => {
          return (
            <Link to={"#"} className="sidebar-link" key={id()}>
              {icon}
              <p className="p-600">{name}</p>
            </Link>
          );
        })}
      </div>

      <div className="avatar">
        <div>VK</div>
        <p className="p-600">Vardhan Koshal</p>
      </div>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.aside`
  height: 100%;
  background: var(--beige);
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;

  .logo-wrapper {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem 0.875rem 1rem;

    img {
      width: 28px;
    }
  }

  hr {
    /* margin: 0 auto; */
  }

  .p-600 {
    font-size: 14px;
  }

  .sidebar-cards {
    margin: 1rem 0;
    display: grid;
    gap: 0.5rem;
    .sidebar-card {
      display: flex;
      background: var(--grey-100);
      justify-content: space-between;
      border-radius: 8px;
      padding: 1.5rem 1rem;
      text-decoration: none;
      color: var(--grey-50);
      .p-600 {
        margin-top: 0.5rem;
      }

      .p-400 {
        font-size: 24px;
      }
    }
    .sidebar-card.active {
      background: var(--green);
      * {
        color: white;
      }
    }
  }

  .sidebar-links {
    margin-top: 1rem;
    display: grid;
    gap: 1rem;

    .sidebar-link {
      display: flex;
      text-decoration: none;
      gap: 1rem;
      align-items: center;
      color: var(--grey-50);
    }
  }

  .avatar {
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    div {
      background-color: var(--green);
      color: var(--white);
      border-radius: 8px;
      padding: 7px;
      font-size: 13px;
    }
  }
`;
