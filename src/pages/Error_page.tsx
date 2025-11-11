/*


*/
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Error = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location);
  }, []);

  return (
    <section className="mx-auto max-w-[1750px]">
      <article className="flex h-[90vh] max-h-[90vh] flex-col items-center justify-center">
        <div className="p-2 text-4xl">url is not familiar</div>
        <button
          className="text-3xl text-blue-400 underline"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back
        </button>
        {/* <NavLink to="/" className={`text-3xl text-blue-400 underline`}>
          back home
        </NavLink> */}
      </article>
    </section>
  );
};

export default Error;
