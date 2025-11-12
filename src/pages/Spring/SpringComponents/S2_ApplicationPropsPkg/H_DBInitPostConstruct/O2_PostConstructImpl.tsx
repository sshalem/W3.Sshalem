/*
/spring/application-properties/post-construct-initialization#2.@PostConstructexample
@PostConstruct example --> (SPRING)(ApplicationProperties)(2.@PostConstruct example)
*/
import { MainChildArea } from "../../../../../components";
import { JavaHighlight } from "../../../../../components/Highlight";
import SpanGrey from "../../../../../components/Highlight/SpanGrey";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";
import ULdisc from "../../../../../components/ui/ULdisc";

const O2_PostConstructImpl = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🏗️ 2. @PostConstruct</p>
        <p>
          <strong>Purpose</strong> : Execute code right after the bean is created and dependencies are injected.
        </p>
        <div className="my-8">
          ✅ Use when:
          <ULdisc>
            <Li>You need to do lightweight initialization logic inside a single bean.</Li>
            <Li>You don’t need to control execution order between components.</Li>
          </ULdisc>
        </div>
        <div className="my-8">
          ⚠️ Caution:
          <ULdisc>
            <Li>
              Runs before the full application is started, so:
              <ULdisc>
                <Li>Avoid using logic that depends on CommandLineRunner code.</Li>
                <Li>Make sure all needed dependencies (like database connections) are available.</Li>
              </ULdisc>
            </Li>
          </ULdisc>
        </div>
        <div className="my-8">
          🔍 Example:
          <div className="my-8">
            ✅ What happens:
            <ULDecimal>
              <Li>
                Spring creates <SpanGrey>ProductDaoImpl</SpanGrey> bean
              </Li>
              <Li>
                Injects <SpanGrey>ProductRepository</SpanGrey> (can be @Autowired fields or constructor)
              </Li>
              <Li>
                Calls <SpanGrey>initDB()</SpanGrey> — because of 👉 <SpanGrey>@PostConstruct</SpanGrey>
              </Li>
              <Li>Bean is fully initialized</Li>
              <Li>Full application context is initialized</Li>
              <Li>Web server (Tomcat, Jetty) starts</Li>
              <Li>CommandLineRunner.run() executes (If wrote a code for it to run)</Li>
              <Li>App is ready to accept requests</Li>
            </ULDecimal>
          </div>
          <JavaHighlight javaCode={person_post_construct}></JavaHighlight>
        </div>
      </section>
    </MainChildArea>
  );
};

export default O2_PostConstructImpl;

const person_post_construct = `@Service
public class PersonServiceImpl implements PersonService {

  @Autowired
	private PersonRepository personRepository;

	@Override
	public List<Person> getAllPersons() {
		return personRepository.findAll();
	}

	@PostConstruct
	public void initDB() {
		List<Person> persons = IntStream.rangeClosed(1, 10)
				.mapToObj(i -> {
					return new Person(
							UUID.randomUUID().toString().replaceAll("[^A-Za-z]", ""), 
							UUID.randomUUID().toString().replaceAll("[^A-Za-z]", ""), 
							new Random().nextInt(100), 
							new Random().nextBoolean() ? "male" : "female");
				})
				.collect(Collectors.toList());
		
		personRepository.saveAll(persons);
	}
}`;
