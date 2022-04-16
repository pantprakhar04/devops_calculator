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
    }
}