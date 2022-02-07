import React from 'react';
import Icon from '@mdi/react'
import { mdiDiscord } from '@mdi/js';

const Discord = () => {
  return <div>
             <Icon path={mdiDiscord}
                    title="User Profile"
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="white"
                />
  </div>;
};

export default Discord;
