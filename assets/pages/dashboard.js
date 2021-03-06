/*
 Template Name: Admiria - Bootstrap 4 Admin Dashboard
 Author: Themesbrand
 File: Dashboard Init
*/


!function(o){"use strict";var a=function(){};a.prototype.init=function(){o(".peity-line").each(function(){o(this).peity("line",o(this).data())}),o(".knob").knob(),c3.generate({bindto:"#combine-chart",data:{columns:[["SonyVaio",30,20,50,40,60,50],["iMacs",200,130,90,240,130,220],["Tablets",300,200,160,400,250,250],["iPhones",200,130,90,240,130,220],["Macbooks",130,120,150,140,160,150]],types:{SonyVaio:"bar",iMacs:"bar",Tablets:"spline",iPhones:"line",Macbooks:"bar"},colors:{SonyVaio:"#5468da",iMacs:"#4ac18e",Tablets:"#ffbb44",iPhones:"#ea553d",Macbooks:"#6d60b0"},groups:[["SonyVaio","iMacs"]]},axis:{x:{type:"categorized"}}}),c3.generate({bindto:"#donut-chart",data:{columns:[["Desktops",78],["Mobiles",40],["Tablets",25]],type:"donut"},donut:{title:"Sales Analytics",width:30,label:{show:!1}},color:{pattern:["#5468da","#4ac18e","#6d60b0"]}})},o.Dashboard=new a,o.Dashboard.Constructor=a}(window.jQuery),function(o){"use strict";o.Dashboard.init()}(window.jQuery);