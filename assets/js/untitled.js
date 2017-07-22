  $(document).ready(function () {
var wins=0;
var loss=0;
var thanosnumber=0,mynumber=0;
var temp_space=0,temp_reality=0,temp_mind=0,temp_time=0;
gen_thanosnumber();
randomvalues();
var status=false;



function randomvalues(){
temp_space=randomnumber(1,12);
temp_reality=randomnumber(1,12);
temp_mind=randomnumber(1,12);
temp_time=randomnumber(1,12);
mynumber=0;

}

function randomnumber(x, y){

var random=Math.floor((Math.random() * y) + x);
return random;
}
 
 function gen_thanosnumber(){
 	thanosnumber=randomnumber(19,120);
 	
 	$("#thanosnumber").html("My Number: "+thanosnumber);
 }

function update_number(){
	$("#mynumber").html("Your Number: "+mynumber);
}

function update_winsloss(){
	$("#wins-loss").html("Wins:"+wins+" "+"Loss:"+loss);
}


 $("#spacestone").click(function(){
 	
 	mynumber= mynumber+temp_space;
 	update_number();
 	check();
 });

 $("#realitystone").click(function(){

mynumber=mynumber+temp_reality;
update_number();
 	check();
 });

 $("#mindstone").click(function(){

mynumber=mynumber+temp_mind;
update_number();
 	check();
});

 $("#timestone").click(function(){

mynumber=mynumber+temp_time;
update_number();
 	check();
 });


 function check(){

 if (thanosnumber==mynumber) {
	//alert("you won");
	wins++;
	mynumber=0;
	update_number();
	update_winsloss();
	gen_thanosnumber();
	randomvalues();

 	
}else if (thanosnumber<mynumber) {
//	alert("you lose");
	loss++;
	mynumber=0;
	update_number();
	update_winsloss();
	
	gen_thanosnumber();
	randomvalues();
 	
 	
}}});