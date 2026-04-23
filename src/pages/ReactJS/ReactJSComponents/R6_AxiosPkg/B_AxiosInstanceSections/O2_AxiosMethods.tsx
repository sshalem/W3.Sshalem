/*


*/
import { Li, MainChildArea, ULdisc } from "../../../../../components";
import { JsxHighlight, SpanBlue, SpanGreen, SpanRed, SpanYellow } from "../../../../../components/Highlight";

const O2_AxiosMethods = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <section className="my-8">
        <article className="my-4 text-xl font-semibold"> 🧠 Axios methods</article>
        <div>
          <ULdisc>
            <Li>In order to use it in other components , need to do the following</Li>
            <Li>
              Import <SpanYellow>axios instance</SpanYellow> to the component I want to use it
            </Li>
            <Li>
              Write the code below to fetch data from server
              <div className="my-8"></div>
            </Li>

            <Li>
              <div className="text-xl">
                <SpanBlue>get method</SpanBlue>
              </div>
              <JsxHighlight jsxCode={axios_get}></JsxHighlight>
            </Li>
            <Li>
              <div className="text-xl">
                <SpanGreen>post method</SpanGreen>
              </div>
              <JsxHighlight jsxCode={axios_post}></JsxHighlight>
            </Li>
            <Li>
              <div className="text-xl">
                <SpanGreen>put method</SpanGreen>
              </div>
              <JsxHighlight jsxCode={axios_put}></JsxHighlight>
            </Li>
            <Li>
              <div className="text-xl">
                <SpanRed>delete method</SpanRed>
              </div>
              <JsxHighlight jsxCode={axios_delete}></JsxHighlight>
            </Li>
          </ULdisc>
        </div>
      </section>
    </MainChildArea>
  );
};

export default O2_AxiosMethods;

const axios_get = `import { useEffect } from "react";
import { products } from "../utils/axiosInstance";

const Ecommerce = () => {
  const getData = async () => {
    try {
       const result = await productsController.get("/getAllProducts");
       console.log(result.data);
    } catch (error) {
       console.error("Error:", error);
    }
  };
   
  useEffect(() => {
    getData();
  },[]);

  return (
    <div></div>
  );
};

export default Ecommerce;`;

const axios_post = `import { useEffect } from "react";
import { products } from "../utils/axiosInstance";

const Ecommerce = () => {

  const data = {
      name: "John Doe",
      email: "john@example.com"
  }

  const addJob = async () => {
    try {
       const response = await productsController.post(\`/addJob\`, data, {
          headers: {
            Authorization: \`Bearer \${localStorage.getItem('token')}\`,
          },
       });
        console.log(result.data);
    } catch (error) {
        console.error("Error:", error);
    }
  };

  useEffect(() => {
    addJob();
  },[]);

  return (
    <div></div>
  );
};

export default Ecommerce;`;

const axios_put = `import { useEffect } from "react";
import { products } from "../utils/axiosInstance";

const Ecommerce = () => {

  const data = {
      name: "John Doe",
      email: "john@example.com"
  }

  const updateJob = async () => {
    try {
       const response = await productsController.put(\`/addJob\`, data, {
          headers: {
            Authorization: \`Bearer \${localStorage.getItem('token')}\`,
          },
       });
        console.log(result.data);
    } catch (error) {
        console.error("Error:", error);
    }
  };

  useEffect(() => {
    updateJob();
  },[]);

  return (
    <div></div>
  );
};

export default Ecommerce;`;

const axios_delete = `import { useEffect } from "react";
import { products } from "../utils/axiosInstance";

const Ecommerce = () => {

  const data = {
      name: "John Doe",
      email: "john@example.com"
  }

  const deleteJob = async () => {
    try {
       const response = await productsController.delete(\`/deleteJob\`, {
          headers: {
            Authorization: \`Bearer \${localStorage.getItem('token')}\`,
          },
       });
        console.log(result.data);
    } catch (error) {
        console.error("Error:", error);
    }
  };

  useEffect(() => {
    deleteJob();
  },[]);

  return (
    <div></div>
  );
};

export default Ecommerce;`;
