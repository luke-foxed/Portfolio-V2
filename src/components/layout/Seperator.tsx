import React, { FC } from 'react';

interface SeperatorProps {
  color: String;
}

const Seperator: FC<SeperatorProps> = ({ color }) => {
  return (
    <hr style={{ borderTop: `2px solid ${color}`, width: '40px', border: 0 }} />
  );
};

export default Seperator;
