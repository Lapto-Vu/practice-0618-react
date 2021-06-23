import React from "react";
import PricesPresenter from "./PricesPresenter";
import { bitcoinApi } from "../../api";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
    state = {
        prices: null,
        loading: true
    }

    async componentDidMount() {
        try {
            const {data: prices} = await bitcoinApi.tickers();
            this.setState({
                prices
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
        const { prices, loading, error } = this.state;
        return (
            <PricesPresenter prices={prices} loading={loading} error={error}/>
        )
    }
}