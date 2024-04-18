using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Movie
    {
        [Required]
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength(25)]
        [MinLength(2)]
        public string? Name { get; set; }
        [Required]
        [MaxLength(25)]
        [MinLength(2)]
        public string? Genre { get; set; } 
        [Required]
        [MaxLength(25)]
        [MinLength(2)]
        public string? Cinema { get; set; } 
        [Required]
        [MaxLength(1050)]
        [MinLength(5)]
        public string? Summary { get; set; }
        [Required]
        [Range(3, 30, ErrorMessage = "The field ViewLimit must be between 3 and 30.")]
        public int ViewLimit { get; set; }
        [Required]
        public DateTime PremiereDate { get; set; } = DateTime.Now;
        [Required]
        public string? SrcImage { get; set; }
        //public string? SrcVideo { get; set; }
    }
}
