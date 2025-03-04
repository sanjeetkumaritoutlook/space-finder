import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs';
import { AttributeType, ITable, Table } from 'aws-cdk-lib/aws-dynamodb';
import { getSuffixFromStack } from '../Utils';


export class DataStack extends Stack {
    public readonly spacesTable: ITable

 
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const suffix = getSuffixFromStack(this);
      //exporting the table, as it will be used by Lambda, read by lambda   
        this.spacesTable = new Table(this, 'SpacesTable', {
            partitionKey : {
                name: 'id',
                type: AttributeType.STRING
            },
            tableName: `SpaceTable-${suffix}`  //dynamic table name
        })
       
    }
}