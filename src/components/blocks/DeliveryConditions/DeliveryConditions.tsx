import { FiMapPin } from "react-icons/fi";
import PeriodPicker from "../PeriodPicker/PeriodPicker";

const DeliveryConditions = () => {
  return (
    <div className="bg-[#F7F7F7] rounded-[32px] w-full mb-6">
      <div className="grid grid-rows-2 md:grid-cols-1 p-6 items-center justify-center">
        <h1 className="text-bold text-xl font-normal md:text-semibold md:font-semibold">
          Delivery conditions
        </h1>
        <div className="grid grid-cols-2 gap-1 rounded-full bg-gray-200 p-2">
          <div>
            <input
              type="radio"
              name="option"
              id="1"
              value="1"
              className="peer hidden"
              checked
            />
            <label
              htmlFor="1"
              className="block cursor-pointer select-none rounded-full p-2 text-center peer-checked:bg-orange-400 peer-checked:font-bold peer-checked:text-white"
            >
              Delivery
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="option"
              id="2"
              value="2"
              className="peer hidden"
            />
            <label
              htmlFor="2"
              className="block cursor-pointer select-none rounded-full p-2 text-center peer-checked:bg-orange-400 peer-checked:font-bold peer-checked:text-white"
            >
              TakeAway
            </label>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 p-6">
        <div className="flex gap-3 items-center text-neutral-900">
          <FiMapPin />
          <p>Wall Street 5</p>
        </div>
        <a
          href="/"
          className="justify-self-end text-neutral-500 underline hover:text-neutral-900"
        >
          Change
        </a>
      </div>
      <div className="grid p-6 gap-y-4">
        <h1 className="text-bold font-normal md:text-semibold md:font-semibold">
          Delivery Time
        </h1>
        <PeriodPicker />
      </div>
    </div>
  );
};
export default DeliveryConditions;
