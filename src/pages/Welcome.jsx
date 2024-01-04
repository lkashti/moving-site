import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <Container>
      <h1 className="mb-10 text-center font-[Poppins] text-5xl font-bold text-gray-700">
        Welcome to Moving!
      </h1>
      <div className="flex justify-center gap-12">
        <Link to="/service-pick">
          <Button>New User</Button>
        </Link>
        <Button>Existing User</Button>
      </div>
    </Container>
  );
};

export default Welcome;
