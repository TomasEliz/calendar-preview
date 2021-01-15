import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const BasketModal = ({ basketModal, hideBasketModal }) => {
  const [orders, setOrders] = useState({
    natureSk: 0,
    citySk: 0,
    natureCz: 0,
    cityCz: 0,
  });
  const addOrder = (e) => {
    setOrders({ ...orders, [e.target.name]: orders[e.target.name] + 1 });
  };
  const subtrOrder = (e) => {
    orders[e.target.name] > 0 &&
      setOrders({ ...orders, [e.target.name]: orders[e.target.name] - 1 });
  };
  return (
    <aside className={basketModal ? "basket-modal" : "hide-basket-modal"}>
      <ul className="basket-list">
        <ImCross className="close-cross" onClick={() => hideBasketModal()} />
        <li>
          <p>Nature SK</p>
          <button name="natureSk" onClick={(e) => subtrOrder(e)}>
            {" "}
            -{" "}
          </button>
          <p>{orders.natureSk}</p>
          <button name="natureSk" onClick={(e) => addOrder(e)}>
            {" "}
            +{" "}
          </button>
        </li>
        <li>
          <p>City SK</p>
          <button name="citySk" onClick={(e) => subtrOrder(e)}>
            {" "}
            -{" "}
          </button>
          <p>{orders.citySk}</p>
          <button name="citySk" onClick={(e) => addOrder(e)}>
            {" "}
            +{" "}
          </button>
        </li>
        <li>
          <p>Nature CZ</p>
          <button name="natureCz" onClick={(e) => subtrOrder(e)}>
            {" "}
            -{" "}
          </button>
          <p>{orders.natureCz}</p>
          <button name="natureCz" onClick={(e) => addOrder(e)}>
            {" "}
            +{" "}
          </button>
        </li>
        <li>
          <p>City CZ</p>
          <button name="cityCz" onClick={(e) => subtrOrder(e)}>
            {" "}
            -{" "}
          </button>
          <p>{orders.cityCz}</p>
          <button name="cityCz" onClick={(e) => addOrder(e)}>
            {" "}
            +{" "}
          </button>
        </li>
        <li>
          <button>Order</button>
        </li>
      </ul>
    </aside>
  );
};

export default BasketModal;
