import { Link } from "react-router-dom";
import { PendingOrder } from "./PendingOrder";
const ShippingOrder = () => {
  return (
    <div>
      <PendingOrder value={"SHIPPING"} />
    </div>
  );
};
export default ShippingOrder;
