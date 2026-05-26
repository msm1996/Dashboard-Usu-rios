import styled from "styled-components";

const HeaderContainer = styled.div`
  background: #010e1c;
  color: #fffbfb;
  padding: 20px;
  font-size: 50px;
  font-weight: bold;
  text-align: center;

  width: 100%;

  @media (max-width: 768px) {
    font-size: 32px;
    padding: 17px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    padding: 12px;
  }
`;

function Header() {
  return <HeaderContainer>Dashboard</HeaderContainer>;
}

export default Header;