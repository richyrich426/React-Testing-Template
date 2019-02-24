import React from 'react';
import Loot from './Loot';
import Wallet from './Wallet';

const App = () => {
    return (
        <div>
            Loot Check
            <hr/>
            <Wallet />
            <hr/>
            <Loot />
            <div>
                Powered by <a target={'_blank'} href={'https://www.coindesk.com/price'}>Coindesk</a>
            </div>
        </div>
    )
}

export default App;