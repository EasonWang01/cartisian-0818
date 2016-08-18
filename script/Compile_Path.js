$(document).ready(function(){
var ass1;
buildSubscription();


$('#y2z2').hide();
$('#y2z2open').click(function(){
	$('#q1q2').hide();
	$('#y2z2').toggle();
})


$('#q1q2').hide();
$('#y2z2pathopen').click(function(){
	$('#y2z2').hide();
	$('#q1q2').toggle();
})

document.getElementById('y2z2').onmousedown = function () {
    _drag_init(this);
    };

document.getElementById('q1q2').onmousedown = function () {
    _drag_init(this);
    };



/////////圓弧路徑  左側表格 路徑
ReadValue(id_sSegPty2,var_sSegPty2);
ReadValue(id_sSegPtz2,var_sSegPtz2);
for(i=1;i<10;i++){
	document.getElementById('y2_0'+i).addEventListener('change',function(){
		//console.log(this.value)
		//console.log(this.id.slice(-1))
		//console.log(this.id.slice(-1)-1)
		writeValueFN(this.value, "unit/dHdGlobal.gsHMIdata.sSegPt["+this.id.slice(-1)-1+"].y2");
	})//參數從0開始所以-1
}
for(i=10;i<31;i++){
	document.getElementById('y2_'+i).addEventListener('change',function(){
		
		 writeValueFN(this.value, "unit/dHdGlobal.gsHMIdata.sSegPt["+this.id.slice(-2)-1+"].y2");
	})//參數從0開始所以-1
}


for(i=1;i<10;i++){
	document.getElementById('z2_0'+i).addEventListener('change',function(){
		 writeValueFN(this.value, "unit/dHdGlobal.gsHMIdata.sSegPt["+this.id.slice(-1)-1+"].z2");
	})//參數從0開始所以-1
}
for(i=10;i<31;i++){
	document.getElementById('z2_'+i).addEventListener('change',function(){
		 writeValueFN(this.value, "unit/dHdGlobal.gsHMIdata.sSegPt["+this.id.slice(-2)-1+"].z2");
	})//參數從0開始所以-1
}

///////////////////圓弧路徑  右側表格 路徑步序
ReadValuePathRightTwo(id_i32Motion1,var_i32Motion1,id_03,id_04)
ReadValueCompilePath(id_aParameter1,var_aParameter1)
for(i=1;i<10;i++){
	document.getElementById('y2_0'+i).addEventListener('change',function(){
		//console.log(this.value)
		//console.log(this.id.slice(-1))
		//console.log(this.id.slice(-1)-1)
		writeValueFN(this.value, "unit/dHdGlobal.gsHMIdata.sCmd["+this.id.slice(-1)+"].i32Motion1");
	})//參數從0開始所以-1
}
for(i=10;i<31;i++){
	document.getElementById('y2_'+i).addEventListener('change',function(){
		
		 writeValueFN(this.value, "unit/dHdGlobal.gsHMIdata.sCmd["+this.id.slice(-2)+"].i32Motion1");
	})//參數從0開始所以-1
}


for(i=1;i<10;i++){
	document.getElementById('z2_0'+i).addEventListener('change',function(){
		 writeValueFN(this.value, "unit/dHdGlobal.gsHMIdata.sCmd["+this.id.slice(-1)+"].aParameter1[2]");
	})//參數從0開始所以-1
}
for(i=10;i<31;i++){
	document.getElementById('z2_'+i).addEventListener('change',function(){
		 writeValueFN(this.value, "unit/dHdGlobal.gsHMIdata.sCmd["+this.id.slice(-2)+"].aParameter1[2]");
	})//參數從0開始所以-1
}



//////////////
});
var movePos=[];
function writeSingleVar1(id){
    switch(id){
	case 'inp_016':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[0].r1");
		 break;
	case 'inp_026':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[1].r1");
		 break;
	case 'inp_036':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[2].r1");
		 break;
	case 'inp_046':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[3].r1");
		 break;
	case 'inp_056':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[4].r1");
		 break;
	case 'inp_066':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[5].r1");
		 break;
	case 'inp_076':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[6].r1");
		 break;
	case 'inp_086':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[7].r1");
		 break;
	case 'inp_096':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[8].r1");
		 break;
	case 'inp_106':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[9].r1");
		 break;
	case 'inp_116':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[10].r1");
		 break;
	case 'inp_126':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[11].r1");
		 break;
	case 'inp_136':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[12].r1");
		 break;
	case 'inp_146':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[13].r1");
		 break;
	case 'inp_156':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[14].r1");
		 break;
	case 'inp_166':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[15].r1");
		 break;
	case 'inp_176':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[16].r1");
		 break;
	case 'inp_186':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[17].r1");
		 break;
	case 'inp_196':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[18].r1");
		 break;
	case 'inp_206':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[19].r1");
		 break;
	case 'inp_0216':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[20].r1");
		 break;
	case 'inp_0226':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[21].r1");
		 break;
	case 'inp_0236':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[22].r1");
		 break;
	case 'inp_0246':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[23].r1");
		 break;
	case 'inp_0256':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[24].r1");
		 break;
	case 'inp_0266':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[25].r1");
		 break;
	case 'inp_0276':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[26].r1");
		 break;
	case 'inp_0286':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[27].r1");
		 break;
	case 'inp_0296':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[28].r1");
		 break;
	case 'inp_0306':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[29].r1");
		 break;

	case 'inp_017':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[0].r2");
		 break;
	case 'inp_027':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[1].r2");
		 break;
	case 'inp_037':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[2].r2");
		 break;
	case 'inp_047':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[3].r2");
		 break;
	case 'inp_057':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[4].r2");
		 break;
	case 'inp_067':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[5].r2");
		 break;
	case 'inp_077':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[6].r2");
		 break;
	case 'inp_087':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[7].r2");
		 break;
	case 'inp_097':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[8].r2");
		 break;
	case 'inp_107':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[9].r2");
		 break;
	case 'inp_117':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[10].r2");
		 break;
	case 'inp_127':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[11].r2");
		 break;
	case 'inp_137':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[12].r2");
		 break;
	case 'inp_147':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[13].r2");
		 break;
	case 'inp_157':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[14].r2");
		 break;
	case 'inp_167':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[15].r2");
		 break;
	case 'inp_177':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[16].r2");
		 break;
	case 'inp_187':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[17].r2");
		 break;
	case 'inp_197':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[18].r2");
		 break;
	case 'inp_207':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[19].r2");
		 break;
	case 'inp_0217':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[20].r2");
		 break;
	case 'inp_0227':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[21].r2");
		 break;
	case 'inp_0237':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[22].r2");
		 break;
	case 'inp_0247':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[23].r2");
		 break;
	case 'inp_0257':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[24].r2");
		 break;
	case 'inp_0267':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[25].r2");
		 break;
	case 'inp_0277':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[26].r2");
		 break;
	case 'inp_0287':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[27].r2");
		 break;
	case 'inp_0297':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[28].r2");
		 break;
	case 'inp_0307':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sSegPt[29].r2");
		 break;


	case 'inp_213':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[1].aParameter[2]");
	     break;
	case 'inp_223':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[2].aParameter[2]");
	     break;
	case 'inp_233':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[3].aParameter[2]");
	     break;
	case 'inp_243':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[4].aParameter[2]");
	     break;
	case 'inp_253':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[5].aParameter[2]");
	     break;
    case 'inp_263':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[6].aParameter[2]");
	     break;
    case 'inp_273':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[7].aParameter[2]");
	     break;
    case 'inp_283':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[8].aParameter[2]");
	     break;
    case 'inp_293':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[9].aParameter[2]");
	     break;
    case 'inp_303':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[10].aParameter[2]");
	     break;
    case 'inp_313':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[11].aParameter[2]");
	     break;
	case 'inp_323':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[12].aParameter[2]");
	     break;
	case 'inp_333':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[13].aParameter[2]");
	     break;
	case 'inp_343':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[14].aParameter[2]");
	     break;
	case 'inp_353':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[15].aParameter[2]");
	     break;
    case 'inp_363':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[16].aParameter[2]");
	     break;
    case 'inp_373':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[17].aParameter[2]");
	     break;
    case 'inp_383':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[18].aParameter[2]");
	     break;
    case 'inp_393':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[19].aParameter[2]");
	     break;
    case 'inp_403':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[20].aParameter[2]");
	     break;	
    case 'inp_413':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[21].aParameter[2]");
	     break;	
    case 'inp_423':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[22].aParameter[2]");
	     break;	
    case 'inp_433':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[23].aParameter[2]");
	     break;		
    case 'inp_443':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[24].aParameter[2]");
	     break;	
    case 'inp_453':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[25].aParameter[2]");
	     break;	
    case 'inp_463':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[26].aParameter[2]");
	     break;	
    case 'inp_473':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[27].aParameter[2]");
	     break;	
    case 'inp_483':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[28].aParameter[2]");
	     break;	
    case 'inp_493':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[29].aParameter[2]");
	     break;	
    case 'inp_503':
	     writeValueFN(document.getElementById(id).value, "unit/dHdGlobal.gsHMIdata.sCmd[30].aParameter[2]");
	     break;	
 

    case 'inp_214':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[1].tMon");
	     break;
	case 'inp_224':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[2].tMon");
	     break;
	case 'inp_234':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[3].tMon");
	     break;
	case 'inp_244':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[4].tMon");
	     break;
	case 'inp_254':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[5].tMon");
	     break;
    case 'inp_264':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[6].tMon");
	     break;
    case 'inp_274':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[7].tMon");
	     break;
    case 'inp_284':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[8].tMon");
	     break;
    case 'inp_294':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[9].tMon");
	     break;
    case 'inp_304':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[10].tMon");
	     break;
    case 'inp_314':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[11].tMon");
	     break;
	case 'inp_324':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[12].tMon");
	     break;
	case 'inp_334':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[13].tMon");
	     break;
	case 'inp_344':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[14].tMon");
	     break;
	case 'inp_354':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[15].tMon");
	     break;
    case 'inp_364':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[16].tMon");
	     break;
    case 'inp_374':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[17].tMon");
	     break;
    case 'inp_384':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[18].tMon");
	     break;
    case 'inp_394':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[19].tMon");
	     break;
    case 'inp_404':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[20].tMon");
	     break;		
    case 'inp_414':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[21].tMon");
	     break;	
    case 'inp_424':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[22].tMon");
	     break;	
    case 'inp_434':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[23].tMon");
	     break;	
    case 'inp_444':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[24].tMon");
	     break;	
    case 'inp_454':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[25].tMon");
	     break;	
    case 'inp_464':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[26].tMon");
	     break;	
    case 'inp_474':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[27].tMon");
	     break;	
    case 'inp_484':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[28].tMon");
	     break;	
    case 'inp_494':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[29].tMon");
	     break;	
    case 'inp_504':
	     writeValueFN(document.getElementById(id).value*1000, "unit/dHdGlobal.gsHMIdata.sCmd[30].tMon");
	     break;	



	default:
		 break;
	}
}
  
function BtnDown(id){
    if(id=="SingleStep"){
	    writeValueFN("true", "unit/dHdGlobal.gboSingleStep");
	}
	else if(id=="LastCmd"){
	    writeValueFN("true", "unit/dHdGlobal.gboLastCmd");
	}
	else if(id=="NextCmd"){
	    writeValueFN("true", "unit/dHdGlobal.gboNextCmd");
	}
	else if(id=="CmdDownload"){
	    writeValueFN("true", "unit/dHdGlobal.gboCmdDownload");
	}
}

function buildSubscription() {

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_Postion";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_X.positioningState.actualPosition";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_X_Speed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatSpeed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_X.motionStateData.actualVelocity";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_Postion";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_Y.positioningState.actualPosition";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y1_Speed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatSpeed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_Y.motionStateData.actualVelocity";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_Postion";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_Z.positioningState.actualPosition";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z1_Speed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatSpeed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_Z.motionStateData.actualVelocity";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
//¿ªÄ£
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MoldOpenComplete";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboMoldOpenComplete";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[4]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
//¹ØÄ£
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MoldCloseSafety";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboMoldCloseSafety";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[3]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
//×ËÌ¬
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Pose";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboPose0";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[23]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Pose";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboPose90";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[24]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Pose";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboPose180";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[25]";
	SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
 //Ä£Ê½1
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MotionMode";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboAutomatic";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gbyMotionMode";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	//Ä£Ê½2
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_OperationMode";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboModel";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gbyOperationMode";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

   SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "movestate1";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.gi32CMDnum";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "readvalue";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sSegPt[1].i32SegType";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

            SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y2_Postion";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_Y2.positioningState.actualPosition";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Y2_Speed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatSpeed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_Y2.motionStateData.actualVelocity";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z2_Postion";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatValue";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_Z2.positioningState.actualPosition";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_Z2_Speed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "floatSpeed";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "to/Axis_Z2.motionStateData.actualVelocity";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    
  //Starte Aktualisierung
    SubscriptionInstance = subscription(SubscriptionInstance, SubscriptionCycle, SubscriptionData.ItemList);
	
	ReadValuePathOne(id_1, var_1);
	ReadValuePathTwo(id_2, var_2);
/*
	ReadValuePath(id_3, var_3 ,id_2);
	ReadValuePath(id_4, var_4 ,id_2);
	ReadValuePath(id_5, var_5 ,id_2);
	ReadValuePath(id_6, var_6 ,id_2);
	ReadValuePath(id_7, var_7 ,id_2);
	*/
	ReadValuePathRightTwo(id_02, var_02, id_03, id_04);
	ReadValuePathRightThere(id_03, var_03, id_02);
	ReadValuePathRightFour(id_04, var_04, id_02);

	ReadValuePath(id_3,var_3,id_2);
	ReadValuePath(id_4,var_4);
	ReadValuePath(id_5,var_5);
	ReadValuePath(id_6,var_6);
	ReadValuePath(id_7,var_7);
	ReadValuePath(id_8,var_8);
	ReadValuePath(id_9,var_9);
	ReadValuePath(id_10,var_10);
	ReadValuePath(id_11,var_11);
	ReadValuePath(id_12,var_12);
	ReadValuePath(id_13,var_13);
	ReadValuePath(id_14,var_14);
	ReadValuePath(id_15,var_15);
	ReadValuePath(id_16,var_16);
	ReadValuePath(id_17,var_17);
	ReadValuePath(id_18,var_18);
	ReadValuePath(id_19,var_19);
	ReadValuePath(id_20,var_20);
	ReadValuePath(id_21,var_21);
	ReadValuePath(id_22,var_22);
	//20160401
	ReadValuePath(id_020,var_020);
	ReadValuePath(id_021,var_021);
	ReadValuePath(id_022,var_022);
	ReadValuePath(id_023,var_023);
	ReadValuePath(id_024,var_024);
	ReadValuePath(id_025,var_025);
	ReadValuePath(id_026,var_026);
	ReadValuePath(id_027,var_027);
	ReadValuePath(id_028,var_028);
	ReadValuePath(id_029,var_029);





}
var id_3=["inp_013","inp_014","inp_015","inp_016","inp_017"];
var var_3=["unit/dHdGlobal.gsHMIdata.sSegPt[0].x","unit/dHdGlobal.gsHMIdata.sSegPt[0].y1","unit/dHdGlobal.gsHMIdata.sSegPt[0].z1","unit/dHdGlobal.gsHMIdata.sSegPt[0].r1","unit/dHdGlobal.gsHMIdata.sSegPt[0].r2"];
var id_4=["inp_023","inp_024","inp_025","inp_026","inp_027"];
var var_4=["unit/dHdGlobal.gsHMIdata.sSegPt[1].x","unit/dHdGlobal.gsHMIdata.sSegPt[1].y1","unit/dHdGlobal.gsHMIdata.sSegPt[1].z1","unit/dHdGlobal.gsHMIdata.sSegPt[1].r1","unit/dHdGlobal.gsHMIdata.sSegPt[1].r2"];
var id_5=["inp_033","inp_034","inp_035","inp_036","inp_037"];
var var_5=["unit/dHdGlobal.gsHMIdata.sSegPt[2].x","unit/dHdGlobal.gsHMIdata.sSegPt[2].y1","unit/dHdGlobal.gsHMIdata.sSegPt[2].z1","unit/dHdGlobal.gsHMIdata.sSegPt[2].r1","unit/dHdGlobal.gsHMIdata.sSegPt[2].r2"];
var id_6=["inp_043","inp_044","inp_045","inp_046","inp_047"];
var var_6=["unit/dHdGlobal.gsHMIdata.sSegPt[3].x","unit/dHdGlobal.gsHMIdata.sSegPt[3].y1","unit/dHdGlobal.gsHMIdata.sSegPt[3].z1","unit/dHdGlobal.gsHMIdata.sSegPt[3].r1","unit/dHdGlobal.gsHMIdata.sSegPt[3].r2"];
var id_7=["inp_053","inp_054","inp_055","inp_056","inp_057"];
var var_7=["unit/dHdGlobal.gsHMIdata.sSegPt[4].x","unit/dHdGlobal.gsHMIdata.sSegPt[4].y1","unit/dHdGlobal.gsHMIdata.sSegPt[4].z1","unit/dHdGlobal.gsHMIdata.sSegPt[4].r1","unit/dHdGlobal.gsHMIdata.sSegPt[4].r2"];
var id_8=["inp_063","inp_064","inp_065","inp_066","inp_067"];
var var_8=["unit/dHdGlobal.gsHMIdata.sSegPt[5].x","unit/dHdGlobal.gsHMIdata.sSegPt[5].y1","unit/dHdGlobal.gsHMIdata.sSegPt[5].z1","unit/dHdGlobal.gsHMIdata.sSegPt[5].r1","unit/dHdGlobal.gsHMIdata.sSegPt[5].r2"];
var id_9=["inp_073","inp_074","inp_075","inp_076","inp_077"];
var var_9=["unit/dHdGlobal.gsHMIdata.sSegPt[6].x","unit/dHdGlobal.gsHMIdata.sSegPt[6].y1","unit/dHdGlobal.gsHMIdata.sSegPt[6].z1","unit/dHdGlobal.gsHMIdata.sSegPt[6].r1","unit/dHdGlobal.gsHMIdata.sSegPt[6].r2"];
var id_10=["inp_083","inp_084","inp_085","inp_086","inp_087"];
var var_10=["unit/dHdGlobal.gsHMIdata.sSegPt[7].x","unit/dHdGlobal.gsHMIdata.sSegPt[7].y1","unit/dHdGlobal.gsHMIdata.sSegPt[7].z1","unit/dHdGlobal.gsHMIdata.sSegPt[7].r1","unit/dHdGlobal.gsHMIdata.sSegPt[7].r2"];
var id_11=["inp_093","inp_094","inp_095","inp_096","inp_097"];
var var_11=["unit/dHdGlobal.gsHMIdata.sSegPt[8].x","unit/dHdGlobal.gsHMIdata.sSegPt[8].y1","unit/dHdGlobal.gsHMIdata.sSegPt[8].z1","unit/dHdGlobal.gsHMIdata.sSegPt[8].r1","unit/dHdGlobal.gsHMIdata.sSegPt[8].r2"];
var id_12=["inp_103","inp_104","inp_105","inp_106","inp_107"];
var var_12=["unit/dHdGlobal.gsHMIdata.sSegPt[9].x","unit/dHdGlobal.gsHMIdata.sSegPt[9].y1","unit/dHdGlobal.gsHMIdata.sSegPt[9].z1","unit/dHdGlobal.gsHMIdata.sSegPt[9].r1","unit/dHdGlobal.gsHMIdata.sSegPt[9].r2"];
var id_13=["inp_113","inp_114","inp_115","inp_116","inp_117"];
var var_13=["unit/dHdGlobal.gsHMIdata.sSegPt[10].x","unit/dHdGlobal.gsHMIdata.sSegPt[10].y1","unit/dHdGlobal.gsHMIdata.sSegPt[10].z1","unit/dHdGlobal.gsHMIdata.sSegPt[10].r1","unit/dHdGlobal.gsHMIdata.sSegPt[10].r2"];
var id_14=["inp_123","inp_124","inp_125","inp_126","inp_127"];
var var_14=["unit/dHdGlobal.gsHMIdata.sSegPt[11].x","unit/dHdGlobal.gsHMIdata.sSegPt[11].y1","unit/dHdGlobal.gsHMIdata.sSegPt[11].z1","unit/dHdGlobal.gsHMIdata.sSegPt[11].r1","unit/dHdGlobal.gsHMIdata.sSegPt[11].r2"];
var id_15=["inp_133","inp_134","inp_135","inp_136","inp_137"];
var var_15=["unit/dHdGlobal.gsHMIdata.sSegPt[12].x","unit/dHdGlobal.gsHMIdata.sSegPt[12].y1","unit/dHdGlobal.gsHMIdata.sSegPt[12].z1","unit/dHdGlobal.gsHMIdata.sSegPt[12].r1","unit/dHdGlobal.gsHMIdata.sSegPt[12].r2"];
var id_16=["inp_143","inp_144","inp_145","inp_146","inp_147"];
var var_16=["unit/dHdGlobal.gsHMIdata.sSegPt[13].x","unit/dHdGlobal.gsHMIdata.sSegPt[13].y1","unit/dHdGlobal.gsHMIdata.sSegPt[13].z1","unit/dHdGlobal.gsHMIdata.sSegPt[13].r1","unit/dHdGlobal.gsHMIdata.sSegPt[13].r2"];
var id_17=["inp_153","inp_154","inp_155","inp_156","inp_157"];
var var_17=["unit/dHdGlobal.gsHMIdata.sSegPt[14].x","unit/dHdGlobal.gsHMIdata.sSegPt[14].y1","unit/dHdGlobal.gsHMIdata.sSegPt[14].z1","unit/dHdGlobal.gsHMIdata.sSegPt[14].r1","unit/dHdGlobal.gsHMIdata.sSegPt[14].r2"];
var id_18=["inp_163","inp_164","inp_165","inp_166","inp_167"];
var var_18=["unit/dHdGlobal.gsHMIdata.sSegPt[15].x","unit/dHdGlobal.gsHMIdata.sSegPt[15].y1","unit/dHdGlobal.gsHMIdata.sSegPt[15].z1","unit/dHdGlobal.gsHMIdata.sSegPt[15].r1","unit/dHdGlobal.gsHMIdata.sSegPt[15].r2"];
var id_19=["inp_173","inp_174","inp_175","inp_176","inp_177"];
var var_19=["unit/dHdGlobal.gsHMIdata.sSegPt[16].x","unit/dHdGlobal.gsHMIdata.sSegPt[16].y1","unit/dHdGlobal.gsHMIdata.sSegPt[16].z1","unit/dHdGlobal.gsHMIdata.sSegPt[16].r1","unit/dHdGlobal.gsHMIdata.sSegPt[16].r2"];
var id_20=["inp_183","inp_184","inp_185","inp_186","inp_187"];
var var_20=["unit/dHdGlobal.gsHMIdata.sSegPt[17].x","unit/dHdGlobal.gsHMIdata.sSegPt[17].y1","unit/dHdGlobal.gsHMIdata.sSegPt[17].z1","unit/dHdGlobal.gsHMIdata.sSegPt[17].r1","unit/dHdGlobal.gsHMIdata.sSegPt[17].r2"];
var id_21=["inp_193","inp_194","inp_195","inp_196","inp_197"];
var var_21=["unit/dHdGlobal.gsHMIdata.sSegPt[18].x","unit/dHdGlobal.gsHMIdata.sSegPt[18].y1","unit/dHdGlobal.gsHMIdata.sSegPt[18].z1","unit/dHdGlobal.gsHMIdata.sSegPt[18].r1","unit/dHdGlobal.gsHMIdata.sSegPt[18].r2"];
var id_22=["inp_203","inp_204","inp_205","inp_206","inp_207"];
var var_22=["unit/dHdGlobal.gsHMIdata.sSegPt[19].x","unit/dHdGlobal.gsHMIdata.sSegPt[19].y1","unit/dHdGlobal.gsHMIdata.sSegPt[19].z1","unit/dHdGlobal.gsHMIdata.sSegPt[19].r1","unit/dHdGlobal.gsHMIdata.sSegPt[19].r2"];
//0401新增
var id_020=["inp_0213","inp_0214","inp_0215","inp_0216","inp_0217"];
var var_020=["unit/dHdGlobal.gsHMIdata.sSegPt[20].x","unit/dHdGlobal.gsHMIdata.sSegPt[20].y1","unit/dHdGlobal.gsHMIdata.sSegPt[20].z1","unit/dHdGlobal.gsHMIdata.sSegPt[20].r1","unit/dHdGlobal.gsHMIdata.sSegPt[20].r2"];
var id_021=["inp_0223","inp_0224","inp_0225","inp_0226","inp_0227"];
var var_021=["unit/dHdGlobal.gsHMIdata.sSegPt[21].x","unit/dHdGlobal.gsHMIdata.sSegPt[21].y1","unit/dHdGlobal.gsHMIdata.sSegPt[21].z1","unit/dHdGlobal.gsHMIdata.sSegPt[21].r1","unit/dHdGlobal.gsHMIdata.sSegPt[21].r2"];
var id_022=["inp_0233","inp_0234","inp_0235","inp_0236","inp_0237"];
var var_022=["unit/dHdGlobal.gsHMIdata.sSegPt[22].x","unit/dHdGlobal.gsHMIdata.sSegPt[22].y1","unit/dHdGlobal.gsHMIdata.sSegPt[22].z1","unit/dHdGlobal.gsHMIdata.sSegPt[22].r1","unit/dHdGlobal.gsHMIdata.sSegPt[22].r2"];
var id_023=["inp_0243","inp_0244","inp_0245","inp_0246","inp_0247"];
var var_023=["unit/dHdGlobal.gsHMIdata.sSegPt[23].x","unit/dHdGlobal.gsHMIdata.sSegPt[23].y1","unit/dHdGlobal.gsHMIdata.sSegPt[23].z1","unit/dHdGlobal.gsHMIdata.sSegPt[23].r1","unit/dHdGlobal.gsHMIdata.sSegPt[23].r2"];
var id_024=["inp_0253","inp_0254","inp_0255","inp_0256","inp_0257"];
var var_024=["unit/dHdGlobal.gsHMIdata.sSegPt[24].x","unit/dHdGlobal.gsHMIdata.sSegPt[24].y1","unit/dHdGlobal.gsHMIdata.sSegPt[24].z1","unit/dHdGlobal.gsHMIdata.sSegPt[24].r1","unit/dHdGlobal.gsHMIdata.sSegPt[24].r2"];
var id_025=["inp_0263","inp_0264","inp_0265","inp_0266","inp_0267"];
var var_025=["unit/dHdGlobal.gsHMIdata.sSegPt[25].x","unit/dHdGlobal.gsHMIdata.sSegPt[25].y1","unit/dHdGlobal.gsHMIdata.sSegPt[25].z1","unit/dHdGlobal.gsHMIdata.sSegPt[25].r1","unit/dHdGlobal.gsHMIdata.sSegPt[25].r2"];
var id_026=["inp_0273","inp_0274","inp_0275","inp_0276","inp_0277"];
var var_026=["unit/dHdGlobal.gsHMIdata.sSegPt[26].x","unit/dHdGlobal.gsHMIdata.sSegPt[26].y1","unit/dHdGlobal.gsHMIdata.sSegPt[26].z1","unit/dHdGlobal.gsHMIdata.sSegPt[26].r1","unit/dHdGlobal.gsHMIdata.sSegPt[26].r2"];
var id_027=["inp_0283","inp_0284","inp_0285","inp_0286","inp_0287"];
var var_027=["unit/dHdGlobal.gsHMIdata.sSegPt[27].x","unit/dHdGlobal.gsHMIdata.sSegPt[27].y1","unit/dHdGlobal.gsHMIdata.sSegPt[27].z1","unit/dHdGlobal.gsHMIdata.sSegPt[27].r1","unit/dHdGlobal.gsHMIdata.sSegPt[27].r2"];
var id_028=["inp_0293","inp_0294","inp_0295","inp_0296","inp_0297"];
var var_028=["unit/dHdGlobal.gsHMIdata.sSegPt[28].x","unit/dHdGlobal.gsHMIdata.sSegPt[28].y1","unit/dHdGlobal.gsHMIdata.sSegPt[28].z1","unit/dHdGlobal.gsHMIdata.sSegPt[28].r1","unit/dHdGlobal.gsHMIdata.sSegPt[28].r2"];
var id_029=["inp_0303","inp_0304","inp_0305","inp_0306","inp_0307"];
var var_029=["unit/dHdGlobal.gsHMIdata.sSegPt[29].x","unit/dHdGlobal.gsHMIdata.sSegPt[29].y1","unit/dHdGlobal.gsHMIdata.sSegPt[29].z1","unit/dHdGlobal.gsHMIdata.sSegPt[29].r1","unit/dHdGlobal.gsHMIdata.sSegPt[29].r2"];




//直接一列讀取會網路延遲讀不到，所以分成這樣讀取
var id_1=["inp_011","inp_021","inp_031","inp_041","inp_051","inp_061","inp_071","inp_081","inp_091","inp_101","inp_111","inp_121","inp_131","inp_141","inp_151","inp_161","inp_171","inp_181","inp_191","inp_201","inp_0211","inp_0221","inp_0231","inp_0241","inp_0251","inp_0261","inp_0271","inp_0281","inp_0291","inp_0301"];
var var_1=["unit/dHdGlobal.gsHMIdata.sSegPt[0].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[1].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[2].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[3].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[4].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[5].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[6].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[7].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[8].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[9].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[10].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[11].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[12].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[13].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[14].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[15].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[16].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[17].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[18].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[19].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[20].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[21].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[22].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[23].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[24].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[25].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[26].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[27].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[28].i32SegType","unit/dHdGlobal.gsHMIdata.sSegPt[29].i32SegType"];

var id_2=["inp_012","inp_022","inp_032","inp_042","inp_052","inp_062","inp_072","inp_082","inp_092","inp_102","inp_112","inp_122","inp_132","inp_142","inp_152","inp_162","inp_172","inp_182","inp_192","inp_202","inp_0212","inp_0222","inp_0232","inp_0242","inp_0252","inp_0262","inp_0272","inp_0282","inp_0292","inp_0302"];


var var_2=["unit/dHdGlobal.gsHMIdata.sSegPt[0].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[1].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[2].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[3].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[4].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[5].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[6].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[7].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[8].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[9].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[10].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[11].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[12].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[13].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[14].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[15].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[16].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[17].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[18].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[19].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[20].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[21].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[22].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[23].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[24].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[25].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[26].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[27].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[28].u8SegNode","unit/dHdGlobal.gsHMIdata.sSegPt[29].u8SegNode"];
/*
var id_3=["inp_013","inp_023","inp_033","inp_043","inp_053","inp_063","inp_073","inp_083","inp_093","inp_103","inp_113","inp_123","inp_133","inp_143","inp_153","inp_163","inp_173","inp_183","inp_193","inp_203"];
var var_3=["unit/dHdGlobal.gsHMIdata.sSegPt[0].x","unit/dHdGlobal.gsHMIdata.sSegPt[1].x","unit/dHdGlobal.gsHMIdata.sSegPt[2].x","unit/dHdGlobal.gsHMIdata.sSegPt[3].x","unit/dHdGlobal.gsHMIdata.sSegPt[4].x","unit/dHdGlobal.gsHMIdata.sSegPt[5].x","unit/dHdGlobal.gsHMIdata.sSegPt[6].x","unit/dHdGlobal.gsHMIdata.sSegPt[7].x","unit/dHdGlobal.gsHMIdata.sSegPt[8].x","unit/dHdGlobal.gsHMIdata.sSegPt[9].x","unit/dHdGlobal.gsHMIdata.sSegPt[10].x","unit/dHdGlobal.gsHMIdata.sSegPt[11].x","unit/dHdGlobal.gsHMIdata.sSegPt[12].x","unit/dHdGlobal.gsHMIdata.sSegPt[13].x","unit/dHdGlobal.gsHMIdata.sSegPt[14].x","unit/dHdGlobal.gsHMIdata.sSegPt[15].x","unit/dHdGlobal.gsHMIdata.sSegPt[16].x","unit/dHdGlobal.gsHMIdata.sSegPt[17].x","unit/dHdGlobal.gsHMIdata.sSegPt[18].x","unit/dHdGlobal.gsHMIdata.sSegPt[19].x"];
var id_4=["inp_014","inp_024","inp_034","inp_044","inp_054","inp_064","inp_074","inp_084","inp_094","inp_104","inp_114","inp_124","inp_134","inp_144","inp_154","inp_164","inp_174","inp_184","inp_194","inp_204"];

var var_4=["unit/dHdGlobal.gsHM Idata.sSegPt[0].y1","unit/dHdGlobal.gsHMIdata.sSegPt[1].y1","unit/dHdGlobal.gsHMIdata.sSegPt[2].y1","unit/dHdGlobal.gsHMIdata.sSegPt[3].y1","unit/dHdGlobal.gsHMIdata.sSegPt[4].y1","unit/dHdGlobal.gsHMIdata.sSegPt[5].y1","unit/dHdGlobal.gsHMIdata.sSegPt[6].y1","unit/dHdGlobal.gsHMIdata.sSegPt[7].y1","unit/dHdGlobal.gsHMIdata.sSegPt[8].y1","unit/dHdGlobal.gsHMIdata.sSegPt[9].y1","unit/dHdGlobal.gsHMIdata.sSegPt[10].y1","unit/dHdGlobal.gsHMIdata.sSegPt[11].y1","unit/dHdGlobal.gsHMIdata.sSegPt[12].y1","unit/dHdGlobal.gsHMIdata.sSegPt[13].y1","unit/dHdGlobal.gsHMIdata.sSegPt[14].y1","unit/dHdGlobal.gsHMIdata.sSegPt[15].y1","unit/dHdGlobal.gsHMIdata.sSegPt[16].y1","unit/dHdGlobal.gsHMIdata.sSegPt[17].y1","unit/dHdGlobal.gsHMIdata.sSegPt[18].y1","unit/dHdGlobal.gsHMIdata.sSegPt[19].y1"];

var id_5=["inp_015","inp_025","inp_035","inp_045","inp_055","inp_065","inp_075","inp_085","inp_095","inp_105","inp_115","inp_125","inp_135","inp_145","inp_155","inp_165","inp_175","inp_185","inp_195","inp_205"];

var var_5=["unit/dHdGlobal.gsHMIdata.sSegPt[0].z1","unit/dHdGlobal.gsHMIdata.sSegPt[1].z1","unit/dHdGlobal.gsHMIdata.sSegPt[2].z1","unit/dHdGlobal.gsHMIdata.sSegPt[3].z1","unit/dHdGlobal.gsHMIdata.sSegPt[4].z1","unit/dHdGlobal.gsHMIdata.sSegPt[5].z1","unit/dHdGlobal.gsHMIdata.sSegPt[6].z1","unit/dHdGlobal.gsHMIdata.sSegPt[7].z1","unit/dHdGlobal.gsHMIdata.sSegPt[8].z1","unit/dHdGlobal.gsHMIdata.sSegPt[9].z1","unit/dHdGlobal.gsHMIdata.sSegPt[10].z1","unit/dHdGlobal.gsHMIdata.sSegPt[11].z1","unit/dHdGlobal.gsHMIdata.sSegPt[12].z1","unit/dHdGlobal.gsHMIdata.sSegPt[13].z1","unit/dHdGlobal.gsHMIdata.sSegPt[14].z1","unit/dHdGlobal.gsHMIdata.sSegPt[15].z1","unit/dHdGlobal.gsHMIdata.sSegPt[16].z1","unit/dHdGlobal.gsHMIdata.sSegPt[17].z1","unit/dHdGlobal.gsHMIdata.sSegPt[18].z1","unit/dHdGlobal.gsHMIdata.sSegPt[19].z1"];

var id_6=["inp_016","inp_026","inp_036","inp_046","inp_056","inp_066","inp_076","inp_086","inp_096","inp_106","inp_116","inp_126","inp_136","inp_146","inp_156","inp_166","inp_176","inp_186","inp_196","inp_206"];
var var_6=["unit/dHdGlobal.gsHMIdata.sSegPt[0].r1","unit/dHdGlobal.gsHMIdata.sSegPt[1].r1","unit/dHdGlobal.gsHMIdata.sSegPt[2].r1","unit/dHdGlobal.gsHMIdata.sSegPt[3].r1","unit/dHdGlobal.gsHMIdata.sSegPt[4].r1","unit/dHdGlobal.gsHMIdata.sSegPt[5].r1","unit/dHdGlobal.gsHMIdata.sSegPt[6].r1","unit/dHdGlobal.gsHMIdata.sSegPt[7].r1","unit/dHdGlobal.gsHMIdata.sSegPt[8].r1","unit/dHdGlobal.gsHMIdata.sSegPt[9].r1","unit/dHdGlobal.gsHMIdata.sSegPt[10].r1","unit/dHdGlobal.gsHMIdata.sSegPt[11].r1","unit/dHdGlobal.gsHMIdata.sSegPt[12].r1","unit/dHdGlobal.gsHMIdata.sSegPt[13].r1","unit/dHdGlobal.gsHMIdata.sSegPt[14].r1","unit/dHdGlobal.gsHMIdata.sSegPt[15].r1","unit/dHdGlobal.gsHMIdata.sSegPt[16].r1","unit/dHdGlobal.gsHMIdata.sSegPt[17].r1","unit/dHdGlobal.gsHMIdata.sSegPt[18].r1","unit/dHdGlobal.gsHMIdata.sSegPt[19].r1"];
var id_7=["inp_017","inp_027","inp_037","inp_047","inp_057","inp_067","inp_077","inp_087","inp_097","inp_107","inp_117","inp_127","inp_137","inp_147","inp_157","inp_167","inp_177","inp_187","inp_197","inp_207"];
var var_7=["unit/dHdGlobal.gsHMIdata.sSegPt[0].r2","unit/dHdGlobal.gsHMIdata.sSegPt[1].r2","unit/dHdGlobal.gsHMIdata.sSegPt[2].r2","unit/dHdGlobal.gsHMIdata.sSegPt[3].r2","unit/dHdGlobal.gsHMIdata.sSegPt[4].r2","unit/dHdGlobal.gsHMIdata.sSegPt[5].r2","unit/dHdGlobal.gsHMIdata.sSegPt[6].r2","unit/dHdGlobal.gsHMIdata.sSegPt[7].r2","unit/dHdGlobal.gsHMIdata.sSegPt[8].r2","unit/dHdGlobal.gsHMIdata.sSegPt[9].r2","unit/dHdGlobal.gsHMIdata.sSegPt[10].r2","unit/dHdGlobal.gsHMIdata.sSegPt[11].r2","unit/dHdGlobal.gsHMIdata.sSegPt[12].r2","unit/dHdGlobal.gsHMIdata.sSegPt[13].r2","unit/dHdGlobal.gsHMIdata.sSegPt[14].r2","unit/dHdGlobal.gsHMIdata.sSegPt[15].r2","unit/dHdGlobal.gsHMIdata.sSegPt[16].r2","unit/dHdGlobal.gsHMIdata.sSegPt[17].r2","unit/dHdGlobal.gsHMIdata.sSegPt[18].r2","unit/dHdGlobal.gsHMIdata.sSegPt[19].r2"];

*/

//右邊框框
var id_02=["inp_212","inp_222","inp_232","inp_242","inp_252","inp_262","inp_272","inp_282","inp_292","inp_302","inp_312","inp_322","inp_332","inp_342","inp_352","inp_362","inp_372","inp_382","inp_392","inp_402","inp_412","inp_422","inp_432","inp_442","inp_452","inp_462","inp_472","inp_482","inp_492","inp_502"];
var var_02=["unit/dHdGlobal.gsHMIdata.sCmd[1].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[2].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[3].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[4].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[5].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[6].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[7].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[8].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[9].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[10].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[11].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[12].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[13].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[14].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[15].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[16].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[17].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[18].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[19].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[20].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[21].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[22].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[23].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[24].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[25].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[26].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[27].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[28].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[29].i32Motion","unit/dHdGlobal.gsHMIdata.sCmd[30].i32Motion"];
var id_03=["inp_213","inp_223","inp_233","inp_243","inp_253","inp_263","inp_273","inp_283","inp_293","inp_303","inp_313","inp_323","inp_333","inp_343","inp_353","inp_363","inp_373","inp_383","inp_393","inp_403","inp_413","inp_423","inp_433","inp_443","inp_453","inp_463","inp_473","inp_483","inp_493","inp_503"];
var var_03=["unit/dHdGlobal.gsHMIdata.sCmd[1].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[2].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[3].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[4].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[5].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[6].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[7].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[8].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[9].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[10].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[11].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[12].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[13].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[14].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[15].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[16].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[17].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[18].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[19].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[20].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[21].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[22].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[23].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[24].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[25].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[26].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[27].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[28].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[29].aParameter[2]","unit/dHdGlobal.gsHMIdata.sCmd[30].aParameter[2]"];
var id_04=["inp_214","inp_224","inp_234","inp_244","inp_254","inp_264","inp_274","inp_284","inp_294","inp_304","inp_314","inp_324","inp_334","inp_344","inp_354","inp_364","inp_374","inp_384","inp_394","inp_404","inp_414","inp_424","inp_434","inp_444","inp_454","inp_464","inp_474","inp_484","inp_494","inp_504"];
var var_04=["unit/dHdGlobal.gsHMIdata.sCmd[1].tMon","unit/dHdGlobal.gsHMIdata.sCmd[2].tMon","unit/dHdGlobal.gsHMIdata.sCmd[3].tMon","unit/dHdGlobal.gsHMIdata.sCmd[4].tMon","unit/dHdGlobal.gsHMIdata.sCmd[5].tMon","unit/dHdGlobal.gsHMIdata.sCmd[6].tMon","unit/dHdGlobal.gsHMIdata.sCmd[7].tMon","unit/dHdGlobal.gsHMIdata.sCmd[8].tMon","unit/dHdGlobal.gsHMIdata.sCmd[9].tMon","unit/dHdGlobal.gsHMIdata.sCmd[10].tMon","unit/dHdGlobal.gsHMIdata.sCmd[11].tMon","unit/dHdGlobal.gsHMIdata.sCmd[12].tMon","unit/dHdGlobal.gsHMIdata.sCmd[13].tMon","unit/dHdGlobal.gsHMIdata.sCmd[14].tMon","unit/dHdGlobal.gsHMIdata.sCmd[15].tMon","unit/dHdGlobal.gsHMIdata.sCmd[16].tMon","unit/dHdGlobal.gsHMIdata.sCmd[17].tMon","unit/dHdGlobal.gsHMIdata.sCmd[18].tMon","unit/dHdGlobal.gsHMIdata.sCmd[19].tMon","unit/dHdGlobal.gsHMIdata.sCmd[20].tMon","unit/dHdGlobal.gsHMIdata.sCmd[21].tMon","unit/dHdGlobal.gsHMIdata.sCmd[22].tMon","unit/dHdGlobal.gsHMIdata.sCmd[23].tMon","unit/dHdGlobal.gsHMIdata.sCmd[24].tMon","unit/dHdGlobal.gsHMIdata.sCmd[25].tMon","unit/dHdGlobal.gsHMIdata.sCmd[26].tMon","unit/dHdGlobal.gsHMIdata.sCmd[27].tMon","unit/dHdGlobal.gsHMIdata.sCmd[28].tMon","unit/dHdGlobal.gsHMIdata.sCmd[29].tMon","unit/dHdGlobal.gsHMIdata.sCmd[30].tMon"];


//y2z2路徑
var id_sSegPty2 =['y2_01','y2_02','y2_03','y2_04','y2_05','y2_06','y2_07','y2_08','y2_09','y2_10','y2_11','y2_12','y2_13','y2_14','y2_15','y2_16','y2_17','y2_18','y2_19','y2_20','y2_21','y2_22','y2_23','y2_24','y2_25','y2_26','y2_27','y2_28','y2_29','y2_30'];
var var_sSegPty2 = ['unit/dHdGlobal.gsHMIdata.sSegPt[0].y2','unit/dHdGlobal.gsHMIdata.sSegPt[1].y2','unit/dHdGlobal.gsHMIdata.sSegPt[2].y2','unit/dHdGlobal.gsHMIdata.sSegPt[3].y2','unit/dHdGlobal.gsHMIdata.sSegPt[4].y2','unit/dHdGlobal.gsHMIdata.sSegPt[5].y2','unit/dHdGlobal.gsHMIdata.sSegPt[6].y2','unit/dHdGlobal.gsHMIdata.sSegPt[7].y2','unit/dHdGlobal.gsHMIdata.sSegPt[8].y2','unit/dHdGlobal.gsHMIdata.sSegPt[9].y2','unit/dHdGlobal.gsHMIdata.sSegPt[10].y2','unit/dHdGlobal.gsHMIdata.sSegPt[11].y2','unit/dHdGlobal.gsHMIdata.sSegPt[12].y2','unit/dHdGlobal.gsHMIdata.sSegPt[13].y2','unit/dHdGlobal.gsHMIdata.sSegPt[14].y2','unit/dHdGlobal.gsHMIdata.sSegPt[15].y2','unit/dHdGlobal.gsHMIdata.sSegPt[16].y2','unit/dHdGlobal.gsHMIdata.sSegPt[17].y2','unit/dHdGlobal.gsHMIdata.sSegPt[18].y2','unit/dHdGlobal.gsHMIdata.sSegPt[19].y2','unit/dHdGlobal.gsHMIdata.sSegPt[20].y2','unit/dHdGlobal.gsHMIdata.sSegPt[21].y2','unit/dHdGlobal.gsHMIdata.sSegPt[22].y2','unit/dHdGlobal.gsHMIdata.sSegPt[23].y2','unit/dHdGlobal.gsHMIdata.sSegPt[24].y2','unit/dHdGlobal.gsHMIdata.sSegPt[25].y2','unit/dHdGlobal.gsHMIdata.sSegPt[26].y2','unit/dHdGlobal.gsHMIdata.sSegPt[27].y2','unit/dHdGlobal.gsHMIdata.sSegPt[28].y2','unit/dHdGlobal.gsHMIdata.sSegPt[29].y2'];

var id_sSegPtz2 =['z2_01','z2_02','z2_03','z2_04','z2_05','z2_06','z2_07','z2_08','z2_09','z2_10','z2_11','z2_12','z2_13','z2_14','z2_15','z2_16','z2_17','z2_18','z2_19','z2_20','z2_21','z2_22','z2_23','z2_24','z2_25','z2_26','z2_27','z2_28','z2_29','z2_30'];
var var_sSegPtz2 = ['unit/dHdGlobal.gsHMIdata.sSegPt[0].z2','unit/dHdGlobal.gsHMIdata.sSegPt[1].z2','unit/dHdGlobal.gsHMIdata.sSegPt[2].z2','unit/dHdGlobal.gsHMIdata.sSegPt[3].z2','unit/dHdGlobal.gsHMIdata.sSegPt[4].z2','unit/dHdGlobal.gsHMIdata.sSegPt[5].z2','unit/dHdGlobal.gsHMIdata.sSegPt[6].z2','unit/dHdGlobal.gsHMIdata.sSegPt[7].z2','unit/dHdGlobal.gsHMIdata.sSegPt[8].z2','unit/dHdGlobal.gsHMIdata.sSegPt[9].z2','unit/dHdGlobal.gsHMIdata.sSegPt[10].z2','unit/dHdGlobal.gsHMIdata.sSegPt[11].z2','unit/dHdGlobal.gsHMIdata.sSegPt[12].z2','unit/dHdGlobal.gsHMIdata.sSegPt[13].z2','unit/dHdGlobal.gsHMIdata.sSegPt[14].z2','unit/dHdGlobal.gsHMIdata.sSegPt[15].z2','unit/dHdGlobal.gsHMIdata.sSegPt[16].z2','unit/dHdGlobal.gsHMIdata.sSegPt[17].z2','unit/dHdGlobal.gsHMIdata.sSegPt[18].z2','unit/dHdGlobal.gsHMIdata.sSegPt[19].z2','unit/dHdGlobal.gsHMIdata.sSegPt[20].z2','unit/dHdGlobal.gsHMIdata.sSegPt[21].z2','unit/dHdGlobal.gsHMIdata.sSegPt[22].z2','unit/dHdGlobal.gsHMIdata.sSegPt[23].z2','unit/dHdGlobal.gsHMIdata.sSegPt[24].z2','unit/dHdGlobal.gsHMIdata.sSegPt[25].z2','unit/dHdGlobal.gsHMIdata.sSegPt[26].z2','unit/dHdGlobal.gsHMIdata.sSegPt[27].z2','unit/dHdGlobal.gsHMIdata.sSegPt[28].z2','unit/dHdGlobal.gsHMIdata.sSegPt[29].z2'];

//y2z2路徑步序
var id_i32Motion1 =['q1_01','q1_02','q1_03','q1_04','q1_05','q1_06','q1_07','q1_08','q1_09','q1_10','q1_11','q1_12','q1_13','q1_14','q1_15','q1_16','q1_17','q1_18','q1_19','q1_20','q1_21','q1_22','q1_23','q1_24','q1_25','q1_26','q1_27','q1_28','q1_29','q1_30'];
var var_i32Motion1 = ['unit/dHdGlobal.gsHMIdata.sCmd[1].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[2].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[3].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[4].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[5].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[6].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[7].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[8].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[9].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[10].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[11].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[12].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[13].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[14].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[15].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[16].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[17].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[18].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[19].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[20].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[21].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[22].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[23].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[24].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[25].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[26].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[27].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[28].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[29].i32Motion1','unit/dHdGlobal.gsHMIdata.sCmd[30].i32Motion1'];

var id_aParameter1 =['q2_01','q2_02','q2_03','q2_04','q2_05','q2_06','q2_07','q2_08','q2_09','q2_10','q2_11','q2_12','q2_13','q2_14','q2_15','q2_16','q2_17','q2_18','q2_19','q2_20','q2_21','q2_22','q2_23','q2_24','q2_25','q2_26','q2_27','q2_28','q2_29','q2_30'];
var var_aParameter1 =  ['unit/dHdGlobal.gsHMIdata.sCmd[1].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[2].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[3].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[4].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[5].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[6].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[7].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[8].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[9].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[10].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[11].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[12].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[13].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[14].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[15].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[16].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[17].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[18].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[19].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[20].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[21].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[22].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[23].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[24].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[25].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[26].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[27].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[28].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[29].aParameter1[2]','unit/dHdGlobal.gsHMIdata.sCmd[30].aParameter1[2]'];
