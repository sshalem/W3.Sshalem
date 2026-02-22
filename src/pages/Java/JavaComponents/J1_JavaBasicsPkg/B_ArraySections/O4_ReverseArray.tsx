/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O4_ReverseArray = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">Reverse Array</article>
        Create an Array that reverse a given array order
        <ULdisc>
          <Li>
            For example: for input of <SpanYellow>[6, 8, 4, 2, 7, 5]</SpanYellow> the result should be <SpanYellow>[5, 7, 2, 4, 8, 6]</SpanYellow>
          </Li>
          <Li>Create an array[10] of numbers with Random values between 0-10 to be used as input </Li>
          <Li>print the array before and after reversing</Li>
        </ULdisc>
        <JavaHighlight javaCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O4_ReverseArray;

const _1_ = `import java.util.Arrays;
import java.util.Random;

public class ArrayTargil_4 {

	public static void main(String[] args) {
		
		/**
		 * Create an Array that reverse a given array order
		 * For example: for input of {6,8,4,2,7,5} the result should be {5,7,2,4,8,6}
		 * Create an array[10] of numbers with Random values between 0-10 o be used as input
		 * print the array before and after reversing
		 */
		
		int size = 10;
		int array[] = new int[size];
		int reversedArray[] = new int[size];
		Random r = new Random();
		
		// Initialize the array with random numbers
		for (int i = 0; i < array.length; i++) {
			array[i] = 1 + r.nextInt(10);			
		}
		
		for (int i = 0; i < array.length; i++) {
			reversedArray[size-1-i]=array[i];
		}
		
		System.out.println(Arrays.toString(array));
		System.out.println(Arrays.toString(reversedArray));		
		
	}
}`;
