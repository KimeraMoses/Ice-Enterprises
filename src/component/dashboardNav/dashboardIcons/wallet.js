import React from 'react';
import Icon from '@mdi/react';
import { mdiWallet } from '@mdi/js';

const Wallet = () => {
  return <div>
             <Icon path={mdiWallet}
                        title=""
                        size={1}
                        horizontal
                        vertical
                        rotate={180}
                        color="white"
                />
  </div>;
};

export default Wallet;
