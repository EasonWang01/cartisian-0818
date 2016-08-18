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




    SubscriptionInstance = subscription(SubscriptionInstance, SubscriptionCycle, SubscriptionData.ItemList);
	ReadValue(id_GetPoint,var_GetPoint);	
	ReadValue(id_SetPoint,var_SetPoint);
    ReadValue(id_GetPoint1,var_GetPoint1);	
    ReadValue(id_SetPoint1,var_SetPoint1);
    ReadValue(id_bufferzone,var_bufferzone);
    ReadValue(id_bufferzone1,var_bufferzone1);


    onChangeWriteValue(id_bufferzone,var_bufferzone);
    onChangeWriteValue(id_bufferzone1,var_bufferzone1);
}

var		id_RealPosition = ["inp_X_Postion",
                           "inp_Y1_Postion",
						   "inp_Z1_Postion"];
						   
var		id_GetPoint = ["inp_GetPoint_Radius","inp_GetPoint_X","inp_GetPoint_Y1","inp_GetPoint_Z1"];
					   
var		var_GetPoint = ["unit/dHdGlobal.gsHMIdata.sPicker1.sDynamicZone.r64PickRadius","unit/dHdGlobal.gsHMIdata.sPicker1.sDynamicZone.r64PickX","unit/dHdGlobal.gsHMIdata.sPicker1.sDynamicZone.r64PickY","unit/dHdGlobal.gsHMIdata.sPicker1.sDynamicZone.r64PickZ"];
						
var     id_GetPoint1 = ["inp_GetPoint_Radius1","inp_GetPoint_X1","inp_GetPoint_Y11","inp_GetPoint_Z11"];
                       
var     var_GetPoint1 = ["unit/dHdGlobal.gsHMIdata.sPicker2.sDynamicZone.r64PickRadius","unit/dHdGlobal.gsHMIdata.sPicker2.sDynamicZone.r64PickX","unit/dHdGlobal.gsHMIdata.sPicker2.sDynamicZone.r64PickY","unit/dHdGlobal.gsHMIdata.sPicker2.sDynamicZone.r64PickZ"];
                        

var     id_SetPoint = ["inp_SetPoint_Radius",
                      "inp_SetPoint_X",
                       "inp_SetPoint_Y1",
                       "inp_SetPoint_Z1"];
var     var_SetPoint = ["unit/dHdGlobal.gsHMIdata.sPicker1.sDynamicZone.r64PlaceRadius",
                        "unit/dHdGlobal.gsHMIdata.sPicker1.sDynamicZone.r64PlaceX",
                        "unit/dHdGlobal.gsHMIdata.sPicker1.sDynamicZone.r64PlaceY",
                        "unit/dHdGlobal.gsHMIdata.sPicker1.sDynamicZone.r64PlaceZ"];
var     id_SetPoint1 = ["inp_SetPoint_Radius1",
                      "inp_SetPoint_X1",
                       "inp_SetPoint_Y11",
                       "inp_SetPoint_Z11"];
var     var_SetPoint1 = ["unit/dHdGlobal.gsHMIdata.sPicker2.sDynamicZone.r64PlaceRadius",
                        "unit/dHdGlobal.gsHMIdata.sPicker2.sDynamicZone.r64PlaceX",
                        "unit/dHdGlobal.gsHMIdata.sPicker2.sDynamicZone.r64PlaceY",
                        "unit/dHdGlobal.gsHMIdata.sPicker2.sDynamicZone.r64PlaceZ"];
   
var id_bufferzone = ['inp_Crumple_Velo','inp_Crumple_Accel','inp_Crumple_Decel','inp_Crumple_Jerk']
var var_bufferzone =['unit/dHdGlobal.gsHMIdata.sPicker1.sDynamicZone.r64Velo','unit/dHdGlobal.gsHMIdata.sPicker1.sDynamicZone.r64Accel','unit/dHdGlobal.gsHMIdata.sPicker1.sDynamicZone.r64Decel','unit/dHdGlobal.gsHMIdata.sPicker1.sDynamicZone.r64Jerk']
		
var id_bufferzone1 = ['inp_Crumple_Velo1','inp_Crumple_Accel1','inp_Crumple_Decel1','inp_Crumple_Jerk1']
var var_bufferzone1 =['unit/dHdGlobal.gsHMIdata.sPicker2.sDynamicZone.r64Velo','unit/dHdGlobal.gsHMIdata.sPicker2.sDynamicZone.r64Accel','unit/dHdGlobal.gsHMIdata.sPicker2.sDynamicZone.r64Decel','unit/dHdGlobal.gsHMIdata.sPicker2.sDynamicZone.r64Jerk']


var radiusssId=["inp_GetPoint_Radius","inp_GetPoint_Radius1","inp_SetPoint_Radius","inp_SetPoint_Radius1"]
var radiusssVar=["unit/dHdGlobal.gsHMIdata.sPicker1.sDynamicZone.r64PickRadius","unit/dHdGlobal.gsHMIdata.sPicker2.sDynamicZone.r64PickRadius","unit/dHdGlobal.gsHMIdata.sPicker1.sDynamicZone.r64PlaceRadius","unit/dHdGlobal.gsHMIdata.sPicker2.sDynamicZone.r64PlaceRadius"]


function	Read(id)
{
	if(id == "btn_GetPoint")
	{
		for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			//console.log(tmpValue);
			writeValueFN(tmpValue,var_GetPoint[i]);
		}
		ReadValue(id_GetPoint,var_GetPoint);	
	}
	else if(id == "btn_SetPoint")
	{
		for(var i = 0; i < id_RealPosition.length; i++)
		{
			var tmpValue = document.getElementById(id_RealPosition[i]).value;
			//console.log(tmpValue);
			writeValueFN(tmpValue,var_SetPoint[i]);
		}
		ReadValue(id_SetPoint,var_SetPoint);	
	}
    else if(id == "btn_GetPoint1")
    {
        for(var i = 0; i < id_RealPosition.length; i++)
        {
            var tmpValue = document.getElementById(id_RealPosition[i]).value;
            //console.log(tmpValue);
            writeValueFN(tmpValue,var_GetPoint1[i]);
        }
        ReadValue(id_GetPoint1,var_GetPoint1);    
    }
    else if(id == "btn_SetPoint1")
    {
        for(var i = 0; i < id_RealPosition.length; i++)
        {
            var tmpValue = document.getElementById(id_RealPosition[i]).value;
            //console.log(tmpValue);
            writeValueFN(tmpValue,var_SetPoint1[i]);
        }
        ReadValue(id_SetPoint1,var_SetPoint1);    
    }
}

$(document).ready(function(){
    onChangeWriteValue(radiusssId,radiusssVar);
});