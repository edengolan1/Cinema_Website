using System.Globalization;
using WebAPI.Models;

namespace WebAPI.Services
{
    public class MovieService : IMovieService
    {
        private List<Movie> _movies;
        public MovieService()
        {
            _movies = new List<Movie>() {
                new Movie() { Id = 0, Name="Argylle", Genre="Action", Cinema="Jerusalem",
                    Summary="Elly Conway, an introverted spy novelist who seldom leaves her home, is drawn into the real world of espionage when the plots of her books get a little too close to the activities of a sinister underground syndicate." +
                    "When Aiden, a spy, shows up to save her (he says) from being kidnapped or killed (or both), Elly and her beloved cat Alfie are plunged into a covert world where nothing, and no one, is what it seems.",
                     ViewLimit=15, PremiereDate=DateTime.ParseExact("2024-01-15", "yyyy-MM-dd", CultureInfo.InvariantCulture)
                    ,SrcImage="https://cdn.modulus.co.il/fetch/cinemacity/w_505,h_721,mode_,v_4f7026f8-2419-4c0e-a835-774fecc120bf41/http://80.178.112.171/images/%D7%90%D7%A8%D7%92%D7%99%D7%99%D7%9C_%D7%A4%D7%95%D7%A1%D7%98%D7%A8-%D7%9E%D7%95%D7%A7%D7%98%D7%9F(1).jpg"
                },
                new Movie() { Id = 1, Name="Mean Girls", Genre="Comedy", Cinema="Tel Aviv",
                    Summary="From the comedic mind of Tina Fey comes a new twist on the modern classic, MEAN GIRLS. New student Cady Heron (Angourie Rice) is welcomed into the top of the social food chain by the elite group of popular girls called The Plastics" +
                    "ruled by the conniving queen bee Regina George (Reneé Rapp) and her minions Gretchen (Bebe Wood) and Karen (Avantika). However, when Cady makes the major misstep of falling for Regina's ex-boyfriend Aaron Samuels (Christopher Briney)," +
                    "she finds herself prey in Regina's crosshairs. As Cady sets to take down the group's apex predator with the help of her outcast friends Janis (Auli'i Cravalho) and Damian (Jaquel Spivey), she must learn how to stay true to herself while navigating the most cutthroat jungle of all",
                     ViewLimit=15, PremiereDate= DateTime.ParseExact("2024-02-20", "yyyy-MM-dd", CultureInfo.InvariantCulture)
                    ,SrcImage="https://cdn.modulus.co.il/fetch/cinemacity/w_505,h_721,mode_,v_4f7026f8-2419-4c0e-a835-774fecc120bf41/http://80.178.112.171/images/%D7%99%D7%9C%D7%93%D7%95%D7%AA%20%D7%A8%D7%A2%D7%95%D7%AA%20%D7%A4%D7%95%D7%A1%D7%98%D7%A8%20(002).jpg"
                },
                new Movie() { Id = 2, Name="Anyone But You", Genre="Romantic Comedy", Cinema="Heifa",
                    Summary="In the aftermath of a captivating first encounter, Bea and Ben discover that their initial fiery passion has inexplicably dwindled to frosty misunderstanding. However, fate intervenes: Thrown together again at a dreamy Australian wedding," +
                    "they opt for a charade of coupledom. But sparks reignite amid the sun-kissed scenery, forcing them to confront their true feelings and embrace a second chance at love.",
                     ViewLimit =18, PremiereDate= DateTime.ParseExact("2024-01-05", "yyyy-MM-dd", CultureInfo.InvariantCulture)
                    ,SrcImage="https://cdn.modulus.co.il/fetch/cinemacity/w_505,h_721,mode_,v_4f7026f8-2419-4c0e-a835-774fecc120bf41/http://80.178.112.171/images/%D7%A8%D7%A7%20%D7%9C%D7%90%20%D7%90%D7%AA%D7%94.jpg"
                },
                new Movie() { Id = 3, Name="The Boy and The Heron", Genre="Children", Cinema="Rishon Lezion",
                    Summary="From the legendary Studio Ghibli and Academy Award®-winning director Hayao Miyazaki (Spirited Away) comes a new critically-acclaimed fantasy adventure. After losing his mother during the war, young Mahito moves to his family's estate in the countryside." +
                    "There, a series of mysterious events lead him to a secluded and ancient tower, home to a mischievous gray heron. When Mahito's new stepmother disappears, he follows the gray heron into the tower, and enters a fantastic world shared by the living and the dead." +
                    "As he embarks on an epic journey with the heron as his guide, Mahito must uncover the secrets of this world, and the truth about himself. Featuring the voices of Christian Bale, Dave Bautista, Gemma Chan, Willem Dafoe, Karen Fukuhara, Mark Hamill, Robert Pattinson and Florence Pugh.",
                    ViewLimit =9, PremiereDate=DateTime.ParseExact("2023-01-06", "yyyy-MM-dd", CultureInfo.InvariantCulture)
                    ,SrcImage="https://cdn.modulus.co.il/fetch/cinemacity/w_505,h_721,mode_,v_4f7026f8-2419-4c0e-a835-774fecc120bf41/http://80.178.112.171/images/%D7%94%D7%99%D7%9C%D7%93%20%D7%95%D7%94%D7%90%D7%A0%D7%A4%D7%94.jpg"
                },
                new Movie() { Id = 4, Name="Drive-Away Dolls", Genre="Comedy", Cinema="Rishon Lezion",
                    Summary="Jamie regrets her breakup with her girlfriend, while Marian needs to relax. In search of a fresh start, they embark on an unexpected road trip to Tallahassee. Things quickly go awry when they cross paths with a group of inept criminals.",
                    ViewLimit =12, PremiereDate=DateTime.ParseExact("2023-12-06", "yyyy-MM-dd", CultureInfo.InvariantCulture)
                    ,SrcImage="https://cdn.modulus.co.il/fetch/cinemacity/w_505,h_721,mode_,v_4f7026f8-2419-4c0e-a835-774fecc120bf41/http://80.178.112.171/images/%D7%A1%D7%A2%D7%99_%D7%91%D7%95%D7%91%D7%94-%D7%A4%D7%95%D7%A1%D7%98%D7%A8_%D7%9E%D7%95%D7%A7%D7%98%D7%9F.jpg"
                },
                new Movie() { Id = 5, Name="King of Killers", Genre="Action", Cinema="Tel Aviv",
                    Summary="Garan is a part of a group of international hitmen who are contracted to take out the most dangerous killer in the world, only to find out that they're the ones being hunted.",
                    ViewLimit =16, PremiereDate=DateTime.ParseExact("2023-02-26", "yyyy-MM-dd", CultureInfo.InvariantCulture)
                    ,SrcImage="https://cdn.modulus.co.il/fetch/cinemacity/w_505,h_721,mode_,v_4f7026f8-2419-4c0e-a835-774fecc120bf41/http://80.178.112.171/images/%D7%9E%D7%9C%D7%9B%D7%95%D7%93%D7%AA%20%D7%9C%D7%9E%D7%AA%D7%A0%D7%A7%D7%A9%D7%99%D7%9D%20%D7%A4%D7%95%D7%A1%D7%98%D7%A8.jpg"
                },
                new Movie() { Id = 6, Name="Challengers", Genre="Drama", Cinema="Tel Aviv",
                    Summary="Tashi, a former tennis prodigy turned coach is married to a champion on a losing streak. Her strategy for her husband's redemption takes a surprising turn when he must face off against his former best friend and Tashi's former boyfriend.",
                    ViewLimit =18, PremiereDate=DateTime.ParseExact("2023-03-26", "yyyy-MM-dd", CultureInfo.InvariantCulture)
                    ,SrcImage="https://cdn.modulus.co.il/fetch/cinemacity/w_505,h_721,mode_,v_4f7026f8-2419-4c0e-a835-774fecc120bf41/http://80.178.112.171/images/%D7%9E%D7%AA%D7%97%D7%A8%D7%99%D7%9D-%D7%A4%D7%95%D7%A1%D7%98%D7%A8_%D7%9E%D7%95%D7%A7%D7%98%D7%9F%20(1).jpg"
                },
                new Movie() { Id = 7, Name="CIVIL WAR", Genre="Drama", Cinema="Heifa",
                    Summary="A journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.",
                    ViewLimit =12, PremiereDate=DateTime.ParseExact("2023-04-12", "yyyy-MM-dd", CultureInfo.InvariantCulture)
                    ,SrcImage="https://cdn.modulus.co.il/fetch/cinemacity/w_505,h_721,mode_,v_4f7026f8-2419-4c0e-a835-774fecc120bf41/http://80.178.112.171/images/%D7%94%D7%A7%D7%A8%D7%91%20%D7%A2%D7%9C%20%D7%90%D7%9E%D7%A8%D7%99%D7%A7%D7%94.jpg"
                },
                new Movie() { Id = 8, Name="Migration", Genre="Comedy", Cinema="Rishon Lezion",
                    Summary="Mack is an adventure-loathing duck who does not intend to leave his New England pond anytime soon. However, he is convinced by his more adventurous wife, Pam, to head south for the winter. The two ducks, along with their two kids Dax and Gwen and Mack's Uncle Dan, do just that. However, things do not go as planned, but that doesn't stop them from having the time of their lives.",
                    ViewLimit =3, PremiereDate=DateTime.ParseExact("2023-04-09", "yyyy-MM-dd", CultureInfo.InvariantCulture)
                    ,SrcImage="https://cdn.modulus.co.il/fetch/cinemacity/w_505,h_721,mode_,v_4f7026f8-2419-4c0e-a835-774fecc120bf41/http://80.178.112.171/images/%D7%A1%D7%99%D7%A4%D7%95%D7%A8%20%D7%94%D7%91%D7%A8%D7%95%D7%95%D7%96%D7%99%D7%9D%20%D7%97%D7%93%D7%A9(3).jpg"
                }
            };
        }
        public void AddMovie(Movie movie)
        {
            movie.Id = _movies.Max(x => x.Id) + 1;
            _movies.Add(movie);
        }

        public void DeleteMovie(int id)
        {
            Movie movie = _movies!.First(x => x.Id == id);
            _movies.Remove(movie!);
        }

        public void EditMovie(int id, Movie movie)
        {
            Movie existMovie = _movies.First(x => x.Id == id);
            existMovie!.Name = movie.Name;
            existMovie.Genre = movie.Genre;
            existMovie.Cinema = movie.Cinema;
            existMovie.Summary = movie.Summary;
            existMovie.ViewLimit = movie.ViewLimit;
            existMovie.PremiereDate = movie.PremiereDate;
            existMovie.SrcImage = movie.SrcImage;
        }
        public IEnumerable<Movie> GetMovie()
        {
            return _movies;
        }
        public Movie GetMovieById(int id)
        {
            Movie movie = _movies.First(x => x.Id == id);
            return movie;
        }
        public IEnumerable<Movie> SearchMoviesByName(string name)
        {
            return _movies.Where(movie => movie.Name!.Contains(name, StringComparison.OrdinalIgnoreCase));
        }
    }
}
