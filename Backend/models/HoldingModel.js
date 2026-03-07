const{model}=require('mongoose');
const {HoldingSchemas}=require("../schemas/HoldingSchemas");
const HoldingModel=new model("holding",HoldingSchemas);
module.exports={HoldingModel};