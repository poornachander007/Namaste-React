import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4">
      <h1>
        Hey.. <span className="text-2xl text-blue-950">{loggedInUser}</span>{" "}
        Here is Grocery for you...
      </h1>
      <h1>
        This is Grocery, it contains huge number of 'Child' Components....
        <br />
        and it's <span className="text-xl text-red-500">Lazy Loading...</span>
      </h1>
    </div>
  );
};

export default Grocery;
