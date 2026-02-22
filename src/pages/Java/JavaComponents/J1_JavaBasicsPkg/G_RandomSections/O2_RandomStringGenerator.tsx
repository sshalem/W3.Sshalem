/*


*/

import { MainChildArea } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O2_RandomStringGenerator = ({ anchor }: { anchor: string }) => {
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
export default O2_RandomStringGenerator;

const _1_ = `import java.security.SecureRandom;
import java.util.Random;

public class RandomStringGenerator {

	public static void main(String[] args) {

		String generatedRandomString = randomStringGenerator(30);
		System.out.println(generatedRandomString);
	}

	public static String randomStringGenerator(int length) {

		Random random = new SecureRandom();
		String alphaBet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		StringBuilder randomString = new StringBuilder(length);

		int alphaBetStringLength = alphaBet.length();

		for (int i = 0; i < length; i++) {
			int nextInt = random.nextInt(alphaBetStringLength);
			char charAtAlphaBetString = alphaBet.charAt(nextInt);
			randomString.append(charAtAlphaBetString);
		}
		return new String(randomString);
	}
}`;
