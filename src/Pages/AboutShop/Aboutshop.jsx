import React from 'react';
import s from './Aboutshop.module.css'

export const Aboutshop = () => {
    return (
        <div className={s.main}>
            <div className={s.part}>
                <span className={s.title}>Кто мы?</span>
                <span className={s.description}>Мы – фирменный магазин-склад компании "theBestBeer", один из крупнейших магазинов пива в России.</span>
            </div>
            <div className={s.part}>
                <span className={s.title}>Наша цель?</span>
                <span className={s.description}>Миссия theBestBeer - повышение культуры пива в России, продвижение осмысленного выбора и питья этого замечательного напитка.</span>
            </div>
            <div className={s.part}>
                <span className={s.title}>Что на полках?</span>
                <span className={s.description}>Ежедневно в наличии более 2000 сортов лучшего пива и сидра со всего света. Самые популярные из них всегда есть в больших количествах.</span>
            </div>
            <div className={s.part}>
                <span className={s.title}>Новинки?</span>
                <span className={s.description}>Регулярно пополняем ассортимент интересными сортами. Каждый месяц на наших полках появляется более 100 новинок.</span>
            </div>
            <div className={s.part}>
                <span className={s.title}>А розлив?</span>
                <span className={s.description}>42 крана свежего и очень разного пива на любой вкус. Можно разлить пиво в гроулеры. – особые стеклянные сосуды, обеспечивающие пиву сохранность и свежесть.</span>
            </div>
        </div>
    );
};
