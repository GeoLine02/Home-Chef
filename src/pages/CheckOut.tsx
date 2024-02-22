import RestaurantPhoto from "../assets/restaurantPhoto.png";
import DeliveryConditions from "../components/blocks/DeliveryConditions/DeliveryConditions";
import OrderDetails from "../components/blocks/OrderDetails/OrderDetails";
import PaymentMethod from "../components/blocks/PaymentMethod/PaymentMethod";
import { RestaurantResultType } from "../store/reducers/restaurantReducer";

const CheckOut = ({ id, name }: RestaurantResultType) => {
   return (
      <div className="grid md:grid-cols-2 gap-4 container mx-auto">
         {/* Checkout Options */}

         <div className="flex-3 px-4 py-4">
            {/* Checkout options Header */}
            <div className="flex gap-3 items-center my-6">
               <img
                  src={RestaurantPhoto}
                  alt="restaurant"
                  className="w-16 h-16 rounded-full bg-neutral-500"
               />
               <h1 className="font-semibold size-7 capitalize w-full">{name}</h1>
            </div>
            {/* Checkout options Header End */}

            {/* Delivery Conditions Section Component */}
            <DeliveryConditions />
            {/* Payment Methods */}
            <PaymentMethod />
            {/* Order Details */}
            <OrderDetails />
         </div>

         {/* Checkout Details */}
         <div className="flex-1 px-4 py-4">
            <div className="flex w-full my-7">
               <button className="w-full items-center justify-center bg-black hover:bg-black/75 text-white rounded-full py-4">
                  Checkout
               </button>
            </div>
            <div className="bg-[#F7F7F7] rounded-[32px] w-full mb-6">
               <div className="grid p-6">
                  <h1 className="text-bold font-normal md:text-semibold md:font-semibold text-xl">
                     Total Price
                  </h1>
               </div>
               <div className="grid grid-cols-2 px-6 py-2">
                  <div className="flex gap-3 items-center text-neutral-900">
                     <p>Products on order</p>
                  </div>
                  <p className="justify-self-end text-neutral-500">0$</p>
               </div>
               <div className="grid grid-cols-2 px-6 py-2">
                  <div className="flex gap-3 items-center text-neutral-900">
                     <p>Delivery</p>
                  </div>
                  <p className="justify-self-end text-neutral-500">0$</p>
               </div>
               <hr />
               <div className="grid grid-cols-2 px-6 py-2">
                  <div className="flex gap-3 items-center text-neutral-900">
                     <p>Total</p>
                  </div>
                  <p className="justify-self-end text-neutral-500">98$</p>
               </div>
               <div className="p-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam iure nam itaque
                  commodi atque sequi corrupti numquam inventore, voluptates error suscipit quo,
                  eveniet tempore, illum illo expedita temporibus recusandae sint veniam. Dolore,
                  nemo maxime hic omnis quibusdam eius fugit recusandae.
               </div>
            </div>
         </div>
      </div>
   );
};

export default CheckOut;
