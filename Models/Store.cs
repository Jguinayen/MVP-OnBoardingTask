﻿using System;
using System.Collections.Generic;

namespace OnBoardingTask.Models
{
    public partial class Store
    {
        public Store()
        {
            Sale = new HashSet<Sale>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public virtual ICollection<Sale> Sale { get; set; }
    }
}
