import React from 'react';
import Icon from '@mdi/react'
import { mdiTwitter } from '@mdi/js';


const Twitter = () => {
  return <div>
                  <Icon path={mdiTwitter}
                    title="User Profile"
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="white"
                /> 
  </div>;
};

export default Twitter;
