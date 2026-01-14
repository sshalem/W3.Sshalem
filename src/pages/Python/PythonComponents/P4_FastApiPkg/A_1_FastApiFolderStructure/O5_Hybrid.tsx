/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O5_Hybrid = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">Hybrid (Most Production FastAPI Apps End Up Here) </article>
        This is:
        <ULdisc>
          <Li>Pythonic</Li>
          <Li>Scalable</Li>
          <Li>Clean</Li>
        </ULdisc>
        👍 Best of both worlds.
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O5_Hybrid;

const _1_ = `app/
├── users/
│   ├── router.py
│   ├── service.py
│   ├── repository.py
│   ├── entity.py
│   └── schema.py
├── common/
│   ├── exceptions.py
│   └── dependencies.py
├── db/
│   └── session.py
└── main.py
`;
