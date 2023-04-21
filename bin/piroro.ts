#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { PiroroStack } from "../lib/piroro-stack";

const app = new cdk.App();
new PiroroStack(app, "PiroroStack", {});
