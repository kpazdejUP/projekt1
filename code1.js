gdjs.GraCode = {};
gdjs.GraCode.GDkostkaObjects1= [];
gdjs.GraCode.GDkostkaObjects2= [];
gdjs.GraCode.GDkostkaObjects3= [];
gdjs.GraCode.GDkostka2Objects1= [];
gdjs.GraCode.GDkostka2Objects2= [];
gdjs.GraCode.GDkostka2Objects3= [];
gdjs.GraCode.GDPlayerObjects1= [];
gdjs.GraCode.GDPlayerObjects2= [];
gdjs.GraCode.GDPlayerObjects3= [];
gdjs.GraCode.GDpunktyObjects1= [];
gdjs.GraCode.GDpunktyObjects2= [];
gdjs.GraCode.GDpunktyObjects3= [];

gdjs.GraCode.conditionTrue_0 = {val:false};
gdjs.GraCode.condition0IsTrue_0 = {val:false};
gdjs.GraCode.condition1IsTrue_0 = {val:false};
gdjs.GraCode.condition2IsTrue_0 = {val:false};


gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostkaObjects1Objects = Hashtable.newFrom({"kostka": gdjs.GraCode.GDkostkaObjects1});gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GraCode.GDPlayerObjects1});gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostkaObjects1Objects = Hashtable.newFrom({"kostka": gdjs.GraCode.GDkostkaObjects1});gdjs.GraCode.eventsList0x67fd50 = function(runtimeScene) {

{

gdjs.GraCode.GDPlayerObjects2.createFrom(gdjs.GraCode.GDPlayerObjects1);

gdjs.GraCode.GDkostkaObjects2.createFrom(gdjs.GraCode.GDkostkaObjects1);


gdjs.GraCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GraCode.GDPlayerObjects2[i].getX() == (( gdjs.GraCode.GDkostkaObjects2.length === 0 ) ? 0 :gdjs.GraCode.GDkostkaObjects2[0].getX()) + 100 ) {
        gdjs.GraCode.condition0IsTrue_0.val = true;
        gdjs.GraCode.GDPlayerObjects2[k] = gdjs.GraCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GraCode.GDPlayerObjects2.length = k;}if (gdjs.GraCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GraCode.GDkostkaObjects2 */
{for(var i = 0, len = gdjs.GraCode.GDkostkaObjects2.length ;i < len;++i) {
    gdjs.GraCode.GDkostkaObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.GraCode.GDPlayerObjects2.createFrom(gdjs.GraCode.GDPlayerObjects1);

gdjs.GraCode.GDkostkaObjects2.createFrom(gdjs.GraCode.GDkostkaObjects1);


gdjs.GraCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDkostkaObjects2.length;i<l;++i) {
    if ( gdjs.GraCode.GDkostkaObjects2[i].getX() == (( gdjs.GraCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GraCode.GDPlayerObjects2[0].getX()) + 100 ) {
        gdjs.GraCode.condition0IsTrue_0.val = true;
        gdjs.GraCode.GDkostkaObjects2[k] = gdjs.GraCode.GDkostkaObjects2[i];
        ++k;
    }
}
gdjs.GraCode.GDkostkaObjects2.length = k;}if (gdjs.GraCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GraCode.GDkostkaObjects2 */
{for(var i = 0, len = gdjs.GraCode.GDkostkaObjects2.length ;i < len;++i) {
    gdjs.GraCode.GDkostkaObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{

/* Reuse gdjs.GraCode.GDPlayerObjects1 */
/* Reuse gdjs.GraCode.GDkostkaObjects1 */

gdjs.GraCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GraCode.GDPlayerObjects1[i].getY() == (( gdjs.GraCode.GDkostkaObjects1.length === 0 ) ? 0 :gdjs.GraCode.GDkostkaObjects1[0].getY()) + 100 ) {
        gdjs.GraCode.condition0IsTrue_0.val = true;
        gdjs.GraCode.GDPlayerObjects1[k] = gdjs.GraCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GraCode.GDPlayerObjects1.length = k;}if (gdjs.GraCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


}; //End of gdjs.GraCode.eventsList0x67fd50
gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostka2Objects1Objects = Hashtable.newFrom({"kostka2": gdjs.GraCode.GDkostka2Objects1});gdjs.GraCode.eventsList0x65cdb0 = function(runtimeScene) {

{


gdjs.GraCode.condition0IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "tworzenie2");
}if (gdjs.GraCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GraCode.GDkostka2Objects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostka2Objects1Objects, gdjs.random(420), 800, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tworzenie2");
}}

}


}; //End of gdjs.GraCode.eventsList0x65cdb0
gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GraCode.GDPlayerObjects1});gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostka2Objects1Objects = Hashtable.newFrom({"kostka2": gdjs.GraCode.GDkostka2Objects1});gdjs.GraCode.eventsList0x65dd88 = function(runtimeScene) {

{

gdjs.GraCode.GDPlayerObjects2.createFrom(gdjs.GraCode.GDPlayerObjects1);

gdjs.GraCode.GDkostka2Objects2.createFrom(gdjs.GraCode.GDkostka2Objects1);


gdjs.GraCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GraCode.GDPlayerObjects2[i].getX() == (( gdjs.GraCode.GDkostka2Objects2.length === 0 ) ? 0 :gdjs.GraCode.GDkostka2Objects2[0].getX()) + 100 ) {
        gdjs.GraCode.condition0IsTrue_0.val = true;
        gdjs.GraCode.GDPlayerObjects2[k] = gdjs.GraCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GraCode.GDPlayerObjects2.length = k;}if (gdjs.GraCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GraCode.GDkostka2Objects2 */
{for(var i = 0, len = gdjs.GraCode.GDkostka2Objects2.length ;i < len;++i) {
    gdjs.GraCode.GDkostka2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.GraCode.GDPlayerObjects2.createFrom(gdjs.GraCode.GDPlayerObjects1);

gdjs.GraCode.GDkostka2Objects2.createFrom(gdjs.GraCode.GDkostka2Objects1);


gdjs.GraCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDkostka2Objects2.length;i<l;++i) {
    if ( gdjs.GraCode.GDkostka2Objects2[i].getX() == (( gdjs.GraCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GraCode.GDPlayerObjects2[0].getX()) + 100 ) {
        gdjs.GraCode.condition0IsTrue_0.val = true;
        gdjs.GraCode.GDkostka2Objects2[k] = gdjs.GraCode.GDkostka2Objects2[i];
        ++k;
    }
}
gdjs.GraCode.GDkostka2Objects2.length = k;}if (gdjs.GraCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GraCode.GDkostka2Objects2 */
{for(var i = 0, len = gdjs.GraCode.GDkostka2Objects2.length ;i < len;++i) {
    gdjs.GraCode.GDkostka2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


{

/* Reuse gdjs.GraCode.GDPlayerObjects1 */
/* Reuse gdjs.GraCode.GDkostka2Objects1 */

gdjs.GraCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GraCode.GDPlayerObjects1[i].getY() == (( gdjs.GraCode.GDkostka2Objects1.length === 0 ) ? 0 :gdjs.GraCode.GDkostka2Objects1[0].getY()) - 100 ) {
        gdjs.GraCode.condition0IsTrue_0.val = true;
        gdjs.GraCode.GDPlayerObjects1[k] = gdjs.GraCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GraCode.GDPlayerObjects1.length = k;}if (gdjs.GraCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


}; //End of gdjs.GraCode.eventsList0x65dd88
gdjs.GraCode.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.GraCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GraCode.condition0IsTrue_0.val = false;
gdjs.GraCode.condition1IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.GraCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GraCode.GDPlayerObjects1[i].getX() >= 0 ) {
        gdjs.GraCode.condition1IsTrue_0.val = true;
        gdjs.GraCode.GDPlayerObjects1[k] = gdjs.GraCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GraCode.GDPlayerObjects1.length = k;}}
if (gdjs.GraCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GraCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GraCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GraCode.GDPlayerObjects1[i].addPolarForce(180, 500, 0);
}
}}

}


{

gdjs.GraCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.GraCode.condition0IsTrue_0.val = false;
gdjs.GraCode.condition1IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.GraCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GraCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GraCode.GDPlayerObjects1[i].getX() <= 420 ) {
        gdjs.GraCode.condition1IsTrue_0.val = true;
        gdjs.GraCode.GDPlayerObjects1[k] = gdjs.GraCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GraCode.GDPlayerObjects1.length = k;}}
if (gdjs.GraCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GraCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GraCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GraCode.GDPlayerObjects1[i].addPolarForce(0, 500, 0);
}
}}

}


{


gdjs.GraCode.condition0IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GraCode.condition0IsTrue_0.val) {
gdjs.GraCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.GraCode.GDkostkaObjects1.createFrom(runtimeScene.getObjects("kostka"));
gdjs.GraCode.GDkostka2Objects1.createFrom(runtimeScene.getObjects("kostka2"));
{for(var i = 0, len = gdjs.GraCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GraCode.GDPlayerObjects1[i].setPosition(200,350);
}
}{for(var i = 0, len = gdjs.GraCode.GDkostkaObjects1.length ;i < len;++i) {
    gdjs.GraCode.GDkostkaObjects1[i].setPosition(gdjs.random(420),0);
}
}{for(var i = 0, len = gdjs.GraCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.GraCode.GDkostka2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.GraCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.GraCode.GDkostka2Objects1[i].setPosition(gdjs.random(420),800);
}
}}

}


{


{
gdjs.GraCode.GDkostkaObjects1.createFrom(runtimeScene.getObjects("kostka"));
{for(var i = 0, len = gdjs.GraCode.GDkostkaObjects1.length ;i < len;++i) {
    gdjs.GraCode.GDkostkaObjects1[i].addPolarForce(90, 200, 0);
}
}}

}


{


gdjs.GraCode.condition0IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "tworzenie");
}if (gdjs.GraCode.condition0IsTrue_0.val) {
gdjs.GraCode.GDkostkaObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostkaObjects1Objects, gdjs.random(420), 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tworzenie");
}}

}


{

gdjs.GraCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.GraCode.GDkostkaObjects1.createFrom(runtimeScene.getObjects("kostka"));

gdjs.GraCode.condition0IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDPlayerObjects1Objects, gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostkaObjects1Objects, false, runtimeScene, false);
}if (gdjs.GraCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GraCode.eventsList0x67fd50(runtimeScene);} //End of subevents
}

}


{


{
gdjs.GraCode.GDpunktyObjects1.createFrom(runtimeScene.getObjects("punkty"));
{for(var i = 0, len = gdjs.GraCode.GDpunktyObjects1.length ;i < len;++i) {
    gdjs.GraCode.GDpunktyObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


{


gdjs.GraCode.condition0IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 5;
}if (gdjs.GraCode.condition0IsTrue_0.val) {
gdjs.GraCode.GDkostka2Objects1.createFrom(runtimeScene.getObjects("kostka2"));
{for(var i = 0, len = gdjs.GraCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.GraCode.GDkostka2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GraCode.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.GraCode.GDkostka2Objects1[i].addPolarForce(270, 200, 0);
}
}
{ //Subevents
gdjs.GraCode.eventsList0x65cdb0(runtimeScene);} //End of subevents
}

}


{

gdjs.GraCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.GraCode.GDkostka2Objects1.createFrom(runtimeScene.getObjects("kostka2"));

gdjs.GraCode.condition0IsTrue_0.val = false;
{
gdjs.GraCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDPlayerObjects1Objects, gdjs.GraCode.mapOfGDgdjs_46GraCode_46GDkostka2Objects1Objects, false, runtimeScene, false);
}if (gdjs.GraCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GraCode.eventsList0x65dd88(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.GraCode.eventsList0xb25a8


gdjs.GraCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.GraCode.GDkostkaObjects1.length = 0;
gdjs.GraCode.GDkostkaObjects2.length = 0;
gdjs.GraCode.GDkostkaObjects3.length = 0;
gdjs.GraCode.GDkostka2Objects1.length = 0;
gdjs.GraCode.GDkostka2Objects2.length = 0;
gdjs.GraCode.GDkostka2Objects3.length = 0;
gdjs.GraCode.GDPlayerObjects1.length = 0;
gdjs.GraCode.GDPlayerObjects2.length = 0;
gdjs.GraCode.GDPlayerObjects3.length = 0;
gdjs.GraCode.GDpunktyObjects1.length = 0;
gdjs.GraCode.GDpunktyObjects2.length = 0;
gdjs.GraCode.GDpunktyObjects3.length = 0;

gdjs.GraCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['GraCode'] = gdjs.GraCode;
