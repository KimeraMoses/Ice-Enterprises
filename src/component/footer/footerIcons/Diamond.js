import React from 'react';
import Icon from '@mdi/react'
import { mdiDiamondStone } from '@mdi/js';


const Diamond = () => {
  return <div>
                   <Icon path={mdiDiamondStone}
                    title="User Profile"
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="white"
                />
  </div>;
};

export default Diamond;
