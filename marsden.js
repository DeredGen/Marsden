var $divs = $('#marsden-input, #marsden-output');
var $div1 = $('#marsden-input');
var $div2 = $('#marsden-output');
function sync(e) {
    var $other = $divs.not(this).off('scroll'),
        other = $other.get(0);
    var percentage = this.scrollTop / (this.scrollHeight - this.offsetHeight);
    other.scrollTop = percentage * (other.scrollHeight - other.offsetHeight);
}
$div2.on('scroll', sync);
if(localStorage)
{
    document.getElementById("marsden-nojs").style.display="none";
    var input = document.getElementById("marsden-input"),
        output = document.getElementById("marsden-output");
    if(localStorage.documentContent) {
        "use strict";
        output.innerHTML = mars(localStorage.documentContent);
        input.value = localStorage.documentContent;
    } else {
        output.innerHTML = "Nothing entered!"
    }


    input.addEventListener("keyup",function() {
        localStorage.documentContent = input.value;
        setInterval(function(){
            output.innerHTML = mars(input.value);
        }, 10);
    })
}

