import React from "react";
import CoinsPresenter from "./CoinsPresenter";
import { bitcoinApi } from "../../api";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
    state = {
        coins: null,
        loading: true
    }

    async componentDidMount() {
        try {
            const {data: coins} = await bitcoinApi.coins();
            this.setState({
                coins
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
        const { coins, loading, error } = this.state;
        return (
            <CoinsPresenter coins={coins} loading={loading} error={error}/>
        )
    }
}