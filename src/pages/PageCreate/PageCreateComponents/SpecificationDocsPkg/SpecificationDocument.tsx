/*


*/
import { Link, Outlet, useLocation } from "react-router-dom";
import { IMG, Subject } from "../../../../components";
import page_create_spec_doc from "../../../../assets/page_create_spec_doc.jpg";

const SpecificationDocument = () => {
  const location = useLocation();
  return (
    <section>
      {location.pathname === "/page_creation/specification-document" ? (
        <Subject title="Specification Document ...">
          <section>
            <div>
              <article className="my-8"></article>
            </div>
            <div className="my-6 text-3xl">
              <div className="css-title">Specification Documentation </div>
            </div>
            <div className="text-xl">
              I arrange code in a way that it will be easy to add:
              <ul className="ml-8 list-disc">
                <li>Link to Navbar</li>
                <li>SideNavbar (DropDowns)</li>
                <li>SidebarLink</li>
                <li>SidebarLink Content</li>
                <li>Internal Content Anchor/links for each section (anchor links are # hash lionks) </li>
                <li>
                  Go to
                  <Link to={"http://localhost:5173/page_creation/specification-document/create-steps"}>
                    <span className="mx-2 text-blue-500 underline">create-steps</span>
                  </Link>
                </li>
              </ul>
            </div>
            <IMG img_name={page_create_spec_doc}></IMG>
          </section>
        </Subject>
      ) : (
        <main className="css-page-content">
          <Outlet />
        </main>
      )}
    </section>
  );
};

export default SpecificationDocument;
