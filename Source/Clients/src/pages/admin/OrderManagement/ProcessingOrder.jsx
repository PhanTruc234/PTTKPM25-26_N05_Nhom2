import { Link } from "react-router-dom";
import { PendingOrder } from "./PendingOrder";

export const ProcessingOrder = () => {
  return (
    <div>
      <PendingOrder value={"PROCESSING"} />
    </div>
  );
};
