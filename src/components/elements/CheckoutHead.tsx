const CheckoutHead = () => {
  return (
    <div className="flex justify-start items-center gap-4  w-full">
      <img
        src="/src/assets/item.jpg"
        alt="image"
        className="h-16 w-16 object-cover rounded-full"
      />
      <h1 className="text-2xl font-bold">NAME</h1>
    </div>
  );
};

export default CheckoutHead;
