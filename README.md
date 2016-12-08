# Countdown

### Setup
First make sure you have [Node.js](https://nodejs.org) installed.

```sh
node --version
```

If node shows you the version number you should be fine. Next go install
[Yarn](https://yarnpkg.com/en/docs/install). Verify that you have the Yarn executable
available at your command prompt by running:

```sh
yarn --version
```

### Development
Run `yarn start` to get everything going. This will start a local web server using
[Browsersync](https://www.browsersync.io) and continue to watch for changing files
so that it can reload the page automatically. To delete all compiled files and the 

### Deployment
When you're ready to deploy to your gh-pages branch so that the site will be available at `https://<your-username>.github.io/<the-name-of-the-repository>`, you can simply run `yarn deploy`.
