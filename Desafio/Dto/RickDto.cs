﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Desafio.Dto
{
    public class RickDto
    {
        [JsonProperty("dimension")]
        public String Dimension { get; set; }
    }
}
