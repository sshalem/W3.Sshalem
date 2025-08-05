import { IMG, MainChildArea } from "../../../components";
import { JsxHighlight, Span } from "../../../Highlight";

import page_create_10 from "../../../assets/page_create_10.jpg";

const CreateStep6 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        In this seection , I will modify the sidebar navigation ,links, from regular link , to a <Span>DropDownXXXX</Span> link, so I can heve
        Internal links in them. <br /> In section 7, I show how to config the internal links of the <Span>DropDownXXXX</Span>
        <strong>follow the following steps:</strong>
        <ul className="my-4 ml-8 list-decimal">
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          <li>
            First, I removed all <Span>Link</Span> elements, and start w/o any links in <Span>C_Plus_Plus</Span>
          </li>
          <li>
            I want to make the page of <Span>C++ Home</Span> the landing page , thus I add following code line to it <br />
            <br />
            <Span>
              {`<SideBarLink`} pageName="C++ Home" internalLink="/c++" {`/>`}
            </Span>
            <JsxHighlight jsxCode={jsx_HomeLink}></JsxHighlight>
            This is how web page looks:
            <IMG img_name={page_create_10}></IMG>
          </li>
        </ul>
      </article>
    </MainChildArea>
  );
};

export default CreateStep6;

const jsx_HomeLink = `const C_plus_plus = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  .
  .
  .
  return (
    <GridLayout>
      <FaBars className="fixed left-5 top-16 z-50 cursor-pointer bg-blue-950 text-white md:hidden" onClick={toggleSideNavbar} />

      {showSidebar && (
        <article className="fixed bottom-0 top-[89px] w-64 overflow-auto bg-[#E7E9EB]">
          <div className="relative h-full w-full">
            <div className="h-3"></div>
            <SideBarLink pageName="C++ Home" internalLink="/c++" />
          </div>
        </article>
      )}
      <main className="css-main-outlet">
        <Outlet />
      </main>
    </GridLayout>
  );
};

export default C_plus_plus;`;
