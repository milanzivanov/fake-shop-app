import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Order() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  const { cartItem, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItem.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !surname || !address || !city || !email) {
      alert("Please fill in all fields");
      return;
    }
    navigate("/");
    clearCart();

    console.log("Order submitted");
  }

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="tracking-wide text-3xl py-5 font-bold text-gray-900">
        Thank you for your order
      </h2>
      <h4 className="text-2xl pb-5">Information for delivery</h4>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col shadow-md bg-slate-100 rounded-sm p-5 mb-5"
      >
        <div className="flex justify-between">
          <div className="p-2">
            <label className="flex font-bold mr-2 mb-1" htmlFor="name">
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="name"
              className="rounded-sm shadow-sm p-2"
              type="text"
              placeholder="name"
            />
          </div>
          <div className="p-2">
            <label className="flex font-bold mr-2 mb-1" htmlFor="surname">
              Surname
            </label>
            <input
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
              id="surname"
              className="rounded-sm shadow-sm p-2"
              type="text"
              placeholder="surname"
            />
          </div>
          <div className="p-2">
            <label className="flex font-bold mr-2 mb-1" htmlFor="address">
              Address
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              id="address"
              className="rounded-sm shadow-sm p-2"
              type="text"
              placeholder="address"
            />
          </div>
          <div className="p-2">
            <label className="flex font-bold mr-2 mb-1" htmlFor="city">
              City
            </label>
            <input
              onChange={(e) => setCity(e.target.value)}
              value={city}
              id="city"
              className="rounded-sm shadow-sm p-2"
              type="text"
              placeholder="city"
            />
          </div>
          <div className="p-2">
            <label className="flex font-bold mr-2 mb-1" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              className="rounded-sm shadow-sm p-2"
              type="text"
              placeholder="email"
            />
          </div>
        </div>
        <div className="flex justify-end items-center p-2">
          <button className="text-white bg-indigo-500 rounded-sm px-3 py-2 hover:bg--600">
            Checkout <span>&#8594;</span>
          </button>
        </div>
      </form>
      <div>
        <div className="flex flex-col gap-5">
          {cartItem.map((product, id) => (
            <div
              className="flex items-center shadow-md bg-slate-100 p-5 rounded-sm gap-5"
              key={product.id}
            >
              <span>{id + 1}</span>
              <img className="w-11" src={product.image} alt={product.title} />
              <h3 className="text-2xl text-gray-900">{product.title}</h3>
              <p className="text-xl italic font-bold text-gray-900 ml-auto">
                {product.price}&#8364;
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between py-5">
        <h3 className="text-2xl font-bold text-gray-900">Total</h3>
        <span className="text-2xl italic font-bold text-gray-900">
          {totalPrice.toFixed(2)}&#8364;
        </span>
      </div>
    </div>
  );
}

export default Order;
