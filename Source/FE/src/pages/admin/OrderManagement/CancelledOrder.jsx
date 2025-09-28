import { Link } from "react-router-dom";
import { PendingOrder } from "./PendingOrder";

export const CancelledOrder = () => {
  return (
    <div>
      <PendingOrder value={"CANCELLED"} />
    </div>
  );
};
