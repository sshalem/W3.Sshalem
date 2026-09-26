/*


*/
import { Li, MainChildArea, ULDecimal, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O3_BuilderCreataeImpl = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8">
          Before creating Builder, Let's create a Simple Class with fields G/S/tStr
          <div className="my-4">
            <ULdisc>
              <Li>First, create a regular class with fields, with 2 constructors(default and with parameters) , G/S/toStr</Li>
            </ULdisc>
          </div>
          <JavaHighlight javaCode={_1_} />
          Here is how to use ,Easy to create Intance of this class, :
          <JavaHighlight javaCode={_2_} />
        </article>
        <hr />
        <article className="my-8">
          Now, lets add <SpanYellow>Builder</SpanYellow> Implementation to a class
          <div className="my-4">
            <ULDecimal>
              <Li>
                create Inner static class with the name <SpanYellow>Builder</SpanYellow> , with :
                <ULdisc>
                  <Li>same fields of the Outer class</Li>
                  <Li>and default contructor</Li>
                </ULdisc>
              </Li>
              <Li>
                In the <strong>Outer class</strong>, create private Constructor with parameter<SpanYellow> Builder builder</SpanYellow>
              </Li>
              <Li>
                assign all the fields of Inner class <SpanYellow>Builder</SpanYellow> to outer class fields
              </Li>
              <Li>
                Create <SpanYellow>Static Factory Method</SpanYellow> in the Outer class , that retruns new Instance of{" "}
                <SpanYellow>Builder</SpanYellow>
              </Li>
              <Li>
                Create in the Inner class , methods that assign set values to the fields , and then retrun the <SpanRed>this</SpanRed> (which is the
                Builder object)
              </Li>
              <Li>
                create in the Inner class a <SpanYellow>build method</SpanYellow> , which returns the constructed Onject of the class
              </Li>
            </ULDecimal>
            <JavaHighlight javaCode={_3_} />
            We can intansitate the Window class in 2 ways:
            <ULDecimal>
              <Li>
                Regular way , default construction , or construction with parameters
                <JavaHighlight javaCode={_4_} />
              </Li>
              <Li>
                Using Builder , and I can pass No argument, partial arguments, all argumets (Thats the beuty of Builder)
                <JavaHighlight javaCode={_5_} />
              </Li>
            </ULDecimal>
          </div>
        </article>
      </section>
    </MainChildArea>
  );
};
export default O3_BuilderCreataeImpl;

const _1_ = `public class Window {

	private String name;
	private String type;
	private int price;

	public Window() {
		super();
	}

	private Window(Builder builder) {
		super();
		this.name = builder.name;
		this.type = builder.type;
		this.price = builder.price;
	}

	// G/S/toStoring
}`;

const _2_ = `		// Regular Instance creation
		Window obj1 = new Window();

		// Regular Instance creation , with arguments
		Window obj2 = new Window("reg", "tyhpe", 0);`;

const _3_ = `public class Window {

	private String name;
	private String type;
	private int price;

	public Window() {
		super();
	}

	// [2] - private Constructor with parameter  Builder builder 
	private Window(Builder builder) {
		super();
		// [3] assign fields of Inner class Builder , to outer class fields
		this.name = builder.name;
		this.type = builder.type;
		this.price = builder.price;
	}

	// [4]  This is called a Static Factory Method.
	public static Builder builder() {
		return new Builder();
	}

	// G/S/To.Str
	
	/**
	 * [1] static inner class Builder
	 */
	public static class Builder {

	// [1] same fields as Outer class
		private String name;
		private String type;
		private int price;

		// [1] default constructor
		public Builder() {
		}
		
		// [5]
		public Builder name(String name) {
			this.name = name;
			return this;
		}
		
		// [5]
		public Builder type(String type) {
			this.type = type;
			return this;
		}

		// [5]
		public Builder price(int price) {
			this.price = price;
			return this;
		}

		// [6] build method
		public Window build() {
			return new Window(this);
		}
	}
}`;

const _4_ = `Window window1 = new Window();
Window window2 = new Window("shabtay", "unknonwn", 0);`;

const _5_ = `Window build1 = Window.builder().build();
Window build2 = Window.builder().name("shabtay").build();
Window build3 = Window.builder().name("shabtay").price(0).type("unknonwn").build();
`;
