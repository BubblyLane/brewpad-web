define(['handlebars'], function(Handlebars) {

this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};

this["App"]["Templates"]["pages/match-maker"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};
  var buffer = "", stack1, self=this;


  stack1 = self.invokePartial(partials.header, 'header', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<div class=\"page-body\">\n\n  Controls go here\n\n</div>\n\n<div class=\"page-footer\">\n\n  <div class=\"button\">\n    Match Me!\n  </div>\n\n</div>\n";
  return buffer;
  });

return this["App"]["Templates"];

});