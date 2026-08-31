using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Comment
{
    public class UpdateCommentRequestDto
    {
        [Required]
        [MinLength(5, ErrorMessage = "Title 5 karakter olmali")]
        [MaxLength(280, ErrorMessage = "Title 280 karakter üstü olamaz.")]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MinLength(5, ErrorMessage = "Content 5 karakter olmali")]
        [MaxLength(280, ErrorMessage = "Content 280 karakter üstü olamaz.")]
        public string Content { get; set; } = string.Empty;
    }
}
