/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { Highlight_ApplicationProperties, SpanEmerald } from "../../../../../components/Highlight";

const O1_ProjectFolderStructure = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Let's add the following packages.</div>

        <ULDecimal>
          <Li>Create these Python Packages and files:</Li>
          <Li>
            <SpanEmerald>controller</SpanEmerald> as Python package
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
│   │   ├── customer.py
│   │   └── order.py
│   │
│   ├── repositories/
│   │  ├── __init__.py
│   │  ├── customer_repository.py
│   │  └── order_repository.py
│   │
│   ├── schemas/
│   │   ├── __init__.py
│   │   ├── customer.py
│   │   └── order.py
│   │
│   ├── exceptions/
│   |   ├── __init__.py
│   |   ├── custom_exceptions.py
│   |   └── exception_handlers.py
│   │
│   ├── services/
│   │   ├── __init__.py
│   │   ├── customer_service.py
│   │   └── order_service.py
│   │
│   └── controller/
│       ├── __init__.py
│       ├── customer_controller.py
│       └── order_controller.py
|
├── .env
├── .gitignore
├── requirements.txt
└── scripts.md`;
