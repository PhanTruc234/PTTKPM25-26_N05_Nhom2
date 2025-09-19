import { Link } from "react-router-dom";
import { PendingOrder } from "./PendingOrder";
export const ShippingOrder = () => {
  return (
    <div>
      <PendingOrder value={"SHIPPING"} />
    </div>
  );
};
