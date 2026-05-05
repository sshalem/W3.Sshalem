/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, Redtext } from "../../../../../components/Highlight";

const O1_SessionStorage = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-2xl font-semibold">Store data</article>
        <ULdisc>
          <Li>
            to Store data use the <Redtext>setItem(key, value)</Redtext>
            <JsxHighlight jsxCode={_store_}></JsxHighlight>
          </Li>
        </ULdisc>
      </section>

      <hr />

      <section className="my-8">
        <article className="my-8 text-2xl font-semibold">Read data</article>
        Read data , ⚠️ Always returns <Redtext>string | null</Redtext>
        <ULdisc>
          <p className="text-lg font-semibold">1. Basic read (simple version)</p>
          <ULdisc>
            <Li>✔ Works</Li>
            <Li>❌ No type safety</Li>
            <Li>❌ No error handling</Li>
          </ULdisc>
          <JsxHighlight jsxCode={_1_}></JsxHighlight>

          <p className="text-lg font-semibold">2. Typed version (recommended)</p>
          <ULdisc>
            <Li>✔ Type safe</Li>
            <Li>✔ Common in React apps</Li>
            <Li>⚠ Still not safe against corrupted JSON</Li>
          </ULdisc>
          <JsxHighlight jsxCode={_2_}></JsxHighlight>

          <p className="text-lg font-semibold">3. Safe production version (best practice)</p>
          <ULdisc>
            <Li>✔ Handles corrupted data</Li>
            <Li>✔ Clean separation</Li>
            <Li>✔ Reusable</Li>
          </ULdisc>
          <JsxHighlight jsxCode={_3_}></JsxHighlight>

          <p className="text-lg font-semibold">4. One-liner (clean but less safe)</p>
          <ULdisc>
            <Li>✔ Very short</Li>
            <Li>❌ No type guarantee</Li>
            <Li>❌ No error handling</Li>
          </ULdisc>
          <JsxHighlight jsxCode={_4_}></JsxHighlight>

          <p className="text-lg font-semibold">5. React usage pattern (best real-world)</p>
          <ULdisc>
            <Li>✔ Safe</Li>
            <Li>✔ React-friendly</Li>
            <Li>✔ Prevents re-parsing on every render</Li>
          </ULdisc>
          <JsxHighlight jsxCode={_5_}></JsxHighlight>

          <p className="text-lg font-semibold">6. BEST practice (recommended pattern)</p>
          <ULdisc>
            <Li>✔ Clean API</Li>
            <Li>✔ Reusable</Li>
            <Li>✔ Centralized logic</Li>
            <Li>✔ Easy to maintain</Li>
          </ULdisc>
          <JsxHighlight jsxCode={_6_}></JsxHighlight>
        </ULdisc>
      </section>
    </MainChildArea>
  );
};

export default O1_SessionStorage;

const _store_ = `sessionStorage.setItem("credentials", JSON.stringify(credentials));`;

const _1_ = `const saved = sessionStorage.getItem("credentials");
const credentials = saved ? JSON.parse(saved) : null;`;

const _2_ = `type Credentials = {
  username: string;
  password: string;
};

const credentials: Credentials | null = saved
  ? (JSON.parse(saved) as Credentials)
  : null;`;

const _3_ = `type Credentials = {
  username: string;
  password: string;
};

function getCredentials(): Credentials | null {
  try {
    const saved = sessionStorage.getItem("credentials");
    if (!saved) return null;

    return JSON.parse(saved) as Credentials;
  } catch (err) {
    console.error("Invalid credentials in sessionStorage", err);
    return null;
  }
}`;

const _4_ = `const credentials = JSON.parse(sessionStorage.getItem("credentials") || "null");`;

const _5_ = `const [credentials, setCredentials] = useState<Credentials | null>(null);

useEffect(() => {
  const saved = sessionStorage.getItem("credentials");

  if (saved) {
    try {
      setCredentials(JSON.parse(saved));
    } catch {
      setCredentials(null);
    }
  }
}, []);`;

const _6_ = `type Credentials = {
  username: string;
  password: string;
};

export const CredentialsStorage = {
  save(data: Credentials) {
    sessionStorage.setItem("credentials", JSON.stringify(data));
  },

  get(): Credentials | null {
    try {
      const item = sessionStorage.getItem("credentials");
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  },

  clear() {
    sessionStorage.removeItem("credentials");
  }
};`;
