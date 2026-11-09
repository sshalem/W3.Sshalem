/*


*/
import { IMG, Li, MainChildArea, ULDecimal } from "../../../../../components";
import { Highlight_ApplicationProperties, SpanEmerald } from "../../../../../components/Highlight";
import fastApi_5 from "../../../../../assets/fastApi_5.jpg";

const O2_ProjectFolderStructure = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Let's start organizing the application.</div>

        <ULDecimal>
          <Li>Create these Python Packages and files:</Li>
          <Li>
            <SpanEmerald>app</SpanEmerald> as Python package
          </Li>
          <Li>
            <SpanEmerald>config</SpanEmerald> as Python package
          </Li>
          <Li>
            <SpanEmerald>database</SpanEmerald> as Python package
          </Li>
          <Li>
            This is the current Project Folder Layout:
            <Highlight_ApplicationProperties code={_1_}></Highlight_ApplicationProperties>
            Why do we have <SpanEmerald>__init__.py</SpanEmerald> ?<IMG img_name={fastApi_5}></IMG>
            It marks directories as <SpanEmerald>Python packages</SpanEmerald> and helps organize imports. <br />
            Modern Python supports namespace packages without it, but we'll explicitly use these files for clarity.
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O2_ProjectFolderStructure;

const _1_ = `customer-management/
│
├── .venv/
│
├── app/
│   ├── __init__.py
│   ├── main.py
│   │
│   ├── config/
│   │   ├── __init__.py
│   │   └── settings.py
│   │
│   └── database/
│       ├── __init__.py
│       └── database.py
│
├── .env
├── .gitignore
├── requirements.txt
└── scripts.md`;
