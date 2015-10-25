$(function(){
    $(document).ready(function(){
        var newStyle = $("<style>");
        newStyle.type = "text/css";
        $("head").append(newStyle);
        css = document.styleSheets.item(0)
        readCode1(css);
        readCode2(css);
        readCode3(css);
        readCode4(css);
        readCode5(css);
        readCode6(css);
        readCode7(css);
        readCode8(css);
        readCode9(css);
        readCode10(css);
        readCode11(css);
        readCode12(css);
        readCode13(css);
        readCode14(css);
    });

    $("#code1").on('change', function(){ readCode1(css); });
    $("#code2").on('change', function(){ readCode2(css); });
    $("#code3").on('change', function(){ readCode3(css); });
    $("#code4").on('change', function(){ readCode4(css); });
    $("#code5").on('change', function(){ readCode5(css); });
    $("#code6").on('change', function(){ readCode6(css); });
    $("#code7").on('change', function(){ readCode7(css); });
    $("#code8").on('change', function(){ readCode8(css); });
    $("#code9").on('change', function(){ readCode9(css); });
    $("#code10").on('change', function(){ readCode10(css); });
    $("#code11").on('change', function(){ readCode11(css); });
    $("#code12").on('change', function(){ readCode12(css); });
    $("#code13").on('change', function(){ readCode13(css); });
    $("#code14").on('change', function(){ readCode14(css); });

    function readCode1(css){
        var code = $("#code1").val();
        var idx = document.styleSheets[0].cssRules.length;
        css.insertRule(".zurui-hr {" + translateMixin(code) + "}", idx);
        autosize($("#code1"));
    }

    function readCode2(css){
        var code = $("#code2").val();
        var idx = document.styleSheets[0].cssRules.length;
        css.insertRule(".zurui-div {" + translateMixin(code) + "}", idx);
        autosize($("#code2"));
    }

    function readCode3(css){
        var code = $("#code3").val();
        var idx = document.styleSheets[0].cssRules.length;
        css.insertRule(".zurui-text-000 {" + translateMixin(code) + "}", idx);
        autosize($("#code3"));
    }

    function readCode4(css){
        var code = $("#code4").val();
        var idx = document.styleSheets[0].cssRules.length;
        css.insertRule(".zurui-text-fff {" + translateMixin(code) + "}", idx);
        autosize($("#code4"));
    }

    function readCode5(css){
        var code = $("#code5").val();
        var idx = document.styleSheets[0].cssRules.length;
        css.insertRule(".zurui-gradient-lighten {" + translateMixin(code) + "}", idx);
        autosize($("#code5"));
    }

    function readCode6(css){
        var code = $("#code6").val();
        var idx = document.styleSheets[0].cssRules.length;
        css.insertRule(".zurui-gradient-darken {" + translateMixin(code) + "}", idx);
        autosize($("#code6"));
    }

    function readCode7(css){
        var code = $("#code7").val();
        var idx = document.styleSheets[0].cssRules.length;
        css.insertRule(".zurui-div-radius {" + translateMixin(code) + "}", idx);
        autosize($("#code7"));
    }

    function readCode8(css){
        var code = $("#code8").val();
        var idx = document.styleSheets[0].cssRules.length;
        css.insertRule(".zurui-button-radius {" + translateMixin(code) + "}", idx);
        autosize($("#code8"));
    }

    function readCode9(css){
        var code = $("#code9").val();
        var idx = document.styleSheets[0].cssRules.length;
        css.insertRule(".zurui-box-shadow1 {" + translateMixin(code) + "}", idx);
        autosize($("#code9"));
    }

    function readCode10(css){
        var code = $("#code10").val();
        var idx = document.styleSheets[0].cssRules.length;
        css.insertRule(".zurui-box-shadow2 {" + translateMixin(code) + "}", idx);
        autosize($("#code10"));
    }

    function readCode11(css){
        var code = $("#code11").val();
        var idx = document.styleSheets[0].cssRules.length;
        css.insertRule(".zurui-box-shadow3 {" + translateMixin(code) + "}", idx);
        autosize($("#code11"));
    }

    function readCode12(css){
        var code = $("#code12").val();
        var idx = document.styleSheets[0].cssRules.length;
        css.insertRule(".zurui-box-shadow4 {" + translateMixin(code) + "}", idx);
        autosize($("#code12"));
    }

    function readCode13(css){
        var code = $("#code13").val();
        var idx = document.styleSheets[0].cssRules.length;
        css.insertRule(".zurui-button {" + translateMixin(code) + "}", idx);
        autosize($("#code13"));
    }

    function readCode14(css){
        var code = $("#code14").val();
        var idx = document.styleSheets[0].cssRules.length;
        css.insertRule(".zurui-button:hover {" + translateMixin(code) + "}", idx);
        autosize($("#code14"));
    }

    function translateMixin(code){
        var code =
            code.replace(
                /@include zurui-line-top\((.*?), (.*?)\)/g,
                'border-top: 1px solid rgba(0, 0, 0, $1);\nbox-shadow: 0 1px 0 rgba(255, 255, 255, $2) inset'
            ).replace(
                /@include zurui-line-top\((.*?), (.*?)\)/g,
                /@include zurui-line-right\((.*?), (.*?)\)/g,
                'border-right: 1px solid rgba(0, 0, 0, $1);\nbox-shadow: 0 -1px 0 rgba(255, 255, 255, $2) inset'
            ).replace(
                /@include zurui-line-left\((.*?), (.*?)\)/g,
                'border-bottom: 1px solid rgba(0, 0, 0, $1);\nbox-shadow: 0 -1px 0 rgba(255, 255, 255, $2)'
            ).replace(
                /@include zurui-line-bottom\((.*?), (.*?)\)/g,
                'border-bottom: 1px solid rgba(0, 0, 0, $1);\nbox-shadow: 0 1px 0 rgba(255, 255, 255, $2)'
            ).replace(
                /@include zurui-line-all\((.*?), (.*?)\)/g,
                'border: 1px solid rgba(0, 0, 0, $1);\nbox-shadow: 0 1px 0 rgba(255, 255, 255, $2), 0 1px 0 rgba(255, 255, 255, $2) inset, -1px 0 0 rgba(255, 255, 255, $2), -1px 0 0 rgba(255, 255, 255, $2) inset'
            ).replace(
                /@include zurui-text-shadow-000\((.*?)\)/g,
                'text-shadow: 1px -1px rgba(0, 0, 0, $1)'
            ).replace(
                /@include zurui-text-shadow-fff\((.*?)\)/g,
                'text-shadow: -1px 1px rgba(255, 255, 255, $1)'
            ).replace(
                /@include zurui-gradient-top-lighten\((.*?), (.*?)\)/g,
                'background-color: $1;\nbackground: linear-gradient(lighten($1, $2), $1)'
            ).replace(
                /@include zurui-gradient-top-darken\((.*?), (.*?)\)/g,
                'background-color: $1;\nbackground: linear-gradient(darken($1, $2), $1)'
            ).replace(
                /@include zurui-border-radius\((.*?)\)/g,
                'border-radius: $1'
            ).replace(
                /@include zurui-box-shadow/g,
                'box-shadow: 0 0 2px rgba(0, 0, 0, .15)'
            ).replace(
                /@include zurui-box-outer\((.*?)\)/g,
                'box-shadow: 0 0 $1 rgba(0, 0, 0, .15)'
            ).replace(
                /@include zurui-box-inner\((.*?)\)/g,
                'box-shadow: 0 0 $1 rgba(0, 0, 0, .2) inset'
            ).replace(
                /@include zurui-box-deboss\((.*?), (.*?), (.*?)\)/g,
                'border: 1px solid rgba(0, 0, 0, $1);\nbox-shadow: -1px 1px 2px rgba(0, 0, 0, $2) inset, -1px 1px 0 rgba(255, 255, 255, $3)'
            ).replace(
                /@include zurui-box-emboss\((.*?), (.*?), (.*?)\)/g,
                'border: 1px solid rgba(0, 0, 0, $1);\nbox-shadow: -1px 1px 0 rgba(0, 0, 0, $2) inset, -1px 1px 0 rgba(255, 255, 255, $3) inset;'
            )

        if(code.match(/lighten\(#(.*?), (.*?)%\)/)) {
            var color = LightenColor(RegExp.$1, RegExp.$2);
            var code =  code.replace(/lighten\(.*?, .*?\)/g, '#' + color);
        }

        if(code.match(/darken\(#(.*?), (.*?)%\)/)) {
            var color = DarkenColor(RegExp.$1, RegExp.$2);
            var code = code.replace(/darken\(.*?, .*?\)/g, '#' + color);
        }

        return code
    }

    function LightenColor(color, percent) {
        var num = parseInt(color,16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) + amt,
        B = (num >> 8 & 0x00FF) + amt,
        G = (num & 0x0000FF) + amt;

        return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
    };

    function DarkenColor(color, percent) {
        var num = parseInt(color,16),
        amt = Math.round(2.55 * percent),
        R = (num >> 16) - amt,
        B = (num >> 8 & 0x00FF) - amt,
        G = (num & 0x0000FF) - amt;

        return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
    };
});
