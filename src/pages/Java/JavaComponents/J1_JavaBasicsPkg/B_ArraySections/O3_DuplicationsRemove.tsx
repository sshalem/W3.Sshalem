/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanYellow } from "../../../../../components/Highlight";

const O3_DuplicationsRemove = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-8 text-lg font-semibold">Duplications remove + Create new Array</article>
        Write a class that remove duplications of integer numbers
        <ULdisc>
          <Li>
            example: If I get receive a array of <SpanYellow>[1 ,2 ,5 ,1 ,6 ,1 ,5 ,4 ,8]</SpanYellow> I should return{" "}
            <SpanYellow>[1 ,2 ,5 ,6, 4, 8]</SpanYellow>
          </Li>
          <Li>So , I need to create a dynamic array</Li>
        </ULdisc>
        <JavaHighlight javaCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O3_DuplicationsRemove;

const _1_ = `import java.util.Arrays;
import java.util.Random;

public class ArrayTargil_3_remove_duplocations {

	public static void main(String[] args) {

		/**
		 * Write a class that remove duplications of integer numbers. example: If I get
		 * receive a array of [1 ,2 ,5 ,1 ,6 ,1 ,5 ,4 ,8] I should return [1 ,2 ,5 ,6,
		 * 4, 8]
		 * 
		 * Need to create a dynamic array
		 */

		ArrayManipulation am = new ArrayManipulation();
		int[] generateRandomArray = am.generateRandomArray(10);
		int[] removeDuplications = am.removeDuplications(generateRandomArray);
		System.out.println(Arrays.toString(removeDuplications));
	}

}

class ArrayManipulation {

	public int[] generateRandomArray(int size) {

		int[] array = new int[size];
		Random random = new Random();

		// Generate an Array with Random numbers between 1 to 10
		for (int i = 0; i < size; i++) {
			array[i] = 1 + random.nextInt(10);
		}
		System.out.println(Arrays.toString(array));
		return array;
	}

	public int[] removeDuplications(int[] array) {

		/**
		 * check for duplications, and update the length on the dynamic array
		 */
		int dynamicArrayLength = calculateDynamicArrayLength(array);

		/**
		 * define new array with the length calculated in the above code
		 * dynamicArrayLength number. I copy The first element of the array
		 * dynamicArray[0] should be same as original array. I start to add to the
		 * dynamicArray from its index 1 --> dynamicArray[1].
		 */

		int[] arrayWithoutDuplication = createNewArrayWithoutDuplication(array, dynamicArrayLength);

		return arrayWithoutDuplication;

	}

	private int[] createNewArrayWithoutDuplication(int[] array, int dynamicArrayLength) {

		int[] dynamicArray = new int[dynamicArrayLength];
		dynamicArray[0] = array[0];
		int index = 1;

		boolean isDuplicated = false;

		for (int i = 1; i < array.length; i++) {
			for (int j = i - 1; 0 <= j; j--) {
				if (array[i] == array[j])
					isDuplicated = true;
			}
			if (isDuplicated == false) {
				dynamicArray[index] = array[i];
				index++;
			}
			isDuplicated = false;
		}
		return dynamicArray;

	}

	private int calculateDynamicArrayLength(int[] array) {
		/**
		 * this will store the length of new dynamicArray
		 */
		int dynamicArrayLength = array.length;
		boolean isDuplicated = false;

		/**
		 * check for duplicated numbers. If isDuplicated == true, the dynamicArrayLength
		 * is subtracted by 1
		 */
		for (int i = 0; i < array.length; i++) {
			for (int j = i + 1; j < array.length; j++) {
				if (array[i] == array[j])
					isDuplicated = true;
			}
			if (isDuplicated == true) {
				dynamicArrayLength--;
			}
			isDuplicated = false;
		}
		return dynamicArrayLength;
	}
}`;
