/*
/spring/application-properties/command-line-initialization#2.CommandLineRunnerexample
CommandLineRunner example --> (SPRING)(ApplicationProperties)(CommlineRunner example)
*/
import { MainChildArea } from "../../../../../components";
import { Highlight_JAVA } from "../../../../../components/Highlight";
import Li from "../../../../../components/ui/Li";
import ULDecimal from "../../../../../components/ui/ULDecimal";
import ULdisc from "../../../../../components/ui/ULdisc";

const O2_CommLineImpl = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <p className="my-4 text-lg font-semibold">🧪 1. CommandLineRunner (or ApplicationRunner)</p>
        <p>
          <strong>Purpose</strong> : Run custom logic after the application context is fully started (including repositories, services, etc.).
        </p>
        <div className="my-8">
          ✅ Use when:
          <ULdisc>
            <Li>You need to seed the database via repositories or services.</Li>
            <Li>You want full control over startup logic.</Li>
            <Li>You want to run something after everything is wired and started.</Li>
          </ULdisc>
        </div>
        <div className="my-8">
          📝 Notes:
          <ULdisc>
            <Li>Runs once after the application starts.</Li>
            <Li>You can have multiple runners, ordered via @Order(1) etc.</Li>
          </ULdisc>
          <div className="my-8">
            🔍 Example:
            <div className="my-8">
              🧭 Execution Point in Lifecycle (Timeline)
              <ULDecimal>
                <Li>Spring context starts</Li>
                <Li>Beans are instantiated</Li>
                <Li>Dependencies injected (@Autowired)</Li>
                <Li>@PostConstruct methods run</Li>
                <Li>Spring context is fully initialized</Li>
                <Li>Web server (Tomcat, Jetty) starts</Li>
                <Li>👉 CommandLineRunner.run() executes</Li>
                <Li>App is ready to accept requests</Li>
              </ULDecimal>
            </div>
            <Highlight_JAVA code={post_construct}></Highlight_JAVA>
          </div>
        </div>
      </section>
    </MainChildArea>
  );
};

export default O2_CommLineImpl;

const post_construct = `@SpringBootApplication
public class Application implements CommandLineRunner {

	@Autowired
	private ProductRepository productRepository;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		List<ProductEntity> _products = 
				IntStream
					.rangeClosed(1, 200)
					.mapToObj(i -> new ProductEntity("product" + i, new Random().nextInt(100), new Random().nextInt(50_000)))
					.collect(Collectors.toList());
		
		productRepository.saveAll(_products);
	}

}`;
