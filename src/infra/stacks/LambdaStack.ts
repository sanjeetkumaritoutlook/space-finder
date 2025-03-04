import {  Stack, StackProps } from 'aws-cdk-lib'
import { LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
import { Runtime, Code,Function as LambdaFunction} from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { join } from 'path';


export class LambdaStack extends Stack {

    public readonly helloLambdaIntegration: LambdaIntegration;
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props)


       const helloLambda = new LambdaFunction(this, 'HelloLambda', {
            runtime: Runtime.NODEJS_18_X,
            handler: 'hello.main',
            code: Code.fromAsset(join(__dirname, '..', '..','services')),
        });

        this.helloLambdaIntegration = new LambdaIntegration(helloLambda);

    }
}