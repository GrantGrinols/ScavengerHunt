using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ScavengerHunt.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        public IndexModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        required public string Key1 { get; set; }
        required public string Key2 { get; set; }
        required public string Key3 { get; set; }

        public void OnGet()
        {
            _logger.LogInformation("Page loaded at {Time}", DateTime.Now);
            _logger.LogInformation("Key1 variable {Key}", HttpContext.Session.GetString("Key1"));
            if (HttpContext.Session.GetString("Key1") == null)
            {
                HttpContext.Session.SetString("Key1", "Key not found");
                HttpContext.Session.SetString("Key2", "Key not found");
                HttpContext.Session.SetString("Key3", "Key not found");
                Key1 = "Key not found";
                Key2 = "Key not found";
                Key3 = "Key not found";

            }
            else
            {
#pragma warning disable CS8601 // Possible null reference assignment.
                Key1 = HttpContext.Session.GetString("Key1");

                Key2 = HttpContext.Session.GetString("Key2");
                Key3 = HttpContext.Session.GetString("Key3");
#pragma warning restore CS8601 // Possible null reference assignment.



            }
        }
    }
}
