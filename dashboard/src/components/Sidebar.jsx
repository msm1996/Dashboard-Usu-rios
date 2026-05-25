import styled from "styled-components";

const Side = styled.div`
  width: 200px;
  background: #010e1c;
  color: white;
  padding: 20px;
  font-weight: bold;
  font-size: 28px;
  text-align: center;

  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    font-size: 22px;
    padding: 12px;
  }
`;

function Sidebar() {
  return <Side>Menu</Side>;
}

export default Sidebar;