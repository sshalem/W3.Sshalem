/*


*/
import { Li, MainChildArea, ULDecimal } from "../../../../../components";
import { Highlight_ApplicationProperties, SpanEmerald } from "../../../../../components/Highlight";

const O4_scriptsTxtfile = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="text-lg font-semibold">Create scripts.txt file</div>
        <div></div>
        <ULDecimal>
          <Li>Since I use the cli to run commands , thus , I place here all the relavant commands I am going to use</Li>
          <Li>
            create <SpanEmerald>scripts.txt</SpanEmerald> file
            <Highlight_ApplicationProperties code={_1_}></Highlight_ApplicationProperties>
          </Li>
          <Li>
            Here are list of commands I ussually use
            <Highlight_ApplicationProperties code={_2_}></Highlight_ApplicationProperties>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O4_scriptsTxtfile;

const _1_ = `customer-management/
│
├── .venv/
├── .gitignore
├── requirements.txt
└── scripts.txt`;

const _2_ = `# shows list of dependencies
pip freeze

# creates the file requirements.txt with list of dependencies in it
pip freeze > requirements.txt

#  Install requirements.txt
pip install -r requirements.txt

# also shows list of dependencies
pip list

# run FastAPI app
# main  → the Python file name without  .py 
# app  → the FastAPI instance variable
# --reload  → automatic reload when you change code ( for development only )
# Optional:  --host 0.0.0.0  to make it accessible externally
# Optional:  --port 8000  to change port
uvicorn main:app --reload
uvicorn app.main:customer_app --reload
`;
