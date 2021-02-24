require("dotenv").config();
var CombustFactoryContract = artifacts.require("CombustFactory");


module.exports = function(deployer, network) {

    let operator = process.env.OPERATOR;

    deployer.then(async () => {
        var factoryInstance = await deployer.deploy(CombustFactoryContract, process.env.FEE_SETTER_ADDRESS, {
            from : operator
        });
        console.log("CombustFactory Contract : " + factoryInstance.address);

    });
};
