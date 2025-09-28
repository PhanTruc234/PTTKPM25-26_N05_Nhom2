import { Link } from "react-router-dom";
import { PendingOrder } from "./PendingOrder";

const OrderManagement = () => {
  return (
    <div className="w-full">
      <PendingOrder value={"PENDING"} />
    </div>
  );
};
export default OrderManagement;
