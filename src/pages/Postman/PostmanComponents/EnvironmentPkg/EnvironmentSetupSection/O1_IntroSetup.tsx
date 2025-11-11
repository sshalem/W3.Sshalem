/*


*/
import { MainChildArea } from "../../../../../components";
import Li from "../../../../../components/ui/Li";
import ULdisc from "../../../../../components/ui/ULdisc";

const O1_IntroSetup = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-4">
        <article>
          <div>
            <strong>Environment</strong> in postman , is where I can define Variables or constants , so I can authomatically send request w/o dealing
            with copy/paste them for every request. There are 2 types of environment:
            <ULdisc>
              <Li>
                <strong>Globals</strong> - can be use with all projects
              </Li>
              <Li>
                <strong>Privte</strong> - Will be used only for a collection I will assign it to (can Be any project)
              </Li>
            </ULdisc>
          </div>
        </article>
      </section>
      <hr />
    </MainChildArea>
  );
};

export default O1_IntroSetup;
