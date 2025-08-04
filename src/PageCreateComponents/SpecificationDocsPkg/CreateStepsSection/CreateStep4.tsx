import { IMG, MainChildArea } from "../../../components";
import { Span } from "../../../Highlight";
import page_create_five from "../../../assets/page_create_five.jpg";

const CreateStep4 = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <article>
        <div>Lets see how to add the Sidebar navigation </div>
        To config the side navbar on the page,
        <ul className="my-4 ml-8 list-decimal">
          <li>
            copy the context of componenet <Span>Z_PageTemplate</Span>
            and paste it in <Span>C_plus_plus</Span> component.
          </li>

          <li>continue with step 5</li>
        </ul>
        <br />
        After adding the Page template code , we can see the sidebar navigation is setup, but there are NO links. <br />
        Also, no content is visible.
        <IMG img_name={page_create_five}></IMG>
      </article>
    </MainChildArea>
  );
};

export default CreateStep4;
