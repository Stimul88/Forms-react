import React, {useState} from 'react'
import convert from 'color-convert'

export const Convertor = (): JSX.Element => {
    const[color,setColor]=useState({ rgb: '' });

    const {rgb } = color

    document.body.style.backgroundColor = `rgb(${rgb})`

    const reformat = (color: { rgb: string }) => {
        const {rgb} = color
        console.log(rgb)

        switch (rgb) {
            case '':
                document.body.style.backgroundColor = '';
                return '';
            case 'Ошибка!':
                document.body.style.backgroundColor = '';
                return 'Ошибка!';
            default:
                document.body.style.backgroundColor = rgb;
                return `rgb[${Array.from(rgb).join( ',')}]`


        }
    }

    const inputEvent = (e): void => {
        e.preventDefault();

        const targetValue = e.target.value
        if(targetValue.length < 7) {
            setColor(prevForm => ({...prevForm, rgb: ''}));
            document.body.style.backgroundColor = '';
            return;
        }


        if(targetValue.length === 7) {
            const inputElement = targetValue.match(/#{1}(\d|\w){6}/g)
            console.log(inputElement)
            if(inputElement) {
                const newColor = convert.hex.rgb(inputElement)
                setColor(prevForm => ({...prevForm, rgb: newColor}));
                return;
            }
            setColor(prevForm => ({...prevForm, rgb: 'Ошибка!'}));
            console.log('Ошибка!');
            return;
        }
        if(targetValue.length > 7) {
            console.log('Ошибка!');
            setColor(prevForm => ({...prevForm, rgb: 'Ошибка!'}));
        }
    };
    return (
        <form className="form" autoComplete="off" onInput={inputEvent}>
            <label htmlFor="color"></label>
            <input className="input" type="input" id="name" name="color" placeholder="Введите цвет HEX"/>
            <div className="rgb"
                 style={{
                 backgroundColor: rgb !== ''? `rgb(${rgb})`: ''}
                 }>
                {reformat(color)}
            </div>
        </form>
    )
}
