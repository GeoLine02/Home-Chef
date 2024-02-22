const PeriodPicker = () => {
   return (
      <div>
         <form>
            <div className="grid gap-y-6">
               <input
                  type="time"
                  name="time"
                  id="time"
                  className="p-5 rounded-md border border-[#B2B2B2] bg-[#F7F7F7] text-neutral-700"
               />
               <input
                  type="datetime-local"
                  name="date"
                  id="date"
                  className="p-5 rounded-md border border-[#B2B2B2] bg-[#F7F7F7] text-neutral-700"
               />
            </div>
         </form>
      </div>
   );
};
export default PeriodPicker;
