import { MainChildArea } from "../../../components";

const LoggingPropsIntro = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      In this section , I will show , how I can log, every class from any package I want on Spring boot app, including packages/classes from different
      packages that I import.
    </MainChildArea>
  );
};

export default LoggingPropsIntro;
