/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_JSX } from "../../../../../components/Highlight";

const O1_AxiosInstall = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> 🧠 Axios Install</article>
        <div>
          <ULdisc>
            <Li>
              Install Axios <Highlight_JSX code={_1_}></Highlight_JSX>
            </Li>
          </ULdisc>
        </div>
      </section>
    </MainChildArea>
  );
};

export default O1_AxiosInstall;

const _1_ = `npm install axios`;
