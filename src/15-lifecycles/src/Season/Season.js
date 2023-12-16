import React from 'react';
import styled from 'styled-components';
import { Card } from '../Card/Card';

const SSeason = styled.section`
  border: 2px solid white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;
  border-top: 2px solid transparent;
  margin: 0 20px 20px 20px;
`;

const STitle = styled.h1`
  color: red;
  text-align: center;
  margin: 0;
  border: 2px solid white;
  border-bottom: 2px solid transparent;
  margin: 20px 20px 0 20px;
`;

export const Season = ({ data, index }) => {
  return (
    <>
      <STitle>Season {index + 1}</STitle>
      <SSeason>
        {data.map((episode) => (
          <Card key={episode.id} episode={episode} />
        ))}
      </SSeason>
    </>
  );
};
