import React from "react";
import tw from "tailwind-styled-components";

const Homepage = () => {
  return (
    <div>
      <Wrapper>
        <Map>I am Map</Map>
        <ActionItems>Start</ActionItems>
      </Wrapper>
    </div>
  );
};

export default Homepage;

const Wrapper = tw.div`
flex flex-col  h-screen bg-gray-900  text-2xl text-white

   
`;
const ActionItems = tw.div`
flex-1
 `;

const Map = tw.div`
flex-1
 `;
