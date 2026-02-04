/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";
import Table_2ColCompareSpringVsSQLAlchemy from "../../../../../components/Tables/Table_2ColCompareSpringVsSQLAlchemy";

const O1_SpringVsSqlAlchemy = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">Spring-Style Layered Structure (Also Valid) </article>
        Used often by:
        <ULdisc>
          <Li>Java devs</Li>
          <Li>large teams</Li>
          <Li>long-lived projects</Li>
        </ULdisc>
        <Table_2ColCompareSpringVsSQLAlchemy />
        <ApplicationPropertiesHighlight propertiesCode={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O1_SpringVsSqlAlchemy;

const _1_ = `app/
├── main.py                    # like SpringBootApplication
│
├── core/
│   ├── __init__.py
│   ├── config.py              # application.properties / application.yml
│   ├── logging.py             # Logging setup
│   └── database.py            # DataSource + EntityManagerFactory
│
├── models/                    # @Entity
│   ├── __init__.py
│   └── user.py
│
├── schemas/                   # DTOs
│   ├── __init__.py
│   └── user.py
│
├── repositories/              # JPA Repositories
│   ├── __init__.py
│   └── user_repository.py
│
├── services/                  # @Service
│   ├── __init__.py
│   └── user_service.py
│
├── routers/                   # @RestController
│   ├── __init__.py
│   └── user_controller.py
│
├── utils/                     # Helper functions / Reusable helpers / validators / converters
│   ├── __init__.py
│   └── common.py
│
├── exceptions/
│   ├── __init__.py
│   └── user_exceptions.py
│
└── requirements.txt           # Python dependencies
`;
