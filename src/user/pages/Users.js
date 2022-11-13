import React from "react";
import UsersList from "../components/UsersList.js";

const Users = () => {
    const USERS = [
        {
        id: "u1",
        name: "mixer",
        image: "https://www.africanoverlandtours.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg",
        places: 3
    }
];

    return <UsersList items={USERS} />;
};
export default Users