gdjs.GameOverCode = {};
gdjs.GameOverCode.GDkostkaObjects1= [];
gdjs.GameOverCode.GDkostkaObjects2= [];
gdjs.GameOverCode.GDkostka2Objects1= [];
gdjs.GameOverCode.GDkostka2Objects2= [];
gdjs.GameOverCode.GDNewObjectObjects1= [];
gdjs.GameOverCode.GDNewObjectObjects2= [];
gdjs.GameOverCode.GDNewObject2Objects1= [];
gdjs.GameOverCode.GDNewObject2Objects2= [];
gdjs.GameOverCode.GDNewObject3Objects1= [];
gdjs.GameOverCode.GDNewObject3Objects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.GameOverCode.GDNewObject3Objects1});gdjs.GameOverCode.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.GameOverCode.GDNewObject3Objects1.createFrom(runtimeScene.getObjects("NewObject3"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}}

}


{


gdjs.GameOverCode.condition0IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.GameOverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


}; //End of gdjs.GameOverCode.eventsList0xb25a8


gdjs.GameOverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.GameOverCode.GDkostkaObjects1.length = 0;
gdjs.GameOverCode.GDkostkaObjects2.length = 0;
gdjs.GameOverCode.GDkostka2Objects1.length = 0;
gdjs.GameOverCode.GDkostka2Objects2.length = 0;
gdjs.GameOverCode.GDNewObjectObjects1.length = 0;
gdjs.GameOverCode.GDNewObjectObjects2.length = 0;
gdjs.GameOverCode.GDNewObject2Objects1.length = 0;
gdjs.GameOverCode.GDNewObject2Objects2.length = 0;
gdjs.GameOverCode.GDNewObject3Objects1.length = 0;
gdjs.GameOverCode.GDNewObject3Objects2.length = 0;

gdjs.GameOverCode.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['GameOverCode'] = gdjs.GameOverCode;
