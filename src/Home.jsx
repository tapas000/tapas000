import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    //const value = 20;
    const dispatch = useDispatch();
    const {c} = useSelector(state => state.custom)

    const actionDispatchBtnAdd = (e,payload) => {
        console.log(payload);
        dispatch({
            type: e,
            payload: payload,
        });
    };


    return (
        <div>
            <h2>{c}</h2>
            <button onClick={() => actionDispatchBtnAdd('increment')}>Increment</button>
            <button onClick={() => actionDispatchBtnAdd('incrementByValue',25)}>Increment By 25</button>
            <button onClick={() => actionDispatchBtnAdd('decrement')}>Decrement</button>
        </div>
    )
}

export default Home 