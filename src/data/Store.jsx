import React, { useState } from "react";

const initialState ={
    number: 1234,
    text: 'Context api + hooks'
}
     export const AppContex = React.createContext(initialState)
     
     const Store = props =>{
         const [state,setState] = useState (initialState)
     

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }



    return (
        <AppContex.Provider value={{
       number: state.number,
       text:  state.text,
       setNumber: n => updateState('number', n),
       setText: t => updateState ('text', t),
   }}>
       {props.children}
       </AppContex.Provider>   
        )
}


export default Store