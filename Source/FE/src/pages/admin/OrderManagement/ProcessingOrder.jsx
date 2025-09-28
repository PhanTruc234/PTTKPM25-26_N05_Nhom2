import { Link } from "react-router-dom";
import { PendingOrder } from "./PendingOrder";

const ProcessingOrder = () => {
  return (
    <div>
      <PendingOrder value={"PROCESSING"} />
    </div>
  );
};
export default ProcessingOrder;
