pipeline {
  agent any

  environment {
    DOCKER_IMAGE = "adrian21071988/aromauto:latest"
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/sadrian88/AromAuto.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          dockerImage = docker.build("${DOCKER_IMAGE}")
        }
      }
    }

    stage('Push to DockerHub') {
      steps {
        withDockerRegistry(credentialsId: 'adrian-dockerhub', url: '') {
          script {
            dockerImage.push()
          }
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh 'kubectl rollout restart deployment nginx-deployment'
      }
    }
  }
}

