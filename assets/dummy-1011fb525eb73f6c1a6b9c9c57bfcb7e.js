"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,s,n){Object.defineProperty(e,"__esModule",{value:!0})
var o
o=Ember.Application.extend({modulePrefix:n.default.modulePrefix,podModulePrefix:n.default.podModulePrefix,Resolver:t.default}),(0,s.default)(o,n.default.modulePrefix),e.default=o}),define("dummy/controllers/array",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller}),define("dummy/controllers/object",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller}),define("dummy/helpers/app-version",["exports","dummy/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=o
var n=t.default.APP.version
function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t.hideSha?n.match(s.versionRegExp)[0]:t.hideVersion?n.match(s.shaRegExp)[0]:n}e.default=Ember.Helper.helper(o)}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,s){Object.defineProperty(e,"__esModule",{value:!0})
var n=void 0,o=void 0
s.default.APP&&(n=s.default.APP.name,o=s.default.APP.version),e.default={name:"App Version",initialize:(0,t.default)(n,o)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function s(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var s
if("undefined"!=typeof window)s=window
else if("undefined"!=typeof global)s=global
else{if("undefined"==typeof self)return
s=self}var n,o=t.default.exportApplicationGlobal
n="string"==typeof o?o:Ember.String.classify(t.default.modulePrefix),s[n]||(s[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete s[n]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=s,e.default={name:"export-application-global",initialize:s}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var s=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
s.map(function(){this.route("test"),this.route("docs"),this.route("library")}),e.default=s}),define("dummy/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({codePrettify:Ember.inject.service(),init:function(){Ember.run.scheduleOnce("afterRender",this,function(){Ember.get(this,"codePrettify").prettify()})}})}),define("dummy/services/code-prettify",["exports","ember-code-prettify/services/code-prettify"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"yLHryuPt",block:'{"symbols":[],"statements":[[6,"nav"],[9,"class","w-100 bb h3 bg-white shadow-1"],[7],[0,"\\n  "],[6,"div"],[9,"class","mw7 center ph3 flex items-center h3"],[7],[0,"\\n    "],[6,"h1"],[9,"class","f4 fw3 mv0 flex-auto"],[7],[4,"link-to",["index"],[["class"],["link black"]],{"statements":[[0,"Ember CLI Postcss"]],"parameters":[]},null],[8],[0,"\\n      "],[4,"link-to",["docs"],[["class","title"],["link blue ttu f5 hover-black mr3","Docs"]],{"statements":[[0,"Docs"]],"parameters":[]},null],[0,"\\n    "],[4,"link-to",["library"],[["class","title"],["link blue ttu f5 hover-black","Configuration Library"]],{"statements":[[0,"Library"]],"parameters":[]},null],[0,"\\n  "],[8],[0,"\\n  "],[6,"a"],[9,"href","https://github.com/jeffjewiss/ember-cli-postcss"],[9,"class","w2 h2 w3-l h3-l absolute top-0 right-0"],[9,"title","GitHub"],[7],[0,"\\n    "],[6,"svg"],[9,"class","octocat"],[9,"viewBox","0 0 250 250"],[7],[6,"path"],[9,"d","M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"],[7],[8],[6,"path"],[9,"class","octocat-arm"],[9,"d","M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"],[7],[8],[6,"path"],[9,"class","octocat-body"],[9,"d","M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"],[7],[8],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"main"],[7],[0,"\\n  "],[1,[18,"outlet"],false],[0,"\\n"],[8],[0,"\\n\\n"],[6,"footer"],[9,"class","w-100 pv6 bg-white bt b--black-10"],[7],[0,"\\n  "],[6,"div"],[9,"class","mw7 center ph3"],[7],[0,"\\n    "],[6,"div"],[9,"class","flex flex-row"],[7],[0,"\\n      "],[4,"link-to",["index"],[["class","title"],["link black hover-blue b mr3","Home"]],{"statements":[[0,"Home"]],"parameters":[]},null],[0,"\\n      "],[4,"link-to",["docs"],[["class","title"],["link black hover-blue b mr3","Docs"]],{"statements":[[0,"Docs"]],"parameters":[]},null],[0,"\\n      "],[4,"link-to",["library"],[["class","title"],["link black hover-blue b mr3","Configuration Library"]],{"statements":[[0,"Configuration Library"]],"parameters":[]},null],[0,"\\n      "],[6,"a"],[9,"href","https://github.com/jeffjewiss/ember-cli-postcss/graphs/contributors"],[9,"title","Contributors"],[9,"class","link green hover-blue b mr3"],[7],[0,"Contributors"],[8],[0,"\\n      "],[6,"a"],[9,"href","http://www.postcss.parts"],[9,"title","Find Plugins"],[9,"class","link green hover-blue b mr3"],[7],[0,"Find Plugins"],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"div"],[9,"class","v-top mt5"],[7],[0,"\\n      "],[6,"iframe"],[9,"src","https://ghbtns.com/github-btn.html?user=jeffjewiss&repo=ember-cli-postcss&type=star&count=true"],[9,"frameborder","0"],[9,"scrolling","0"],[9,"width","90px"],[9,"height","20px"],[7],[8],[0,"\\n      "],[6,"iframe"],[9,"src","https://ghbtns.com/github-btn.html?user=jeffjewiss&repo=ember-cli-postcss&type=fork&count=true"],[9,"frameborder","0"],[9,"scrolling","0"],[9,"width","90px"],[9,"height","20px"],[7],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"div"],[9,"class","mt4"],[7],[0,"\\n      "],[6,"p"],[9,"class","lh-copy mw6 gray"],[7],[0,"If you\'re having trouble configuring your project or would like to ask a question about the addon, please "],[6,"a"],[9,"href","https://github.com/jeffjewiss/ember-cli-postcss/issues/new"],[9,"title","Create an issue on GitHub"],[9,"class","blue link hover-black"],[7],[0,"create an issue on GitHub"],[8],[0,"."],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/docs",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"sD3gbkDL",block:'{"symbols":[],"statements":[[6,"header"],[9,"class","w-100 pv5 mt4"],[7],[0,"\\n  "],[6,"div"],[9,"class","flex flex-column items-center mb5 mw7 center ph3"],[7],[0,"\\n    "],[6,"h1"],[9,"class","f1 mb0 tc navy"],[7],[0,"Coming Soon"],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/docs.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"PlXzL5/n",block:'{"symbols":[],"statements":[[6,"header"],[9,"class","w-100 pv5 mt4"],[7],[0,"\\n  "],[6,"div"],[9,"class","flex flex-column items-center mb5 mw7 center ph3"],[7],[0,"\\n    "],[6,"img"],[9,"src","postcss.svg"],[9,"class",""],[7],[8],[0,"\\n    "],[6,"h1"],[9,"class","f1 mb0 tc navy"],[7],[0,"Ember CLI Postcss"],[8],[0,"\\n    "],[6,"h2"],[9,"class","f4 normal dark-gray tc"],[7],[0,"Transform CSS with JavaScript plugins in Your Ember Apps and Addons"],[8],[0,"\\n    "],[6,"a"],[9,"href","https://npmjs.com/package/ember-cli-postcss"],[9,"class","link f6 normal silver tc i"],[7],[0,"Currently v3.6.2"],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"section"],[9,"class","w-100 pv5 bt b--black-10"],[7],[0,"\\n  "],[6,"div"],[9,"class","mw7 center ph3"],[7],[0,"\\n    "],[6,"h3"],[9,"class","f2 near-black mt2"],[7],[0,"The Benefits"],[8],[0,"\\n    "],[6,"p"],[9,"class","lh-copy"],[7],[0,"Postcss creates an AST representation of your CSS and then applies transformations to it through a series of plugins. This gives you the stability of using plugins that follow the CSS spec or adding lots of powerful custom transformations to suit your project or development needs."],[8],[0,"\\n    "],[6,"p"],[9,"class","lh-copy"],[7],[0,"This addon allows you to use Postcss as your main style processor or use it at the end of the build process to transform your vendor styles as well as your app styles. You can also opt to use both of these processes for greator customization."],[8],[0,"\\n    "],[6,"p"],[9,"class","lh-copy"],[7],[0,"With minimal configuration you can setup plugins like "],[6,"strong"],[7],[0,"autoprefixer"],[8],[0," or "],[6,"strong"],[7],[0,"stylehint"],[8],[0,", to take care of vendor prefixes or lint your styles, respectively."],[8],[0,"\\n    "],[6,"p"],[9,"class","lh-copy"],[7],[0,"The postcss library and all of the plugins are written in JavaScript, so you don\'t need to worry about additional dependencies in other languages."],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"section"],[9,"class","w-100 pv5 bg-lightest-blue navy bt b--black-10"],[7],[0,"\\n  "],[6,"div"],[9,"class","mw7 center ph3"],[7],[0,"\\n    "],[6,"h3"],[9,"class","f2 mt2 near-black"],[7],[0,"Getting Started"],[8],[0,"\\n    "],[6,"p"],[9,"class","lh-copy"],[7],[0,"The easiest way to use "],[6,"a"],[9,"href","https://postcss.org"],[9,"class","link b blue hover-black"],[7],[0,"Postcss"],[8],[0," with an Ember application is to use this addon as the main processor for CSS files."],[8],[0,"\\n    "],[6,"p"],[9,"class","lh-copy"],[7],[0,"First you\'ll need to install the addon:"],[8],[0,"\\n    "],[6,"pre"],[9,"class","prettyprint lang-bash mv4"],[7],[6,"code"],[7],[0,"$ ember install ember-cli-postcss"],[8],[8],[0,"\\n    "],[6,"p"],[9,"class","lh-copy"],[7],[0,"Next you\'ll want to configure the addon as part of the options for your "],[6,"i"],[7],[0,"ember-cli-build.js"],[8],[0," file. Postcss relies on plugins to transform CSS, so you\'ll need to specify at least one plugin. In this example we\'ll use two plugins, one to allow other CSS files to be imported form the filesystem and from npm packages, and another to allow future CSS syntax to be used."],[8],[0,"\\n    "],[6,"pre"],[9,"class","prettyprint lang-js linenums lh-copy mv4"],[7],[6,"code"],[9,"class","lh-copy"],[7],[0,"// ember-cli-build.js\\nmodule.exports = function (defaults) {\\n  let app = new EmberAddon(defaults, {\\n    postcssOptions: {\\n      compile: {\\n        plugins: [\\n          { module: require(\'postcss-import\') },\\n          { module: require(\'postcss-cssnext\') }\\n        ]\\n      }\\n    }\\n  })\\n}"],[8],[8],[0,"\\n    "],[6,"p"],[9,"class","lh-copy"],[7],[0,"Now Postcss will be used to process your "],[6,"i"],[7],[0,"app.css"],[8],[0," file. Further information on advanced usage and all of the available configuration options can be found in the "],[4,"link-to",["docs"],[["title","class"],["Documentation","link b blue hover-black"]],{"statements":[[0,"docs"]],"parameters":[]},null],[0," or you can browse examples of different use cases in the "],[4,"link-to",["library"],[["title","class"],["Configuration Library","link b blue hover-black"]],{"statements":[[0,"configuration library"]],"parameters":[]},null],[0,"."],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/templates/library",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"r//yYvph",block:'{"symbols":[],"statements":[[6,"header"],[9,"class","w-100 pv5 mt4"],[7],[0,"\\n  "],[6,"div"],[9,"class","flex flex-column items-center mb5 mw7 center ph3"],[7],[0,"\\n    "],[6,"h1"],[9,"class","f1 mb0 tc navy"],[7],[0,"Coming Soon"],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/library.hbs"}})}),define("dummy/templates/test",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"Njz5CFTI",block:'{"symbols":[],"statements":[[6,"h2"],[9,"id","test-title"],[7],[0,"Welcome to Ember"],[8],[0,"\\n"],[6,"p"],[9,"id","test-paragraph"],[7],[0,"A second test"],[8],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/test.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),s={default:JSON.parse(unescape(t))}
return Object.defineProperty(s,"__esModule",{value:!0}),s}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-cli-postcss",version:"3.6.2+4285259a"})