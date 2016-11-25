/*global console*/

var summmary = (function () {
    "use strict";
    // ==============================================================
    var btnArr      = document.getElementById("arr"),
        btnStr      = document.getElementById("str"),
        btnRevArr   = document.getElementById("rev"),
        wrapp       = document.getElementById("wrapper"),
        wrappHeight = wrapp.clientHeight,
        inner       = document.getElementById("inner"),
        j = 0;
    
    
    
    // ==============================================================
    // prettify input string:
    inner.innerHTML = inner.innerHTML.replace(/\s+/ig, " ");
    
    
    
    // ==============================================================
    // make summary via reversed array:
    function makeSummaryByReversedArray(outerHight, innerElem) {
        var arr = innerElem.innerHTML.split(" "),
            xArr = [],
            j = 0,
            x;
        innerElem.innerHTML = "";
        while ((innerElem.clientHeight - outerHight) <= 0) {
            xArr.push(arr.shift());
            innerElem.innerHTML = xArr.join(" ");
            //j++;
        }
        xArr.pop();
        innerElem.innerHTML = xArr.join(" ");
        innerElem.innerHTML = innerElem.innerHTML.replace(/([^a-zA-Z0-9 ])*\s+\w+([^a-zA-Z0-9])*$/ig, "...");
        //console.log(j);
    }
    
    
    
    // ==============================================================
    // make summary via array:
    function makeSummaryViaArray(outerHight, innerElem) {
        var arr = innerElem.innerHTML.split(" "),
            j = 0;
        while ((outerHight - innerElem.clientHeight) < 0) {
            arr.pop();
            inner.innerHTML = arr.join(" ");
            //j++;
        }
        innerElem.innerHTML = innerElem.innerHTML.replace(/([^a-zA-Z0-9 ])*\s+\w+([^a-zA-Z0-9])*$/ig, "...");
        //console.log(j);
    }
    
    
    
    // ==============================================================
    // make summary via string:
    function makeSummaryViaString(outerHight, innerElem) {
        var j = 0;
        while ((outerHight - innerElem.clientHeight) < 0) {
            innerElem.innerHTML = innerElem.innerHTML.replace(/([^a-zA-Z0-9 ])*\s+\w+([^a-zA-Z0-9])*$/ig, "");
            //j++;
        }
        innerElem.innerHTML = innerElem.innerHTML.replace(/([^a-zA-Z0-9 ])*\s+\w+([^a-zA-Z0-9])*$/ig, "...");
        //console.log(j);
    }
    
    
    
    // ==============================================================
    // benchmark in developer tools timeline:
    btnArr.addEventListener("click", function (e) {
        makeSummaryViaArray(wrappHeight, inner);
    });
    
    btnStr.addEventListener("click", function (e) {
        makeSummaryViaString(wrappHeight, inner);
    });
    
    btnRevArr.addEventListener("click", function (e) {
        makeSummaryByReversedArray(wrappHeight, inner);
    });
    
    //console.log("index.js");
}());











