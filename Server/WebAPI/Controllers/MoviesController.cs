using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Services;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private IMovieService _movieService;
        public MoviesController(IMovieService movieService)
        {
            _movieService = movieService;
        }
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return _movieService.GetMovie();
        }
        [HttpGet("{id}")]
        public Movie Get(int id)
        {
            return _movieService.GetMovieById(id);
        }
        [HttpPost]
        public IActionResult Post(Movie movie)
        {
            _movieService.AddMovie(movie);
            return StatusCode(201);
        }
        [HttpGet("search")]
        public IActionResult SearchMoviesByName([FromQuery] string name)
        {
            var movies = _movieService.SearchMoviesByName(name);
            return Ok(movies);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _movieService.DeleteMovie(id);
            return StatusCode(201);
        }
        [HttpPut("{id}")]
        public IActionResult UpDate(int id, [FromBody] Movie movie)
        {
            _movieService.EditMovie(id, movie);
            return NoContent();
        }
    }
}
