import { Link } from "react-router-dom";
import { PendingOrder } from "./PendingOrder";

export const OrderManagement = () => {
  return (
    <div className="w-full">
      <PendingOrder value={"PENDING"} />
    </div>
  );
};
