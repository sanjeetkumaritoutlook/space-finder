import { Stack, StackProps } from 'aws-cdk-lib'
import { RestApi, LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

//this linked from LambdaStack.ts
interface ApiStackProps extends StackProps {
    helloLambdaIntegration: LambdaIntegration,
}
export class ApiStack extends Stack {


    constructor(scope: Construct, id: string, props: ApiStackProps) {
        super(scope, id, props);

        const api = new RestApi(this, 'SpacesApi');
        const spacesResource = api.root.addResource('spaces'); //add resource
        spacesResource.addMethod('GET', props.helloLambdaIntegration); 

       
    }
}