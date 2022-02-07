import React from 'react';
import Icon from '@mdi/react';
import { mdiEmailAlert } from '@mdi/js';


const Message = () => {
  return <div>
                <Icon path={mdiEmailAlert}
                        title=""
                        size={1}
                        horizontal
                        vertical
                        rotate={180}
                        color="white"
                />
  </div>;
};

export default Message;
