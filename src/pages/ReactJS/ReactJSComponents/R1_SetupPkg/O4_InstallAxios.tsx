/*


*/
import { IMG, MainChildArea } from "../../../../components";
import { Highlight_BATCH, Highlight_JSX, SpanBlue, SpanGreen, SpanRed } from "../../../../components/Highlight";
import setup_axios_1 from "../../../../assets/setup_axios_1.jpg";

const O4_InstallAxios = ({ anchor }: { anchor: string }) => {
  return (
    <MainChildArea anchor={anchor}>
      <ul className="my-4 ml-8 list-decimal">
        <li className="my-1">
          Install Axios <Highlight_BATCH batchCode={axios}></Highlight_BATCH>
        </li>
        <li className="my-1">
          create <SpanGreen>utils</SpanGreen> folder , and iside it , create a file named<SpanGreen>axiosInstance.tsx</SpanGreen> , where I create an
          Instance of axios
          <IMG img_name={setup_axios_1}></IMG>
        </li>
        <li className="my-1">
          Copy/paste the code below of creating an axios instance in <SpanGreen>axiosInstance.tsx</SpanGreen>
          <Highlight_JSX code={axios_instance}></Highlight_JSX>
        </li>
        <li className="my-1">In order to use it in other components , need to do the following</li>
        <li className="my-1">import axios instance to the component I want to use it</li>
        <li className="my-1">write the code below to fetch data from server</li>
        <li className="my-1">
          Axios Code for <SpanBlue>get</SpanBlue> method <Highlight_JSX code={axios_get}></Highlight_JSX>
        </li>
        <li className="my-1">
          Axios Code for <SpanGreen>post</SpanGreen> method <Highlight_JSX code={axios_post}></Highlight_JSX>
        </li>
        <li className="my-1">
          Axios Code for <SpanGreen>put</SpanGreen> method <Highlight_JSX code={axios_put}></Highlight_JSX>
        </li>
        <li className="my-1">
          Axios Code for <SpanRed>delete</SpanRed> method <Highlight_JSX code={axios_delete}></Highlight_JSX>
        </li>
      </ul>
    </MainChildArea>
  );
};

export default O4_InstallAxios;

const axios = `npm install axios`;
const axios_instance = `import axios from "axios";

// BASE_URL for custom instances
const BASE_URL = "http://localhost:8080";

const productsController = axios.create({
  baseURL: \`\${BASE_URL}/api/products\`,
  headers: {
    Accept: "application/json",
  },
});

export { products };`;

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
