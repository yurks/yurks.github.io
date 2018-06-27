(function(window, $) {

    var FillerTT = function(iname) {
        if (!$) {
            return null;
        }
        var _root = {
            name: 'Time Tracker Filler',

            days: [],
            vacation_from: 0,
            vacation_to: 0,

            data: {
                from: localStorage.getItem('xysh:fillertt:from') || 11,
                to: localStorage.getItem('xysh:fillertt:to') || 19,
                cat: localStorage.getItem('xysh:fillertt:cat') || 2,
                desc: localStorage.getItem('xysh:fillertt:desc') || 'Development',
            },
            colors: {
                25: { color: 'OrangeRed', title: 'Sick'},
                26: { color: 'GreenYellow', title: 'Vacation paid'},
                31: { color: '#2fffb2', title: 'Vacation non-paid'},
                999: { color: 'White', title: 'Working day'}

            },

            interval: null,
            dom_loading: null,
            container: $('<div style="user-select:none;position:absolute;z-index:9999;top:0;left:50%;background:#9EBFF6;margin-left:-95px;width:189px;min-height:10px;padding:5px;font-size:10px;line-height:120%;color:#000;text-align:center;">loading...</div>'),

            go: function() {
                _root.log('started');
                $('body').append(_root.container);

                $(document).bind('keyup.fillertt', function(e) {
                    var code = e.keyCode || e.which;
                    if (code == 27) {
                        _root.error('interrupted by Escape', true);
                    }
                });
                _root.init();

            },

            end: function() {
                $(document).unbind('keyup.fillertt');
                window.clearInterval(_root.interval);
                _root.container.remove();
                _root.log('ended');
            },

            initControl: function(name, id) {
                var $el;
                if (id) {
                    $el = $('<select style="width:100%;box-sizing:border-box;font-size:10px;font-family:Verdana;margin:0 1%;float:left;width:'+(name==='cat'?56:19)+'%" title="'+name+'">' + $(id).html() + '</select>').find('option').removeAttr('selected').end();
                } else {
                    $el = $('<input type="text" style="width:98%;box-sizing:border-box;font-size:10px;font-family:Verdana;margin:1% 1% 0;float:left;padding:1px 2px;" title="'+name+'">');
                }
                return $el
                    .change(function() {
                        _root.data[name] = $(this).val();
                        localStorage.setItem('xysh:fillertt:' + name, _root.data[name]);
                        var container = _root.container.find('.app-filler-controls').css('background', 'transparent');
                        _root.days.error = false;
                        if ((_root.data.to - _root.data.from) < 0 || !_root.data.cat || !_root.data.desc) {
                            container.css('background', 'red');
                            _root.days.error = true;
                        } else if ((_root.data.to - _root.data.from) !== 8) {
                            container.css('background', 'yellow');
                        }

                    }).mousedown(function(e) {
                        if (_root.days.working === true) {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }).val(_root.data[name]);
            },
            init: function() {
                _root.initCalendar(function(){
                    _root.initCalendar(function() {
                        _root.initDays(function() {
                            var month = _root.getSelectboxText('#ctl00__content_ddlMonths');
                            var year = _root.getSelectboxText('#ctl00__content_ddlYears');
                            if (_root.error('cannot find calendar date', !month || !year)) {
                                return;
                            }
                            _root.displayCalendar(month, year);
                            _root.container.find('.app-filler-controls').append(
                                _root.initControl('cat', '#ctl00__content_ddlCategories'),
                                _root.initControl('from', '#ctl00__content_ucStartTime_ddlHour'),
                                _root.initControl('to', '#ctl00__content_ucEndTime_ddlHour'),
                                _root.initControl('desc')
                            );
                        });
                    });
                });

            },

            displayCalendar: function(month, year) {
                var cal = [], i, j, w = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
                cal.push('<div style="background:#fff;background:rgba(255,255,255,.3);overflow:hidden;width:100%">' +
                    '<span style="font-weight:bold;float:left;padding:1px 3px;margin:1px;">' + month + ' ' + year + '</span>' +
                    '<span style="cursor:pointer;float:right;padding:2px 6px;background:#eee;" onclick="'+iname+'.act(this)">Start</span></div>');

                cal.push('<div style="clear:both; margin: 0 -2px; padding: 2px 0; overflow:hidden;" class="app-filler-controls"></div>');

                for (j = 0; j < w.length; j += 1) {
                    cal.push('<span style="float:left;width:23px;padding:1px;margin:1px;text-align:center;color:#fff;font-weight:bold;">' + w[j] +'</span>');
                }
                for (i = 0; i < _root.days.length; i += 1) {
                    if (i == 0) {
                        for (j = 0; j < _root.days[i].week_day; j += 1) {
                            cal.push('<span style="float:left;width:23px;padding:1px;margin:1px;' + (!j ? 'clear:both;' : '') +'"></span>');
                        }
                    }
                    cal.push('<span onmouseover="this.style.boxShadow=\'0 0 6px rgba(0, 0, 0, 0.2) inset\'" onmouseout="this.style.boxShadow=\'none\'" style="float:left;width:23px;padding:1px;background:' + _root.days[i].color + ';cursor:pointer;margin:1px;text-align:center;color:#000;' + (!_root.days[i].week_day ? 'clear:both;"' : '"') +' '+
                        ('onclick="'+iname+'.actSetDayCategory(this, ' + i + ')" title="' + _root.days[i].type + ' (click to change)"')
                        +'>' + _root.days[i].day + '</span>');
                }

                _root.container.html(cal.join(''));
            },

            displayError: function(txt) {
                _root.container.html('<div style="color:#fff;">'+txt+'</div><div><span style="cursor:pointer;padding:2px 6px;background:#eee;display:inline-block;margin-top:5px" onclick="'+iname+'.end()">Close</span></div>');

            },

            actSetDayCategory: function(el, index) {
                if (_root.days.working === true) {
                    return;
                }
                var colors = _root.colors;
                var colorsKeys = Object.keys(colors), colorIndex, colorKey;
                var day = _root.days[index];

                if (day) {
                    colorIndex = colorsKeys.indexOf(day.category || '0');
                    colorKey = colorsKeys[colorIndex+1];
                    if (colorKey === '999' && !day.holiday && !day.weekend) {
                        colorKey = null;
                    }
                    if (colorKey) {
                        $(el).css('backgroundColor', colors[colorKey].color).attr('title', colors[colorKey].title);
                    } else {
                        $(el).css('backgroundColor', day.color).attr('title', day.type + ' (click to change)');
                    }
                    day.category = colorKey;

                }
            },
            act: function(el) {
                if (_root.days.error === true) {
                    return;
                }
                if (_root.days.working === true) {
                    _root.error('interrupted', true);
                    return;
                }

                _root.days.working = true;
                $(el).text('Stop');

                var dayClick = function(i) {
                    if (_root.days[i]) {

                        if (_root.days[i].weekend && !_root.days[i].category) {
                            if (_root.days[i+1]) {
                                dayClick(i+1);
                            } else {
                                _root.error('finished!', true);
                            }
                            return;
                        }

                        _root.click(_root.days[i].action, function() {

                            $('#ctl00__content_ucStartTime_ddlHour').val(_root.data.from);
                            $('#ctl00__content_ucStartTime_ddlMinutes').val(0);
                            $('#ctl00__content_ucEndTime_ddlHour').val(_root.data.to);
                            $('#ctl00__content_ucEndTime_ddlMinutes').val(0);

                            var cat;
                            if (_root.days[i].category) {
                                cat = _root.days[i].category;
                            } else {
                                cat = _root.days[i].holiday ? 27 : _root.data.cat
                            }
                            if (cat == 999) {
                                cat = _root.data.cat;
                            }

                            $('#ctl00__content_ddlCategories').find('option').removeAttr('selected').end().val(cat);
                            $('#ctl00__content_tboxDescription').val(_root.data.desc);

                            _root.click(_root.getAction($('#ctl00__content_lbtnAddEntry')), function() {
                                if (_root.days[i+1]) {
                                    dayClick(i+1);
                                } else {
                                    _root.error('finished!', true);
                                }
                            });

                        });
                    }
                };

                dayClick(0);
            },

            initCalendar: function(callback) {
                var once = true;
                _root.getDays(function(el, a, d) {
                    once && _root.click(_root.getAction(a), callback);
                    once = false;
                }, true);
            },

            initDays: function(callback) {
                _root.getDays(function(el, a, d, week_day, weekend) {
                    var day = {action: _root.getAction(a), day: d, week_day: week_day, weekend: weekend, color: weekend ? '#c0d8ff' : '#fff', type: weekend ? 'Weekend day' : 'Working day'};

                    if (el.css('backgroundColor').toLowerCase() == 'yellow') {
                        //holyday yellow-day
                        day.color = 'Yellow';
                        day.type = 'Holiday';
                        day.holiday = true;
                    } else {
                        /*
                        if (_root.vacation_from && _root.vacation_to && _root.vacation_from < _root.vacation_to) {
                            if (d >= _root.vacation_from && d <= _root.vacation_to) {
                                day.vacation = true;
                            }
                        }
                        */
                    }
                    _root.days.push(day);
                });

                if (_root.error('cannot find calendar days', !_root.days.length)) {
                    return;
                }

                callback && callback();
            },

            getDays: function(callback, all) {
                var dom_calendar = $('#ctl00__content_panelCalendar').find('td.ms-vb2, th.ms-vb2');
                if (_root.error('cannot find calendar DOM', !dom_calendar.length)) {
                    return;
                }

                var day = 0;
                dom_calendar.map(function(index) {
                    if (!index%8 || this.tagName.toLowerCase() == 'th') {
                        return;
                    }
                    var weekend = false;
                    if (!all && !((index+1)%8 && (index+2)%8)) {
                        //return;
                        weekend = true;
                    }
                    var el = $(this), a = el.children('a'), d = a.text();
                    if (!a.length) {
                        return;
                    }
                    d = !isNaN(d) && parseInt(d, 10);
                    if (!d) {
                        return;
                    }
                    if (!all) {
                        if (day == 0 && d > 10) {
                            return;
                        }
                        if (day < d) {
                            day = d;
                        } else {
                            return;
                        }
                    }
                    callback && callback(el, a, d, (index-1)%8, weekend);

                });
            },

            getAction: function(el) {
                if (el) {
                    el = typeof el === 'string' ? $(el) : el;
                    return el.attr('href');
                }
                return '';
            },

            getSelectboxText: function(str) {
                return $(str).find('option:selected').text();
            },

            click: function(str, callback) {
                if (str) {
                    str = str.replace(/^javascript:/, '');
                    try {
                        (new Function(str))();
                        _root.log('clicked "' + str + "'");
                        callback && _root.wait(callback);
                        return true;
                    } catch(e) {
                        return _root.error(e, true);
                    }
                }
                return _root.error('empty _root.click argument', true);
            },

            wait: function(callback) {
                if (!_root.dom_loading) {
                    window.setTimeout(function() {
                        _root.dom_loading = $('body').children('div').slice(-2).filter(function() {
                            return $(this).text() === 'Loading ...';
                        });

                        if (_root.error('cannot find loading DOM', !_root.dom_loading.length)) {
                            return;
                        }

                    });

                }

                var ms = 250;
                var cycles = 0;
                _root.interval = window.setInterval(function() {
                    cycles+=1;
                    _root.log('waiting ' + (ms*cycles) + "ms");
                    if (!_root.dom_loading || !_root.dom_loading.is(':visible')) {
                        _root.log('waiting finished');
                        window.clearInterval(_root.interval);
                        callback && callback();
                    }
                }, ms);
            },

            error: function() {
                var f = console && (console.warn || console.log);
                var args = Array.prototype.slice.call(arguments);
                var error_condition = args.pop();
                if (error_condition) {
                    window.clearInterval(_root.interval);
                    _root.displayError(''+args);
                    args.unshift(_root.name + ' message: ');
                    try {
                        f && Function.prototype.apply.call(f, window, args);
                    } catch(e){}
                    //                _root.end();
                    return true;
                }
                return false;
            },

            log: function() {
                var f = console && (console.info || console.log);
                var args = Array.prototype.slice.call(arguments);
                args.unshift(_root.name + ' log: ');
                try {
                    f && Function.prototype.apply.call(f, window, args);
                } catch(e){}
            }

        };
        _root.go();
        return _root;
    };


    var Filler = {
        instance: null,
        go: function() {
            if (BOOKMARK) {
                if (this.instance) {
                    this.instance.end();
                }
                this.instance = FillerTT("window.xysh['" + ( BOOKMARK.name || '') + "'].instance");
            }
        }
    };

    var BOOKMARK = window.xysh && window.xysh._add(Filler);
    Filler.go();


})(window, window.jQuery);




