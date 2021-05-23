const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/testsap1',
    {
        branch: 'main',
        repo: 'https://github.com/cch099/testsap1.git',
        user: {
            name: 'cch099',
            email: 'chicheong.ho@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)