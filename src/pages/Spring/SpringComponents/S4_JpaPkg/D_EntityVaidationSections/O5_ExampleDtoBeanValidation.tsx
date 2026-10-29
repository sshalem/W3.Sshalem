/*


*/
import { MainChildArea } from "../../../../../components";
import { Highlight_JAVA } from "../../../../../components/Highlight";

const O5_ExampleDtoBeanValidation = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <Highlight_JAVA code={code}></Highlight_JAVA>
    </MainChildArea>
  );
};

export default O5_ExampleDtoBeanValidation;

const code = `public class UserDTO {

    @NotBlank
    private String username;

    @Email
    private String email;

    @Size(min = 8, max = 20)
    private String password;

    @Min(18)
    @Max(100)
    private int age;

    @Past
    private LocalDate birthDate;

    @Valid
    private AddressDTO address; // nested validation
}`;
