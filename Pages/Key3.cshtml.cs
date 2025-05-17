using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ScavengerHunt.Pages
{
    public class Key3Model : PageModel
    {
        public void OnGet()
        {
        }
        public JsonResult OnPostCorrectMaze()
        {
            Console.WriteLine("executed1");
            
            HttpContext.Session.SetString("Key3", "Key found");

            return new JsonResult(new { success = true });
        }
    }
}

