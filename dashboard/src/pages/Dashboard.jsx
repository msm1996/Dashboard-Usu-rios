import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import Search from "../components/Search";
import ChartUsers from "../components/ChartUsers";

const Layout = styled.div`
  display: flex;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #1f4e79, #163d5c);
  overflow-y: auto;
  width: 100%;
`;

const TopBar = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 40px;
  color: white;
  font-weight: bold;
  font-size: 20px;

  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 20px;
    font-size: 16px;
    gap: 10px;
  }
`;

const ChartBox = styled.div`
  padding: 20px;
  background: white;
  margin: 0 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 10px;
    padding: 12px;
  }
`;

const CardsContainer = styled.div`
  padding: 21px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    padding: 12px;
    gap: 12px;
  }
`;

const Loading = styled.p`
  color: #fefefe;
  padding: 18px;
`;

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const levels = ["Iniciante", "Intermediário", "Avançado"];

        const usersWithLevel = response.data.map((user) => {
          const randomLevel =
            levels[Math.floor(Math.random() * levels.length)];

          return { ...user, level: randomLevel };
        });

        setUsers(usersWithLevel);
      })
      .finally(() => setLoading(false));
  }, []);

  const levelCount = {
    Iniciante: 0,
    Intermediário: 0,
    Avançado: 0,
  };

  users.forEach((user) => {
    levelCount[user.level]++;
  });

  const chartData = [
    { name: "Iniciante", value: levelCount.Iniciante },
    { name: "Intermediário", value: levelCount.Intermediário },
    { name: "Avançado", value: levelCount.Avançado },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loading>Carregando...</Loading>;

  return (
    <Layout>
      <Sidebar />

      <Content>
        <Header />

        <TopBar>
          <Search setSearch={setSearch} />
        </TopBar>

        <div style={{ display: "flex", gap: "145px", padding: "46px", color: "white", fontWeight: "bold",fontSize: "28px" }}>
          <div>Total: {users.length}</div>
          <div>Iniciante: {levelCount.Iniciante}</div>
          <div>Intermediário: {levelCount.Intermediário}</div>
          <div>Avançado: {levelCount.Avançado}</div>
        </div>

        <div style={{ padding: "35px", background: "white", margin: "0 20px", borderRadius: "10px" }}>
          <ChartUsers data={chartData} />
        </div>

        <CardsContainer>
          {filteredUsers.map((user) => (
            <Card key={user.id} {...user} company={user.company.name} />
          ))}
        </CardsContainer>
      </Content>
    </Layout>
  );
}

export default Dashboard;