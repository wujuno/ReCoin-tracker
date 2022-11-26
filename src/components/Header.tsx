
import { Link } from "react-router-dom";
import { useRecoilState,  } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atom";

const Wrapper = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  border: 1px solid yellow;
  width: 500px;
  padding: 10px;
  font-size: 35px;
`;

const ToggleBtn = styled.button`

`;

function Header () {
    const [toggle ,setToggle] =  useRecoilState(isDarkAtom);
    const handleToggle = () => setToggle(prev => !prev);
    return (
        <Wrapper>
        <Link to="/">Coin Tracker</Link>
        <ToggleBtn onClick={handleToggle}>{toggle ?"Dark" : "Light"}</ToggleBtn>
        </Wrapper>
    )
}

export default Header;