/*! ProfileBar v1.1.0 | AcademixDirect, Inc. | axd.co | github.com/yurks */
!function(){function e(e,t){for(var i in e){var n=e[i],s=this.input.getAttribute("data-"+i.toLowerCase());"number"==typeof n?this[i]=parseInt(s):n===!1?this[i]=null!==s:n instanceof Function?this[i]=null:this[i]=s,this[i]||0===this[i]||(this[i]=i in t?t[i]:n)}}function t(e,t){return"string"==typeof e?(t||document).querySelector(e):e||null}function i(e,t){return r.call((t||document).querySelectorAll(e))}function n(){i("input.awesomplete").forEach(function(e){new s(e)})}var s=function(i,n){var r=this;this.input=t(i),this.input.setAttribute("autocomplete","off"),this.input.setAttribute("aria-autocomplete","list"),n=n||{},e.call(this,{minChars:2,maxItems:10,autoFirst:!1,filter:s.FILTER_CONTAINS,sort:s.SORT_BYLENGTH,item:function(e,i){var n=""===i?e:e.replace(RegExp(t.regExpEscape(i.trim()),"gi"),"<mark>$&</mark>");return t.create("li",{innerHTML:n,"aria-selected":"false"})},replace:function(e){this.input.value=e}},n),this.index=-1,this.container=t.create("div",{className:"awesomplete",around:i}),this.ul=t.create("ul",{hidden:"hidden",inside:this.container}),this.status=t.create("span",{className:"visually-hidden",role:"status","aria-live":"assertive","aria-relevant":"additions",inside:this.container}),t.bind(this.input,{input:this.evaluate.bind(this),blur:this.close.bind(this),keydown:function(e){var t=e.keyCode;r.opened&&(13===t&&r.selected?(e.preventDefault(),r.select()):27===t?r.close():(38===t||40===t)&&(e.preventDefault(),r[38===t?"previous":"next"]()))}}),t.bind(this.input.form,{submit:this.close.bind(this)}),t.bind(this.ul,{mousedown:function(e){var t=e.target;if(t!==this){for(;t&&!/li/i.test(t.nodeName);)t=t.parentNode;t&&0===e.button&&(e.preventDefault(),r.select(t,e.target))}}}),this.input.hasAttribute("list")?(this.list="#"+this.input.getAttribute("list"),this.input.removeAttribute("list")):this.list=this.input.getAttribute("data-list")||n.list||[],s.all.push(this)};s.prototype={set list(e){Array.isArray(e)?this._list=e:"string"==typeof e&&e.indexOf(",")>-1?this._list=e.split(/\s*,\s*/):(e=t(e),e&&e.children&&(this._list=r.apply(e.children).map(function(e){return e.textContent.trim()}))),document.activeElement===this.input&&this.evaluate()},get selected(){return this.index>-1},get opened(){return!this.ul.hasAttribute("hidden")},close:function(){this.ul.setAttribute("hidden",""),this.index=-1,t.fire(this.input,"awesomplete-close")},open:function(){this.ul.removeAttribute("hidden"),this.autoFirst&&-1===this.index&&this["goto"](0),t.fire(this.input,"awesomplete-open")},next:function(){var e=this.ul.children.length;this["goto"](this.index<e-1?this.index+1:-1)},previous:function(){var e=this.ul.children.length;this["goto"](this.selected?this.index-1:e-1)},"goto":function(e){var i=this.ul.children;this.selected&&i[this.index].setAttribute("aria-selected","false"),this.index=e,e>-1&&i.length>0&&(i[e].setAttribute("aria-selected","true"),this.status.textContent=i[e].textContent),t.fire(this.input,"awesomplete-highlight")},select:function(e,i){if(e=e||this.ul.children[this.index]){var n=t.fire(this.input,"awesomplete-select",{text:e.textContent,origin:i||e});n&&(this.replace(e.textContent),this.close(),t.fire(this.input,"awesomplete-selectcomplete"))}},evaluate:function(){var e=this,t=this.input.value;t.length>=this.minChars&&this._list.length>0?(this.index=-1,this.ul.innerHTML="",this._list.filter(function(i){return e.filter(i,t)}).sort(this.sort).every(function(i,n){return e.ul.appendChild(e.item(i,t)),n<e.maxItems-1}),0===this.ul.children.length?this.close():this.open()):this.close()}},s.all=[],s.FILTER_CONTAINS=function(e,i){return RegExp(t.regExpEscape(i.trim()),"i").test(e)},s.FILTER_STARTSWITH=function(e,i){return RegExp("^"+t.regExpEscape(i.trim()),"i").test(e)},s.SORT_BYLENGTH=function(e,t){return e.length!==t.length?e.length-t.length:t>e?-1:1};var r=Array.prototype.slice;return t.create=function(e,i){var n=document.createElement(e);for(var s in i){var r=i[s];if("inside"===s)t(r).appendChild(n);else if("around"===s){var l=t(r);l.parentNode.insertBefore(n,l),n.appendChild(l)}else s in n?n[s]=r:n.setAttribute(s,r)}return n},t.bind=function(e,t){if(e)for(var i in t){var n=t[i];i.split(/\s+/).forEach(function(t){e.addEventListener(t,n)})}},t.fire=function(e,t,i){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0);for(var s in i)n[s]=i[s];return e.dispatchEvent(n)},t.regExpEscape=function(e){return e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")},"undefined"!=typeof Document&&("loading"!==document.readyState?n():document.addEventListener("DOMContentLoaded",n)),s.$=t,s.$$=i,"undefined"!=typeof self&&(self.Awesomplete=s),"object"==typeof module&&module.exports&&(module.exports=s),s}(),function(e){var t=e.Ace;t&&(t(function(){var t="typeahead",i=t+":",n=e.Awesomplete,s=function(e,t,i){e.on("ace-field-changed",function(e,n,s){if(s.name===t){var r=n.getFieldValueSingle(s.name);n.getFieldValueSingle(i)||(n.control.item(i).value=r)}}).on("ace-initialized",function(e,i){var s=i.control.item(t);s&&(s.addEventListener("awesomplete-selectcomplete",function(){i.actions.fire("field-change",t)}),new n(s,{list:i.getFieldOptions(t)}))})},r=function(e,t,n){var r,l,o,a,u=[];l=t.options,o=t.children={},a=i+t.name;var c=n.stored_values||t.stored_values;c=c&&c+"";var h=null;for(r=0;r<l.length;r++)o[l[r].label]||(u.push(l[r].label),o[l[r].label]=[l[r]],c&&l[r].id===c&&(h=l[r].label));return l.length=0,t.field_type=e.fieldtypes.hidden,t.depends_on=a,s(e,a,t.name),{name:a,label:n.label||t.label,local:!0,placeholder:n.placeholder||t.placeholder,field_type:e.fieldtypes.text,required:"required"in n?n.required:t.required,options:u,stored_values:h}};return function(e){n&&"form"===e.method&&e.on("ace-fetched",function(e,i){var n,s=i.raw.form.questions,l=i.settings.get("fields");if(s&&l)for(n=0;n<s.length;n++)l[s[n].name]&&l[s[n].name][t]&&s[n].options&&s.push(r(i,s[n],l[s[n].name]))})}}),e.AceProfile=function(e,i,n){return t(e),"string"==typeof e.follow_session?t("results",n).on("ace-prepare",function(e,t){t.render=function(){var e={},i=[],n=[null,"Coursetalk","CollegePrep","CommunityCollege"],s=t.settings.get("app_results_type_labels");t.all().forEach(function(t,i){var s=t.getProperty("form_type");s=n[i]||s,e[s]=e[s]||[],e[s].push('<div class="profile-results-item '+(t.isProcessed()?"profile-results-item-processed":"")+'" data-id="'+t.getId()+'">'+t.getLogo(!0)+'<div class="profile-results-item-title">'+t.getName(!0)+'</div><a class="profile-results-item-open" href title="More Information"><i class="fa fa-arrow-circle-right"></i></a></div>')});var r=Object.keys(s).map(function(t,n){return e[t]&&e[t].length?(i.push('<div class="profile-results-item-group profile-results-item-group-'+n+'-type"><div class="profile-results-item-label"><span>'+s[t]+"<em></em></span></div>"+e[t].join("")+"</div>"),'<span class="profile-results-plan-arrow"><i class="fa fa-arrow-right"></i></span><span class="profile-results-plan-icon profile-results-plan-'+n+'-icon"></span>'):""});return'<div class="profile-results-title">'+t.settings.get("app_results_title")+'</div><div class="profile-results-plan">'+r.join("")+'</div><div class="profile-results-items profile-results-items-count-'+i.length+'">'+i.join("")+"</div>"}}).on("ace-initialized",function(e,t){$(t.cntnr).on("click",".profile-results-item",function(e){e.preventDefault();var i=this.getAttribute("data-id"),n=$(this);if(i){var s=t.item(i);n.next().is(".ace-result")?$(s.holder()).detach():(n.after(s.holder()||s.render()),s.attachForm())}})}):(i.results={attach:"auto",settings:n},t("form",i).on("ace-submitting",function(e,t){var i=t.session.getUrl("store");i&&t.ajax(i,null,null,"POST")}))})}(this);