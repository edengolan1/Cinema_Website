using WebAPI.Models;
namespace WebAPI.Services
{
    public interface IMovieService
    {
        IEnumerable<Movie> GetMovie();
        Movie GetMovieById(int id);
        void AddMovie(Movie movie);
        void EditMovie(int id, Movie movie);
        void DeleteMovie(int id);
        IEnumerable<Movie> SearchMoviesByName(string name);
    }
}
