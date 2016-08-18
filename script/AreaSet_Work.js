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
	

    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MoldOpenComplete";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "MoldStatus";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dGlobal.gbiMoldOpenComplete";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;


    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MoldCloseSafety";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "MoldStatus";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dGlobal.gboMoldCloseSafety";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;

//开模
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MoldOpenComplete";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboMoldOpenComplete";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[4]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
//关模
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MoldCloseSafety";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboMoldCloseSafety";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";
    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gaboCondition[3]";
    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
//姿态
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
  //模式1
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_MotionMode";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboAutomatic";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gbyMotionMode";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
	//模式2
	SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();

    SubscriptionData.ItemList[SubscriptionData.LastIndex].id = "inp_OperationMode";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "gboModel";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gbyOperationMode";

    SubscriptionData.LastIndex = SubscriptionData.LastIndex + 1;
	
    SubscriptionData.ItemList[SubscriptionData.LastIndex] = new Object();
    
    SubscriptionData.ItemList[SubscriptionData.LastIndex].style = "Areaset_work";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemPath = "SIMOTION";

    SubscriptionData.ItemList[SubscriptionData.LastIndex].itemName = "unit/dHdGlobal.gsHMIdata.sWorkingZone.boUse";

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
	
	ReadValue(id_MaxPos_X, var_MaxPos_X);
	ReadValue(id_MinPos_X, var_MinPos_X);
	ReadValue(id_MaxPos_Y1, var_MaxPos_Y1);
	ReadValue(id_MinPos_Y1, var_MinPos_Y1);
    ReadValue(id_MaxPos_Z1, var_MaxPos_Z1);
    ReadValue(id_MinPos_Z1, var_MinPos_Z1);
	ReadValue(id_MaxPos_Y2, var_MaxPos_Y2);
	ReadValue(id_MinPos_Y2, var_MinPos_Y2);
    ReadValue(id_MaxPos_Z2, var_MaxPos_Z2);
    ReadValue(id_MinPos_Z2, var_MinPos_Z2);
}


var		id_MaxPos_X = ["inp_MaxPos_X"];	
var     id_MinPos_X = ["inp_MinPos_X"];	
var		id_MaxPos_Y1 = ["inp_MaxPos_Y1"];
var		id_MinPos_Y1 = ["inp_MinPos_Y1"];	
var		id_MaxPos_Z1 = ["inp_MaxPos_Z1"];	
var		id_MinPos_Z1 = ["inp_MinPos_Z1"]; 
var     id_MaxPos_Y2 = ["inp_MaxPos_Y2"];
var     id_MinPos_Y2 = ["inp_MinPos_Y2"];  
var     id_MaxPos_Z2 = ["inp_MaxPos_Z2"];   
var     id_MinPos_Z2 = ["inp_MinPos_Z2"];   

				   
var 	var_MaxPos_X = ["unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Xpos"];	
var		var_MinPos_X = ["unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Xneg"];
var		var_MaxPos_Y1 = ["unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Y1pos"];	
var     var_MinPos_Y1 = ["unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Y1neg"];	
var		var_MaxPos_Z1 = ["unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Z1pos"];	
var		var_MinPos_Z1 = ["unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Z1neg"]; 
var     var_MaxPos_Y2 = ["unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Y2pos"]; 
var     var_MinPos_Y2 = ["unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Y2neg"]; 
var     var_MaxPos_Z2 = ["unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Z2pos"]; 
var     var_MinPos_Z2 = ["unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Z2neg"]; 
  
function	Read(id)
{

	if(id == "btn_ReadMaxPos_X")
	{
		var tmpValue = document.getElementById("inp_X_Postion").value;	
		writeValueFN(tmpValue, "unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Xpos");		
		ReadValue(id_MaxPos_X, var_MaxPos_X);	
	}
	else if(id == "btn_ReadMinPos_X")
	{
		var tmpValue = document.getElementById("inp_X_Postion").value;	
		writeValueFN(tmpValue, "unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Xneg");	
		ReadValue(id_MinPos_X, var_MinPos_X);	
	}
	else if(id == "btn_ReadMaxPos_Y1")
	{
		var tmpValue = document.getElementById("inp_Y1_Postion").value;	
		writeValueFN(tmpValue, "unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Y1pos");	
		ReadValue(id_MaxPos_Y1, var_MaxPos_Y1);
	}
	else if(id == "btn_ReadMinPos_Y1")
	{
		var tmpValue = document.getElementById("inp_Y1_Postion").value;	
		writeValueFN(tmpValue, "unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Y1neg");	
		ReadValue(id_MinPos_Y1, var_MinPos_Y1);
	}
	else if(id == "btn_ReadMaxPos_Z1")
	{
		var tmpValue = document.getElementById("inp_Z1_Postion").value;	
		writeValueFN(tmpValue, "unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Z1pos");
		ReadValue(id_MaxPos_Z1, var_MaxPos_Z1);
	}
	else if(id == "btn_ReadMinPos_Z1")
	{
		var tmpValue = document.getElementById("inp_Z1_Postion").value;	
		writeValueFN(tmpValue, "unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Z1neg");
		ReadValue(id_MinPos_Z1, var_MinPos_Z1);
	}
    else if(id == "btn_ReadMaxPos_Y2")
    {
        var tmpValue = document.getElementById("inp_Y2_Postion").value; 
        writeValueFN(tmpValue, "unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Y2pos");
        ReadValue(id_MaxPos_Y2, var_MaxPos_Y2);
    }
   else if(id == "btn_ReadMinPos_Y2")
    {
        var tmpValue = document.getElementById("inp_Y2_Postion").value; 
        writeValueFN(tmpValue, "unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Y2neg");   
        ReadValue(id_MinPos_Y2, var_MinPos_Y2);
    }
    else if(id == "btn_ReadMaxPos_Z2")
    {
        var tmpValue = document.getElementById("inp_Z2_Postion").value; 
        writeValueFN(tmpValue, "unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Z2pos");
        ReadValue(id_MaxPos_Z2, var_MaxPos_Z2);
    }
   else if(id == "btn_ReadMinPos_Z2")
    {
        var tmpValue = document.getElementById("inp_Z2_Postion").value; 
        writeValueFN(tmpValue, "unit/dHdGlobal.gsHMIdata.sWorkingZone.r64Z2neg");   
        ReadValue(id_MinPos_Z2, var_MinPos_Z2);
    }
}