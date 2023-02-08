import React from 'react'


export const MoviesCard = ({movie, deleteMovie}) => {
  return (
 <article className='moviesCard'>
     <h3 className='moviesCard__name'>{movie.name}</h3>
     <ul className='moviesCard__list'>
      <li className='moviesCard__item'><span>Genre :</span>{movie.genre}</li>
      <li className='moviesCard__item'><span>Duration :</span>{movie.duration}</li>
      <li className='moviesCard__item'><span>Release data :</span>{movie.release_date}</li>
     </ul>
     <button onClick={() => deleteMovie(movie.id)} ><i className='bx bx-trash'></i></button>
  </article>
    
  )
}
export default MoviesCard
