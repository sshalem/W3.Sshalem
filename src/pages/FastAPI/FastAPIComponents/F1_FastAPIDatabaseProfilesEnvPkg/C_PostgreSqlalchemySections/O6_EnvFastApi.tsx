/*


*/

import { Link } from "react-router-dom";
import { MainChildArea } from "../../../../../components";

const O6_EnvFastApi = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        🔥 Important Production Insight : see section{" "}
        <Link className="tracking-wider text-blue-500" to={"/fastapi/database-env-profiles/sqlite3#5.(.env)file"}>
          (.env) with Sqlite
        </Link>
      </section>
    </MainChildArea>
  );
};

export default O6_EnvFastApi;
