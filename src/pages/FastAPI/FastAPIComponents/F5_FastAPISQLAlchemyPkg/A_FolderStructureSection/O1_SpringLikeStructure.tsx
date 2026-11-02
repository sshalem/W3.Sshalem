/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_ApplicationProperties } from "../../../../../components/Highlight";

const O1_SpringLikeStructure = ({ anchor }: { anchor: string }) => {
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
        <Highlight_ApplicationProperties code={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O1_SpringLikeStructure;

const _1_ = `app/
├── main.py                    # like SpringBootApplication
│
├── core/
│   ├── config.py              # application.properties / application.yml
│   ├── logging.py             # Logging setup
│   └── database.py            # DataSource + EntityManagerFactory
│
├── models/                    # @Entity
│   └── user.py
│
├── schemas/                   # DTOs
│   └── user.py
│
├── repositories/              # JPA Repositories
│   └── user_repository.py
│
├── services/                  # @Service
│   └── user_service.py
│
├── routers/                   # @RestController
│   └── user_controller.py
│
├── utils/                     # Helper functions / Reusable helpers / validators / converters
│   └── common.py
│
├── exceptions/
│   └── user_exceptions.py
│
└── requirements.txt           # Python dependencies
`;
