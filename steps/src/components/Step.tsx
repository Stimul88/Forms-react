import React from 'react';

export const Step = ({ props, onSelectFilter, onTupButtonRemake }) => {

    const deleteItem = ((date) => {
        return props.filter(item => item.date !== date)
    })

    const newElement = props.map((item) =>
        <div className="result-item"
             key={item.date}
        >
            <span className="result-data"> {item.date}</span>
            <span className="result-distance">{item.distance}</span>
            <div className="actions-buttons">
                <button className="pencil"
                        onClick={() =>
                            onTupButtonRemake(prevForm => ({...prevForm, date: item.date, distance: item.distance }))}>✎</button>
                <button className="delete"
                        onClick={() => onSelectFilter(deleteItem(item.date))}
                >✘</button>
            </div>
        </div>
    )

    return (
        newElement
    )
}
