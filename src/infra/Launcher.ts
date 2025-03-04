import { App } from "aws-cdk-lib";
import { DataStack } from "./stacks/DataStack";
import { ApiStack } from "./stacks/ApiStack";
import { LambdaStack } from "./stacks/LambdaStack";

const app = new App();
const dataStack = new DataStack(app, 'DataStack');
const lambdaStackInstance = new LambdaStack(app, 'LambdaStack',{
    spacesTable: dataStack.spacesTable
}); //reference to lambda stack
new ApiStack(app, 'ApiStack', {
    helloLambdaIntegration: lambdaStackInstance.helloLambdaIntegration
})
