/*


*/

import { MainChildArea } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O1_RandomNumberGenerator = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <section className="my-8">
          <JavaHighlight javaCode={_1_} />
        </section>
      </section>
    </MainChildArea>
  );
};
export default O1_RandomNumberGenerator;

const _1_ = `import java.util.Random;

public class RandomNumbersGenerator {
	public static void main(String[] args) {

		// randomize number between 0-9
		Random random = new Random();
		int r1 = random.nextInt(10);
		System.out.println(r1);

		// randomize number between 20-49
		int r2 = 20 + random.nextInt(30);
		System.out.println(r2);

		/*********************************
		 * Using the Math.random() method
		 **********************************/

		// randomize number between 0-100
		int r3 = (int) (Math.random() * 101);
		System.out.println(r3);
	}
}`;
