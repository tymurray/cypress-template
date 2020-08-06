### Installation

Open a terminal and type below command to verify NodeJS is installed.

```
node --version
npm --version
```

Above command should print out the version that you have installed.

If not you'll need to install node.

```
brew install node
```

Then install the repo packages

```
npm install
```

### Executing Tests TL;DR

Then open cypress to execute the tests

```
npx cypress open --config baseUrl=https://{add.host.here}/
```

or you can run a single test from the command line

```
npx cypress run --config baseUrl=https://{add.host.here}/
```