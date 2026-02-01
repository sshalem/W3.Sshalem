import { Li, Subject, ULdisc } from "../../../components";
import { PythonHighlight, SpanYellow } from "../../../components/Highlight";

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
                FastAPI is a modern, fast (high-performance), <SpanYellow>web framework</SpanYellow> for building APIs with Python based on standard
                Python type hints.
              </Li>
              <Li>FastAPI is the web framework itself </Li>
              <Li>The FastAPI app is the main container, and routers are mounted into it.</Li>
              <Li>
                <SpanYellow>FastAPI()</SpanYellow> is the whole server.
              </Li>
              <Li>
                <strong>FastAPI ≈ spring‑boot‑starter‑web</strong>{" "}
              </Li>
            </ULdisc>
          </section>

          <hr />

          <section className="my-8">
            <article className="my-4 text-xl font-semibold">
              ✅ What is a Router <SpanYellow>APIRouter()</SpanYellow> in FastAPI
            </article>
            Routers are used to:
            <ULdisc>
              <Li>Organize routes/endpoints into modular chunks</Li>
              <Li>Group logic by domain (users, items, auth, etc.)</Li>
              <Li>Reuse and mount them into the main app</Li>
              <Li>
                <SpanYellow>APIRouter()</SpanYellow> is just one optional modular piece you plug in.
              </Li>
            </ULdisc>
          </section>

          <hr />

          <section className="my-8">
            <article className="my-4 text-xl font-semibold">✅ Example Showing the Difference</article>
            ✔️ Summary
            <ULdisc>
              <Li>
                <SpanYellow>FastAPI</SpanYellow> = full web framework
              </Li>
              <Li>
                <SpanYellow>Router</SpanYellow> = organizational tool for routes inside FastAPI
              </Li>
              <Li>
                <strong>main.py</strong>
                <PythonHighlight pythonCode={_1_} />
              </Li>
              <Li>
                <strong>user_router.py</strong> like <SpanYellow>UserController</SpanYellow> with annotation <SpanYellow>@RestController</SpanYellow> in
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
