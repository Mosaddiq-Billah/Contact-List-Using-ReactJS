import { useState, useRef } from "react";
import "./App.css";
// import Button from "./components/Button";
import Card from "./components/Card";
import LeaderCard from "./components/LeaderCard";

import { Heading, Flex, Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
// import { useDisclosure } from "@chakra-ui/hooks";
import { AddIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";

const users = [
  {
    id:1,
    first_name: "Mosaddiq",
    last_name: "Billah",
    Contact: "123456",
    imageURL: "",
    email: "mosaddiqbillah@gmail.com",
    relation: "Family"
  },
  {
    id:2,
    first_name: "Hashir",
    last_name: "Asmat",
    Contact: "123456",
    imageURL: "",
    email: "hashirasmat@gmail.com",
    relation: "Family"
  },
];

function App() {
  const [query, setQuery] = useState("");
  const [searchError, setSearchError] = useState(null);
  const [usersArray, setUsersArray] = useState(users);

  // Refs
  const first_nameRef = useRef();
  const last_nameRef = useRef();
  const numberRef = useRef();
  const imageRef = useRef();
  const emailRef = useRef();
  const relationRef = useRef();


  function onSearchChange(event) {
    setQuery(event.target.value);
    if (event.target.value.length >= 3) {
      setSearchError("");
    }
  }

  function onSearchClick() {
    if (query.length < 3) {
      setSearchError(
        "Search query must be equal to or greater than 3 characters"
      );
    } else {
      setSearchError(null);
      setUsersArray(usersArray.filter((user) => user.first_name.includes(query)));
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    if (
      first_nameRef.current.value &&
      last_nameRef.current.value &&
      numberRef.current.value &&
      imageRef.current.value &&
      emailRef.current.value &&
      relationRef.current.value
    ) {
      setUsersArray([
        {
          id: usersArray.length + 1,
          first_name: first_nameRef.current.value,
          last_name: last_nameRef.current.value,
          Contact: numberRef.current.value,
          imageURL: imageRef.current.value,
          email: emailRef.current.value,
          relation: relationRef.current.value,
        },
        ...usersArray,
      ]);
      first_nameRef.current.value = "";
      last_nameRef.current.value = "";
      numberRef.current.value = "";
      imageRef.current.value = "";
      emailRef.current.value ="";
      relationRef.current.value ="";
    }
  }


  return (
    <><>
      <Flex p="4" justify="center" align="center">
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj5tycgFPd01RbqS_CQ_sNW5LsMxAQZDm0IneBNVLBZA&s" w="100px" h="100px" />
        <Heading as="h1" textTransform="uppercase">
          Contact App
        </Heading>
      </Flex>
      <input
        type={"text"}
        placeholder={"Search User"}
        className={searchError && "input-error"}
        onChange={onSearchChange}
        value={query} />
      <button className="btn-custom" onClick={onSearchClick}>
        Search
      </button>

      <Box>
        <Heading>Add a Contact</Heading>
        <Card>
          <form onSubmit={submitHandler}>

            <div className="mt-3">
              <label>First Name</label>
              <input
                type={"text"}
                placeholder="Enter First Name"
                ref={first_nameRef} />
            </div>
            <div className="mt-3">
              <label>Last Name</label>
              <input
                type={"text"}
                placeholder="Enter Last Name"
                ref={last_nameRef} />
            </div>
            <div className="mt-3">
              <label>Contact No</label>
              <input
                type={"text"}
                placeholder="Enter Contact Number"
                ref={numberRef} />
            </div>
            <div className="mt-3">
              <label>ImageURL</label>
              <input
                type={"url"}
                placeholder="Enter Image URL"
                ref={imageRef}
                />
            </div>
            <div className="mt-3">
              <label>Email</label>
              <input
                type={"text"}
                placeholder="Enter Email"
                ref={emailRef} />
            </div>
            <div className="mt-3">
              <label>Relation</label>
              <input
                type={"text"}
                placeholder="i.e. Family, Friend, Business"
                ref={relationRef} />
            </div>
            <button className="btn-custom mt-3" type="submit">
              Add User
            </button>
          </form>
        </Card>
      </Box>

    </><Card className="w-50 mt-3">
        {usersArray.length ? (
          usersArray.map(function (user) {
            return (
              <LeaderCard
                key={user.id}
                f_name={user.first_name}
                l_name={user.last_name}
                email={user.email}
                number={user.Contact}
                imageUrl={user.imageURL} 
                relation={user.relation}/>
                
            );
          })
        ) : (
          <div>No records found</div>
        )}
      </Card></>
      
  );
}

export default App;