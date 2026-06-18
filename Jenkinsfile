pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    credentialsId: 'github-creds',
                    url: 'https://github.com/Ahad9049/RhombixTechnologies_Tasks.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running test suite...'
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Build stage - app has no compile step, just confirming it boots...'
                sh 'node -e "require(\'./index.js\'); console.log(\'App module loads successfully\')"'
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully — build and tests passed.'
        }
        failure {
            echo 'Pipeline failed — check the stage logs above.'
        }
        always {
            echo "Build #${env.BUILD_NUMBER} finished with status: ${currentBuild.currentResult}"
        }
    }
}