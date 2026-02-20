/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O2_BuilderImpl = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        A class with Builder pattern
        <ULdisc>
          <Li>
            Create a Class <SpanYellow>User</SpanYellow> with private fields
          </Li>
          <Li>
            Create an Inner static class <SpanYellow>Builder</SpanYellow> with same private fields
          </Li>
          <Li>
            Create Private Constructor, pass the Inner class <SpanYellow>Builder</SpanYellow> as parameter
          </Li>
          <Li>
            assign the fields of the <SpanYellow>Builder</SpanYellow> to the fields to the <SpanYellow>User</SpanYellow> , respectevly
          </Li>
        </ULdisc>
        <JavaHighlight javaCode={_1_} />
        Here is how to use :
        <JavaHighlight javaCode={_2_} />
      </section>
    </MainChildArea>
  );
};
export default O2_BuilderImpl;

const _1_ = `public class User {

	private String firstName; // required
	private String lastName; // required
	private int age; // optional
	private String phone; // optional
	private String address; // optional

	private User() {
		super();
	}

	private User(Builder builder) {
		this.firstName = builder.firstName;
		this.lastName = builder.lastName;
		this.age = builder.age;
		this.phone = builder.phone;
		this.address = builder.address;
	}

	@Override
	public String toString() {
		return "User [firstName=" + firstName + ", lastName=" + lastName + ", age=" + age + ", phone=" + phone
				+ ", address=" + address + "]";
	}

	// Static nested Builder class
	public static class Builder {

		// Required fields
		private String firstName;
		private String lastName;

		// Optional fields - initialized to default values
		private int age;
		private String phone;
		private String address;

		public Builder(String firstName, String lastName) {
			this.firstName = firstName;
			this.lastName = lastName;
		}

		public Builder age(int age) {
			this.age = age;
			return this;
		}

		public Builder phone(String phone) {
			this.phone = phone;
			return this;
		}

		public Builder address(String address) {
			this.address = address;
			return this;
		}

		public User build() {
			return new User(this);
		}

	}
}`;

const _2_ = `User user = new User.Builder("John", "Doe")
                    .age(30)
                    .phone("1234567890")
                    .address("New York")
                    .build();`;
