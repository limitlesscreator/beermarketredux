import React from 'react';
import s from './Notfoundpage.module.css'

export const Notfoundpage = () => {
    return (
        <div className={s.container}>
            <h3 className={s.neonText}>404</h3>
            <h2 className={s.neonText}>
                Что-то пошло не так <br/> <br/>
                {/*// Извиняюсь за br:)*/}
                Данной страницы не существует</h2>
        </div>
    );
};

