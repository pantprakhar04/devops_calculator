pipeline {
    agent any
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
                sh "chmod +x -R ${env.WORKSPACE}"
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
        stage('Ansible') {
            steps{
                ansiblePlaybook(
                    credentialsId: "container_access_key",
                    inventory: "Inventory",
                    installation: "ansible",
                    limit: "",
                    playbook: "playbook.yaml",
                    extras: ""
                )
            }
        }
    }
}
