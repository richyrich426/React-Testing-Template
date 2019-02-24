import React, { Component } from 'react';
import { fetchBitcoin } from '../actions/bitcoin';
import { connect } from 'react-redux';

export class Loot extends Component {
    componentDidMount() {
        this.props.fetchBitcoin();
    }

    computeBitcoin() {
        const { bitcoin } = this.props;
        
        // Guard test
        if(Object.keys(bitcoin).length === 0) return '';

        return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
    }

    render() {
        return(
            <h3>
                Bitcoin balance: {this.computeBitcoin()}
            </h3>
        )
    }
}

export default connect(state => state, {
    fetchBitcoin
})(Loot);