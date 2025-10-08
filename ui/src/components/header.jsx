import { useContext } from "react";
import { ProductContext } from "../store/productContext";

export function Header() {
  const { handlePageProducts, showCurrentPage, wishlist } =
    useContext(ProductContext);
  let totalCartItem = 0;
  wishlist.forEach((item) => {
    totalCartItem += item.quantity;
  });
  return (
    <div
      className="p-2 mb-4 flex justify-around items-center"
      style={{ backgroundColor: "#2874F0" }}
    >
      <div>
        {/* <h2>Flipkart</h2> */}
        <img
          src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-com-logo-internet-ltd-state-of-kerala-10.png"
          alt=""
          className="h-12"
        />
      </div>
      <div className="flex justify-around items-center">
        <button
          className="myBtn px-4 py-2 rounded"
          onClick={() => {
            showCurrentPage("homePage");
          }}
        >
          Home
        </button>
        <button
          className="myBtn px-4 py-2 bg-green-200 rounded"
          onClick={() => {
            showCurrentPage("sports");
            handlePageProducts("Sports");
          }}
        >
          Sports
        </button>
        <button
          className="myBtn px-4 py-2 bg-red-200 rounded"
          onClick={() => {
            showCurrentPage("electronics");
            handlePageProducts("Electronics");
          }}
        >
          Electronics
        </button>
        <button
          className="myBtn px-4 py-2 bg-gray-200 rounded"
          onClick={() => {
            showCurrentPage("generalProducts");
            handlePageProducts("General");
          }}
        >
          General
        </button>
      </div>
      <div>
        <button className="myBtn" onClick={() => showCurrentPage("cartItems")}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdEYJWy438DWyVWOnvbw1Aydy8-VNEbQ_B592E3Pste2GYBetOTs142mx9-QOEBZ3dQc&usqp=CAU"
            alt="cart"
            className="h-12"
          />
          <p className="text-white">
            {wishlist.length === 0 ? "Cart" : totalCartItem}
          </p>
        </button>
      </div>
    </div>
  );
}
