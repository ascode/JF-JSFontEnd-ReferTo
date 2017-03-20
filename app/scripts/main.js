require.config({
    baseUrl: "/scripts",
    paths: {　　　　　　
        "jquery": "http://jslib.bgenius.cn/bower_components%2Fjquery%2Fdist%2Fjquery.min",
        "underscore": "underscore.min",
        "backbone": "backbone.min"
    }　　
});

define(['require'], function(require) {
    require(["test", "index","jquery"], function(test, index,$) {
        // console.log(test);
        // console.log(index);
        console.log("第一个require");
    	$("body").html($("body").html() + 'jinfei');
    });
    console.log("main");

    require(['jquery'],function($){
    	console.log("第二个require");
    });
});
