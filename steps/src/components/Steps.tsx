import React, {useState} from 'react'
import {Step} from "./Step.tsx";
import {isValidDate} from "../js/isValidDate";
import {validateDistance} from "../js/validateDistance";
import {sortedArray} from "../js/sortedArray";


export interface IForm {
    date: string;
    distance: string;
}

const Steps = () => {
    const[array,setArray] = useState([]);
    const[form,setForm] = useState<IForm>({
        date: '',
        distance: '',
    });


    const {date, distance} = form;

    sortedArray(array)


    const inputEvent = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();

        if(isValidDate(date) && validateDistance(distance)) {
            const find = array.find(item => item.date === date)
            if(find) {
                let result = array.map(item =>{
                    if(item.date === date) {
                        return {date: item.date, distance: parseFloat(item.distance) + parseFloat(form.distance)}
                    }
                    return item
                })
                setArray(result)
                setForm(prevForm => ({...prevForm, date: '', distance: '' }));

                return
            }

            setArray(oldArray => [...oldArray, form]);
            setForm(prevForm => ({...prevForm, date: '', distance: '' }));
            return
        }
        return alert('Не правильно введена  или расстояние ')
    }

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };


    return (
        <>
        <form onSubmit={inputEvent}>
            <div className="input-container">
                <div className="input-date-box">
                    <span className="date-info">Дата(ДД.ММ.ГГ)</span>
                    <label htmlFor="date"></label>
                    <input  className="date-input"
                            placeholder="Например: 13.04.24"
                            type="text"
                           name="date"
                           value={date}
                           onChange={inputChange}
                    />
                </div>
                <div className="input-distance-box input-date-box">
                    <span className="distance-info">Пройдено км</span>
                    <label htmlFor="distance"></label>
                    <input  className="distance-input date-input"
                            placeholder="Например: 5.7"
                            type="text"
                           name="distance"
                           value={distance}
                           onChange={inputChange}
                    />
                </div>
                <div className="submit-box">
                    <button type="submit" disabled={date === '' || distance === ''} className="ok">ОК</button>
                </div>
            </div>
        </form>
    <div className="result">
        <div className="result-top">
            <span className="date-info-result">Дата(ДД.ММ.ГГ)</span>
            <span className="distance-info-result">Пройдено км</span>
            <span className="actions-info">Действия</span>
        </div>
        <div className="result-box">
            <Step props={array.reverse()}
                  onSelectFilter={(filter) => {setArray(filter.reverse());}}
                  onTupButtonRemake={(filter) => {setForm(filter);}}
            />
        </div>
    </div>
        </>
    )
}

export default Steps
