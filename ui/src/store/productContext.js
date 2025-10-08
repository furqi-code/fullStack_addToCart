import axios from "axios";
import { useReducer, createContext, useEffect } from "react";
import { ShowBag } from "../components/showBag";
import { HomePage } from "../components/homepage";
import { Header } from "../components/header";
import { SportsProducts } from "../components/sportsPage";
import { GeneralProducts } from "../components/generalPage";
import { ElectronicsProds } from "../components/electronicsPage";

export const ProductContext = createContext({
  productList: [],
  wishlist: [],
  showCurrentPage: () => {},
  handlePageProducts: () => {},
  addToCart: () => {},
  removefromCart: () => {},
  hideBagItems: () => {},
  increaseQnty: () => {},
  decreaseQnty: () => {},
});

function reducer(state, action) {
  switch (action.type) {
    case "getProductList":
      return {
        ...state,
        productList: action.products,
      };

    case "collectItems":
      return {
        ...state,
        wishlist: [...state.wishlist, action.selectedItem],
      };

    case "showCurrentPage":
      return {
        ...state,
        showSelectedPage: action.showPage,
      };

    case "hideBagItems":
      return {
        ...state,
        showSelectedPage: action.showHomePage,
      };

    case "removeBagItem":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.id !== action.product_id
        ),
      };

    case "increaseQnty":
      return {
        ...state,
        wishlist: state.wishlist.map((item) => {
          if (item.id === action.product_id) {
            if (item.quantity < item.stock) {
              return { ...item, quantity: item.quantity + 1 };
            } else {
              alert(
                "We are out of Stock for " +
                  `${item.name}`.toUpperCase() +
                  " item"
              );
              return item;
            }
          } else {
            return item;
          }
        }),
      };

    case "decreaseQnty":
      const updatedWishlist = state.wishlist
        .map((item) => {
          if (item.id === action.product_id) {
            if (item.quantity === 1) {
              return null;
            } else {
              return { ...item, quantity: item.quantity - 1 };
            }
          }
          return item;
        })
        .filter((item) => item !== null);

      return {
        ...state,
        wishlist: updatedWishlist,
      };

    default:
      throw new Error("Unknown action: " + action.type);
  }
}

export function ProductContextProvider({ children }) {
  const [flipkart, dispatch] = useReducer(reducer, {
    productList: [], // calling api to get productList
    wishlist: [],
    showSelectedPage: "homePage",
  });
  let content;
  console.log("wishlist Array \n", flipkart.wishlist);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1111/products")
  //     .then((response) => {
  //       dispatch({
  //         type: "getProductList",
  //         products: response.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log("Error while get request", err);
  //     });
  // }, []);

  const collectItems = (id) => {
    let selectedItem = flipkart.productList.find(
      (product) => product.id === id
    );
    let alreadyinBag = flipkart.wishlist.find(
      (items) => items.id === selectedItem.id
    );
    if (!alreadyinBag) {
      dispatch({
        type: "collectItems",
        selectedItem,
      });
    }
  };

  const showCurrentPage = (showPage) => {
    dispatch({
      type: "showCurrentPage",
      showPage,
    });
  };

  const hideBagItems = (showHomePage) => {
    dispatch({
      type: "hideBagItems",
      showHomePage,
    });
  };

  const removeBagItem = (product_id) => {
    dispatch({
      type: "removeBagItem",
      product_id,
    });
  };

  const increaseQnty = (product_id) => {
    dispatch({
      type: "increaseQnty",
      product_id,
    });
  };

  const decreaseQnty = (product_id) => {
    dispatch({
      type: "decreaseQnty",
      product_id,
    });
  };

  const handlePageProducts = (category) => {
    axios({
      method: "GET",
      url: "http://localhost:1111/products",
      params: {
        category,
      },
    })
      .then((response) => {
        dispatch({
          type: "getProductList",
          products: response.data,
        });
      })
      .catch((err) => {
        console.log(`couldnt get products of ${category} page`, err);
      });
  };

  if (flipkart.showSelectedPage === "cartItems") content = <ShowBag />;
  else if (flipkart.showSelectedPage === "sports") content = <SportsProducts />;
  else if (flipkart.showSelectedPage === "generalProducts") content = <GeneralProducts />;
  else if (flipkart.showSelectedPage === "homePage") content = <HomePage />;

  return (
    <ProductContext
      value={{
        productList: flipkart.productList,
        wishlist: flipkart.wishlist,
        handlePageProducts: handlePageProducts,
        addToCart: collectItems,
        removefromCart: removeBagItem,
        showCurrentPage: showCurrentPage,
        hideBagItems: hideBagItems,
        increaseQnty: increaseQnty,
        decreaseQnty: decreaseQnty,
      }}
    >
      <Header></Header>
      {content}
    </ProductContext>
  );
}
