// Создать приложение React, которое будет рендерить список дел.
// Данные для списка дел, будут храниться в виде массива объектов 
// в отдельном JS-файле. 
// Каждое дело имеет заголовок, дедлайн (дата), и короткое текстовое описание. Нужно это отрендерить.

// Дела рендерим в виде карточек (div), где будет заголовок с именем дела, 
// параграф с дедлайном (выровнять по правому краю), 
// и параграф с текстовым описанием. 
// Дела рисуем в виде сетки из 4 элементов.






import React from 'react'
import { list } from '../../data/MyWork'
import styles from './MyList.module.css'

function MyList() {
    return (
        <div className={styles.wrapper}>
            {list.map(el => {
                return (
                    <div className={styles.cardElem} key={el.title}>
                        <h3 className={styles.title}>{el.title}</h3>
                        <p className={styles.deadline}> {el.deadLine} </p>
                        <p className={styles.description}> {el.description} </p>
                    </div>
                )
            })
            }
        </div>
    )
}

export default MyList
