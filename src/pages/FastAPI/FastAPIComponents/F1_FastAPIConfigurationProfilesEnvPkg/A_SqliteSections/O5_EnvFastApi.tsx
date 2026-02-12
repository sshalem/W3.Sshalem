/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { PythonHighlight, SpanGreen, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O5_EnvFastApi = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        Let's see how to use <SpanYellow>.env</SpanYellow> file with <SpanYellow>config.py</SpanYellow>
        <article className="my-8 text-lg font-semibold">
          <span className="rounded-md border-2 border-gray-400 p-1">.env</span>
        </article>
        <ULdisc>
          <Li>
            <SpanYellow>.env</SpanYellow> does nothing by itself.
          </Li>
          <Li>
            <SpanYellow>.env</SpanYellow> is just a plain text file with environment variables.
          </Li>
          <Li>
            It must be:
            <ULdisc>
              <Li>Loaded by something (pydantic-settings, python-dotenv, Docker, OS, etc.)</Li>
              <Li>Or injected as real environment variables</Li>
            </ULdisc>
          </Li>
          <Li>
            So you must explicitly say , in <SpanYellow>config.py</SpanYellow>
            <PythonHighlight pythonCode={_1_} />
          </Li>
          <Li>
            That tells Pydantic, <SpanYellow>"Go read that file."</SpanYellow>
          </Li>
          <Li>
            <SpanYellow>config.py</SpanYellow> → Python class that reads them
          </Li>
          <Li>
            <SpanYellow>.env</SpanYellow> is not a Python file.
          </Li>
        </ULdisc>
        <article className="my-8 text-lg font-semibold">
          <span className="rounded-md border-2 border-gray-400 p-1">
            config.py <SpanGreen>with</SpanGreen> .env{" "}
          </span>
        </article>
        <ULdisc>
          <Li>Now let's see how I use the .env file</Li>
          <Li>If .env is inside core/ → it won’t load.</Li>
          <Li>
            <SpanYellow>.env</SpanYellow> must be in the <SpanYellow>root directory</SpanYellow> of project , same directory where{" "}
            <SpanYellow>main.py</SpanYellow>
          </Li>
          <Li>
            Because we run <SpanYellow>uvicorn main:app --reload</SpanYellow> from where main.py resides
          </Li>
        </ULdisc>
        <PythonHighlight pythonCode={_2_} />
        💡 Professional, modern Pydantic v2 style (Cleaner for v2) :
        <PythonHighlight pythonCode={_3_} />
      </section>
    </MainChildArea>
  );
};

export default O5_EnvFastApi;

const _1_ = `model_config = SettingsConfigDict(env_file=".env")`;

const _2_ = `DATABASE_URL=sqlite:///example.db
ECHO_SHOW_SQL=True`;

const _3_ = `from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    DATABASE_URL: str
    ECHO_SHOW_SQL: bool

    model_config = SettingsConfigDict(env_file=".env")


settings = Settings()`;
