import React, { FC } from 'react';

interface SeperatorProps {
  color: String;
}

const Seperator: FC<SeperatorProps> = ({ color }) => {
  return (
    <hr style={{ border: 0, borderTop: `2px solid ${color}`, width: '40px' }} />
  );
};

export default Seperator;
