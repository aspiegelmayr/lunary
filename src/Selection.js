import React from "react"
import ClothingItem from "./ClothingItem"

class Selection extends React.Component {
    render(){
        return(
            <div>
                <h2 id="title">Women's Clothing</h2>
                <ClothingItem/>
            </div>
        )
    }    
}

export default Selection