import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";

export class PiroroStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // new lambda.Function(this, "SimpleLambda", {
    //   code: lambda.Code.fromAsset("../src"),
    //   functionName: "PasContent",
    //   handler: "index.handler",
    //   runtime: lambda.Runtime.NODEJS_14_X,
    // });

    new lambda.Function(this, "SimpleLambda", {
      code: lambda.Code.fromInline(
        'exports.handler = async function() { return "Hello, CDK!"; };'
      ),
      functionName: "simpleLambda",
      handler: "index.handler",
      runtime: lambda.Runtime.NODEJS_14_X,
    });
  }
}
