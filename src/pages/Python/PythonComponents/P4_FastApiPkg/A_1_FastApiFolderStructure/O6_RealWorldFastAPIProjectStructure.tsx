/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";

const O6_RealWorldFastAPIProjectStructure = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">🏗 Real-World FastAPI Project Structure </article>
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

export default O6_RealWorldFastAPIProjectStructure;

const _1_ = `app/
├── main.py                # FastAPI app instance, include routers
├── core/                  # Global configurations & settings
│   ├── config.py          # App config (env, settings)
│   ├── logging.py         # Logging setup
│   └── security.py        # JWT / auth utilities
├── db/                    # Database setup
│   ├── session.py         # SQLAlchemy session / engine
│   └── base.py            # Base class for models
├── models/                # SQLAlchemy models (entities)
│   └── user.py
├── schemas/               # Pydantic models (DTOs)
│   └── user.py
├── repositories/          # DB access functions
│   └── user_repo.py
├── services/              # Business logic
│   └── user_service.py
├── api/                   # Routers / controllers
│   └── v1/
│       └── user_router.py
├── utils/                 # Helper functions
│   └── common.py
├── tests/                 # Unit & integration tests
│   └── test_user.py
└── requirements.txt       # Python dependencies
`;
