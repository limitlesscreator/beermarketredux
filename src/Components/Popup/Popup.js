// import React, {useContext, useState} from 'react';
// import s from '../Components/Popup.module.css'
// import {ReactComponent as Closeicon} from "../icons/close.svg";
// import {Context} from "../context";
//
// export const Popup = () => {
//     const {userLogin,setUserLogin,userPassword,setUserPassword,errorLogged,setErrorLogged,setPopup,setUserLogged,beers} = useContext(Context)
//
//     const loggedUser = () => {
//         let ifUserReal = false
//
//         for (let i = 0; i < beers.length; i++) {
//             if (String(beers[i]['name']) === userLogin && String(beers[i]['target_fg']) === userPassword) {
//                 ifUserReal = true
//                 break
//             }
//         }
//         // name: login
//         // target_fg:  пароль
//         if (ifUserReal) {
//             setUserLogged(true)
//             setPopup(false)
//             console.log('user logged')
//         } else {
//             setErrorLogged(true)
//             console.log('error')
//         }
//     }
//
//     const handleKeypress = e => { // Нажатие Enter === Нажать на кнопку
//         if (e.code  === 'Enter') {
//             loggedUser();
//         }
//     };
//
//     return (
//         <div className={s.main}>
//             <div className={s.square}>
//                 <Closeicon onClick={() => setPopup(false)} className={s.closeIcon}/>
//
//                 <div className={s.inputContainer}>
//                     <input type="text" placeholder={'login'} onKeyPress={handleKeypress} onChange={(e) => {
//                         setUserLogin(e.currentTarget.value)
//                         setErrorLogged(false)
//                     }}/>
//                     <input type="text" placeholder={'password'} onKeyPress={handleKeypress} onChange={(e) => {
//                         setUserPassword(e.currentTarget.value)
//                         setErrorLogged(false)
//                     }}/>
//                 </div>
//
//                 <div className={s.buttonContainer}>
//                     <button onClick={loggedUser}>Войти</button>
//                     <button onClick={() => setPopup(false)}>Отмена</button>
//                 </div>
//
//                 {errorLogged ? <div className={s.wrongPasswork}>Неверный пароль или логин</div> : ''}
//
//             </div>
//         </div>
//     );
// };
