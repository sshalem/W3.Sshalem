/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { SpanGreen, SpanGrey, SpanRed } from "../../../../../components/Highlight";
import { DetailsSummary, TreeComponent } from "../../../../../components/Tree";

const O2_ExceptionsHierarchy = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <ULdisc>
          <Li>Python organizes exceptions in a tree-like structure, where all exceptions ultimately inherit from BaseException</Li>
          <Li>
            All exceptions in Python inherit from <SpanGreen>BaseException</SpanGreen>.
          </Li>
          <Li>
            💡 <strong>Tip</strong>:
            <ULdisc>
              Usually you catch <SpanGrey>Exception</SpanGrey>, not <SpanRed>BaseException</SpanRed>, because BaseException includes system-exiting
              exceptions.
            </ULdisc>
          </Li>
        </ULdisc>
      </section>
      <section className="my-8">
        🔹 <strong>Notes</strong>
        <ULdisc>
          <Li>
            All exceptions inherit from <SpanGrey>BaseException</SpanGrey>, but usually you catch subclasses of <SpanGrey>Exception</SpanGrey>.
          </Li>
          <Li>
            <SpanGrey>SystemExit</SpanGrey>, <SpanGrey>KeyboardInterrupt</SpanGrey>, <SpanGrey>GeneratorExit</SpanGrey> are{" "}
            <strong>special system-level exceptions</strong> and usually <strong>should not be caught</strong>.
          </Li>
          <Li>
            <SpanGrey>OSError</SpanGrey> is a <strong>big parent for file/network errors</strong>.
          </Li>
          <Li>
            <SpanGrey>Warning</SpanGrey> is technically not an error, but Python allows converting them to exceptions if needed.
          </Li>
        </ULdisc>
      </section>

      <section className="my-8">
        <article className="ml-5">
          <DetailsSummary path="BaseException" componentName={"→ All exceptions in Python inherit from BaseException."} open={true}>
            <ul className="css-ul">
              <li>
                <DetailsSummary path="SystemExit" componentName=" → raised by sys.exit()">
                  <ul className="css-ul">
                    <li>
                      <li>
                        <TreeComponent componentName="__init.py__" folder="__init.py__"></TreeComponent>
                      </li>
                      <li>
                        <TreeComponent componentName="settings.py" folder="settings.py"></TreeComponent>
                      </li>
                      <li>
                        <TreeComponent componentName="urls.py" folder="urls.py"></TreeComponent>
                      </li>
                      <li>
                        <TreeComponent componentName="asgi.py" folder="asgi.py"></TreeComponent>
                      </li>
                      <li>
                        <TreeComponent componentName="wsgi.py" folder="wsgi.py"></TreeComponent>
                      </li>
                    </li>
                  </ul>
                </DetailsSummary>
                <DetailsSummary path="KeyboardInterrupt" componentName="→ raised when user presses Ctrl+C">
                  <ul className="css-ul">
                    <li>
                      <TreeComponent componentName="models.py" folder="models.py"></TreeComponent>
                    </li>
                    <li>
                      <TreeComponent componentName="views.py" folder="views.py"></TreeComponent>
                    </li>
                    <li>
                      <TreeComponent componentName="admin.py" folder="admin.py"></TreeComponent>
                    </li>
                    <li>
                      <TreeComponent componentName="migrations/" folder="migrations/"></TreeComponent>
                    </li>
                  </ul>
                </DetailsSummary>
                <DetailsSummary path="GeneratorExit" componentName="→ raised when a generator is closed">
                  <ul className="css-ul">
                    <li>
                      <TreeComponent componentName="models.py" folder="models.py"></TreeComponent>
                    </li>
                    <li>
                      <TreeComponent componentName="views.py" folder="views.py"></TreeComponent>
                    </li>
                    <li>
                      <TreeComponent componentName="admin.py" folder="admin.py"></TreeComponent>
                    </li>
                    <li>
                      <TreeComponent componentName="migrations/" folder="migrations/"></TreeComponent>
                    </li>
                  </ul>
                </DetailsSummary>
                <DetailsSummary path="Exception" componentName="→ most user-defined and runtime exceptions inherit from this">
                  <ul className="css-ul">
                    <li>
                      <DetailsSummary
                        path="ArithmeticError"
                        componentName=" → FloatingPointError , OverflowError , ZeroDivisionError"
                      ></DetailsSummary>
                    </li>
                    <li>
                      <TreeComponent componentName="AssertionError" folder=""></TreeComponent>
                    </li>
                    <li>
                      <TreeComponent componentName="AttributeError" folder=""></TreeComponent>
                    </li>
                    <li>
                      <TreeComponent componentName="BufferError" folder=""></TreeComponent>
                    </li>
                    <li>
                      <TreeComponent componentName="EOFError" folder=""></TreeComponent>
                    </li>
                    <li>
                      <DetailsSummary path="ImportError" componentName=" → ModuleNotFoundError"></DetailsSummary>
                    </li>
                    <li>
                      <DetailsSummary path="LookupError" componentName=" → IndexError , KeyError"></DetailsSummary>
                    </li>
                    <li>
                      <TreeComponent componentName="MemoryError" folder=""></TreeComponent>
                    </li>
                    <li>
                      <DetailsSummary path="NameError" componentName=" → UnboundLocalError"></DetailsSummary>
                    </li>
                    <li>
                      <DetailsSummary path="OSError" componentName=" → FileNotFoundError , PermissionError , TimeoutError"></DetailsSummary>
                    </li>
                    <li>
                      <TreeComponent componentName="ReferenceError" folder=""></TreeComponent>
                    </li>
                    <li>
                      <DetailsSummary path="RuntimeError" componentName=" → NotImplementedError , RecursionError"></DetailsSummary>
                    </li>
                    <li>
                      <TreeComponent componentName="StopIteration" folder=""></TreeComponent>
                    </li>
                    <li>
                      <TreeComponent componentName="StopAsyncIteration" folder=""></TreeComponent>
                    </li>
                    <li>
                      <DetailsSummary path="SyntaxError" componentName=" → IndentationError , TabError"></DetailsSummary>
                    </li>
                    <li>
                      <TreeComponent componentName="TypeError" folder=""></TreeComponent>
                    </li>
                    <li>
                      <DetailsSummary path="ValueError" componentName=" → UnicodeError"></DetailsSummary>
                    </li>
                    <li>
                      <DetailsSummary
                        path="Warning"
                        componentName=" → DeprecationWarning , PendingDeprecationWarning , RuntimeWarning , SyntaxWarning , UserWarning , FutureWarning , etc..."
                      ></DetailsSummary>
                    </li>
                  </ul>
                </DetailsSummary>
              </li>
            </ul>
          </DetailsSummary>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O2_ExceptionsHierarchy;
