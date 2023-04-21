import { App } from "aws-cdk-lib";
import { IntegTest } from "@aws-cdk/integ-tests-alpha";
import { PiroroStack } from "../lib/piroro-stack";
import { testPiroroStack } from "./testsWithAssertions";

const app = new App();
const stack = new PiroroStack(app, "PiroroStackIntegTest");
const integ = new IntegTest(app, "IntegTest", { testCases: [stack] });

testPiroroStack({ integ });
app.synth();
