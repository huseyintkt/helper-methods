using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blog.Helpers
{
    public class HelperUrl
    {
        public static string EditUrl(string url)
        {
            if (url == "" || url == null) { return string.Empty; }

            url = url.Replace(".", "");
            url = url.Replace(":", "");
            url = url.Replace(";", "");
            url = url.Replace(",", "");
            url = url.Replace(" ", "-");
            url = url.Replace("!", "");
            url = url.Replace("(", "");
            url = url.Replace(")", "");
            url = url.Replace("'", "'");
            url = url.Replace("ğ", "g");
            url = url.Replace("Ğ", "G");
            url = url.Replace("ı", "i");
            url = url.Replace("I", "i");
            url = url.Replace("ç", "c");
            url = url.Replace("Ç", "C");
            url = url.Replace("ö", "o");
            url = url.Replace("Ö", "O");
            url = url.Replace("ü", "u");
            url = url.Replace("Ü", "U");
            url = url.Replace("ş", "s");
            url = url.Replace("Ş", "S");
            url = url.Replace("`", "");
            url = url.Replace("=", "");
            url = url.Replace("&", "");
            url = url.Replace("%", "");
            url = url.Replace("#", "");
            url = url.Replace("<", "");
            url = url.Replace(">", "");
            url = url.Replace("*", "");
            url = url.Replace("?", "");
            url = url.Replace("+", "-");
            url = url.Replace("\"", "-");
            url = url.Replace("»", "-");
            url = url.Replace("|", "-");
            url = url.Replace("^", "");
            return url;
        }
    }
}
