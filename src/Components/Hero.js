import React from 'react'

export default function Hero(props){
        return(
            <div className="HeroBox">
                <h2>{props.name} </h2>
                {/*img of the hero*/}
                <p>{props.role}</p>
            </div>
        )
}