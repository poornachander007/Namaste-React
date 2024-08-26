import { useDispatch, useSelector } from "react-redux";
import CategoryItemList from "./CategoryItemList";
import { clearCart } from "../utils/cartSlice";
import EmptyCartPath from "../utils/images/emptyCart.png";

const Cart = () => {
  const { cartItems } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-7/12 m-auto">
      <div className="flex justify-center ">
        <h1 className="m-3 p-2 text-center font-bold text-4xl text-green-800">
          Cart
        </h1>
        {cartItems.length !== 0 && (
          <div className="relative">
            <button
              className="bg-slate-300 text-xs px-2 py-[3px] w-[100px] rounded-md absolute bottom-2 left-[-30] text-red-950 font-bold"
              onClick={handleClearCart}
            >
              Clear Cart❌
            </button>
          </div>
        )}
      </div>

      {cartItems.length !== 0 ? (
        <CategoryItemList itemCards={cartItems} />
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-center mt-1 text-xl font-[Monospace]">
            Cart is Empty. Add Items to Cart..!{" "}
          </h1>
          <img className="text-center w-[400px]" src={EmptyCartPath} />
        </div>
      )}
    </div>
  );
};

export default Cart;
