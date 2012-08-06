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
        public void Configure(BundleCollection bundles)
        {
            bundles.AddPerIndividualFile<StylesheetBundle>("assets/stylesheets");

            bundles.Add<ScriptBundle>("assets/javascripts/header", b => b.PageLocation = "header");

            bundles.Add<ScriptBundle>("assets/javascripts/app", b => b.PageLocation = "app");

            // local fallbacks
            bundles.Add<ScriptBundle>("assets/javascripts/local/jquery", new[] { "assets/javascripts/local/jquery-1.7.2.js" });
            bundles.Add<ScriptBundle>("assets/javascripts/local/geo", new[] { "assets/javascripts/local/geo.js" });
            bundles.Add<ScriptBundle>("assets/javascripts/local/geo-polyfill", new[] { "assets/javascripts/local/geo-polyfill.js" });

        }
    }
}