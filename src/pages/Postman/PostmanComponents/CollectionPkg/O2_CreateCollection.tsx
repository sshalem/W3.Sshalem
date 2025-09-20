import { IMG, MainChildArea } from "../../../../components";
import Li from "../../../../components/ui/Li";
import ULdisc from "../../../../components/ui/ULdisc";
import postman_1 from "../../../../assets/postman_1.jpg";
import postman_2 from "../../../../assets/postman_2.jpg";

const O2_CreateCollection = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article>
          <div>
            <ULdisc>
              <Li>
                Open Postman , go to <strong>My Worksapce</strong>
                <IMG img_name={postman_1}></IMG>
              </Li>
              <Li>
                create new collection, example <strong>Test API</strong>
                <IMG img_name={postman_2}></IMG>
              </Li>
            </ULdisc>
          </div>
        </article>
      </section>
      <hr />
    </MainChildArea>
  );
};

export default O2_CreateCollection;
