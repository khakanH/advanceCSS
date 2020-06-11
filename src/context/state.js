
import React, { useReducer } from 'react'
import Context from './context'
import Reducer from './reducer'
import { TOOGLE_Filter } from "./types";
export const State = (props) => {
    const initialState = {
        filterGuest: false,
        search: null,
        editAble:null,
        name:"dansih",
        guests: [
            {
                id: 1
                , name: 'Danish'
                , address: 'islamabad'
                , contact: "034678000"
                , dietary: 'vegan'
                , isconfirm: false
            },
            {
                id: 2
                , name: 'Rashid Iqbal'
                , address: 'islamabad'
                , contact: "034678000"
                , dietary: 'Non-veg'
                , isconfirm: true
            }
            ,
            {
                id: 3
                , name: 'Ali'
                , address: 'islamabad'
                , contact: "034678000"
                , dietary: 'pas'
                , isconfirm: true
            }
            ,
            {
                id: 4
                , name: 'Khan'
                , address: 'islamabad'
                , contact: "034678000"
                , dietary: 'vegan'
                , isconfirm: false
            }
        ]
    }
    const [state, dispatch] = useReducer(Reducer, initialState)

    //Add guest
    // const addGuest = guest => {
    //     guest.id = Date.now()
    //     guest.isconfirm = false
    //     dispatch({
    //         type: ADD_GUEST,
    //         payload: guest
    //     })
    // }


//     const toogleFilter = () => {
//         dispatch({
//             type: TOOGLE_Filter
//         })
//     }

    return (
        <Context.Provider
            value={{
                guests: state.guests,
                filterGuest: state.filterGuest,    
                name:state.name            
            }}
        >
            {props.children}</Context.Provider>
    )
}
export default State













// db URL
// mongodb+srv://danish123:<password>@cluster0-1msoy.mongodb.net/test?retryWrites=true&w=majority