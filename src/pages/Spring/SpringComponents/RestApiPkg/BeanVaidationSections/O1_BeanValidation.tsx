import { Link } from "react-router-dom";
import { MainChildArea } from "../../../../../components";
import { SpanTeal } from "../../../../../components/Highlight";

const O1_BeanValidation = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      see instructions under <SpanTeal>JPA</SpanTeal> link to{" "}
      <Link to={"/spring/jpa/entity-validation"} className="tracking-wide text-blue-600 hover:text-blue-700 hover:underline">
        ➡️ Entity Validation
      </Link>
    </MainChildArea>
  );
};

export default O1_BeanValidation;
