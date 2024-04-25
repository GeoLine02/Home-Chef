export interface SummeryCardProps {
    productName:string;
    productPrice:number;
    createdAt: string;
    restaurantID:number;
    id:number;
}

export default function SummeryCard({productName,productPrice,createdAt,restaurantID}:SummeryCardProps) {
    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const time = date.toTimeString().slice(0, 8);

  return (
    <div className='min-w-80 min-h-44 border border-slate-300 hover:border-indigo-300 overflow-y-auto'>
    <p className="text-lg font-bold">Product Name:<span className="text-amber-600 text-base">{productName}</span></p>
    <p className="text-lg font-bold">Product Price: <span className="text-amber-600  text-base">{productPrice}</span></p>
    <p className="text-lg font-bold">Restaurant ID: <span className="text-amber-600  text-base">{restaurantID}</span></p>
    <p className="text-lg font-bold">Order Date:<span className="text-amber-600  text-base">{year}-{month} {time}</span> </p>
</div>
    
  )
}
