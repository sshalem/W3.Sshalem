/*


*/
import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O3_SpringLikeFileStructure = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">Spring-Like File Structure </article>
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O3_SpringLikeFileStructure;

const _1_ = `app/
├── api/
│   └── users.py        # controllers (routers)
├── services/
│   └── user_service.py
├── repositories/
│   └── user_repo.py
├── models/
│   ├── entity.py       # SQLAlchemy
│   └── dto.py          # Pydantic
├── db/
│   └── session.py
└── main.py`;
