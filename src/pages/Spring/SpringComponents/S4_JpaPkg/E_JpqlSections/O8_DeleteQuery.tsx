import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JavaHighlight, SpanGreen, SpanGrey, SpanRed } from "../../../../../components/Highlight";

const O8_DeleteQuery = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        When <SpanGrey>delete</SpanGrey> operetion is executed , there might be situations , where :
        <ULdisc>
          <Li>
            the <SpanGrey>delete SQL</SpanGrey> <SpanRed>not executed</SpanRed>
          </Li>
          <Li>
            the <SpanGrey>delete SQL</SpanGrey> <SpanGreen>executed</SpanGreen> , BUT, Row in DB still exist (because Operations is Rolled Back)
          </Li>
        </ULdisc>
      </section>

      <hr />
      <section className="my-8">
        <article className="my-8">
          <p className="text-lg font-semibold">🧩 1. Delete - using Data Repository methods</p>
        </article>
        In this example I delete : <br />
        <ULdisc>
          <Li>using Data Repository methods</Li>
          <Li>
            No <SpanGrey>@Transactional</SpanGrey> annotation on service method
          </Li>
          <Li>SQL delete executed</Li>
          <Li>Row deleted from DB</Li>
          <Li>
            <SpanRed>Why Row deleted from DB?</SpanRed>
            <ULdisc>
              <Li>Because , It's a Data Repository method</Li>
            </ULdisc>
          </Li>
        </ULdisc>
        <JavaHighlight javaCode={code_1}></JavaHighlight>
      </section>
    </MainChildArea>
  );
};

export default O8_DeleteQuery;

const code_1 = `@Service
public class UserService {

	public static int current = 1;

	@Autowired
	private UserRepository userRepository;

	public UserEntity deleteAndCreateTest(UserEntity user) {
		if (current > 2) {
			userRepository.deleteById(1L);
			throw new RuntimeException("Check if delete User finsished or RollBack from DB performed");
		}
		current++;
		return userRepository.save(user);
	}

}`;
