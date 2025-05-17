using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.IdentityModel.Protocols;


namespace ScavengerHunt.Pages
{
    [ValidateAntiForgeryToken]
    public class Key1Model : PageModel
    {
        [BindProperty]
        public int CorrectGuessCount { get; set; } = 0;
        public void OnGet()
        {
            Console.WriteLine("executed");
        }
        
        public JsonResult OnPostCorrectGuess()
        {
            Console.WriteLine("executed1");
            CorrectGuessCount++;
            HttpContext.Session.SetString("Key1", "Key found");

            return new JsonResult(new { success = true, count = CorrectGuessCount });
        }
    }
}
