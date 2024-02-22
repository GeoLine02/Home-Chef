const CheckLocation = () => {
   return (
      <div className="py-5 px-9 rounded-md drop-shadow-sm shadow-gray-300 text-center bg-white hidden">
         <p>Order on this address?</p>
         <p>Dynammic User address</p>
         <div className="flex gap-4 pt-4">
            <button className="px-9 py-3 border-2 border-gray-400 rounded-full text-orange-700">
               No
            </button>
            <button className="px-9 py-3 border-2 border-orange-500 rounded-full border-full bg-orange-500 font-medium">
               Yes
            </button>
         </div>
      </div>
   );
};

export default CheckLocation;
