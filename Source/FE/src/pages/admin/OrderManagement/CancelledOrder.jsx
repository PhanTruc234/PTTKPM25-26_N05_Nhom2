import { Link } from "react-router-dom";
import { PendingOrder } from "./PendingOrder";

const CancelledOrder = () => {
  return (
    <div>
      <PendingOrder value={"CANCELLED"} />
    </div>
  );
};
export default CancelledOrder;
