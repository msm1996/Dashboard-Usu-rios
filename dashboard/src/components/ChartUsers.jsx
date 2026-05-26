import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Box = styled.div`
  width: 100%;
  height: 300px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 250px;
    padding: 12px;
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 11px;
  }
`;

function ChartUsers({ data }) {
  return (
    <Box>
      <Title>📊 Distribuição de Níveis</Title>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#6c63ff" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default ChartUsers;