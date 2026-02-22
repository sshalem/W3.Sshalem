/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O1_FunctionalInterfaces = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl">✅ Functional interfaces </article>
        <ULdisc>
          <Li>A functional interface must have exactly ONE abstract method.</Li>
          <Li>The “single abstract method” rule is what makes lambdas possible in Java.</Li>
          <Li>Below is the list of new functional interfaces introduced in Java 8.</Li>
          <Li>
            They have kept in <strong>java.util.function</strong> package
          </Li>
          <Li>Streams work hand-in-hand with Functional interfaces and lambdas.</Li>
          <Li>Without it:
            
          </Li>
        </ULdisc>
        <JavaHighlight javaCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O1_FunctionalInterfaces;

const _1_ = `@FunctionalInterface
public interface Predicate<T> {
	boolean test(T t);
}

@FunctionalInterface
public interface BiPredicate<T, U> {
	boolean test(T t, U u);
}

@FunctionalInterface
public interface Supplier<T> {
	T get();
}

@FunctionalInterface
public interface Consumer<T> {
	void accept(T t);
}

@FunctionalInterface
public interface BiConsumer<T, U> {
	void accept(T t, U u);
}

@FunctionalInterface
public interface Function<T, R> {
	// T t - Function argument 
	// R - result
	R apply(T t);
}

@FunctionalInterface
public interface BiFunction<T, U, R> {
	R apply(T t, U u);
}

@FunctionalInterface
public interface UnaryOperator<T> extends Function<T, T> {
	// Same as Function , But , Argument and Result should be the same Type (T)
	// UnLike in Function , That takes T as Argument and returns R 
}`;
