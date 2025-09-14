import { Link } from "react-router-dom";
import { MainChildArea } from "../../../../../components";
import { SpanGreen, SpanRed, SpanSky } from "../../../../../components/Highlight";
import ULdisc from "../../../../../components/ui/ULdisc";
import Li from "../../../../../components/ui/Li";

const O1_IntroM2M = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <div>
        <p>
          See concepts in <SpanSky>@OneToMany</SpanSky> intro section
        </p>
        <p>
          for more comprehansive see{" "}
          <Link to={"/spring/jpa/transaction-management"} className="tracking-wider text-blue-500">
            Tansaction Management setions 1-5
          </Link>
        </p>
      </div>
      <article>
        Important Notes
        <ULdisc>
          <Li>Always use helper methods (addRole, removeRole) → avoids inconsistent states between both sides.</Li>
          <Li>Don’t use orphanRemoval with @ManyToMany (doesn’t make sense, because the role can belong to multiple users).</Li>
          <Li>
            You can enable <SpanGreen>{"cascade = {(CascadeType.PERSIST, CascadeType.MERGE)}"}</SpanGreen> if you want roles to be auto-created when
            adding to users.
          </Li>
          <Li>
            Prefer <SpanGreen>Set</SpanGreen> over <SpanRed>List</SpanRed> to avoid duplicates in join tables.
          </Li>
        </ULdisc>
      </article>
    </MainChildArea>
  );
};

export default O1_IntroM2M;
