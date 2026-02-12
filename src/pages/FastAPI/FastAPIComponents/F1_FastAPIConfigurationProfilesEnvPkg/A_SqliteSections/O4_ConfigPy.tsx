/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanGreen, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O4_ConfigPy = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        Let's see what the usage of <SpanYellow>config.py</SpanYellow>
        <article className="my-8 text-lg font-semibold">
          <span className="rounded-md border-2 border-gray-400 p-1">config.py</span>
        </article>
        <div>
          <span className="rounded-md border-2 border-gray-400 p-1">🔎 So Is config.py = application.properties?</span>
        </div>
        <div className="my-4">✅ Conceptually → YES , ❌ Technically → NOT exactly </div>
        In FastAPI
        <ULdisc>
          <Li>Configuration is just data</Li>
          <Li>We explicitly use it</Li>
        </ULdisc>
        It used for
        <ULdisc>
          <Li>Store app configuration</Li>
          <Li>Load environment variables</Li>
          <Li>Centralize app settings</Li>
          <Li>Used to configure DB, debug mode, secrets, etc.</Li>
        </ULdisc>
        <article className="my-8 text-lg font-semibold">
          <span className="rounded-md border-2 border-gray-400 p-1">.env</span>
        </article>
        <ULdisc>
          <Li>
            <SpanYellow>.env</SpanYellow> → raw configuration values
          </Li>
          <Li>
            <SpanYellow>config.py</SpanYellow> → Python class that reads them
          </Li>
          <Li>It’s just a plain text file with environment variables.</Li>
          <Li>
            <SpanYellow>.env</SpanYellow> is not a Python file.
          </Li>
        </ULdisc>
        <article className="my-8 text-lg font-semibold">
          <span className="rounded-md border-2 border-gray-400 p-1">
            config.py <SpanRed>without</SpanRed> .env{" "}
          </span>
        </article>
        <ULdisc>
          <Li>This is a special inner class recognized by Pydantic (BaseSettings inherits this behavior)</Li>
          <Li>It tells Pydantic how to load or configure the settings.</Li>
          <Li>
            “If a value is not provided in the system environment, also look for it in a file called <SpanYellow>.env</SpanYellow> .”
          </Li>
        </ULdisc>
        <PythonHighlight pythonCode={_1_} />
        <article className="my-8 text-lg font-semibold">
          <span className="rounded-md border-2 border-gray-400 p-1">
            config.py <SpanGreen>with</SpanGreen> .env{" "}
          </span>
        </article>
        <ULdisc>
          <Li>Now let's see how I use the .env file</Li>
          <Li>If .env is inside core/ → it won’t load.</Li>
          <Li>
            .env must be in the roor directory of project , same directory where <SpanYellow>main.py</SpanYellow>
          </Li>
          <Li>
            Because we run <SpanYellow>uvicorn main:app --reload</SpanYellow> from where main.py resides
          </Li>
        </ULdisc>
        <PythonHighlight pythonCode={_2_} />
        💡 Optional Improvement (More Professional), Use modern Pydantic v2 style (Cleaner for v2) :
        <PythonHighlight pythonCode={_3_} />
      </section>
    </MainChildArea>
  );
};

export default O4_ConfigPy;

const _1_ = `from pydantic.v1 import BaseSettings


class Settings(BaseSettings):
    DATABASE_URL: str = 'sqlite:///example.db'
    ECHO_SHOW_SQL: bool = True


settings = Settings()`;

const _2_ = `from pydantic.v1 import BaseSettings


class Settings(BaseSettings):
    DATABASE_URL: str
    ECHO_SHOW_SQL: bool

    class Config:
        env_file = ".env"


settings = Settings()`;

const _3_ = `from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    DATABASE_URL: str
    ECHO_SHOW_SQL: bool

    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()`;
