define(['handlebars'], function(Handlebars) {

this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};

this["App"]["Templates"]["pages/featured"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};
  var buffer = "", stack1, self=this;


  stack1 = self.invokePartial(partials.header, 'header', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"page-body\">\n\n  <div class=\"image\">\n    <img src=\"\">\n  </div>\n\n  <div class=\"description\">\n    <h1>Beer Name</h1>\n\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto\n      atque, distinctio earum exercitationem incidunt ipsum maiores molestiae\n      necessitatibus, nemo nihil nisi omnis porro rem saepe soluta tempora\n      tenetur. Veniam, vitae?</p>\n\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto\n      atque, distinctio earum exercitationem incidunt ipsum maiores molestiae\n      necessitatibus, nemo nihil nisi omnis porro rem saepe soluta tempora\n      tenetur. Veniam, vitae?</p>\n  </div>\n\n</div>\n\n<div class=\"page-footer\">\n\n  <div class=\"other-featured\">\n\n    <ul>\n      <li>Beer 1</li>\n      <li>Beer 2</li>\n      <li>Beer 3</li>\n      <li>Beer 4</li>\n    </ul>\n\n  </div>\n\n</div>\n";
  return buffer;
  });

return this["App"]["Templates"];

});