import { IoCardOutline, IoPricetagOutline } from "react-icons/io5";

const PaymentMethod = () => {
   return (
      <div>
         <div className="bg-[#F7F7F7] rounded-[32px] w-full mb-6">
            <div className="grid grid-cols-2 p-6">
               <h1 className="text-bold font-normal md:text-semibold md:font-semibold text-xl">
                  Payment
               </h1>
            </div>
            <div className="grid grid-cols-2 p-6">
               <div className="flex gap-3 items-center text-neutral-900">
                  <IoCardOutline className="w-6 h-6" />
                  <p>Add payment method</p>
               </div>

               <a
                  href="/"
                  className="justify-self-end text-neutral-500 underline hover:text-neutral-900"
               >
                  Change
               </a>
            </div>
            <div className="grid grid-cols-2 p-6">
               <div className="flex gap-3 items-center text-neutral-900">
                  <IoPricetagOutline className="w-6 h-6" />
                  <p>Add promo code</p>
               </div>
            </div>
         </div>
      </div>
   );
};
export default PaymentMethod;
