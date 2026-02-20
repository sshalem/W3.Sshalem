/*


*/
import { MainChildArea } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O4_BuilderBestImpl = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        A class with Builder pattern
        <JavaHighlight javaCode={_1_} />
        Here is how to use :
        <JavaHighlight javaCode={_2_} />
      </section>
    </MainChildArea>
  );
};
export default O4_BuilderBestImpl;

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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	// static method which returns a Builder instance
	// This is called a Static Factory Method.
	public static Builder builder() {
		return new Builder();
	}

	@Override
	public String toString() {
		return "Window [name=" + name + ", type=" + type + ", price=" + price + "]";
	}

	/**
	 * static inner class Builder
	 */
	public static class Builder {

		private String name;
		private String type;
		private int price;

		public Builder() {
		}

		public Builder name(String name) {
			this.name = name;
			return this;
		}

		public Builder type(String type) {
			this.type = type;
			return this;
		}

		public Builder price(int price) {
			this.price = price;
			return this;
		}

		public Window build() {
			return new Window(this);
		}
	}
}`;

const _2_ = `Window win = Window.builder()
                            .name("shabtay")
                            .price(0)
                            .type("unknonwn")
                            .build();`;
