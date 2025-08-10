import { MainChildArea } from "../../../../components";

const SpringTopics = ({ anchor }: { anchor: string }) => {
  const subjects: string[] = ["ApplicationProperties", "Logging", "jpa", "RestAPI"];
  return (
    <MainChildArea anchor={anchor}>
      <div className="mx-4">
        <ul className="mx-8 list-decimal">
          {subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>
    </MainChildArea>
  );
};
export default SpringTopics;
