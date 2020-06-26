import React from "react";
import CakeItem from "./CakeItem";

function CakeList({cake, isLoading, updateCakeItem}) {

    return (
        <div className="container">
            <div className="row">
                {isLoading && <p>Getting cake for you</p>}

                {cake.map((item, index) => (
                    <CakeItem item={item} key={index} index={index} updateCakeItem={updateCakeItem}/>
                ))}

            </div>
        </div>
    );
}

export default CakeList;