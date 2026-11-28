const reporter = require('cucumber-html-reporter');
const fs = require('fs');

const jsonFile = 'test-result/cucumber-report.json';

if (!fs.existsSync(jsonFile)) {
    console.log('Cucumber JSON report not found.');
    process.exitCode = 1;
} else {
    const options = {
        theme: 'bootstrap',
        jsonFile: jsonFile,
        output: 'test-result/custom-cucumber-report.html',
        reportSuiteAsScenarios: true,
        launchReport: false,
        metadata: {
            'Project': 'Playwright Cucumber Automation',
            'Platform': 'Jenkins',
            'Report': 'Custom Cucumber HTML Report'
        }
    };

    reporter.generate(options);

    console.log('Custom Cucumber HTML Report generated successfully!');
}