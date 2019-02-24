import React, { Component } from 'react';
import { fetchBitcoin } from '../actions/bitcoin';
import { connect } from 'redux';

export class Loot extends Component {
    render() {
        return(
            <h3>
                Bitcoin balance:
            </h3>
        )
    }
}

export default connect(state => state, {
    fetchBitcoin
})(Loot);