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
            // Please read http://getcassette.net/documentation/configuration

            bundles.Add<StylesheetBundle>("assets/stylesheets/style.less");
            bundles.Add<ScriptBundle>("assets/javascripts/header", b => b.PageLocation = "header");
        }
    }
}