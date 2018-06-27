import axios from 'axios';
import { coinMarketCapAPI } from './../Utils/Constants';
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAILURE
} from './../Utils/ActionTypes';

export default function FetchCoinData() {
    return dispatch => {

        dispatch({ type: FETCHING_COIN_DATA })

        return axios.get(`${coinMarketCapAPI}/v2/ticker/?limit=25&sort=rank&structure=array`)
            .then(res => {
                dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data.data })
            })
            .then(res => {
                dispatch({ type: FETCHING_COIN_DATA_FAILURE, payload: res.data.metadata.error })
            });
    }
};