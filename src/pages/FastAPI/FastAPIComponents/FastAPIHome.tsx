import { Li, Subject, ULdisc } from "../../../components";
import { PythonHighlight, SpanGrey } from "../../../components/Highlight";

/*


*/
const FastAPIHome = () => {
  return (
    <Subject title="FastAPI Home ...">
      {
        <section>
          <section className="my-8">
            <article className="my-4 text-xl font-semibold">✅ What is FastAPI?</article>
            <ULdisc>
              <Li>
                FastAPI is a modern, fast (high-performance), <SpanGrey>web framework</SpanGrey> for building APIs with Python based on standard
                Python type hints.
              </Li>
              <Li>FastAPI is the web framework itself </Li>
              <Li>The FastAPI app is the main container, and routers are mounted into it.</Li>
              <Li>
                <SpanGrey>FastAPI()</SpanGrey> is the whole server.
              </Li>
              <Li>
                <strong>FastAPI ≈ spring‑boot‑starter‑web</strong>{" "}
              </Li>
            </ULdisc>
          </section>

          <hr />

          <section className="my-8">
            <article className="my-4 text-xl font-semibold">
              ✅ What is a Router <SpanGrey>APIRouter()</SpanGrey> in FastAPI
            </article>
            Routers are used to:
            <ULdisc>
              <Li>Organize routes/endpoints into modular chunks</Li>
              <Li>Group logic by domain (users, items, auth, etc.)</Li>
              <Li>Reuse and mount them into the main app</Li>
              <Li>
                <SpanGrey>APIRouter()</SpanGrey> is just one optional modular piece you plug in.
              </Li>
            </ULdisc>
          </section>

          <hr />

          <section className="my-8">
            <article className="my-4 text-xl font-semibold">✅ Example Showing the Difference</article>
            ✔️ Summary
            <ULdisc>
              <Li>
                <SpanGrey>FastAPI</SpanGrey> = full web framework
              </Li>
              <Li>
                <SpanGrey>Router</SpanGrey> = organizational tool for routes inside FastAPI
              </Li>
              <Li>
                <strong>main.py</strong>
                <PythonHighlight pythonCode={_1_} />
              </Li>
              <Li>
                <strong>user_router.py</strong> like <SpanGrey>UserController</SpanGrey> with annotation <SpanGrey>@RestController</SpanGrey> in
                spring boot
                <PythonHighlight pythonCode={_2_} />
              </Li>
            </ULdisc>
          </section>
        </section>
      }
    </Subject>
  );
};

export default FastAPIHome;

const _1_ = `
from fastapi import FastAPI
from myapi.users import router as users_router

app = FastAPI()
app.include_router(users_router, prefix="/users")`;

const _2_ = `
from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_users():
    return ["Alice", "Bob"]`;
