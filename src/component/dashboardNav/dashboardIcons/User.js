import React from 'react';
import Icon from '@mdi/react';
import { mdiAccount } from '@mdi/js';

const User = () => {
  return <div>
              <Icon path={mdiAccount}
                        title=""
                        size={1}
                        horizontal
                        vertical
                        rotate={180}
                        color="white"
                />
  </div>;
};

export default User;
