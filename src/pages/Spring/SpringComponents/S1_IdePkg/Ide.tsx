/*
/spring/ide
Ide
*/
import { Outlet, useLocation } from "react-router-dom";
import TableIdeCompare from "../../../../components/Tables/TableIdeCompare";
import { Subject } from "../../../../components";

const Ide = () => {
  let location = useLocation();

  return (
    <section>
      {location.pathname === "/spring/ide" ? (
        <Subject title="Spring IDE">
          {
            <div>
              <TableIdeCompare></TableIdeCompare>
            </div>
          }
        </Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};
export default Ide;
