define(['handlebars'], function(Handlebars) {

this["App"] = this["App"] || {};
this["App"]["Templates"] = this["App"]["Templates"] || {};

Handlebars.registerPartial("header", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"page-header\">\n\n  <div class=\"btn-home\">\n    <span class=\"text\">Home</span>\n  </div>\n\n  <div class=\"heading\" id=\"heading-";
  if (stack1 = helpers['title-id']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['title-id']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <span class=\"text\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </div>\n\n</div>\n";
  return buffer;
  }));

return this["App"]["Templates"];

});