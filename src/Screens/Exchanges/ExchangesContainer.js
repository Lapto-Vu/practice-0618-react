import React from "react";
import ExchangesPresenter from"./ExchangesPresenter";
import { bitcoinApi } from "../../api";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
    state = {
        exchanges: null,
        loading: true
    }

    async componentDidMount() {
        try {
            const {data: exchanges} = await bitcoinApi.exchanges();
            this.setState({
                exchanges
            })
        } catch {
            this.setState({
                error: "Can't find Coins data."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }
    render() {
        const { exchanges, loading, error } = this.state;
        return (
            <ExchangesPresenter exchanges={exchanges} loading={loading} error={error}/>
        )
    }
}