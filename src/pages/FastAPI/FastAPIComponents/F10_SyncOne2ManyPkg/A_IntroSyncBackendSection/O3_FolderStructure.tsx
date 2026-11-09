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
│   │   ├── __init__.py
│   │   └── customer.py
│   │
│   ├── exceptions/
│   |   ├── __init__.py
│   |   └── custom_exceptions.py
│   │
│   ├── services/
│   |   ├── __init__.py
│   |   └── customer_service.py
│   │
│   └── controller/
│       ├── __init__.py
│       └── customer_controller.py
|
├── .env
├── .gitignore
├── requirements.txt
└── scripts.md`;
