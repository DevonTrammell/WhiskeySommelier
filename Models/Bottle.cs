using System;
using System.Collections.Generic;

#nullable disable

namespace WhiskeySommelier.Models
{
    public partial class Bottle
    {
        public string Name { get; set; }
        public string Distiller { get; set; }
        public byte? Age { get; set; }
        public string Barrel { get; set; }
        public string Nose { get; set; }
        public string Palette { get; set; }
        public string Finish { get; set; }
    }
}
