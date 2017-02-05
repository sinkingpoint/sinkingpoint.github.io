pipeline {
    agent any
    stages {
        stage('Push to S3') {
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'Quirl Site Pusher', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                    sh '''
                        aws s3 sync . s3://quirl.co.nz/ --region ap-southeast-2
                    '''
                }
            }
        }
    }
}
