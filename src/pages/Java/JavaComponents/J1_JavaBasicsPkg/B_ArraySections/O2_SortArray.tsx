/*


*/
import { MainChildArea } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";

const O2_SortArray = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="text-lg">Sort array</article>
        <JavaHighlight javaCode={_1_} />
      </section>
    </MainChildArea>
  );
};
export default O2_SortArray;

const _1_ = `import java.util.Arrays;

public class SortArray {

	public static void main(String[] args) {

		int[] arr = { 2, 7, 4, 5, 11, -4, -2, 0, -7, 10 };
		int[] sortedArr = sort(arr);

		System.out.println(Arrays.toString(sortedArr));
	}

  	// This sorts the array in Ascending order
		// If I want to sort in Descending order , 
		// Need to chage the sign in the if statement  (arr[i] < arr[j])

	public static int[] sort(int[] arr) {
		int temp;		
		for (int i = 0; i < arr.length; i++) {
			for (int j = i + 1; j < arr.length; j++) {
				if (arr[i] > arr[j]) {
					temp = arr[j];
					arr[j] = arr[i];
					arr[i] = temp;
				}
			}
		}
		return arr;
	}
}`;
