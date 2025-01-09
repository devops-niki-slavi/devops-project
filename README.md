# Documentation
For this project we have simple SPA application and we've automated the CI and CD process using Github Actions. Below are the steps in our automated CI and CD pipeline, why we need them and what they do.
# Triggers
The processes below will trigger on the following events:
- pushes to the main branch
- pull requests that target the main branch
# Jobs
# 1. Build:
It runs inside a Node.js container.
This job clones the repository, installs dependencies, runs unit tests, and uploads the repository as an artifact.
# 2. Linting:
The Linting job downloads the artifact that it's created in the "Build" job and runs linting using super-linter, which is a linting tool.
# 3. Snyk:
This job installs and runs the Snyk software that checks for vulnerabilities in dependencies. It performs static application security testing (SAST).
# 4. Build-docker-image:
Builds a Docker image for the code and pushes it to DockerHub, from where it can be deployed.
# 5. Trivy:
After the Docker image is pushed to DockerHub, Trivy is used to scan the Docker image for vulnerabilities. (Note: The "exit-code" should be set to 1, so the pipeline will stop if it finds vulnerabilities. In this case we put it on 0, so it can continue, since our code doesn't use the latest versions and it is identified as a vulnerabilities. Still it will detect and notify about that.) 
# 6. DeployToMiniKube:
Deploys the application to a local Minikube cluster. From where it can be used or deployed to the cloud.
