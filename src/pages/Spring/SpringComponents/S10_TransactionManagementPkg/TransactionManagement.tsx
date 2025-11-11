/*


*/
import { Outlet, useLocation } from "react-router-dom";

const TransactionManagement = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/spring/transaction-management" ? <div className="text-3xl">Transaction Management main page ...</div> : <Outlet />}
    </section>
  );
};
export default TransactionManagement;
