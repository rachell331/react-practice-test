import React from 'react'

export default function MovieItem({movie, removeItem}) {
    const {no, poster, title, actor, director, date} = movie
    return (
        <article>
            <div className="left">
                <img src={poster} alt="movie" />
            </div>
            <div className="right">
                <h3>{title}</h3>
                <ul>
                    <li>출연진 : {actor}</li>
                    <li>감독 : {director}</li>
                    <li>개봉일 : {date}</li>
                </ul>
                <p>
                <button onClick={()=> {removeItem(no)}}>제거</button>
                </p>
            </div>
        </article>
    )
}
