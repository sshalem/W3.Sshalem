/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { Highlight_ApplicationProperties, SpanEmerald, SpanYellow } from "../../../../../components/Highlight";

const O1_ProjectFolderStructure = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Let's add the following packages.</div>

        <ULDecimal>
          <Li>Create this Python Package and files:</Li>
          <Li>
            <SpanEmerald>models</SpanEmerald> as Python package (<SpanYellow>entity</SpanYellow> package in JAVA)
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
│   └── models/
│       ├── __init__.py
│       └── customer.py
│
├── .env
├── .gitignore
└── requirements.txt`;
