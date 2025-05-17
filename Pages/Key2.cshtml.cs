using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ScavengerHunt.Pages
{
    [ValidateAntiForgeryToken]
    public class Key2Model : PageModel
    {
        public void OnGet()
        {
        }

        public JsonResult OnPostCorrectMath()
        {
            Console.WriteLine("You did the math!");

            HttpContext.Session.SetString("Key2", "Key found");

            return new JsonResult( new {success = true});
        }
    }
    
}
