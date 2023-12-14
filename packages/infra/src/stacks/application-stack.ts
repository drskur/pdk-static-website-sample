import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { StaticWebsite } from "@aws/pdk/static-website";
import { NagSuppressions } from "cdk-nag";

export class ApplicationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const website = new StaticWebsite(this, "StaticWebsite", {
      websiteContentPath: "../webapp/out",
      runtimeOptions: {
        jsonPayload: {
          apiUrl: "your api server url",
        },
      },
    });

    NagSuppressions.addResourceSuppressions(
      website,
      [
        {
          id: "AwsPrototyping-CloudFrontDistributionGeoRestrictions",
          reason: "This is a sample application, restriction is not needed",
        },
      ],
      true,
    );
  }
}
