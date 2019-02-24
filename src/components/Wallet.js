import React, { Component } from 'react';
import { deposit, withdraw } from '../actions/balance';
import { connect } from 'react-redux';

export class Wallet extends Component {
    constructor() {
        super();

        this.state = { balance: undefined };
    }

    updateBalance = event => {
        this.setState({
            balance: parseInt(event.target.value, 10)
        })
    }

    deposit = () => this.props.deposit(this.state.balance);
    withdraw = () => this.props.withdraw(this.state.balance);

    render() {
        return (
            <div>
                <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
                <br/>
                <input className='input-wallet' onChange={this.updateBalance}/>
                <button 
                    onClick={this.deposit}
                    className={"btn-deposit"}>
                    Deposit
                </button>

                <button 
                    onClick={this.withdraw}
                    className={"btn-withdraw"}>
                    Withdraw
                </button>
            </div>
        )
    }
}

export default connect(state => { return { balance: state.balance } }, { deposit, withdraw })(Wallet);