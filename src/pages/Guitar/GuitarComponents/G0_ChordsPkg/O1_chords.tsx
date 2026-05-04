/*


*/
import { MainChildArea } from "../../../../components";

const O1_chords = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-xl">
          I embed this page from{" "}
          <a className="tracking-wider text-blue-500 underline" href="https://www.all-guitar-chords.com/">
            https://www.all-guitar-chords.com/
          </a>
        </article>

        <div style={{ width: "100%", height: "100vh" }}>
          <iframe src="https://www.all-guitar-chords.com/" title="Embedded Page" width="100%" height="100%" style={{ border: "none" }} />
        </div>
      </section>
    </MainChildArea>
  );
};
export default O1_chords;
