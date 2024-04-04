import { AddressListType } from "../../types/user";

type AddressCardProps = {
  address: AddressListType;
};
const AddressCard = ({ address }: AddressCardProps) => {
  return (
    <button className="p-2">{`${address.city} ${address.street} ${address.neighborhood}`}</button>
  );
};

export default AddressCard;
