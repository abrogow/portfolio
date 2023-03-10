#!/usr/cdk/env node
import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import * as s3Deployment from '@aws-cdk/aws-s3-deployment';

export class PortfolioStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myBucket = new s3.Bucket(this, "portfolio-website-bucket", {
      publicReadAccess: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,        
      websiteIndexDocument: "index.html"
   });

   const deployment = new s3Deployment.BucketDeployment(this, "deployPortfolioWebsite", {
    sources: [s3Deployment.Source.asset("./src")],
    destinationBucket: myBucket
 });
  }
}
