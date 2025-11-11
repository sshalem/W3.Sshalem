/*


*/
import { Anchor, IMG, MainChildArea } from "../../../../components";
import { JsxHighlight, SpanBlue, SpanGreen, SpanRed } from "../../../../components/Highlight";
import setup_1 from "../../../../assets/setup_1.jpg";
import setup_2 from "../../../../assets/setup_2.jpg";
import setup_3 from "../../../../assets/setup_3.jpg";
import setup_4 from "../../../../assets/setup_4.jpg";
import setup_5 from "../../../../assets/setup_5.jpg";
import setup_6 from "../../../../assets/setup_6.jpg";

const O2_Favicon = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        How To Add a <SpanBlue>Favicon</SpanBlue> in HTML. <br />
        To modify the favicon icon that VITE has by default , do the following steps.
      </div>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          for this example I created a text using power point and saved it as jpg file
          <IMG img_name={setup_1}></IMG>
        </li>
        <li className="my-1">
          open favicon web site <Anchor description="https://realfavicongenerator.net/" href="https://realfavicongenerator.net/"></Anchor>
        </li>
        <li className="my-1">
          Upload the image I want to use as favicon
          <IMG img_name={setup_2}></IMG>
        </li>
        <li className="my-1">
          this is how it will look on browser <IMG img_name={setup_3}></IMG>
        </li>
        <li className="my-1">
          scroll down on the page and click on NEXT <IMG img_name={setup_4}></IMG>
        </li>
        <li className="my-1">
          Click on download , this will download a zipped folder with favicon files (jpg, ico, svg) files <IMG img_name={setup_5}></IMG>
        </li>
        <li className="my-1">
          copy and paste the files to PUBLIC folder under VITE project <IMG img_name={setup_6}></IMG>
        </li>
        <li className="my-1">
          In the <SpanGreen>index.html</SpanGreen> file modify from <SpanRed>/vite.svg</SpanRed> to <SpanGreen>favicon.svg</SpanGreen>
          <br /> No need to add the relative path of public
          <JsxHighlight jsxCode={favicon}></JsxHighlight>
        </li>
      </ul>
    </MainChildArea>
  );
};

export default O2_Favicon;

const favicon = ` //   <!-- <link rel="icon" type="image/svg+xml" href="/vite.svg" /> -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />`;
