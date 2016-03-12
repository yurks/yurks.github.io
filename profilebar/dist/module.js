/*!
 * profilebar v2.0.0
 * Profile Bar module for CareerJell
 * 
 * AcademixDirect, Inc.
 * http://academixdirect.com/
 * 
 * Date: 2016-03-12T19:02:48Z
 * Author: Yurk Sha (https://github.com/yurks)
 */
(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: false
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.loaded = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(0);
})(function(modules) {
    for (var i in modules) {
        if (Object.prototype.hasOwnProperty.call(modules, i)) {
            switch (typeof modules[i]) {
              case "function":
                break;

              case "object":
                modules[i] = function(_m) {
                    var args = _m.slice(1), fn = modules[_m[0]];
                    return function(a, b, c) {
                        fn.apply(this, [ a, b, c ].concat(args));
                    };
                }(modules[i]);
                break;

              default:
                modules[i] = modules[modules[i]];
                break;
            }
        }
    }
    return modules;
}([ function(module, exports, __webpack_require__) {
    __webpack_require__(1);
    window.AceProfile = __webpack_require__(5)(window);
    __webpack_require__(21);
    __webpack_require__(23);
}, function(module, exports) {}, , , , function(module, exports, __webpack_require__) {
    module.exports = function(window) {
        var Ace = window.Ace;
        if (!Ace) {
            console.error("window.Ace is " + typeof window.Ace);
            return function() {};
        }
        var Marker = __webpack_require__(6)();
        Ace(__webpack_require__(7));
        Ace(__webpack_require__(13));
        Ace(__webpack_require__(14));
        Ace(__webpack_require__(15));
        Ace(__webpack_require__(16));
        Ace(__webpack_require__(19));
        Ace(__webpack_require__(20));
        return function(defaults, settings_form, settings_results) {
            Ace(defaults);
            settings_form.results = {
                attach: "auto",
                settings: settings_results
            };
            var Form = Ace("form", settings_form).on("ace-attached-results", function(e, form, results) {
                settings_results.context = results.cntx;
                results.on("ace-school-active", function(e, results, activate) {
                    Marker.set("active-school", activate);
                });
            }).on("ace-summary-active", function(e, form, activate) {
                Marker.set("active-editing", activate);
            }).on("ace-typeahead-active", function(e, form, activate, field, holder) {
                Marker.set("active-typeahead", activate);
                if (activate) {
                    holder.setAttribute("active-typeahead", "");
                } else {
                    holder.removeAttribute("active-typeahead");
                }
            });
            if (typeof defaults.follow_session === "string") {
                Marker.set("active-results");
                Form.on("ace-prepare", function(e, form) {
                    form.actions.fire("attach-results", settings_results);
                });
            } else {
                Marker.set("active-home");
                var submittingHandler = function(e, form) {
                    var store_url = form.session.getUrl("store");
                    if (store_url) {
                        form.ajax(store_url, null, null, "POST");
                    }
                };
                var attachedResultsHandler = function(e, form) {
                    form.off("ace-submitting", submittingHandler);
                    form.off("ace-attached-results", attachedResultsHandler);
                    Marker.remove("active-home");
                    Marker.set("active-results");
                };
                Form.on("ace-submitting", submittingHandler).on("ace-attached-results", attachedResultsHandler);
            }
        };
    };
}, function(module, exports) {
    var prefixDefault = "marker";
    module.exports = function(element, prefix) {
        element = element || $("body");
        prefix = prefix || prefixDefault;
        var renderMarker = function(marker) {
            return prefix + "-" + marker;
        };
        return {
            set: function(marker, isSet) {
                if (isSet === false) {
                    this.remove(marker);
                } else {
                    element.addClass(renderMarker(marker));
                }
            },
            remove: function(marker) {
                element.removeClass(renderMarker(marker));
            },
            check: function(marker) {
                return element.hasClass(renderMarker(marker));
            }
        };
    };
}, function(module, exports, __webpack_require__) {
    var Awesomplete = __webpack_require__(8);
    __webpack_require__(9);
    module.exports = function() {
        var plugin_name = "typeahead";
        var field_prefix = plugin_name + ":";
        var bindEvents = function(form, localFieldName, fieldName) {
            form.on("ace-field-changed", function(e, form, field) {
                if (field.name === localFieldName) {
                    var value = form.getFieldValueSingle(field.name);
                    if (!form.getFieldValueSingle(fieldName)) {
                        form.control.item(fieldName).value = value;
                    }
                }
            }).on("ace-initialized", function(e, form) {
                var field = form.getField(localFieldName);
                var control = form.control.item(field);
                var holder = form.control.get(field);
                if (control) {
                    var open = function() {
                        if (!("_typeahead_save" in field)) {
                            field._typeahead_save = control.value;
                            control.value = "";
                        }
                        form.trigger("typeahead-active", true, field, holder);
                    };
                    var setValue = function(value) {
                        if (typeof value !== "object" && value != null) {
                            control.value = (value === true ? field._typeahead_save : value) || "";
                            form.actions.fire("field-change", field.name);
                        }
                    };
                    var close = function(value) {
                        setValue(value);
                        delete field._typeahead_save;
                        control.blur();
                        form.trigger("typeahead-active", false, field, holder);
                    };
                    holder.addEventListener("click", function(e) {
                        var el = e.target;
                        if (el.tagName.toLowerCase() === "span") {
                            if (el.getAttribute("typeahead-close") != null) {
                                close(true);
                            } else if (el.getAttribute("typeahead-clear") != null) {
                                setValue(false);
                                control.focus();
                            }
                        }
                    });
                    control.addEventListener("keypress", function(e) {
                        if (e.which == 13 || e.keyCode == 13) {
                            e.preventDefault();
                            close(control.value);
                        } else if (e.which == 27 || e.keyCode == 27) {
                            e.preventDefault();
                            close(true);
                        }
                    });
                    control.addEventListener("focus", open);
                    control.addEventListener("awesomplete-selectcomplete", close);
                    form.dom.after(form.dom.create('<span class="typeahead-controls"><span typeahead-close></span><span typeahead-clear></span></span>'), new Awesomplete(control, {
                        list: form.getFieldOptions(localFieldName),
                        filter: Awesomplete.FILTER_STARTSWITH
                    }).input);
                }
            });
        };
        var processField = function(form, field, fieldDef) {
            var i, options, children, labels = [], localFieldName;
            options = field.options;
            children = field.children = {};
            localFieldName = field_prefix + field.name;
            var defaultValue = fieldDef.stored_values || field.stored_values;
            defaultValue = defaultValue && defaultValue + "";
            var localFieldValue = null;
            for (i = 0; i < options.length; i++) {
                if (!children[options[i].label]) {
                    labels.push(options[i].label);
                    children[options[i].label] = [ options[i] ];
                    if (defaultValue && options[i].id === defaultValue) {
                        localFieldValue = options[i].label;
                    }
                }
            }
            options.length = 0;
            field.field_type = form.fieldtypes.hidden;
            field.depends_on = localFieldName;
            bindEvents(form, localFieldName, field.name);
            return {
                name: localFieldName,
                label: fieldDef.label || field.label,
                typeahead_for: field.name,
                local: true,
                placeholder: fieldDef.placeholder || field.placeholder,
                field_type: form.fieldtypes.text,
                required: "required" in fieldDef ? fieldDef.required : field.required,
                options: labels,
                stored_values: localFieldValue
            };
        };
        return function(instance) {
            if (Awesomplete && instance.method === "form") {
                instance.on("ace-prepare", function() {
                    instance.getFieldTypeaheadValue = function(fieldName, mode) {
                        return instance.getFieldValueSingle(field_prefix + fieldName, mode) || instance.getFieldValueSingle(fieldName, mode);
                    };
                }).on("ace-fetched", function() {
                    var i, questions = instance.raw.form.questions;
                    var fieldsSetings = instance.settings.get("fields");
                    if (questions && fieldsSetings) {
                        for (i = 0; i < questions.length; i++) {
                            if (fieldsSetings[questions[i].name] && fieldsSetings[questions[i].name][plugin_name] && questions[i].options) {
                                questions.push(processField(instance, questions[i], fieldsSetings[questions[i].name]));
                            }
                        }
                    }
                });
            }
        };
    };
}, function(module, exports) {
    (function() {
        var _ = function(input, o) {
            var me = this;
            this.input = $(input);
            this.input.setAttribute("autocomplete", "off");
            this.input.setAttribute("aria-autocomplete", "list");
            o = o || {};
            configure(this, {
                minChars: 2,
                maxItems: 10,
                autoFirst: false,
                filter: _.FILTER_CONTAINS,
                sort: _.SORT_BYLENGTH,
                item: _.ITEM,
                replace: _.REPLACE
            }, o);
            this.index = -1;
            this.container = $.create("div", {
                className: "awesomplete",
                around: input
            });
            this.ul = $.create("ul", {
                hidden: "hidden",
                inside: this.container
            });
            this.status = $.create("span", {
                className: "visually-hidden",
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions",
                inside: this.container
            });
            $.bind(this.input, {
                input: this.evaluate.bind(this),
                blur: this.close.bind(this),
                keydown: function(evt) {
                    var c = evt.keyCode;
                    if (me.opened) {
                        if (c === 13 && me.selected) {
                            evt.preventDefault();
                            me.select();
                        } else if (c === 27) {
                            me.close();
                        } else if (c === 38 || c === 40) {
                            evt.preventDefault();
                            me[c === 38 ? "previous" : "next"]();
                        }
                    }
                }
            });
            $.bind(this.input.form, {
                submit: this.close.bind(this)
            });
            $.bind(this.ul, {
                mousedown: function(evt) {
                    var li = evt.target;
                    if (li !== this) {
                        while (li && !/li/i.test(li.nodeName)) {
                            li = li.parentNode;
                        }
                        if (li && evt.button === 0) {
                            evt.preventDefault();
                            me.select(li, evt.target);
                        }
                    }
                }
            });
            if (this.input.hasAttribute("list")) {
                this.list = "#" + this.input.getAttribute("list");
                this.input.removeAttribute("list");
            } else {
                this.list = this.input.getAttribute("data-list") || o.list || [];
            }
            _.all.push(this);
        };
        _.prototype = {
            set list(list) {
                if (Array.isArray(list)) {
                    this._list = list;
                } else if (typeof list === "string" && list.indexOf(",") > -1) {
                    this._list = list.split(/\s*,\s*/);
                } else {
                    list = $(list);
                    if (list && list.children) {
                        this._list = slice.apply(list.children).map(function(el) {
                            return el.textContent.trim();
                        });
                    }
                }
                if (document.activeElement === this.input) {
                    this.evaluate();
                }
            },
            get selected() {
                return this.index > -1;
            },
            get opened() {
                return !this.ul.hasAttribute("hidden");
            },
            close: function() {
                this.ul.setAttribute("hidden", "");
                this.index = -1;
                $.fire(this.input, "awesomplete-close");
            },
            open: function() {
                this.ul.removeAttribute("hidden");
                if (this.autoFirst && this.index === -1) {
                    this.goto(0);
                }
                $.fire(this.input, "awesomplete-open");
            },
            next: function() {
                var count = this.ul.children.length;
                this.goto(this.index < count - 1 ? this.index + 1 : -1);
            },
            previous: function() {
                var count = this.ul.children.length;
                this.goto(this.selected ? this.index - 1 : count - 1);
            },
            "goto": function(i) {
                var lis = this.ul.children;
                if (this.selected) {
                    lis[this.index].setAttribute("aria-selected", "false");
                }
                this.index = i;
                if (i > -1 && lis.length > 0) {
                    lis[i].setAttribute("aria-selected", "true");
                    this.status.textContent = lis[i].textContent;
                }
                $.fire(this.input, "awesomplete-highlight");
            },
            select: function(selected, origin) {
                selected = selected || this.ul.children[this.index];
                if (selected) {
                    var allowed = $.fire(this.input, "awesomplete-select", {
                        text: selected.textContent,
                        data: this.suggestions[$.siblingIndex(selected)],
                        origin: origin || selected
                    });
                    if (allowed) {
                        this.replace(selected.textContent);
                        this.close();
                        $.fire(this.input, "awesomplete-selectcomplete");
                    }
                }
            },
            evaluate: function() {
                var me = this;
                var value = this.input.value;
                if (value.length >= this.minChars && this._list.length > 0) {
                    this.index = -1;
                    this.ul.innerHTML = "";
                    this.suggestions = this._list.filter(function(item) {
                        return me.filter(item, value);
                    }).sort(this.sort).slice(0, this.maxItems);
                    this.suggestions.forEach(function(text) {
                        me.ul.appendChild(me.item(text, value));
                    });
                    if (this.ul.children.length === 0) {
                        this.close();
                    } else {
                        this.open();
                    }
                } else {
                    this.close();
                }
            }
        };
        _.all = [];
        _.FILTER_CONTAINS = function(text, input) {
            return RegExp($.regExpEscape(input.trim()), "i").test(text);
        };
        _.FILTER_STARTSWITH = function(text, input) {
            return RegExp("^" + $.regExpEscape(input.trim()), "i").test(text);
        };
        _.SORT_BYLENGTH = function(a, b) {
            if (a.length !== b.length) {
                return a.length - b.length;
            }
            return a < b ? -1 : 1;
        };
        _.ITEM = function(text, input) {
            var html = input === "" ? text : text.replace(RegExp($.regExpEscape(input.trim()), "gi"), "<mark>$&</mark>");
            return $.create("li", {
                innerHTML: html,
                "aria-selected": "false"
            });
        };
        _.REPLACE = function(text) {
            this.input.value = text;
        };
        function configure(instance, properties, o) {
            for (var i in properties) {
                var initial = properties[i], attrValue = instance.input.getAttribute("data-" + i.toLowerCase());
                if (typeof initial === "number") {
                    instance[i] = parseInt(attrValue);
                } else if (initial === false) {
                    instance[i] = attrValue !== null;
                } else if (initial instanceof Function) {
                    instance[i] = null;
                } else {
                    instance[i] = attrValue;
                }
                if (!instance[i] && instance[i] !== 0) {
                    instance[i] = i in o ? o[i] : initial;
                }
            }
        }
        var slice = Array.prototype.slice;
        function $(expr, con) {
            return typeof expr === "string" ? (con || document).querySelector(expr) : expr || null;
        }
        function $$(expr, con) {
            return slice.call((con || document).querySelectorAll(expr));
        }
        $.create = function(tag, o) {
            var element = document.createElement(tag);
            for (var i in o) {
                var val = o[i];
                if (i === "inside") {
                    $(val).appendChild(element);
                } else if (i === "around") {
                    var ref = $(val);
                    ref.parentNode.insertBefore(element, ref);
                    element.appendChild(ref);
                } else if (i in element) {
                    element[i] = val;
                } else {
                    element.setAttribute(i, val);
                }
            }
            return element;
        };
        $.bind = function(element, o) {
            if (element) {
                for (var event in o) {
                    var callback = o[event];
                    event.split(/\s+/).forEach(function(event) {
                        element.addEventListener(event, callback);
                    });
                }
            }
        };
        $.fire = function(target, type, properties) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent(type, true, true);
            for (var j in properties) {
                evt[j] = properties[j];
            }
            return target.dispatchEvent(evt);
        };
        $.regExpEscape = function(s) {
            return s.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
        };
        $.siblingIndex = function(el) {
            for (var i = 0; el = el.previousElementSibling; i++) ;
            return i;
        };
        function init() {
            $$("input.awesomplete").forEach(function(input) {
                new _(input);
            });
        }
        if (typeof Document !== "undefined") {
            if (document.readyState !== "loading") {
                init();
            } else {
                document.addEventListener("DOMContentLoaded", init);
            }
        }
        _.$ = $;
        _.$$ = $$;
        if (typeof self !== "undefined") {
            self.Awesomplete = _;
        }
        if (typeof module === "object" && module.exports) {
            module.exports = _;
        }
        return _;
    })();
}, 1, , , , function(module, exports) {
    module.exports = function() {
        var isFieldControlVisible = function(form, field, hide_predefined) {
            return field.field_type !== form.fieldtypes.hidden && !form.fieldAsHidden(field) && !(hide_predefined && field.predefined === true);
        };
        var count = function(form, counter, hide_predefined, data) {
            var counter = counter || {
                total: 0,
                completed: 0,
                filled: 0
            }, i, fields = form.getFields(data);
            counter.total = 0;
            counter.completed = 0;
            counter.filled = 0;
            for (i = 0; i < fields.length; i++) {
                if (isFieldControlVisible(form, fields[i], hide_predefined) && !fields[i].progress_exclude) {
                    counter.total++;
                    if (form.fieldCheck(fields[i])) {
                        counter.completed++;
                        if (form.fieldHasValue(fields[i])) {
                            counter.filled++;
                            if (fields[i].predefined && !fields[i].progress_dirty) {
                                counter.total--;
                                counter.completed--;
                                counter.filled--;
                            }
                        } else if (fields[i].predefined && !fields[i].progress_dirty) {
                            fields[i].progress_dirty = true;
                            counter.completed--;
                        }
                    } else if (fields[i].predefined && !fields[i].progress_dirty) {
                        fields[i].progress_dirty = true;
                    }
                }
            }
            return counter;
        };
        return function(instance) {
            if (instance.method === "form" && instance.settings.get("progress")) {
                var counter;
                var hide_predefined = instance.settings.get("hide_predefined");
                var countHandler = function(e, form) {
                    counter = count(form, counter, hide_predefined);
                    form.trigger("progress", counter);
                };
                instance.on("ace-initialized", countHandler).on("ace-field-redrawn", countHandler).on("ace-field-changed", countHandler).on("ace-submit", function(e, form, post_data, form_page) {
                    form_page.validated = form_page.validated && counter.total - counter.completed === 0;
                });
            }
        };
    };
}, function(module, exports) {
    module.exports = function() {
        return function(instance) {
            if (instance.method === "results") {
                instance.on("ace-prepare", function(e, results) {
                    results.actions.add("attach-form", function(result_id) {
                        if (result_id) {
                            var item = results.item(result_id);
                            var itemHolder = item.holder();
                            if (!itemHolder) {
                                itemHolder = results.dom.create(item.render());
                                var itemActions = results.dom.create('<div class="ace-results-actions"><a class="ace-action-pager-prev-page ace-action">Back</a></div>');
                                results.dom.prepend(itemActions, itemHolder);
                                itemActions.addEventListener("click", function(e) {
                                    if (e.target.tagName.toLowerCase() === "a") {
                                        e.preventDefault();
                                        results.dom.remove(item.holder());
                                        results.trigger("school-active", false);
                                    }
                                });
                            }
                            results.trigger("school-active", true);
                            results.dom.append(itemHolder, results.cntnr);
                            results.trigger("attached-result-item", item);
                            item.attachForm();
                        }
                    });
                    results.render = function() {
                        var items = {}, out = [], output = "";
                        results.custom_items = items;
                        if (results.length) {
                            var type_labels = results.settings.get("app_results_type_labels");
                            results.all().forEach(function(item, i) {
                                var form_type = item.getProperty("form_type");
                                items[form_type] = items[form_type] || [];
                                var dom_id = "profile-results-item-id-" + i;
                                var dom_processed_classname = "profile-results-item-processed";
                                var saved_setProcessed = item.setProcessed;
                                item.setProcessed = function() {
                                    var el = window.document.getElementById(dom_id);
                                    el.className = el.className + " " + dom_processed_classname;
                                    saved_setProcessed();
                                };
                                items[form_type].push('<div id="' + dom_id + '" class="profile-results-item ' + (item.isProcessed() ? dom_processed_classname : "") + '" data-id="' + item.getId() + '">' + item.getLogo(true) + '<div class="profile-results-item-title">' + item.getName(true) + "</div>" + item.renderActions() + "</div>");
                            });
                            var plan = Object.keys(type_labels).map(function(key, index) {
                                if (items[key] && items[key].length) {
                                    out.push('<div class="profile-results-item-group profile-results-item-group-' + index + '-type">' + '<div class="profile-results-item-label"><span>' + type_labels[key] + "<em></em></span></div>" + items[key].slice(0, 3).join("") + "</div>");
                                    return '<span class="profile-results-plan-arrow"><i class="fa fa-arrow-right"></i></span><span class="profile-results-plan-icon profile-results-plan-' + index + '-icon"></span>';
                                }
                                return "";
                            });
                        }
                        if (out.length) {
                            output = out.join("");
                        } else {
                            output = '<a class="ace-action app-profile-summary-open">' + results.settings.get("app_results_empty_action_label") + "</a>";
                        }
                        return (out.length ? '<div class="profile-results-plan">' + plan.join("") + "</div>" : results.settings.get("app_results_empty")) + '<div class="profile-results-items profile-results-items-count-' + out.length + '">' + output + "</div>";
                    };
                });
            }
        };
    };
}, function(module, exports) {
    module.exports = function() {
        var re_removeTags = /<[^>]*>/g;
        var getSummary = function(form) {
            var out = {}, i, j, fields = form.getFields(), value, options;
            for (i = 0; fields && i < fields.length; i++) {
                if (typeof fields[i].summary === "boolean") {
                    value = form.getFieldValueSingle(fields[i], "label");
                    if (value && fields[i].field_type === form.fieldtypes.hidden) {
                        options = form.getFieldOptions(fields[i]);
                        for (j = 0; options && j < options.length; j++) {
                            if (options[j].id === value) {
                                value = options[j].label;
                                break;
                            }
                        }
                    }
                    if (!value) {
                        value = "somebody";
                    }
                    out[(fields[i].summary === false ? "_" : "") + fields[i].name] = {
                        label: fields[i].label.replace(re_removeTags, "").trim(),
                        value: value
                    };
                }
            }
            return out;
        };
        var $summary;
        var appendSummary = function(form, summary) {
            var html = "", name;
            for (name in summary) {
                if (summary.hasOwnProperty(name) && name.charAt(0) !== "_") {
                    html += " " + summary[name].label + " <b>" + summary[name].value + "</b>";
                }
            }
            if ($summary) {
                form.dom.remove($summary);
            }
            if (html) {
                $summary = form.dom.create('<div class="profile-summary"><div class="profile-summary-head">' + form.settings.get("pages")[0].label + "</div>" + '<div class="profile-summary-content app-profile-summary-open">' + html.slice(1) + "." + "</div></div>");
                form.dom.prepend($summary, form.cntx);
            }
        };
        var re_FutureGoal = /%FutureGoal%/;
        var re_FutureEduLevel = /%FutureEduLevel%/;
        var appendAll = function(results, form) {
            var summary = getSummary(form);
            appendSummary(form, summary);
            var $itemHeaderLabel = results.dom.get(".profile-results-item-group-3-type", results.cntnr);
            $itemHeaderLabel = $itemHeaderLabel && results.dom.get(".profile-results-item-label", $itemHeaderLabel);
            if ($itemHeaderLabel) {
                results.dom.html(results.dom.html($itemHeaderLabel).replace(re_FutureEduLevel, summary._HighestLevelOfEducation.value), $itemHeaderLabel);
            }
            if (summary.FutureGoal || !results.length) {
                results.dom.prepend(results.dom.create('<div class="profile-results-title">' + (results.length ? results.settings.get("app_results_title").replace(re_FutureGoal, summary.FutureGoal.value) : "") + "</div>"), results.wrpr);
            }
        };
        var $body = $("body");
        var bodyEventListener;
        var closeEditPopup = function(e, form) {
            document.body.removeEventListener("click", bodyEventListener);
            bodyEventListener = null;
            form.trigger("summary-active", false);
        };
        var openEditPopup = function(form) {
            if (!bodyEventListener) {
                form.trigger("summary-active", true);
                bodyEventListener = function(e) {
                    if (e.target.tagName.toLowerCase() === "em" && e.target.parentNode.className === "ace-form-page-title") {
                        closeEditPopup(null, form);
                    }
                };
                document.body.addEventListener("click", bodyEventListener);
            }
        };
        return function(instance) {
            if (instance.method === "form" && !instance.parent) {
                var form_initialized = false;
                instance.on("ace-initialized", function(e, form) {
                    form_initialized = true;
                    $body.on("click", ".app-profile-summary-open", function(e) {
                        e.preventDefault();
                        openEditPopup(form);
                    });
                }).on("ace-submitted", closeEditPopup).on("ace-attached-results", function(e, form, results) {
                    var appendAllHandler = function() {
                        results.busy.remove();
                        appendAll(results, form);
                    };
                    results.on("ace-initialized", function() {
                        if (form_initialized) {
                            appendAllHandler();
                        } else {
                            results.busy.set();
                            form.on("ace-initialized", appendAllHandler);
                        }
                    });
                    results.on("ace-destroy", function() {
                        form.off("ace-initialized", appendAllHandler);
                    });
                });
            }
        };
    };
}, function(module, exports, __webpack_require__) {
    __webpack_require__(17);
    var re_removeTags = /<[^>]*>/g;
    module.exports = function() {
        var initializeResult = function(results, result, more_label, less_label) {
            var holder = result.holder();
            if (!holder) {
                return;
            }
            if (holder.getAttribute("result-info-expandable") != null) {
                holder.removeAttribute("result-info-expanded");
                return;
            }
            holder.setAttribute("result-info-expandable", "");
            if (!less_label) {
                holder.setAttribute("result-info-not-collapsible", "");
            }
            var elDesc = results.dom.get(".ace-result-description", holder);
            var elExpander = results.dom.create('<a href class="result-info-expander" title="' + more_label.replace(re_removeTags, "").trim() + '">' + more_label + "</a>");
            results.dom.after(elExpander, elDesc);
            elExpander.addEventListener("click", function(e) {
                e.preventDefault();
                var isOpen = holder.getAttribute("result-info-expanded") != null;
                if (!isOpen) {
                    holder.setAttribute("result-info-expanded", "");
                } else {
                    holder.removeAttribute("result-info-expanded");
                }
                isOpen = !isOpen;
                if (less_label) {
                    elExpander.title = (isOpen ? less_label : more_label).replace(re_removeTags, "").trim();
                    elExpander.innerHTML = isOpen ? less_label : more_label;
                }
            });
        };
        var initialize = function(results, item) {
            var more_label = results.settings.get("info_more_label");
            var less_label = results.settings.get("info_less_label");
            if (more_label) {
                if (item) {
                    initializeResult(results, item, more_label, less_label);
                } else {
                    results.all().forEach(function(item) {
                        initializeResult(results, item, more_label, less_label);
                    });
                }
            }
        };
        return function(instance) {
            if (instance.method === "results") {
                instance.on("ace-initialized", function(e, results) {
                    initialize(results);
                }).on("ace-attached-result-item", function(e, results, item) {
                    initialize(results, item);
                });
            }
        };
    };
}, 1, , function(module, exports) {
    module.exports = function() {
        return function(instance) {
            var $inserted;
            if (instance.method === "form") {
                instance.on("ace-progress", function(e, form, counter) {
                    if (!$inserted) {
                        $inserted = form.dom.get(".ace-action-form-submit", form.cntnr);
                        if ($inserted) {
                            $inserted = form.dom.add("ace-action-form-submit-progress", $inserted, "span");
                        }
                    }
                    if ($inserted) {
                        $inserted.setAttribute("style", "width:" + 100 * counter.filled / counter.total + "%;");
                        if (counter.filled - counter.total === 0) {
                            form.cntnr.setAttribute("form-filled", "");
                        } else {
                            form.cntnr.removeAttribute("form-filled");
                        }
                    }
                });
            }
        };
    };
}, function(module, exports) {
    (function(e, b) {
        if (!b.__SV) {
            var a, f, i, g;
            window.mixpanel = b;
            b._i = [];
            b.init = function(a, e, d) {
                function f(b, h) {
                    var a = h.split(".");
                    2 == a.length && (b = b[a[0]], h = a[1]);
                    b[h] = function() {
                        b.push([ h ].concat(Array.prototype.slice.call(arguments, 0)));
                    };
                }
                var c = b;
                "undefined" !== typeof d ? c = b[d] = [] : d = "mixpanel";
                c.people = c.people || [];
                c.toString = function(b) {
                    var a = "mixpanel";
                    "mixpanel" !== d && (a += "." + d);
                    b || (a += " (stub)");
                    return a;
                };
                c.people.toString = function() {
                    return c.toString(1) + ".people (stub)";
                };
                i = "disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
                for (g = 0; g < i.length; g++) f(c, i[g]);
                b._i.push([ a, e, d ]);
            };
            b.__SV = 1.2;
            a = e.createElement("script");
            a.type = "text/javascript";
            a.async = !0;
            a.src = "undefined" !== typeof MIXPANEL_CUSTOM_LIB_URL ? MIXPANEL_CUSTOM_LIB_URL : "file:" === e.location.protocol && "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//) ? "https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js" : "//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";
            f = e.getElementsByTagName("script")[0];
            f.parentNode.insertBefore(a, f);
        }
    })(document, window.mixpanel || []);
    module.exports = function() {
        var win = window;
        var mixpanel_id;
        var track = function(id, data) {
            if (win.mixpanel) {
                if (win.console && win.console.info) win.console.info("MIXPANEL:", id, data);
                win.mixpanel.track(data);
            }
        };
        var planSearch = function(e, form) {
            var data = {
                FutureGoal: form.getFieldTypeaheadValue("FutureGoal"),
                Zip: form.getFieldValueSingle("Zip")
            };
            if (form.settings.get("follow_session")) {
                track("Plan Second Search", data);
            } else {
                track("Plan Search", data);
            }
        };
        var planSearchReturn = function(e, results) {
            var data = {
                Success: !!results.length,
                Total: results.length
            };
            var items = results.custom_items;
            if (results.length && items) {
                Object.keys(items).forEach(function(key) {
                    data[key] = items[key].length;
                });
            }
            track("Plan Search Return", data);
        };
        var planStepSelect = function(e, instance, result) {
            var data = {}, result;
            if (instance.method === "form") {
                data.Completed = true;
                result = instance.settings.get("result");
            }
            if (instance.method === "form" || instance.method === "results") {
                if (result && result.getProperty) {
                    data.Category = result.getProperty("form_type");
                }
            }
            track("Plan Step Select", data);
        };
        return function(instance) {
            mixpanel_id = mixpanel_id || instance.settings && instance.settings.get("mixpanel");
            if (mixpanel_id && win.mixpanel) {
                win.mixpanel.init(mixpanel_id);
                if (instance.method === "form") {
                    if (!instance.parent) {
                        instance.on("ace-submitting", planSearch);
                    } else {
                        instance.on("ace-submitting", planStepSelect).on("ace-redirected", planStepSelect);
                    }
                }
                if (instance.method === "results") {
                    instance.on("ace-initialized", planSearchReturn);
                    instance.on("ace-initialized", function() {
                        var saved = instance.actions.actions["attach-form-redirect"];
                        instance.actions.add("attach-form-redirect", function(el, e, result_id) {
                            if (result_id != null) {
                                planStepSelect(null, instance, instance.item(result_id));
                            }
                            saved.apply(instance, arguments);
                        });
                    });
                }
            }
        };
    };
}, 1, , 1 ]));