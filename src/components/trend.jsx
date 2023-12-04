import React from "react"

export default function Trend({ trend }) {
    console.log(trend.content);
    console.log(trend.icon);
    const trendIcon = trend.icon;
    return (
        <>
            <div className="trend">
                <div className="trend-origin">
                    <p> {trend.origin} </p>
                    <img src={trendIcon} alt="" className="img-ponts" />
                </div>
                <h3> {trend.content} </h3>
            </div>
        </>
    )
}