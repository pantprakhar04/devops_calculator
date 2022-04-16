pipeline {
    agent { docker { image 'node:16.14.2' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('Build') {
            steps {
                sh "npm install"
            }
        }
        stage('Test'){
            steps {
                sh "npm test"
            }
        }
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}