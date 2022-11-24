import React from 'react';

import {Container, FillBar} from './styles';

export interface AbilityProgressBarProps {
  total: number;
  stat: number;
}

const AbilityProgressBar: React.FC<AbilityProgressBarProps> = ({
  total,
  stat,
}) => {
  const numberProgress = (stat / total) * 100;
  const progress = numberProgress.toFixed();

  return (
    <Container>
      <FillBar color={numberProgress > 49 ? 'green' : 'red'} {...{progress}} />
    </Container>
  );
};

export default AbilityProgressBar;
