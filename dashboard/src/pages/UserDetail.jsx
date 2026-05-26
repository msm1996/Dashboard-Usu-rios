import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #10447b;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Card = styled.div`
  display: flex;
  gap: 40px;
  background: #6c63ff;
  padding: 41px;
  border-radius: 16px;
  width: 700px;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 20px;
    gap: 20px;
    text-align: center;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const Level = styled.p`
  font-weight: bold;
  font-size: 22px;

  color: ${({ level }) =>
    level === "Iniciante"
      ? "#4caf50"
      : level === "Intermediário"
      ? "#ff9800"
      : "#f44336"};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    gap: 10px;
  }
`;

const BackButton = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background: #f44336;
  color: white;
  cursor: pointer;
  height: 60px;

  @media (max-width: 768px) {
    height: auto;
    font-size: 16px;
    padding: 10px;
  }
`;


function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const level = location.state?.level;

  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data));
  }, [id]);

  if (!user) return <p>Carregando...</p>;

  return (
    <Container>
      <Card>
        <div>
          <img
            src={`https://ui-avatars.com/api/?name=${user.name}`}
            alt=""
            style={{ borderRadius: "50%" }}
          />
          <h2 style={{ color: "white" }}>{user.name}</h2>

          <p
            style={{
              color:
                level === "Iniciante"
                  ? "#4caf50"
                  : level === "Intermediário"
                    ? "#ff9800"
                    : "#f44336",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            {level}
          </p>
        </div>

        <div style={{
          gap: "50px", color: "white",
          fontSize: "25px",
          display: "flex",
          marginTop: "50px",
          alignItems: "center",
          


        }}>
          <p>Email: {user.email}</p>
          <p>Telefone: {user.phone}</p>

          <button onClick={() => navigate("/")} style={{
            fontSize: "18px", padding: "10px 20px",
            borderRadius: "8px",
            border: "none", background: "#f44336",
            color: "white", cursor: "pointer",
            height: "60px", alignSelf: "center"

          }}>
            ← Voltar
          </button>
        </div>
      </Card>
    </Container>
  );
}

export default UserDetail;