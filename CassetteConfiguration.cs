using Cassette;
using Cassette.Scripts;
using Cassette.Stylesheets;

namespace DinnerParty
{
    /// <summary>
    /// Configures the Cassette asset bundles for the web application.
    /// </summary>
    public class CassetteBundleConfiguration : IConfiguration<BundleCollection>
    {
        public const string JQueryUiCssPath = "assets/stylesheets/jquery.ui/humanity/jquery-ui-1.8.21.custom.css";

        public void Configure(BundleCollection bundles)
        {
            // Please read http://getcassette.net/documentation/configuration

            bundles.Add<StylesheetBundle>("assets/stylesheets/style.less");
            bundles.Add<StylesheetBundle>(JQueryUiCssPath);

            // note: never include modernizr from cdn, coz it is never minified and it isn't meant to be included from cdn
            bundles.Add<ScriptBundle>("assets/javascripts/header", b => b.PageLocation = "header");

            // cdn fallback
            bundles.Add<ScriptBundle>("assets/javascripts/libs/jquery", b => b.PageLocation = "jquery");
            bundles.Add<ScriptBundle>("assets/javascripts/libs/jquery.ui", b => b.PageLocation = "jquery.ui");
            bundles.Add<ScriptBundle>("assets/javascripts/libs/jquery.unobtrusive-ajax", b => b.PageLocation = "jquery.unobtrusive-ajax");
            bundles.Add<ScriptBundle>("assets/javascripts/libs/MicrosoftAjax", b => b.PageLocation = "MicrosoftAjax");


        }
    }
}