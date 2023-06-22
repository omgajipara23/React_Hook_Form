import { useEffect, useState } from "react";

function Demo() {

    const countArray = [1, 2, 3, 4, 1, 2, 1, 2, 3, 4, 1, 2, 1, 2, 3, 4, 1, 2, 1, 2, 3, 4, 1, 2, 1, 2, 3, 4, 1, 2, 1, 2, 3, 4, 1, 2, 1, 2, 3, 4, 1, 2,]

    const rgbColors = [
        [255, 0, 0],    // Red
        [0, 255, 0],    // Green
        [0, 0, 255],    // Blue
        [255, 255, 0],  // Yellow
        [255, 0, 255],  // Magenta
        [0, 255, 255],  // Cyan
    ];

    let k = 0

    function makeColor(i) {
        var finalColor

        if (k < rgbColors.length) {

            const item = rgbColors[k]
            finalColor = `RGB(${item})`
            console.log(finalColor);
            k++
            return finalColor
        } else {
            k = 0
            const item = rgbColors[k]
            finalColor = `RGB(${item})`
            k++
            console.log(finalColor, "================");
            return finalColor

        }
    }

    return (
        <>
            {
                countArray.map((item, index) => <div key={index} className="card bg-white" style={{ borderLeft: `50px solid ${makeColor(index)}` }}>
                    <div className="p-5" >
                        <div className="d-flex border-bottom pb-2"><h1>section title</h1></div>
                        <div className="d-flex border-bottom pb-2"><p>section title</p></div>
                    </div>
                </div>)
            }

        </>
    )

}

export default Demo