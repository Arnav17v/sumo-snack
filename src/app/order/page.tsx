"use client";
import React, { useEffect, useRef, useState } from "react";
import { MenuList } from "./data";
import OrderCard from "./OrderCard";
import { BsPlus, BsSubtract } from "react-icons/bs";
import { FaMinus, FaPlus, FaShoppingCart } from "react-icons/fa";
import Footer from "../footer";
import Header from "../header";

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState(() => {
    // Try to get the cart from local storage
    if (typeof window === "undefined") {
      return [];
    }
    const localCart = localStorage.getItem("cart");

    // If it exists, use it. Otherwise, default to an empty array
    return localCart ? JSON.parse(localCart) : [];
  });
  const [cartVisible, setCartVisible] = useState(false);
  const cartRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    address: "",
  });

  function searchFood(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  const [selectedCategory, setSelectedCategory] = useState("All");

  function filterByCategory(category: string) {
    setSelectedCategory(category);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        cartRef.current &&
        !(cartRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setCartVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const storedCartString = localStorage.getItem("cart");
    if (storedCartString) {
      const storedCart = JSON.parse(storedCartString);
      if (storedCart) {
        setCart(storedCart);
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 500); // Update loading state once data is fetched
  }, []);

  if (loading) {
    return (
      <div>
        <Header />
        <div className="flex justify-center items-center bg-[rgb(236,225,211)] h-[80vh]">
          <img
            src="https://media.tenor.com/YSHdPP-LR1cAAAAi/star-rail-kuru.gif"
            alt=""
            width={100}
            height={100}
          />
        </div>
        <Footer />
      </div>
    ); // Display loading state
  }

  const filteredMenu = MenuList.filter((food) => {
    const matchesSearchTerm =
      food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      food.category.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedCategory === "All") {
      return matchesSearchTerm;
    } else {
      return matchesSearchTerm && food.category === selectedCategory;
    }
  });

  const addToCart = (food: any) => {
    const newCart: { [key: string]: any } = { ...cart };
    if (newCart[food.name]) {
      newCart[food.name].quantity += 1;
    } else {
      newCart[food.name] = { ...food, quantity: 1 };
    }
    setCart(newCart);
  };

  const removeFromCart = (itemName: string) => {
    const newCart: { [key: string]: any } = { ...cart };
    delete newCart[itemName];
    setCart(newCart);
  };

  const clearCart = () => {
    setCart({});
  };

  const toggleCartVisible = () => {
    setCartVisible(!cartVisible);
  };

  const getTotalPrice = () => {
    let total = 0;
    for (const item in cart) {
      const price = parseInt(cart[item].price.split(" ")[0]); // Extracting the price part and converting to integer
      total += price * cart[item].quantity;
    }
    return total;
  };

  const handleCheckout = () => {
    if (Object.keys(cart).length === 0) {
      alert("Your cart is empty. Please add items to proceed.");
    } else {
      setShowCheckoutPopup(true);
    }
  };
  const handleSubmit = (e: any) => {
    if (!userInfo.name || !userInfo.email || !userInfo.address) {
      alert("Please fill all the fields.");
      e.preventDefault();
      return;
    }
    e.preventDefault();
    clearCart();
    setShowCheckoutPopup(false);
    alert("Thank you for your order!");
  };

  const handleUserInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col bg-[rgb(236,225,211)] ">
      <Header />
      <div className="text-[#214E48] max-w-[88rem] m-auto pb-24">
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="Search"
            className="border border-slate-900 rounded-full p-2 outline-none mt-24"
            onChange={searchFood}
          />
          <select
            value={selectedCategory}
            onChange={(e) => filterByCategory(e.target.value)}
            className="ml-4 border border-slate-900 rounded-full p-2 outline-none mt-24"
          >
            <option value="All">All Categories</option>
            <option value="Japanese Appetizer">Japanese Appetizer</option>
            <option value="Japanese Main Course">Japanese Main Course</option>
            <option value="Japanese Soup">Japanese Soup</option>
            <option value="Japanese Desserts">Japanese Desserts</option>
            <option value="Japanese Beverage">Japanese Beverage</option>
          </select>
          <button
            onClick={toggleCartVisible}
            className="ml-auto rounded-full p-4 outline-none mt-24 flex items-center gap-3 relative bg-[#214E48] text-[rgb(236,225,211)] hover:shadow-xl"
          >
            <FaShoppingCart />
            {cart && Object.keys(cart).length > 0 && (
              <span className="absolute top-0 right-0 h-5 w-5 bg-red-600 border-black border text-white rounded-full flex items-center justify-center text-xs">
                {Object.keys(cart).length}
              </span>
            )}
          </button>
        </div>
        <div className=" gap-5 flex flex-wrap mt-12 justify-center">
          {filteredMenu.map((food, index) => (
            <div
              className="flex flex-col backdrop-blur-sm shadow-xl hover:shadow-[rgb(210,112,74)] duration-700 transition-all rounded-xl w-[300px]"
              key={index}
            >
              <OrderCard
                name={food.name}
                description={food.category}
                image={food.image}
                price={food.price}
              />
              <div className="flex justify-center">
                <button
                  className="flex absolute justify-center items-center gap-2 w-1/2 bottom-2 mt
                            -4 h-8 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-[rgb(210,112,74)]  hover:shadow-xl p-2"
                  onClick={() => addToCart(food)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
          {filteredMenu.length === 0 && (
            <div className="text-center col-span-5 mt-5 text-2xl m-5 backdrop-blur-sm">
              We dont have that yet😔
            </div>
          )}
        </div>
        {cartVisible && (
          <div
            ref={cartRef}
            className="bg-white fixed top-0 right-10 w-1/4 p-4 border border-gray-200 shadow-lg rounded-lg mt-24"
          >
            <h2 className="text-lg font-semibold mb-2">Cart</h2>
            <ul className="divide-y divide-gray-200">
              {cart &&
                Object.keys(cart).map((itemName, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center py-2"
                  >
                    <div>
                      <span>{cart[itemName].name} - </span>
                      <span>{cart[itemName].quantity} </span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex gap-3">
                        <button
                          onClick={() => addToCart(cart[itemName])}
                          className="text-gray-500 hover:text-green-600 focus:outline-none text-2xl"
                        >
                          <FaPlus />
                        </button>
                        <button
                          onClick={() => {
                            if (cart[itemName].quantity === 1) {
                              removeFromCart(itemName);
                            } else {
                              const newCart = { ...cart };
                              newCart[itemName].quantity -= 1;
                              setCart(newCart);
                            }
                          }}
                          className="text-gray-500 hover:text-red-600 focus:outline-none text-2xl"
                        >
                          <FaMinus />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <div className="mt-4">
              <strong>Total:</strong> {getTotalPrice()} rs
            </div>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white py-2 px-4 mt-4 rounded hover:bg-red-600 focus:outline-none"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout}
              className="bg-green-500 text-white py-2 px-4 mt-4 rounded hover:bg-green-600 focus:outline-none"
            >
              Checkout
            </button>
          </div>
        )}
        {showCheckoutPopup && (
          <div className="w-[100%] h-[100vh] fixed top-0 left-0 bg-[rgba(0,0,0,0.43)] z-40 flex justify-center items-center">
            <div className=" bg-white p-8 border border-gray-200 shadow-lg rounded-lg relative">
              <h2 className="text-xl font-semibold mb-4">Checkout</h2>
              <form>
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleUserInfoChange}
                  placeholder="Name"
                  className="block border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
                />
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleUserInfoChange}
                  placeholder="Email"
                  className="block border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
                />
                <textarea
                  name="address"
                  value={userInfo.address}
                  onChange={() => {
                    handleUserInfoChange;
                  }}
                  placeholder="Address"
                  className="block border border-gray-300 rounded-md px-4 py-2 mb-4 w-full h-24 resize-none"
                />
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none"
                >
                  Confirm Order
                </button>
                <div
                  onClick={() => {
                    setShowCheckoutPopup(false);
                  }}
                  className="absolute text-2xl cursor-pointer  top-7 text-black right-7"
                >
                  ❌
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
