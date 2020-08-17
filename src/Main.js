import React from 'react'
import style from './Main.module.css'
// export default function(){
//     return (
//         <main className={style.main} style={{border:'1px solid'}}>main</main>
//     )
// }
export default function(){
    let style1 = {border:'1px solid grey'}
    return (
        <main className={style.main} style={style1}>main</main>
    )
}