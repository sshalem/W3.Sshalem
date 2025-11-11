/*
/spring/application-properties/mongodb#MongoDBintro
MongoDB Intro --> (SPRING)(ApplicationProperties)(MongoDB Intro)
*/
import { useLocation } from "react-router-dom";
import { MainChildArea } from "../../../../../components";
import { useEffect } from "react";

const MongoDBIntro = ({ anchor }: { anchor: string }) => {
  // this will takes the url path : only from the hash sign
  // example : #about, #MyProjects
  const { hash } = useLocation();

  // Checks if url with hash is present
  // [1] remove '#' from hash
  // [2] find the element with assigned hash ,
  // "id" is found inside MainChildArea
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: "instant" });
      }
    }
  }, [hash]);

  return <MainChildArea anchor={anchor}></MainChildArea>;
};

export default MongoDBIntro;
