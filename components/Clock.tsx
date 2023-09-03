import React from 'react';
import Clock from 'react-live-clock';

const ClockWidget: React.FC = () => {
  return (
    <div>
      <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Hong_Kong'} />
    </div>
  );
};

export default ClockWidget;
