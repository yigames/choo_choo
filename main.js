var res_coal = 0;

function res_coal_click(res_coal_add){
    res_coal = res_coal + res_coal_add;
    document.getElementById("ui_res_coal_total").innerHTML = res_coal;
};

var res_coal_level = 0;

function res_coal_upgrade(){
    var res_coal_upcost = Math.floor(10 * Math.pow(1.1,res_coal_level));
    if(res_coal >= res_coal_upcost){
        res_coal_level = res_coal_level + 1;
        res_coal = res_coal - res_coal_upcost;
        document.getElementById("ui_res_coal_level").innerHTML = res_coal_level;
        document.getElementById("ui_res_coal_total").innerHTML = res_coal;
    };

    var res_coal_nxtupgrade = Math.floor(10 * Math.pow(1.1,res_coal_level));
    document.getElementById("ui_res_coal_upgrade").innerHTML = "▲ " + res_coal_nxtupgrade;

};

window.setInterval(function(){

    if(res_coal_level>=10){
        res_coal_click(res_coal_level);
    }
    
}, 1000);