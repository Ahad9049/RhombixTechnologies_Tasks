# Task 2: Continuous Integration with Jenkins

**Rhombix Technologies – DevOps Internship**

## Objective
Set up Jenkins on a cloud (AWS EC2) instance, connect it to a GitHub repository, and
build a pipeline that automatically installs dependencies, runs tests, and builds a
simple Node.js application whenever code is pushed to GitHub.

---

## 1. Launch the EC2 Instance
- AMI: Ubuntu 22.04 LTS
- Instance type: t2.micro / t3.micro
- Security group inbound rules:
  - 22 (SSH) — your IP
  - 8080 (Jenkins web UI) — your IP (or 0.0.0.0/0 if you need GitHub webhooks to reach it)
  - 3000 (demo app, optional)

```
# Paste your `aws ec2 describe-instances` output or console screenshot reference here
```

## 2. Install Java and Jenkins

```bash
sudo apt update
sudo apt install -y fontconfig openjdk-17-jre
java -version

curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee \
  /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
  https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
  /etc/apt/sources.list.d/jenkins.list > /dev/null

sudo apt update
sudo apt install -y jenkins
sudo systemctl enable --now jenkins
sudo systemctl status jenkins
```

```
# Paste actual `systemctl status jenkins` output here
```

## 3. Unlock Jenkins and Initial Setup

```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

- Visit `http://<EC2-PUBLIC-IP>:8080`
- Enter the initial admin password
- Install suggested plugins
- Create the first admin user

```
# Paste screenshot reference / confirmation here
```

## 4. Install Node.js on the EC2 Instance (Jenkins runs npm here)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

```
# Paste actual node -v / npm -v output here
```

## 5. Push the Demo App to GitHub

```bash
cd RhombixTechnologies_Tasks
mkdir Task2_Jenkins_CI && cd Task2_Jenkins_CI
# copy index.js, math.js, math.test.js, package.json, Jenkinsfile, README.md here
git add .
git commit -m "Task 2: Add Jenkins CI demo app and pipeline"
git push origin main
```

```
# Paste actual git push output here
```

## 6. Create the Jenkins Pipeline Job
- Jenkins Dashboard → New Item → Pipeline → name it `RhombixTechnologies_Tasks_CI`
- Under **Pipeline**, choose "Pipeline script from SCM"
- SCM: Git
- Repository URL: `https://github.com/<your-username>/RhombixTechnologies_Tasks.git`
- Script Path: `Task2_Jenkins_CI/Jenkinsfile`
- Save

```
# Paste screenshot reference of job configuration here
```

## 7. Configure the GitHub Webhook
- GitHub repo → Settings → Webhooks → Add webhook
- Payload URL: `http://<EC2-PUBLIC-IP>:8080/github-webhook/`
- Content type: `application/json`
- Event: "Just the push event"
- In the Jenkins job config, enable **"GitHub hook trigger for GITScm polling"**

```
# Paste webhook delivery confirmation (green check from GitHub) here
```

## 8. Trigger and Verify the Pipeline
- Push a small change to the repo (e.g., edit README or a comment in index.js)
- Confirm Jenkins automatically starts a new build
- Confirm all four stages (Checkout, Install Dependencies, Run Tests, Build) pass

```
# Paste actual Jenkins console output / stage view screenshot reference here
```

---

## Pipeline Stages Summary
| Stage | Purpose |
|---|---|
| Checkout | Pulls the latest code from GitHub |
| Install Dependencies | Runs `npm install` |
| Run Tests | Runs `npm test` (Jest test suite) |
| Build | Confirms the app module loads correctly |

## What I Learned
- How Jenkins integrates with GitHub via webhooks for automatic CI triggers
- How a `Jenkinsfile` defines pipeline-as-code stages
- How early automated testing in CI catches issues before deployment
- How CI improves collaboration between developers and operations

## Repository
Source code: `RhombixTechnologies_Tasks/Task2_Jenkins_CI`