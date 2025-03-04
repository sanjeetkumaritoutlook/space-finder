import { App } from "aws-cdk-lib";
import { DataStack } from "./stacks/DataStack";
import { ApiStack } from "./stacks/ApiStack";
import { LambdaStack } from "./stacks/LambdaStack";

const app = new App();
new DataStack(app, 'DataStack');
const lambdaStackInstance = new LambdaStack(app, 'LambdaStack'); //reference to lambda stack
new ApiStack(app, 'ApiStack', {
    helloLambdaIntegration: lambdaStackInstance.helloLambdaIntegration
})
