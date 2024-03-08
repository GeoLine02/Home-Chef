import CheckoutHead from "../components/elements/CheckoutHead";

const CheckOut = () => {
  return (
    <main className="p-3 lg:px-14 lg:py-6 bg-[#EEEEEE]">
      <div className="flex justify-center items-start gap-8">
        {/* First container */}
        <div className="w-full">
          <CheckoutHead />
          <div className="flex flex-col gap-8 w-full mt-4">
            <div className="rounded-lg bg-[#ffffff] w-full p-6">
              <h1 className="text-2xl font-bold">Delivery terms</h1>
            </div>
            <div className="rounded-lg bg-[#ffffff] w-full p-6">
              <h1 className="text-2xl font-bold">Payment</h1>
            </div>
            <div className="rounded-lg bg-[#ffffff] w-full p-6">
              <h1 className="text-2xl font-bold">Your order</h1>
            </div>
          </div>
        </div>
        {/* second container */}
        <div className="w-full">
          <button className="px-6 h-12 my-4 cursor-pointer bg-orange-400 border border-transparent rounded-full w-full font-medium text-base">
            Proceed to payment 147$
          </button>
          <div className="rounded-lg flex justify-start flex-col w-full bg-[#ffffff] p-6 min-h-screen">
            <h1 className="text-2xl font-bold">Price</h1>
          </div>
          <button className="px-6 h-12 my-4 cursor-pointer bg-orange-400 border border-transparent rounded-full w-full font-medium text-base">
            Proceed to payment 147$
          </button>
        </div>
      </div>
    </main>
  );
};

export default CheckOut;
