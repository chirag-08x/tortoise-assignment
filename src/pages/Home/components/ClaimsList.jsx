import styled from "styled-components";
import { formatPrice } from "../../../utils/formatPrice";
import { CaretRight, CheckCircle, Clock, XCircle } from "@phosphor-icons/react";
import { getRandomUser } from "../../../services/user";
import { useEffect, useState } from "react";
import { Select, Option } from "../../../styles/DropDown";

const ClaimsList = ({ items }) => {
  const [avatar, setAvatar] = useState([]);

  const fetchAvatar = async () => {
    const imageUrls = await getRandomUser(items?.length);
    setAvatar(imageUrls);
  };

  useEffect(() => {
    if (items && items.length > 0) {
      fetchAvatar(items?.length);
    }
  }, [items]);
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th className="p-600">Employee</th>
            <th className="p-600">Device</th>
            <th className="p-600">Requested on</th>
            <th className="p-600">Amount payable</th>
            <th className="p-600"></th>
            <th className="p-600"></th>
          </tr>
        </thead>

        <tbody>
          {items.map((data, idx) => {
            const {
              id,
              name,
              designation,
              product: {
                model,
                color,
                storage,
                img,
                addOns,
                requestedTime,
                requestedDate,
                amount,
                tenure,
              },
              status,
              availableLimit,
            } = data;

            return (
              <tr key={id()}>
                <td className="user-info">
                  <div className="cell-wrapper">
                    <img src={avatar[idx]?.picture?.medium} alt="Loading..." />
                    <div>
                      <p className="p-600">{name}</p>
                      <p className="p-500">{designation}</p>
                    </div>
                  </div>
                </td>

                <td className="product-info">
                  <div className="cell-wrapper">
                    <div className="product-img">
                      <img src={img} alt="product" />
                    </div>
                    <div>
                      <p className="p-600">{model}</p>
                      <p className="p-500">
                        {addOns ? `+ ${addOns} add-ons` : "No add-ons"}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="time">
                  <div className="cell-wrapper">
                    <p className="p-600">{requestedTime?.fromNow()}</p>
                    <p className="p-500">
                      {requestedDate.format("Do MMMM YYYY")}
                    </p>
                  </div>
                </td>

                <td className="price">
                  <div className="cell-wrapper">
                    <p className="p-600">
                      {formatPrice(Math.ceil(amount / tenure))} / month
                    </p>
                    <p className="p-500">For {tenure} months</p>
                  </div>
                </td>

                <td>
                  <div className="cell-wrapper">
                    <Select className="p-600">
                      <Option value="pending">
                        <CheckCircle size={32} /> Approve
                      </Option>
                      <Option value="pending">
                        <Clock size={32} /> Pending
                      </Option>
                      <Option value="pending">
                        <XCircle size={32} /> Rejected
                      </Option>
                    </Select>
                  </div>
                </td>

                <td className="icon">
                  <div className="cell-wrapper">
                    <CaretRight size={20} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default ClaimsList;

const Wrapper = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: var(--shadow-1);

    thead {
      & {
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
      }
      th {
        text-align: left;
        padding: 14px 12px;
        font-size: 14px;

        &:first-child {
          border-top-left-radius: 8px;
        }
        &:last-child {
          border-top-right-radius: 8px;
        }
      }

      border: 1.15px solid var(--grey-300);
      background: var(--grey-300);
    }

    tbody {
      border: 1px solid var(--grey-300);

      td {
        padding: 0.7rem 2rem;
        border-bottom: 1px solid var(--grey-300);
      }

      .p-600 {
        font-size: 14px;
        line-height: 1.5;
        color: var(--grey-200);
      }
      .p-500 {
        font-size: 12px;
        opacity: 0.6;
      }

      .user-info,
      .product-info {
        .cell-wrapper {
          display: flex;
          align-items: center;
          gap: 0.875rem;

          .product-img {
            background: var(--grey-300);
            padding: 0.5rem 0.6rem;
            border-radius: 8px;
          }
        }
      }

      .user-info {
        img {
          width: 36px;
          border-radius: 50%;
        }
      }

      .product-info {
        img {
          width: 24px;
        }
      }
    }
  }
`;
