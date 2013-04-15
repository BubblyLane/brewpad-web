define(['handlebars'], function(Handlebars) {

this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};

this["App"]["Templates"]["pages/home"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"main-menu\">\n\n  <div class=\"button\" id=\"btn-match-maker\">\n    <span class=\"btn-label\">Beer Match Maker</span>\n  </div>\n\n  <div class=\"button\" id=\"btn-featured\">\n    <span class=\"btn-label\">Featured Beers</span>\n  </div>\n\n  <div class=\"button\" id=\"btn-new-arrivals\">\n    <span class=\"btn-label\">New Arrivals</span>\n  </div>\n\n  <div class=\"button\" id=\"btn-about-us\">\n    <span class=\"btn-label\">About Us</span>\n  </div>\n\n</div>\n";
  });

return this["App"]["Templates"];

});