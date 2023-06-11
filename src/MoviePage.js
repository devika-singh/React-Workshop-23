function MoviePage ({movie}) {
console.log(movie);
  return (
  	<div>
  	{movie && <h1 style={{color:"white"}}>Ho{movie.title}hi</h1>}
  	</div>
  )
}

export default MoviePage;
