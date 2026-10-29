/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_ApplicationProperties, SpanGreen, SpanRed } from "../../../../../components/Highlight";

const O2_FeatureBasedStructure = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">Feature-Based Structure (Very Pythonic, Very Popular)</article>
        👉 Preferred for real FastAPI apps. <br />
        Why Python devs like this?
        <ULdisc>
          <Li>Everything related to users is together</Li>
          <Li>Easy to delete or move a feature</Li>
          <Li>Scales cleanly</Li>
        </ULdisc>
        This is <SpanRed>NOT Spring-style</SpanRed>, but <SpanGreen>domain-centric</SpanGreen>.
        <Highlight_ApplicationProperties code={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O2_FeatureBasedStructure;

const _1_ = `app/
├── main.py
├── users/ 
│   ├── router.py (Spring  Controller)
│   ├── service.py  (Spring  Service)
│   ├── repository.py  (Spring  Repository)
│   ├── models.py      # SQLAlchemy  (Spring Entity)
│   └── schemas.py     # Pydantic  (Spring DTO)
├── orders/
│   ├── router.py
│   └── schemas.py
└── db/
    └── session.py
`;
