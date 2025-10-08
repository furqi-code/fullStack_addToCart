import { Card } from "./productCard";
import { useContext } from "react";
import {ProductContext} from "../store/productContext"

export function SportsProducts() {
  const { productList, showSelectedPage } = useContext(ProductContext);
  return (
    <>
      <div className="flex justify-center items-center mb-4" style={{ width: "355px" }}>
        <button className="myBtn" onClick={() => showSelectedPage("homePage")}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/9312/9312240.png"
            alt=""
            className="h-12"
          />
        </button>
      </div>
      <div className="flex justify-center align-center">
        <div class="grid grid-cols-4 gap-4">
          {productList.map((products) => (
            <div className="p-4">
              <Card {...products} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
