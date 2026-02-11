/*


*/

import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, PythonHighlight, SpanYellow } from "../../../../../components/Highlight";

const O4_ConfigPy = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg font-semibold"></article>
        Let's see what the usage of <SpanYellow>config.py</SpanYellow>
        <article className="my-8 text-lg font-semibold">
          <span className="rounded-md border-2 border-gray-400 p-1">⭐ 1. Database engine</span>
        </article>
      </section>
    </MainChildArea>
  );
};

export default O4_ConfigPy;

const _1_ = `engine = create_engine(
    settings.DATABASE_URL,
    echo=settings.ECHO_SHOW_SQL,  # → print every SQL statement to the console
    connect_args={"check_same_thread": False}  # → SQLite feature only
)`;
