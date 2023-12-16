import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

const SCard = styled.div`
  max-width: 22%;
  width: 100%;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  border-radius: 20px;
  margin: 0 0 20px 0;
  padding: 20px;
`;

export const Card = ({ episode }) => {
  return (
    <SCard>
      <h3 className="episode">Episode {episode.episode}</h3>
      <div className="name">{episode.name}</div>
      <div className="rating">Rating: {episode.rating}</div>
      <div className="description">{episode.description}</div>
      <div className="air-date">{dayjs(episode.airDate).format('MMMM D, YYYY')}</div>
      <div className="thumbnail">
        <img alt="Картинка эпизода" src={episode.thumbnailUrl} />
      </div>
    </SCard>
  );
};
