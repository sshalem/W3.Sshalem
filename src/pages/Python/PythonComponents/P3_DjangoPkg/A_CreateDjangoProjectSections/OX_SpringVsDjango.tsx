/*


*/
import { MainChildArea } from "../../../../../components";
import { ApplicationPropertiesHighlight } from "../../../../../components/Highlight";
import Table_2ColCompareDjangoTerminology from "../../../../../components/Tables/Table_2ColCompareDjangoTerminology";

const OX_SpringVsDjango = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="flex gap-48">
          <div>
            <div className="my-4 text-xl font-semibold">Spring (layer-oriented)</div>
            <ApplicationPropertiesHighlight propertiesCode={_1_} />
          </div>
          <div>
            <div className="my-4 text-xl font-semibold">Django (feature-oriented)</div>
            <ApplicationPropertiesHighlight propertiesCode={_2_} />
          </div>
        </article>
        <Table_2ColCompareDjangoTerminology></Table_2ColCompareDjangoTerminology>
      </section>
    </MainChildArea>
  );
};

export default OX_SpringVsDjango;

const _1_ = `
users
 ├── UserController
 ├── UserService
 ├── UserRepository
 └── UserEntity`;

const _2_ = `users/
 ├── models.py      ← Entity
 ├── views.py       ← Controller (Django views / DRF views)
 ├── urls.py        ← Routing
 ├── admin.py
 └── services.py    ← (optional)`;
