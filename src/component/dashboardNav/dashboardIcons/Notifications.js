import React from 'react';
import Icon from '@mdi/react';
import { mdiBellBadge } from '@mdi/js';


const Notifications = () => {
  return <div>
                <Icon path={mdiBellBadge}
                        title=""
                        size={1}
                        horizontal
                        vertical
                        rotate={180}
                        color="white"
                />
  </div>;
};

export default Notifications;
