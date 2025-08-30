import { Outlet, useLocation } from "react-router-dom";
import TableIdeCompare from "../../../../components/Tables/TableIdeCompare";

const Ide = () => {
  let location = useLocation();

  return <section>{location.pathname === "/spring/ide" ? <TableIdeCompare></TableIdeCompare> : <Outlet />}</section>;
};
export default Ide;
