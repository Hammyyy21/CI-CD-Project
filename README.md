# Threadline — Clothing storefront
A standalone responsive frontend for the AWS CI/CD portfolio project. No backend, checkout, or mailing service is connected. Products and bag are demo data; bag resets on reload. Product and hero photographs use external Unsplash URLs and require internet access.

## Run locally
From the project directory:
```sh
python3 -m http.server 8080 --directory static
```
Open http://localhost:8080.

## Test
```sh
python3 -m unittest discover -s tests -v
```
These are basic static smoke tests, not browser end-to-end tests.

## Planned AWS pipeline
GitHub → CodePipeline → CodeBuild (build) → CodeBuild (test) → CodeDeploy → EC2.
AWS deployment configuration will be added as part of the guided implementation; the starter does not deploy itself.
