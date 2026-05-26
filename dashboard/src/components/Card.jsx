import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  background: white;
  padding: 20px;
  border-radius: 16px;
  text-align: center;
  cursor: pointer;
  font-size: 18px;
  transition: 0.3s;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);

  width: 100%;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-6px) scale(1.02);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 16px;
    font-size: 16px;
  }
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const LevelBadge = styled.span`
  display: inline-block;
  margin-top: 10px;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  color: white;

  background-color: ${({ level }) =>
    level === "Iniciante"
      ? "#4caf50"
      : level === "Intermediário"
      ? "#ff9800"
      : "#f44336"};

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 5px 11px;
  }
`;


function Card({ id, name, email, phone, company, level }) {
  const navigate = useNavigate();

  return (
    <Box onClick={() => navigate(`/user/${id}`, { state: { level } })}>
      <img
        src={`https://ui-avatars.com/api/?name=${name}`}
        alt={name}
        style={{ borderRadius: "50%", marginBottom: "10px" }}
      />
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{company}</p>

      <LevelBadge level={level}>{level}</LevelBadge>
    </Box>
  );
}

export default Card;