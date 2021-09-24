export default [
    {
      name: 'Sentry',
      identifier: 'sentry',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://sentry.io/welcome/',
        statusPageUrl: 'https://status.sentry.io/',
        twitterUrl: 'https://twitter.com/getsentry',
        logoPath: '/images/sites/sentry.png',
        publicApi: {
          status: 'https://status.sentry.io/api/v2/status.json',
          summary: 'https://status.sentry.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Datadog',
      identifier: 'datadog',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.datadoghq.com/',
        statusPageUrl: 'https://status.datadoghq.com/',
        twitterUrl: 'https://twitter.com/datadoghq',
        logoPath: '/images/sites/datadog.jpg',
        publicApi: {
          status: 'https://status.datadoghq.com//api/v2/status.json',
          summary: 'https://status.datadoghq.com//api/v2/summary.json'
        }
      }
    },
    {
      name: 'Heap',
      identifier: 'heap',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://heap.io/',
        statusPageUrl: 'https://status.heap.io/',
        twitterUrl: 'https://twitter.com/heap',
        logoPath: '/images/sites/heap.png',
        publicApi: {
          status: 'https://status.heap.io/api/v2/status.json',
          summary: 'https://status.heap.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Github',
      identifier: 'github',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://github.com/',
        statusPageUrl: 'https://www.githubstatus.com/',
        twitterUrl: 'https://twitter.com/github',
        logoPath: '/images/sites/github.png',
        publicApi: {
          status: 'https://www.githubstatus.com/api/v2/status.json',
          summary: 'https://www.githubstatus.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Greenhouse',
      identifier: 'greenhouse',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.greenhouse.io/',
        statusPageUrl: 'https://status.greenhouse.io/',
        twitterUrl: 'https://twitter.com/Greenhouse',
        logoPath: '/images/sites/greenhouse.jpeg',
        publicApi: {
          status: 'https://status.greenhouse.io/api/v2/status.json',
          summary: 'https://status.greenhouse.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'SendGrid',
      identifier: 'sendgrid',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://sendgrid.com/',
        statusPageUrl: 'https://status.sendgrid.com/',
        twitterUrl: 'https://twitter.com/sendgrid?lang=en',
        logoPath: '/images/sites/sendgrid.png',
        publicApi: {
          status: 'https://status.sendgrid.com/api/v2/status.json',
          summary: 'https://status.sendgrid.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Webflow',
      identifier: 'webflow',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://webflow.com/',
        statusPageUrl: 'https://status.webflow.com/',
        twitterUrl: 'https://twitter.com/webflow',
        logoPath: '/images/sites/webflow.png',
        publicApi: {
          status: 'https://status.webflow.com/api/v2/status.json',
          summary: 'https://status.webflow.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Zapier',
      identifier: 'zapier',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://zapier.com/',
        statusPageUrl: 'https://status.zapier.com/',
        twitterUrl: 'https://twitter.com/zapier',
        logoPath: '/images/sites/zapier.png',
        publicApi: {
          status: 'https://status.zapier.com/api/v2/status.json',
          summary: 'https://status.zapier.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Go Cardless',
      identifier: 'gocardless',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://gocardless.com/',
        statusPageUrl: 'https://www.gocardless-status.com/',
        twitterUrl: 'https://twitter.com/gocardless',
        logoPath: '/images/sites/gocardless.png',
        publicApi: {
          status: 'https://www.gocardless-status.com/api/v2/status.json',
          summary: 'https://www.gocardless-status.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Trustpilot',
      identifier: 'trustpilot',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.trustpilot.com/',
        statusPageUrl: 'https://status.trustpilot.com/',
        twitterUrl: 'https://twitter.com/TrustieSupport',
        logoPath: '/images/sites/trustpilot.png',
        publicApi: {
          status: 'https://status.trustpilot.com/api/v2/status.json',
          summary: 'https://status.trustpilot.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Browserstack',
      identifier: 'browserstack',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.browserstack.com/',
        statusPageUrl: 'https://status.browserstack.com/',
        twitterUrl: 'https://twitter.com/browserstack',
        logoPath: '/images/sites/browserstack.png',
        publicApi: {
          status: 'https://status.browserstack.com/api/v2/status.json',
          summary: 'https://status.browserstack.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Loggly',
      identifier: 'loggly',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.loggly.com/',
        statusPageUrl: 'https://status.loggly.com/',
        twitterUrl: 'https://twitter.com/loggly',
        logoPath: '/images/sites/loggly.png',
        publicApi: {
          status: 'https://status.loggly.com/api/v2/status.json',
          summary: 'https://status.loggly.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Jira',
      identifier: 'jira',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.atlassian.com/software/jira',
        statusPageUrl: 'https://jira-software.status.atlassian.com/',
        twitterUrl: 'https://twitter.com/Jira',
        logoPath: '/images/sites/jira.png',
        publicApi: {
          status: 'https://jira-software.status.atlassian.com/api/v2/status.json',
          summary:
            'https://jira-software.status.atlassian.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'LastPass',
      identifier: 'lastpass',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.lastpass.com/solutions/business-password-manager',
        statusPageUrl: 'https://status.lastpass.com/',
        twitterUrl: 'https://twitter.com/lastpassstatus',
        logoPath: '/images/sites/lastpass.png',
        publicApi: {
          status: 'https://status.lastpass.com/api/v2/status.json',
          summary: 'https://status.lastpass.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Render',
      identifier: 'render',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://render.com/',
        statusPageUrl: 'https://status.render.com/',
        twitterUrl: 'https://twitter.com/renderstatus',
        logoPath: '/images/sites/render.png',
        publicApi: {
          status: 'https://status.render.com/api/v2/status.json',
          summary: 'https://status.render.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'DigitalOcean',
      identifier: 'digitalocean',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.digitalocean.com/',
        statusPageUrl: 'https://status.digitalocean.com/',
        twitterUrl: 'https://twitter.com/DOstatus',
        logoPath: '/images/sites/digitalocean.png',
        publicApi: {
          status: 'https://status.digitalocean.com/api/v2/status.json',
          summary: 'https://status.digitalocean.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Reddit',
      identifier: 'reddit',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.reddit.com/',
        statusPageUrl: 'https://www.redditstatus.com/',
        twitterUrl: 'https://twitter.com/redditstatus',
        logoPath: '/images/sites/reddit.png',
        publicApi: {
          status: 'https://www.redditstatus.com/api/v2/status.json',
          summary: 'https://www.redditstatus.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Bubble',
      identifier: 'bubble',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://bubble.io/',
        statusPageUrl: 'https://status.bubble.io/',
        twitterUrl: 'https://twitter.com/bubble',
        logoPath: '/images/sites/bubble.png',
        publicApi: {
          status: 'https://status.bubble.io/api/v2/status.json',
          summary: 'shttps://status.bubble.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Retool',
      identifier: 'retool',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://retool.com/',
        statusPageUrl: 'https://status.retool.com/',
        twitterUrl: 'https://twitter.com/retool',
        logoPath: '/images/sites/retool.png',
        publicApi: {
          status: 'https://status.retool.com/api/v2/status.json',
          summary: 'https://status.retool.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Weebly',
      identifier: 'weebly',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.weebly.com/',
        statusPageUrl: 'https://weebly.statuspage.io/',
        twitterUrl: 'https://twitter.com/weebly',
        logoPath: '/images/sites/weebly.png',
        publicApi: {
          status: 'https://weebly.statuspage.io/api/v2/status.json',
          summary: 'https://weebly.statuspage.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Airbrake',
      identifier: 'airbrake',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://airbrake.io/',
        statusPageUrl: 'https://status.airbrake.io/',
        twitterUrl: 'https://twitter.com/airbrake',
        logoPath: '/images/sites/airbrake.png',
        publicApi: {
          status: 'https://status.airbrake.io/api/v2/status.json',
          summary: 'https://status.airbrake.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Codeship',
      identifier: 'codeship',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://codeship.com/',
        statusPageUrl: 'https://codeship.statuspage.io/',
        twitterUrl: 'https://twitter.com/codeship',
        logoPath: '/images/sites/codeship.png',
        publicApi: {
          status: 'https://codeship.statuspage.io/api/v2/status.json',
          summary: 'https://codeship.statuspage.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'CircleCI',
      identifier: 'circleci',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://circleci.com/',
        statusPageUrl: 'https://circleci.statuspage.io/',
        twitterUrl: 'https://twitter.com/circlecistatus',
        logoPath: '/images/sites/circleci.png',
        publicApi: {
          status: 'https://circleci.statuspage.io/api/v2/status.json',
          summary: 'https://circleci.statuspage.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Bitbucket',
      identifier: 'bitbucket',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://bitbucket.org/',
        statusPageUrl: 'https://bitbucket.status.atlassian.com/',
        twitterUrl: 'https://twitter.com/bitbucketstatus',
        logoPath: '/images/sites/bitbucket.png',
        publicApi: {
          status: 'https://bitbucket.status.atlassian.com/api/v2/status.json',
          summary: 'https://bitbucket.status.atlassian.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Grammarly',
      identifier: 'grammarly',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.grammarly.com/',
        statusPageUrl: 'https://status.grammarly.com/',
        twitterUrl: 'https://twitter.com/Grammarly',
        logoPath: '/images/sites/grammerly.png',
        publicApi: {
          status: 'https://status.grammarly.com/api/v2/status.json',
          summary: 'https://status.grammarly.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Calendly',
      identifier: 'calendly',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://calendly.com/',
        statusPageUrl: 'https://www.calendlystatus.com/',
        twitterUrl: 'https://twitter.com/calendly',
        logoPath: '/images/sites/calendly.png',
        publicApi: {
          status: 'https://www.calendlystatus.com/api/v2/status.json',
          summary: 'https://www.calendlystatus.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Typeform',
      identifier: 'typeform',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.typeform.com/',
        statusPageUrl: 'https://status.typeform.com/',
        twitterUrl: 'https://twitter.com/typeform',
        logoPath: '/images/sites/typeform.png',
        publicApi: {
          status: 'https://status.typeform.com/api/v2/status.json',
          summary: 'https://status.typeform.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Cloudflare',
      identifier: 'cloudflare',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.cloudflare.com/',
        statusPageUrl: 'https://www.cloudflarestatus.com/',
        twitterUrl: 'https://twitter.com/cloudflaresys',
        logoPath: '/images/sites/cloudflare.png',
        publicApi: {
          status: 'https://www.cloudflarestatus.com/api/v2/status.json',
          summary: 'https://www.cloudflarestatus.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Confluence',
      identifier: 'confluence',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.atlassian.com/software/confluence',
        statusPageUrl: 'https://confluence.status.atlassian.com/',
        twitterUrl: 'https://twitter.com/confluence',
        logoPath: '/images/sites/confluence.png',
        publicApi: {
          status: 'https://confluence.status.atlassian.com/api/v2/status.json',
          summary: 'https://confluence.status.atlassian.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Mailgun',
      identifier: 'mailgun',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.mailgun.com/',
        statusPageUrl: 'https://status.mailgun.com/',
        twitterUrl: 'https://twitter.com/mail_gun',
        logoPath: '/images/sites/mailgun.png',
        publicApi: {
          status: 'https://status.mailgun.com/api/v2/status.json',
          summary: 'https://status.mailgun.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Hashicorp',
      identifier: 'hashicorp',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.hashicorp.com/',
        statusPageUrl: 'https://status.hashicorp.com/',
        twitterUrl: 'https://twitter.com/hashicorp',
        logoPath: '/images/sites/hashicorp.png',
        publicApi: {
          status: 'https://status.hashicorp.com/api/v2/status.json',
          summary: 'https://status.hashicorp.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'IFTTT',
      identifier: 'ifttt',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://ifttt.com/',
        statusPageUrl: 'https://status.ifttt.com/',
        twitterUrl: 'https://twitter.com/IFTTT',
        logoPath: '/images/sites/ifttt.png',
        publicApi: {
          status: 'https://status.ifttt.com/api/v2/status.json',
          summary: 'https://status.ifttt.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'IonicFramework',
      identifier: 'ionicframework',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://ionicframework.com/',
        statusPageUrl: 'https://status.ionicframework.com/',
        twitterUrl: 'https://twitter.com/Ionicframework',
        logoPath: '/images/sites/ionicframework.png',
        publicApi: {
          status: 'https://status.ionicframework.com/api/v2/status.json',
          summary: 'https://status.ionicframework.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'LucidChart',
      identifier: 'lucidchart',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.lucidchart.com/',
        statusPageUrl: 'https://lucidsoftware.statuspage.io/',
        twitterUrl: 'https://twitter.com/lucidchart',
        logoPath: '/images/sites/lucidchart.png',
        publicApi: {
          status: 'https://lucidsoftware.statuspage.io/api/v2/status.json',
          summary: 'https://lucidsoftware.statuspage.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'MailerLite',
      identifier: 'mailerlite',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.mailerlite.com/',
        statusPageUrl: 'https://status.mailerlite.com/',
        twitterUrl: 'https://twitter.com/mailerlite',
        logoPath: '/images/sites/mailerlite.png',
        publicApi: {
          status: 'https://status.mailerlite.com/api/v2/status.json',
          summary: 'https://status.mailerlite.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Tableu',
      identifier: 'tableu',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.tableau.com/',
        statusPageUrl: 'https://trust.tableau.com/',
        twitterUrl: 'https://twitter.com/tableau',
        logoPath: '/images/sites/tableau.png',
        publicApi: {
          status: 'https://trust.tableau.com/api/v2/status.json',
          summary: 'https://trust.tableau.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Trello',
      identifier: 'trello',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://trello.com/',
        statusPageUrl: 'https://trello.status.atlassian.com/',
        twitterUrl: 'https://twitter.com/trellosupport',
        logoPath: '/images/sites/trello.png',
        publicApi: {
          status: 'https://trello.status.atlassian.com/api/v2/status.json',
          summary: 'https://trello.status.atlassian.com/api/v2/summary.json'
        }
      }
    },
    {
      name: '1Password',
      identifier: '1password',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://1password.com/',
        statusPageUrl: 'https://1password.statuspage.io/',
        twitterUrl: 'https://twitter.com/1password',
        logoPath: '/images/sites/1password.png',
        publicApi: {
          status: 'https://1password.statuspage.io/api/v2/status.json',
          summary: 'https://1password.statuspage.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Mailjet',
      identifier: 'mailjet',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.mailjet.com/',
        statusPageUrl: 'https://mailjet.statuspage.io/',
        twitterUrl: 'https://twitter.com/mailjet',
        logoPath: '/images/sites/mailjet.png',
        publicApi: {
          status: 'https://mailjet.statuspage.io/api/v2/status.json',
          summary: 'https://mailjet.statuspage.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Monday',
      identifier: 'monday',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://monday.com/',
        statusPageUrl: 'https://status.monday.com/',
        twitterUrl: 'https://twitter.com/mondaydotcom',
        logoPath: '/images/sites/monday.png',
        publicApi: {
          status: 'https://status.monday.com/api/v2/status.json',
          summary: 'https://status.monday.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Netlify',
      identifier: 'netlify',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.netlify.com/',
        statusPageUrl: 'https://www.netlifystatus.com/',
        twitterUrl: 'https://twitter.com/netlify',
        logoPath: '/images/sites/netlify.png',
        publicApi: {
          status: 'https://www.netlifystatus.com/api/v2/status.json',
          summary: 'https://www.netlifystatus.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'NPM',
      identifier: 'npm',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.npmjs.com/',
        statusPageUrl: 'https://status.npmjs.org/',
        twitterUrl: 'https://twitter.com/npm_support',
        logoPath: '/images/sites/npm.png',
        publicApi: {
          status: 'https://status.npmjs.org/api/v2/status.json',
          summary: 'https://status.npmjs.org/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Optimizely',
      identifier: 'optimizely',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.optimizely.com/',
        statusPageUrl: 'https://status.optimizely.com/',
        twitterUrl: 'https://twitter.com/OptimizelySupport',
        logoPath: '/images/sites/optimizely.png',
        publicApi: {
          status: 'https://status.optimizely.com/api/v2/status.json',
          summary: 'https://status.optimizely.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'OracleCloud',
      identifier: 'oraclecloud',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.oracle.com/index.html',
        statusPageUrl: 'https://ocistatus.oraclecloud.com/',
        twitterUrl: 'https://twitter.com/oraclecloud',
        logoPath: '/images/sites/oraclecloud.png',
        publicApi: {
          status: 'https://ocistatus.oraclecloud.com/api/v2/status.json',
          summary: 'https://ocistatus.oraclecloud.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Pagerduty',
      identifier: 'pagerduty',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.pagerduty.com/',
        statusPageUrl: 'https://status.pagerduty.com/',
        twitterUrl: 'https://twitter.com/pagerduty',
        logoPath: '/images/sites/pagerduty.png',
        publicApi: {
          status: 'https://status.pagerduty.com/api/v2/status.json',
          summary: 'https://status.pagerduty.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Postman',
      identifier: 'postman',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.postman.com/',
        statusPageUrl: 'https://status.postman.com/',
        twitterUrl: 'https://twitter.com/getpostman',
        logoPath: '/images/sites/postman.png',
        publicApi: {
          status: 'https://status.postman.com/api/v2/status.json',
          summary: 'https://status.postman.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Statuspage',
      identifier: 'statuspage',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.atlassian.com/software/statuspage',
        statusPageUrl: 'https://metastatuspage.com/',
        twitterUrl: 'https://twitter.com/statuspageio',
        logoPath: '/images/sites/statuspage.png',
        publicApi: {
          status: 'https://metastatuspage.com/api/v2/status.json',
          summary: 'https://metastatuspage.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Squarespace',
      identifier: 'squarespace',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.squarespace.com/',
        statusPageUrl: 'https://status.squarespace.com/',
        twitterUrl: 'https://twitter.com/squarespace',
        logoPath: '/images/sites/squarespace.png',
        publicApi: {
          status: 'https://status.squarespace.com/api/v2/status.json',
          summary: 'https://status.squarespace.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'TeamViewer',
      identifier: 'teamviewer',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.teamviewer.com/en/',
        statusPageUrl: 'https://status.teamviewer.com/',
        twitterUrl: 'https://twitter.com/teamviewer',
        logoPath: '/images/sites/teamviewer.png',
        publicApi: {
          status: 'https://status.teamviewer.com/api/v2/status.json',
          summary: 'https://status.teamviewer.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Transifex',
      identifier: 'transifex',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://transifex.com/',
        statusPageUrl: 'https://status.transifex.com/',
        twitterUrl: 'https://twitter.com/transifex',
        logoPath: '/images/sites/transifex.png',
        publicApi: {
          status: 'https://status.transifex.com/api/v2/status.json',
          summary: 'https://status.transifex.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'TravisCI',
      identifier: 'travisci',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://travis-ci.org/',
        statusPageUrl: 'https://www.traviscistatus.com/',
        twitterUrl: 'https://twitter.com/traviscistatus',
        logoPath: '/images/sites/travisci.png',
        publicApi: {
          status: 'https://www.traviscistatus.com/api/v2/status.json',
          summary: 'https://www.traviscistatus.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Zoom',
      identifier: 'zoom',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://zoom.us/',
        statusPageUrl: 'https://status.zoom.us/',
        twitterUrl: 'https://twitter.com/zoom_us',
        logoPath: '/images/sites/zoom.png',
        publicApi: {
          status: 'https://status.zoom.us/api/v2/status.json',
          summary: 'https://status.zoom.us/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Bullhorn',
      identifier: 'bullhorn',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.bullhorn.com/',
        statusPageUrl: 'https://status.bullhorn.com/',
        twitterUrl: 'https://twitter.com/bullhorn',
        logoPath: '/images/sites/bullhorn.png',
        publicApi: {
          status: 'https://status.bullhorn.com/api/v2/status.json',
          summary: 'https://status.bullhorn.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'CloudRepo',
      identifier: 'cloudrepo',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.cloudrepo.io/',
        statusPageUrl: 'https://status.cloudrepo.io/',
        twitterUrl: 'https://twitter.com/cloudrepo',
        logoPath: '/images/sites/cloudrepo.png',
        publicApi: {
          status: 'https://status.cloudrepo.io/api/v2/status.json',
          summary: 'https://status.cloudrepo.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Keen',
      identifier: 'keen',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://keen.io/',
        statusPageUrl: 'https://status.keen.io/',
        twitterUrl: 'https://twitter.com/keen_io',
        logoPath: '/images/sites/keen.png',
        publicApi: {
          status: 'https://status.keen.io/api/v2/status.json',
          summary: 'https://status.keen.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Panoply',
      identifier: 'panoply',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://panoply.io/',
        statusPageUrl: 'https://status.panoply.io/',
        twitterUrl: 'https://twitter.com/panoplyio',
        logoPath: '/images/sites/panoply.png',
        publicApi: {
          status: 'https://status.panoply.io/api/v2/status.json',
          summary: 'https://status.panoply.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Skylight',
      identifier: 'skylight',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.skylight.io/',
        statusPageUrl: 'https://status.skylight.io/',
        twitterUrl: 'https://twitter.com/skylightio',
        logoPath: '/images/sites/skylight.png',
        publicApi: {
          status: 'https://status.skylight.io/api/v2/status.json',
          summary: 'https://status.skylight.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Teamwork',
      identifier: 'teamwork',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.teamwork.com/',
        statusPageUrl: 'https://status.teamwork.com/',
        twitterUrl: 'https://twitter.com/teamwork',
        logoPath: '/images/sites/teamwork.png',
        publicApi: {
          status: 'https://status.teamwork.com/api/v2/status.json',
          summary: 'https://status.teamwork.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'TokBox',
      identifier: 'tokbox',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://tokbox.com/',
        statusPageUrl: 'https://status.tokbox.com/',
        twitterUrl: 'https://twitter.com/tokbox',
        logoPath: '/images/sites/tokbox.png',
        publicApi: {
          status: 'https://status.tokbox.com/api/v2/status.json',
          summary: 'https://status.tokbox.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'VM Ware Cloud',
      identifier: 'vmwarecloud',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://cloud.vmware.com/',
        statusPageUrl: 'https://status.vmware-services.io/',
        twitterUrl: 'https://twitter.com/vmwarecloud',
        logoPath: '/images/sites/vmwarecloud.png',
        publicApi: {
          status: 'https://status.vmware-services.io/api/v2/status.json',
          summary: 'https://status.vmware-services.io/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Zamzar',
      identifier: 'zamzar',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.zamzar.com/',
        statusPageUrl: 'http://www.zamzarstatus.com/',
        twitterUrl: 'https://twitter.com/zamzar',
        logoPath: '/images/sites/zamzar.png',
        publicApi: {
          status: 'http://www.zamzarstatus.com/api/v2/status.json',
          summary: 'http://www.zamzarstatus.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Plivo',
      identifier: 'plivo',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.plivo.com/',
        statusPageUrl: 'https://status.plivo.com/',
        twitterUrl: 'https://twitter.com/plivostatus',
        logoPath: '/images/sites/plivo.png',
        publicApi: {
          status: 'https://status.plivo.com/api/v2/status.json',
          summary: 'https://status.plivo.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Snowflake',
      identifier: 'snowflake',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.snowflake.com/',
        statusPageUrl: 'https://status.snowflake.com/',
        twitterUrl: 'https://twitter.com/SnowflakeDB',
        logoPath: '/images/sites/snowflake.png',
        publicApi: {
          status: 'https://status.snowflake.com/api/v2/status.json',
          summary: 'https://status.snowflake.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Python',
      identifier: 'python',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://pypi.org/',
        statusPageUrl: 'https://status.python.org/',
        twitterUrl: 'https://twitter.com/pypi',
        logoPath: '/images/sites/python.png',
        publicApi: {
          status: 'https://status.python.org/api/v2/status.json',
          summary: 'https://status.python.org/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Unbounce',
      identifier: 'unbounce',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://unbounce.com/',
        statusPageUrl: 'https://status.unbounce.com/',
        twitterUrl: 'https://twitter.com/unbounce',
        logoPath: '/images/sites/unbounce.png',
        publicApi: {
          status: 'https://status.unbounce.com/api/v2/status.json',
          summary: 'https://status.unbounce.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Chargebee',
      identifier: 'chargebee',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://www.chargebee.com/',
        statusPageUrl: 'https://status.chargebee.com/',
        twitterUrl: 'https://twitter.com/chargebee',
        logoPath: '/images/sites/chargebee.png',
        publicApi: {
          status: 'https://status.chargebee.com/api/v2/status.json',
          summary: 'https://status.chargebee.com/api/v2/summary.json'
        }
      }
    },
    {
      name: 'Vercel',
      identifier: 'vercel',
      statusProvider: 'Atlassian',
      sources: {
        mainUrl: 'https://vercel.com/',
        statusPageUrl: 'https://www.vercel-status.com/',
        twitterUrl: 'https://twitter.com/vercel',
        logoPath: '/images/sites/vercel.png',
        publicApi: {
          status: 'https://www.vercel-status.com/api/v2/status.json',
          summary: 'https://www.vercel-status.com/api/v2/summary.json'
        }
      }
    }
  ]
