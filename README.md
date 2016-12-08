## Countdown

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
so that it can reload the page automatically. Press `ctrl+c` on your keyboard to stop
the local server. You can delete all compiled files and the `dist/` folder by running
`yarn cleanup`.

### Deployment
You can deploy to the `gh-pages` branch of your repository and the static site files will be served at:
```
https://<your-username>.github.io/<the-name-of-the-repository>
```
All you have to do is run `yarn deploy`. That will build everything, deploy and then cleanup.
