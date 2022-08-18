import React from 'react';


type newComponentType = {
    topCars: Array<carType>
};
type carType = {
    manufacturer: string,
    model: string
};

export const NewComponent = (props: newComponentType) => {

    return (
        <ul>
            <table>
                <tr>
                    <th>Manufacturer</th>
                    <th>Model</th>
                </tr>
                {props.topCars.map((objectFromCarsArray, index) => {
                    return (

                        <tr>
                            <td>{objectFromCarsArray.manufacturer}</td>
                            <td>{objectFromCarsArray.model}</td>
                        </tr>
                    )
                })}
            </table>
        </ul>
    );
};