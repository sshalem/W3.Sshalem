/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_JAVA, SpanEmerald } from "../../../../../components/Highlight";

const O4_RegisterInMainPy = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold">Order Controller</div>
        <div>The Controller is now very thin, just as we generally want a Spring Boot Controller to be.</div>
        <div>
          Create a new file: <SpanEmerald>app/controllers/order_controller.py</SpanEmerald> with code below
        </div>
        <Highlight_JAVA code={_1_}></Highlight_JAVA>
      </section>
    </MainChildArea>
  );
};

export default O4_RegisterInMainPy;

const _1_ = `from app.controller import customer_controller, order_controller

# Create FastAPI application
one2many_app = FastAPI(title=settings.APP_NAME, version="1.0.0", lifespan=lifespan)
.
.
.

# Register API controllers
one2many_app.include_router(customer_controller.router)
`;
