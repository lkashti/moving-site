import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const ServicePick = () => {
  return (
    <Container>
        <div className="mb-10 text-center font-[Poppins] text-2xl font-bold text-gray-700">
          Hello User<br></br>Pick the service you need
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2 w-fit mx-auto">
          <Button>A Storage Unit</Button>

          <Link to="/transportation-order">
            <Button>Moving Service</Button>
          </Link> 

          <Button>Boxes</Button>
          <Button>Placeholder</Button>
        </div>
    </Container>
  );
};

export default ServicePick;
