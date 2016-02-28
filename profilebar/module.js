/*! ProfileBar v1.1.0 | AcademixDirect, Inc. | axd.co | github.com/yurks */
!function(){function e(e,t){for(var i in e){var n=e[i],s=this.input.getAttribute("data-"+i.toLowerCase());"number"==typeof n?this[i]=parseInt(s):n===!1?this[i]=null!==s:n instanceof Function?this[i]=null:this[i]=s,this[i]||0===this[i]||(this[i]=i in t?t[i]:n)}}function t(e,t){return"string"==typeof e?(t||document).querySelector(e):e||null}function i(e,t){return r.call((t||document).querySelectorAll(e))}function n(){i("input.awesomplete").forEach(function(e){new s(e)})}var s=function(i,n){var r=this;this.input=t(i),this.input.setAttribute("autocomplete","off"),this.input.setAttribute("aria-autocomplete","list"),n=n||{},e.call(this,{minChars:2,maxItems:10,autoFirst:!1,filter:s.FILTER_CONTAINS,sort:s.SORT_BYLENGTH,item:function(e,i){var n=""===i?e:e.replace(RegExp(t.regExpEscape(i.trim()),"gi"),"<mark>$&</mark>");return t.create("li",{innerHTML:n,"aria-selected":"false"})},replace:function(e){this.input.value=e}},n),this.index=-1,this.container=t.create("div",{className:"awesomplete",around:i}),this.ul=t.create("ul",{hidden:"hidden",inside:this.container}),this.status=t.create("span",{className:"visually-hidden",role:"status","aria-live":"assertive","aria-relevant":"additions",inside:this.container}),t.bind(this.input,{input:this.evaluate.bind(this),blur:this.close.bind(this),keydown:function(e){var t=e.keyCode;r.opened&&(13===t&&r.selected?(e.preventDefault(),r.select()):27===t?r.close():(38===t||40===t)&&(e.preventDefault(),r[38===t?"previous":"next"]()))}}),t.bind(this.input.form,{submit:this.close.bind(this)}),t.bind(this.ul,{mousedown:function(e){var t=e.target;if(t!==this){for(;t&&!/li/i.test(t.nodeName);)t=t.parentNode;t&&0===e.button&&(e.preventDefault(),r.select(t,e.target))}}}),this.input.hasAttribute("list")?(this.list="#"+this.input.getAttribute("list"),this.input.removeAttribute("list")):this.list=this.input.getAttribute("data-list")||n.list||[],s.all.push(this)};s.prototype={set list(e){Array.isArray(e)?this._list=e:"string"==typeof e&&e.indexOf(",")>-1?this._list=e.split(/\s*,\s*/):(e=t(e),e&&e.children&&(this._list=r.apply(e.children).map(function(e){return e.textContent.trim()}))),document.activeElement===this.input&&this.evaluate()},get selected(){return this.index>-1},get opened(){return!this.ul.hasAttribute("hidden")},close:function(){this.ul.setAttribute("hidden",""),this.index=-1,t.fire(this.input,"awesomplete-close")},open:function(){this.ul.removeAttribute("hidden"),this.autoFirst&&-1===this.index&&this["goto"](0),t.fire(this.input,"awesomplete-open")},next:function(){var e=this.ul.children.length;this["goto"](this.index<e-1?this.index+1:-1)},previous:function(){var e=this.ul.children.length;this["goto"](this.selected?this.index-1:e-1)},"goto":function(e){var i=this.ul.children;this.selected&&i[this.index].setAttribute("aria-selected","false"),this.index=e,e>-1&&i.length>0&&(i[e].setAttribute("aria-selected","true"),this.status.textContent=i[e].textContent),t.fire(this.input,"awesomplete-highlight")},select:function(e,i){if(e=e||this.ul.children[this.index]){var n=t.fire(this.input,"awesomplete-select",{text:e.textContent,origin:i||e});n&&(this.replace(e.textContent),this.close(),t.fire(this.input,"awesomplete-selectcomplete"))}},evaluate:function(){var e=this,t=this.input.value;t.length>=this.minChars&&this._list.length>0?(this.index=-1,this.ul.innerHTML="",this._list.filter(function(i){return e.filter(i,t)}).sort(this.sort).every(function(i,n){return e.ul.appendChild(e.item(i,t)),n<e.maxItems-1}),0===this.ul.children.length?this.close():this.open()):this.close()}},s.all=[],s.FILTER_CONTAINS=function(e,i){return RegExp(t.regExpEscape(i.trim()),"i").test(e)},s.FILTER_STARTSWITH=function(e,i){return RegExp("^"+t.regExpEscape(i.trim()),"i").test(e)},s.SORT_BYLENGTH=function(e,t){return e.length!==t.length?e.length-t.length:t>e?-1:1};var r=Array.prototype.slice;return t.create=function(e,i){var n=document.createElement(e);for(var s in i){var r=i[s];if("inside"===s)t(r).appendChild(n);else if("around"===s){var a=t(r);a.parentNode.insertBefore(n,a),n.appendChild(a)}else s in n?n[s]=r:n.setAttribute(s,r)}return n},t.bind=function(e,t){if(e)for(var i in t){var n=t[i];i.split(/\s+/).forEach(function(t){e.addEventListener(t,n)})}},t.fire=function(e,t,i){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0);for(var s in i)n[s]=i[s];return e.dispatchEvent(n)},t.regExpEscape=function(e){return e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")},"undefined"!=typeof Document&&("loading"!==document.readyState?n():document.addEventListener("DOMContentLoaded",n)),s.$=t,s.$$=i,"undefined"!=typeof self&&(self.Awesomplete=s),"object"==typeof module&&module.exports&&(module.exports=s),s}(),function(e){var t=e.Ace;if(t){var i=function(){var e=$("body"),t="marker",i=function(e){return t+"-"+e};return{set:function(t){e.addClass(i(t))},remove:function(t){e.removeClass(i(t))},check:function(t){return e.hasClass(i(t))}}}();t(function(){var t="typeahead",i=t+":",n=e.Awesomplete,s=function(e,t,i){e.on("ace-field-changed",function(e,n,s){if(s.name===t){var r=n.getFieldValueSingle(s.name);n.getFieldValueSingle(i)||(n.control.item(i).value=r)}}).on("ace-initialized",function(e,i){var s=i.control.item(t);s&&(s.addEventListener("awesomplete-selectcomplete",function(){i.actions.fire("field-change",t)}),new n(s,{list:i.getFieldOptions(t),filter:n.FILTER_STARTSWITH}))})},r=function(e,t,n){var r,a,l,o,c=[];a=t.options,l=t.children={},o=i+t.name;var u=n.stored_values||t.stored_values;u=u&&u+"";var d=null;for(r=0;r<a.length;r++)l[a[r].label]||(c.push(a[r].label),l[a[r].label]=[a[r]],u&&a[r].id===u&&(d=a[r].label));return a.length=0,t.field_type=e.fieldtypes.hidden,t.depends_on=o,s(e,o,t.name),{name:o,label:n.label||t.label,local:!0,placeholder:n.placeholder||t.placeholder,field_type:e.fieldtypes.text,required:"required"in n?n.required:t.required,options:c,stored_values:d}};return function(e){n&&"form"===e.method&&e.on("ace-fetched",function(e,i){var n,s=i.raw.form.questions,a=i.settings.get("fields");if(s&&a)for(n=0;n<s.length;n++)a[s[n].name]&&a[s[n].name][t]&&s[n].options&&s.push(r(i,s[n],a[s[n].name]))})}}),t(function(){return function(e){"results"===e.method&&e.on("ace-prepare",function(e,t){t.render=function(){var e={},i=[],n=t.settings.get("app_results_type_labels");t.all().forEach(function(t,i){if(i>2)return!1;var n=t.getProperty("form_type");e[n]=e[n]||[],e[n].push('<div class="profile-results-item '+(t.isProcessed()?"profile-results-item-processed":"")+'" data-id="'+t.getId()+'">'+t.getLogo(!0)+'<div class="profile-results-item-title">'+t.getName(!0)+'</div><a class="profile-results-item-open" href title="More Information"><i class="fa fa-arrow-circle-right"></i></a></div>')});var s=Object.keys(n).map(function(t,s){return e[t]&&e[t].length?(i.push('<div class="profile-results-item-group profile-results-item-group-'+s+'-type"><div class="profile-results-item-label"><span>'+n[t]+"<em></em></span></div>"+e[t].join("")+"</div>"),'<span class="profile-results-plan-arrow"><i class="fa fa-arrow-right"></i></span><span class="profile-results-plan-icon profile-results-plan-'+s+'-icon"></span>'):""});return'<div class="profile-results-plan">'+s.join("")+'</div><div class="profile-results-items profile-results-items-count-'+i.length+'">'+i.join("")+"</div>"}}).on("ace-initialized",function(e,t){$(t.cntnr).on("click",".profile-results-item",function(e){e.preventDefault();var n=this.getAttribute("data-id");if(n){var s=t.item(n),r=$(s.holder()||s.render());s.holder()||(r.prepend('<div class="ace-results-actions"><a class="ace-action-pager-prev-page ace-action app-action-close">Back</a></div>'),r.on("click","a.app-action-close",function(e){e.preventDefault(),r.detach(),i.remove("active-school")})),i.set("active-school"),$(t.cntnr).append(r),s.attachForm()}})})}}),e.AceProfile=function(e,n,s){t(e),n.results={attach:"auto",settings:s};var r=/<[^>]*>/g,a=function(e){var t,i,n,s,a,l="",o=e.getFields();for(i=0;o&&i<o.length;i++)if(o[i].summary){if(s=e.getFieldValueSingle(o[i],"label"),s&&o[i].field_type===e.fieldtypes.hidden)for(a=e.getFieldOptions(o[i]),n=0;a&&n<a.length;n++)if(a[n].id===s){s=a[n].label;break}"FutureGoal"===o[i].name&&(t=s),l+=" "+o[i].label.replace(r,"").trim()+" <b>"+s+"</b>"}return l='<div class="profile-summary"><div class="profile-summary-head">'+e.settings.get("pages")[0].label+'</div><div class="profile-summary-content">'+l.slice(1)+".</div></div>",$(e.cntx).children(".profile-summary").remove(),t&&$(e.cntx).prepend(l),t},l=/%FutureGoal%/,o=function(e,t){var i=a(t);i&&$(e.wrpr).prepend('<div class="profile-results-title">'+e.settings.get("app_results_title").replace(l,i)+"</div>")},c=$("body");c.on("click",".profile-summary-content",function(e){i.set("active-editing"),c.on("click.popup",function(e){"em"===e.target.tagName.toLowerCase()&&"ace-form-page-title"===e.target.parentNode.className&&(i.remove("active-editing"),c.off(".popup"))})});var u=t("form",n).on("ace-attached-results",function(e,t,i){s.context=i.cntx;var n=function(){o(i,t)};i.on("ace-initialized",function(){o(i,t)}).on("ace-destroy",function(){t.off("ace-initialized",n)}),t.on("ace-initialized",n)});if("string"==typeof e.follow_session)i.set("active-results"),u.on("ace-prepare",function(e,t){t.actions.fire("attach-results",s)});else{i.set("active-home");var d=function(e,t){var i=t.session.getUrl("store");i&&t.ajax(i,null,null,"POST")},p=function(e,t){t.off("ace-submitting",d),t.off("ace-attached-results",p),i.remove("active-home"),i.set("active-results")};u.on("ace-submitting",d).on("ace-attached-results",p)}}}}(this);