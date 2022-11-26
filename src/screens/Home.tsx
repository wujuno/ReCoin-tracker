import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import styled from "styled-components";
import { fetchCoins } from "../api";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  width: 500px;
  height: 80vh;
  margin-top:30px;

`;

function Home () {
    const {data , isLoading} = useQuery(["allCoins"],fetchCoins);
    console.log(data);

    return (
        <Wrapper>
            <h1>hello</h1>
        </Wrapper>
    )
}

export default Home;