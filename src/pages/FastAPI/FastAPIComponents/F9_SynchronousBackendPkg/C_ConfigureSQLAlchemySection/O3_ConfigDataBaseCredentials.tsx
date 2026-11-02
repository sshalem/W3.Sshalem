/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { Highlight_ApplicationProperties, SpanEmerald, SpanYellow } from "../../../../../components/Highlight";

const O3_ConfigDataBaseCredentials = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <div className="mb-8 text-2xl font-semibold"></div>

        <ULDecimal>
          <Li>
            Create <SpanEmerald>.env</SpanEmerald> in the project root:
            <Highlight_ApplicationProperties code={_1_}></Highlight_ApplicationProperties>
          </Li>
          <Li>
            Next, create <SpanEmerald>app/config/settings.py</SpanEmerald>
            <ULdisc>
              Important concepts, This is conceptually similar to Spring Boot's <SpanYellow>@ConfigurationProperties</SpanYellow>
              <br />
              <br />
              <Li>
                <SpanEmerald>BaseSettings</SpanEmerald> : Loads and validates configuration.
              </Li>
              <Li>
                <SpanEmerald>SettingsConfigDict</SpanEmerald> : Configures how settings are loaded.
              </Li>
              <Li>
                <SpanEmerald>env_file</SpanEmerald> : Reads our <SpanEmerald>.env</SpanEmerald> file.
              </Li>
              <Li>
                <SpanEmerald>settings</SpanEmerald> : A shared configuration object.
              </Li>
            </ULdisc>
            <Highlight_ApplicationProperties code={_2_}></Highlight_ApplicationProperties>
          </Li>
        </ULDecimal>
      </section>
    </MainChildArea>
  );
};

export default O3_ConfigDataBaseCredentials;

const _1_ = `APP_NAME=Customer Management API

DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=customer_management
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres`;

const _2_ = `from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):

    APP_NAME: str

    DATABASE_HOST: str
    DATABASE_PORT: int
    DATABASE_NAME: str
    DATABASE_USERNAME: str
    DATABASE_PASSWORD: str

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8"
    )


settings = Settings()`;
