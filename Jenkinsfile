
pipeline {
    agent any

    tools {
        nodejs 'NodeJS-26'
    }

    options {
        timestamps()
        timeout(time: 30, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '10'))
    }

    parameters {
        choice(
            name: 'TEST_SUITE',
            choices: [
                'test',
                'test:windows'
            ],
            description: 'Select the test suite to run'
        )

        choice(
            name: 'BROWSER',
            choices: [
                'chromium',
                'firefox',
                'webkit'
            ],
            description: 'Select the browser for tests'
        )

        choice(
            name: 'MODE',
            choices: [
                'headless',
                'headed'
            ],
            description: 'Run tests in headless or headed mode'
        )
    }

    environment {
        NODE_ENV = 'test'
        CI = '1'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                retry(2) {
                    sh 'npm ci'
                }
            }
        }

        stage('Install Playwright Browser') {
            steps {
                retry(2) {
                    sh "npx playwright install ${params.BROWSER}"
                }
            }
        }

        stage('Run Cucumber Tests') {
            steps {
                withEnv([
                    "BROWSER=${params.BROWSER}",
                    "MODE=${params.MODE}"
                ]) {
                    sh "npm run ${params.TEST_SUITE}"
                }
            }
        }
    }

    post {

        always {

            // Archive test reports
            archiveArtifacts(
                artifacts: 'test-result/**, allure-results/**',
                allowEmptyArchive: true
            )

            // Publish JUnit XML results
            junit(
                testResults: 'test-result/junit.xml',
                allowEmptyResults: true
            )

            // Publish Allure report
            allure(
                includeProperties: false,
                results: [[path: 'allure-results']]
            )

            // Publish Cucumber HTML report
            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'test-result',
                reportFiles: 'cucumber-report.html',
                reportName: 'Cucumber HTML Report'
            ])

            // Send email notification
            emailext(
                subject: "Jenkins Build: ${env.JOB_NAME} #${env.BUILD_NUMBER} - ${currentBuild.currentResult}",

                body: """
                    <h2>Playwright Cucumber Test Execution Report</h2>

                    <p><b>Job:</b> ${env.JOB_NAME}</p>

                    <p><b>Build:</b> #${env.BUILD_NUMBER}</p>

                    <p><b>Status:</b> ${currentBuild.currentResult}</p>

                    <p><b>Test Suite:</b> ${params.TEST_SUITE}</p>

                    <p><b>Browser:</b> ${params.BROWSER}</p>

                    <p><b>Mode:</b> ${params.MODE}</p>

                    <p>
                        <a href="${env.BUILD_URL}">
                            Open Jenkins Build
                        </a>
                    </p>
                """,

                to: 'nsivakumar240@gmail.com',

                mimeType: 'text/html'
            )

            // Clean workspace after archiving reports
            cleanWs()
        }
    }
}
