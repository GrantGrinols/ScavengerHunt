using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace ScavengerHunt.Pages.Shared

{
    public class SharesService : PageModel
    {
        //code that's being ran in the header/footer, aka all pages.

        private readonly IHttpContextAccessor httpContextAccessor;

        public SharesService(IHttpContextAccessor httpContextAccessor)
        {
            this.httpContextAccessor = httpContextAccessor;
        }
        public  string GetKey1()
        {

            
            if (httpContextAccessor.HttpContext?.Session.GetString("Key1") == "Key found")
            {
                return "🔑";
            }
            else
            {
                return "❌";
            }
        }
        public string GetKey2()
        {


            if (httpContextAccessor.HttpContext?.Session.GetString("Key2") == "Key found")
            {
                return "🔑";
            }
            else
            {
                return "❌";
            }
        }
        public string GetKey3()
        {


            if (httpContextAccessor.HttpContext?.Session.GetString("Key3") == "Key found")
            {
                return "🔑";
            }
            else
            {
                return "❌";
            }
        }
    }
}
