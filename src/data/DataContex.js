import React from "react";


export const data ={
    number:123,
    text: 'Context API...'
}
const DataContex = React.createContext(data)

export default  DataContex