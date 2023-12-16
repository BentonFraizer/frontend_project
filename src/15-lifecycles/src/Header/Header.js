import React from 'react';
import styled from 'styled-components';

const SHeader = styled.header`
  display: flex;
  height: 150px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 232, 232, 0.1);
  font-weight: bold;
`;

export const Header = () => {
  return (
    <SHeader>
      <div>Homework 15. React lifecycles.</div>
    </SHeader>
  );
};
