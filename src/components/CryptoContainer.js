import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';
import Spinner from 'react-native-loading-spinner-overlay';

class CryptoContainer extends Component {

    componentDidMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;

        return Object.keys(crypto.data).map(function(key, index) {
            return <CoinCard 
                key={index}
                coin_rank={crypto.data[key].rank}
                coin_name={crypto.data[key].name}
                symbol={crypto.data[key].symbol}
                price_usd={crypto.data[key].quotes.USD.price}
                percent_change_24h={crypto.data[key].quotes.USD.percent_change_24h}
                percent_change_7d={crypto.data[key].quotes.USD.percent_change_7d}
            />
        })
    }

    render() {

        const { crypto } = this.props;
        const { contentContainer } = styles;

        if(crypto.isFetching) {
            return (
                <View>
                    <Spinner 
                        visible={crypto.isFetching}
                        textContent={"Loading..."}
                        textStyle={{color: "#253145"}}
                        animation="fade"
                    />
                </View>
            )
        }

        return (
            <ScrollView contentContainerStyle={contentContainer}>
                { this.renderCoinCards() }
            </ScrollView>
        )
    }
}

const styles = {
    contentContainer: {
        backgroundColor: "#d6e5ec",
        paddingBottom: 75,
        paddingTop: 5,
    }
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoContainer)