pipeline {
    agent { docker { image 'python:3.9.13-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'python --version'
                sh 'python -c "import datetime;print(datetime.datetime.now())"'
            }
        }
    }
}
