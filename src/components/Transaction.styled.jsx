import styled from 'styled-components';

export const Transaction = styled.div`
  list-style: none;

  table,
  th,
  td {
    table-layout: fixed;
    border-collapse: collapse;
    border: 1px solid purple;
    text-align: center;
  }

  table {
    width: 250px;
  }

  th,
  td {
    padding: 3px;
  }
`;
