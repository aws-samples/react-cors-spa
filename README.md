![Continuous Integration](https://github.com/aws-samples/react-cors-spa/actions/workflows/ci.yml/badge.svg)

# Getting Started with the React Cors Application

## Architecture overview
![Architecture of the application once deployed to AWS](/architecture.png?raw=true)

The static assets of this Single Page Application (SPA) are deployed in an Amazon S3 bucket exposed through a dedicated Amazon CloudFront distribution. This distribution is configured (using a Custom Error Page) to redirect all HTTP 403 requests (unauthorized) to the main resource (index.html). This configuration allows the user to be redirected to the main page if he enters an invalid URL. For demo purposes, a Web Application Firewall hasn't been created/associated with this distribution but you should consider adding one for production deployment.

The REST API used by this application is deployed in an Amazon API Gateway (regional REST API) and exposed through a dedicated Amazon CloudFront distribution. For demo purposes, a Web Application Firewall hasn't been created/associated with this distribution but you should consider adding one for production deployment.


## Getting started

In the project directory, run the following command to install all modules:
`npm install`

To start the application locally and access it on your browser (http://localhost:3000), run the following command:
`yarn dev`

## Deploying to AWS

In order to deploy to AWS, you have to take the following steps:
1. Deploy the CloudFormation Template from the project (`react-cors-spa-stack.yaml`) using AWS CLI or AWS Console
2. Once your stack is deployed, from the "Output" tab, identify the "APIDomain" value as well as the S3 "Bucket" name
3. Copy the CloudFront API domain identified at step 2 and insert it on line 13 of the src/pages/index.tsx file
4. Build the app (using `yarn build`) for distribution
5. Upload the content of the `out` folder into the S3 bucket identified at step 2 (Upload also the '_next' subdirectory)
6. Access the application through the CloudFront distribution domain identified on the CloudFormation output value named "SPADomain"

## Available Scripts

In the project directory, you can run:

`yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`yarn build`

Builds the app for production to the `out` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## License

This sample application is licensed under [the MIT-0 License](https://github.com/aws/mit-0).
