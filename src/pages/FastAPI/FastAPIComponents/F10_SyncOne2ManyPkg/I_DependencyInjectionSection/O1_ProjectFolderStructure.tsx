/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { Highlight_ApplicationProperties, SpanEmerald } from "../../../../../components/Highlight";

const O1_ProjectFolderStructure = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>
            I already setup <SpanEmerald>database.py</SpanEmerald> , which Creates and manages the SQLAlchemy database session
          </Li>
          <Li>
            Now let's create <SpanEmerald>dependencies.py</SpanEmerald> Constructs and injects Repository and Service objects (see Section
          </Li>
        </ULdisc>

        <Highlight_ApplicationProperties code={_1_}></Highlight_ApplicationProperties>
      </section>
    </MainChildArea>
  );
};

export default O1_ProjectFolderStructure;

const _1_ = `customer-management/
│
├── app/
│   ├── __init__.py
│   ├── main.py
|   ├── dependencies.py
│   │
│   ├── config/
│   │   ├── __init__.py
│   │   └── settings.py
│   │
│   ├── database/
│   │   ├── __init__.py
│   │   └── database.py
│   │
│   ├── models/
│   │   ├── __init__.py
│   │   └── customer.py
│   │
│   ├── repositories/
│   │   ├── __init__.py
│   │   └── customer_repository.py
│   │
│   ├── schemas/
│   |   ├── __init__.py
│   |   └── customer.py
│   │
│   └── exceptions/
│       ├── __init__.py
│       ├── custom_exceptions.py
│       └── exception_handlers.py
│   
├── .env
├── .gitignore
├── requirements.txt
└── scripts.txt`;
