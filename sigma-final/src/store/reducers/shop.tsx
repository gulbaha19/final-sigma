import { ADD_TO_BASKET, SET_PRODUCTS, DECREASE_PRODUCT } from "../actions/shopActions";

const initState = {
  products: [] as any,
  basket: JSON.parse(localStorage.getItem("basket") || "[]"),
  loading: true as boolean,
};
export function shop(state = initState, action: { type: any; payload: boolean | any }) {
  const newState = { ...state };

  switch (action.type) {
    case SET_PRODUCTS:
      newState.products = action.payload;
      break;

    case ADD_TO_BASKET:
      const index = newState.basket.findIndex(
        (i: { product: { _id: any } }) => i.product?._id === action.payload?._id,
      );
      if (index === -1) {
        newState.basket = [...newState.basket, { product: action.payload, count: 1 }];
      } else {
        newState.basket[index].count += 1;
        newState.basket = [...newState.basket];
      }
      break;
    case "basketProduct/remove":
      newState.basket = state.basket.filter(({ product }: any) => {
        return product._id !== action.payload;
      });
      break;
    case DECREASE_PRODUCT:
      const ind = newState.basket.findIndex(
        (i: { product: { _id: any } }) => i.product._id === action.payload.product._id,
      );

      if (newState.basket[ind].count == 1) {
        const filterbasket = (_: any, index: any) => {
          return index !== ind;
        };

        newState.basket = [...newState.basket.filter(filterbasket)];
      } else {
        newState.basket[ind].count -= 1;
        newState.basket = [...newState.basket];
      }
      break;

    case "basketProduct/clear":
      newState.basket = [];
      localStorage.removeItem("basket");
      break;
    case "isLoaded":
      newState.loading = action.payload as boolean;
      break;
    default:
      return state;
  }
  localStorage.setItem("basket", JSON.stringify(newState.basket));
  return newState;
}
