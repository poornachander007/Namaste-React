import { createContext } from "react";

const UserContext = createContext({ loggedInUser: "default user" });

// console.log(UserContext);

export default UserContext;
