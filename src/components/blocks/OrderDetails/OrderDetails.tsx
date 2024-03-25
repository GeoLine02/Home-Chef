import { useState } from "react";

const OrderDetails = () => {
   const [quantity, setQuantity] = useState(0);
   const handleClickPlus = () => {
      // Counter state is incremented
      setQuantity(quantity + 1);
   };
   const handleClickMinus = () => {
      // Counter state is incremented
      setQuantity(quantity - 1);
   };
   return (
      <div className="bg-[#F7F7F7] rounded-[32px] w-full mb-4">
         <div className="grid grid-cols-2 p-6">
            <h1 className="text-bold font-normal md:text-semibold md:font-semibold text-xl">
               Your Order
            </h1>
            <button className="justify-self-end text-neutral-500 underline hover:text-neutral-900">
               Clear all
            </button>
         </div>
         <div className="grid grid-cols-2 p-6">
            <div className="flex flex-col gap-3 text-neutral-900 leading-3 justify-center">
               <p>Pancake with chocolate</p>
               <p>49 $</p>
            </div>
            <div className="flex justify-end items-center">
               <button onClick={handleClickMinus} className="rounded-l-lg bg-white p-4">
                  -
               </button>
               <span className="bg-white p-4">{quantity}</span>

               <button onClick={handleClickPlus} className="rounded-r-lg bg-white p-4">
                  +
               </button>
            </div>
         </div>
         <div className="grid grid-cols-2 p-6">
            <div className="flex flex-col gap-3 text-neutral-900 leading-3 justify-center">
               <p>Pancake with chocolate</p>
               <p>49 $</p>
            </div>
            <div className="flex justify-end items-center">
               <button onClick={handleClickMinus} className="rounded-l-lg bg-white p-4">
                  -
               </button>
               <span className="bg-white p-4">{quantity}</span>

               <button onClick={handleClickPlus} className="rounded-r-lg bg-white p-4">
                  +
               </button>
            </div>
         </div>
         <div className="grid p-6 justify-start">
            <button className="border border-[#79747E] rounded-full px-6 py-1">+ Add more</button>
         </div>
         <div className="p-6">
            <textarea
               name="order_comment"
               id=""
               className="w-full rounded-xl p-6 text-neutral-600 resize-none"
            ></textarea>
         </div>
      </div>
   );
};
export default OrderDetails;
