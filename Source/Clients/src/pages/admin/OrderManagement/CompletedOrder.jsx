import { Link } from "react-router-dom";
import { PendingOrder } from "./PendingOrder";

export const CompletedOrder = () => {
  return (
    <div>
      <PendingOrder value={"COMPLETED"} />
    </div>
  );
};
