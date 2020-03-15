using System;
using System.Collections.Generic;

namespace OnBoardingTask.Models
{
    public partial class Product
    {
        public Product()
        {
            Sale = new HashSet<Sale>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public decimal? Price { get; set; }

        public virtual ICollection<Sale> Sale { get; set; }
    }
}
