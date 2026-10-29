/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_ApplicationProperties } from "../../../../../components/Highlight";

const O3_RealWorldFastAPIProjectStructure = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">🏗 Real-World FastAPI Project Structure </article>
        <Highlight_ApplicationProperties code={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O3_RealWorldFastAPIProjectStructure;

const _1_ = `app/
├── main.py                # Initialize FastAPI app instance, include routers , add middleware
├── core/                  # Global configurations & settings (App-wide config, logging, security, constants)
│   ├── config.py          # App config (env, settings)
│   ├── logging.py         # Logging setup
│   └── security.py        # JWT / auth utilities
├── db/                    # Database setup (SQLAlchemy engine, session, base class)
│   ├── session.py         # SQLAlchemy session / engine
│   └── base.py            # Base class for models
├── models/                # SQLAlchemy models (tables / entities)
│   └── user.py
├── schemas/               # Pydantic models (DTOs) for requests & responses (DTOs)
│   └── user.py
├── repositories/          # DB access functions / DB query functions (select, insert, update)
│   └── user_repo.py
├── services/              # Business logic, manipulate entities before returning DTOs
│   └── user_service.py
├── api/                   # Routers / controllers
│   └── v1/
│       └── user_router.py
├── utils/                 # Helper functions / Reusable helpers / validators / converters
│   └── common.py
├── tests/                 # Unit & integration tests
│   └── test_user.py
└── requirements.txt       # Python dependencies
`;
