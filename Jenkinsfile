pipeline {
    agent any
    stages {
        stage('Jekyll Publish') {
            steps {
               sh '''
                    cd blarg
                    bundle install
                    bundle exec jekyll build
                    find . -type d -not -name _site -exec rm -r {} \\;
                    mv _site/* .
                    rm -rf _site
                  '''
            }
        }

        stage('Push to S3') {
            steps {
                withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'Quirl Site Pusher', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
                    sh '''
                        if [ "$BRANCH_NAME" = "master" ]; then
                            aws s3 sync . s3://quirl.co.nz/ --region ap-southeast-2
                        else
                            aws s3 sync . s3://test.quirl.co.nz/ --region ap-southeast-2
                        fi
                    '''
                }
            }
        }
    }
}
