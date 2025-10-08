import { useContext } from "react";
import { ProductContext } from "../store/productContext";

export function Header() {
  const { handlePageProducts, showSelectedPage, wishlist } =
    useContext(ProductContext);
  let totalCartItem = 0;
  wishlist.forEach((item) => {
    totalCartItem += item.quantity;
  });
  return (
    <nav className="bg-white shadow-lg mb-7 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-slate-800">Amazon</div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-slate-800 transition-colors"
              onClick={() => {
                showSelectedPage("homePage");
              }}
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-slate-800 transition-colors"
              onClick={() => {
                showSelectedPage("sports");
                handlePageProducts("Sports");
              }}
            >
              Sports
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-slate-800 transition-colors"
              onClick={() => {
                showSelectedPage("electronics");
                handlePageProducts("Electronics");
              }}
            >
              Electronics
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-slate-800 transition-colors"
              onClick={() => {
                showSelectedPage("generalProducts");
                handlePageProducts("General");
              }}
            >
              General
            </a>
          </div>
          <div className="flex items-center space-x-4">
            {/* <button className="text-gray-700 hover:text-slate-800 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button> */}
            <button
              className="myBtn text-gray-700 hover:text-slate-800 transition-colors relative"
              onClick={() => showSelectedPage("cartItems")}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdEYJWy438DWyVWOnvbw1Aydy8-VNEbQ_B592E3Pste2GYBetOTs142mx9-QOEBZ3dQc&usqp=CAU"
                alt="cart"
                className="h-10"
              />
              <span className={`absolute -top-2 -right-2 text-gray text-xs rounded-full h-5 w-5 flex items-center justify-center ${wishlist.length && "bg-blue-200"}`}>
                {wishlist.length === 0 ? "" : totalCartItem}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
