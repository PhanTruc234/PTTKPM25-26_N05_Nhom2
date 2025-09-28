import { Link } from "react-router-dom";
import { PendingOrder } from "./PendingOrder";

const CompletedOrder = () => {
  return (
    <div>
      <PendingOrder value={"COMPLETED"} />
    </div>
  );
};
export default CompletedOrder;
