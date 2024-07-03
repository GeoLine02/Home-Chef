import { useSelector } from "react-redux";
import { text } from "../../helpers/functions";
import { calculateItemTotalCost } from "../../helpers/totalCartCost";
import { RootState } from "../../store/state/rootReducers";
import { http } from "../../helpers/http";

const ContinueCheckoutBtn = () => {
  const userID = useSelector((state: RootState) => state.auth.authUserVkInfo);
  const cartState = useSelector((state: RootState) => state.cart.cart);

  const createOrder = async () => {
    const cart = cartState.map((el: any) => ({
      id: el.product.id,
      quantity: el.quantity,
    }));

    const apiCallOptions = {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        orderProducts: cart,
        userAddressID: 2,
        tokenizeCard: true,
        deliveryOptions: {
          matter: "meals",
          points: [
            {
              address: "Москва, ул. Покровка, 11",
              contact_person: { phone: "79030000001" },
            },
            {
              address: "Москва, ул. Солянка, 4",
              contact_person: { phone: "79030000001" },
            },
          ],
        },
      }),
    };
    try {
      const resp = await http(
        `/payments/gateway/${userID?.id}`,
        apiCallOptions
      );
      // const url = "http://localhost:4000/orders?userID=5&offset=1";
      if (resp.ok) {
        const data = await resp.json();
        window.open(data.paymentUrl, "_self");
        console.log(data, "data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCreateOrder = () => {
    if (userID) {
      createOrder();
    }
  };

  return (
    <button
      onClick={handleCreateOrder}
      className="px-6 h-12 my-4 cursor-pointer bg-orange-400 border border-transparent rounded-full w-full font-medium text-base"
    >
      {text("CHECKOUT_BTN")} {calculateItemTotalCost(cartState)}
    </button>
  );
};

export default ContinueCheckoutBtn;
