/*


*/

import { MainChildArea } from "../../../../../components";
import { Highlight_ApplicationProperties } from "../../../../../components/Highlight";

const O3_FolderStructure = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Project folder structure</div>
        <div>I suggest the following structure. It will feel familiar coming from Spring Boot.</div>
        <div className="">
          I will keep the architecture simple initially. Later, I can introduce more advanced concepts without restructuring everything.
        </div>
        <Highlight_ApplicationProperties code={_1_} />
      </section>
    </MainChildArea>
  );
};

export default O3_FolderStructure;

const _1_ = `customer-management/
│
├── app/
│   ├── main.py
│   │
|   ├── core/
│   │    ├── config.py              # application.properties / application.yml
│   │    ├── logging.py             # Logging setup
│   │    └── database.py            # DataSource + EntityManagerFactory
│   │
│   ├── models/   # @Entity
│   │   └── customer.py
│   │
│   ├── schemas/  # DTOs
│   │   └── customer.py
│   │
│   ├── repositories/
│   │   └── customer_repository.py
│   │
│   ├── services/
│   │   └── customer_service.py
│   │
│   ├── controllers/
│   │   └── customer_controller.py
│   │
│   ├── exceptions/
│   │   └── custom_exceptions.py
│   │
|   └── utils/   # Helper functions / Reusable helpers / validators / converters
│       ├── __init__.py
│       └── common.py
│
├── tests/
│   └── test_customers.py
│
├── .env
├── .gitignore
├── requirements.txt
└── scripts.md`;
