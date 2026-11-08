/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { Highlight_ApplicationProperties, SpanEmerald, SpanYellow } from "../../../../../components/Highlight";

const O1_ProjectFolderStructure = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULDecimal>
          <Li>Create these Python Packages and files:</Li>
          <Li>
            <SpanEmerald>schemas</SpanEmerald> as Python package (<SpanYellow>dto</SpanYellow> package in JAVA)
          </Li>
          <Highlight_ApplicationProperties code={_1_}></Highlight_ApplicationProperties>
        </ULDecimal>
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
│   └── schemas/
│       ├── __init__.py
│       └── customer.py
│
├── .env
├── .gitignore
├── requirements.txt
└── scripts.txt`;
