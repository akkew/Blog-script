var jumlah = document.getElementsByClassName("for_select")[0].innerText.replace("Page:  of ","");
    var urlawal = document.getElementById("gimg").src;
    var indexpotong = urlawal.lastIndexOf("/") + 1;
    var potongan = urlawal.slice("0",indexpotong);
    var mulai = parseInt(urlawal.replace(potongan,"").replace(".jpg",""))+1;
	var k = mulai+1;
    var imgke = "";

    //imgke = '<img id="gimg'+mulai+'" onload="lNext('+k+')" src="'+ potongan +''+ mulai +'.jpg">';


//$(document).ready(lNext(mulai));

function lNext(i) {
    k = i+1;
    if(k<jumlah){
    imgke = '<img id="gimg'+i+'" src="'+ potongan + i +'.jpg"  onload="lNext('+k+')" >';
    }else{
    imgke = '<img id="gimg'+i+'" src="'+ potongan + i +'.jpg" >';
    };
    //return;
    $('#img').append('<p>'+i+'/'+jumlah+'</p>');
    $('#img').append(imgke);
	return console.log("Image "+i+" is loaded");
};

