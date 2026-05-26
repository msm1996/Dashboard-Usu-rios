import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ddd;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;

  &:focus {
    border-color: #6c63ff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 11px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px;
  }
`;

function Search({ setSearch }) {
  return (
    <Input
      placeholder="Buscar usuário..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search;