# Best Practices

## Styles & Coding

- HTML, CSS and Javascript follow in general the Google Style Guide conventions (https://github.com/google/styleguide);
- Custom CSS follows the BEM convention (http://getbem.com/);

Please be sure to check and follow them before attempt any modification to the sources, in order to preserve the general integrity of the project patterns.
Third-party linter plugins like ESLint, Beautify, Prettier or any other similar resource are welcome (configuration files of the mentioned ones are already present).

## Assets

### Common Guidelines

- For assets inclusion location, specifications or their variations, please refeer to __TODO__ comments inside the sources;

## Repository

- .gitignore
    * __/node_modules/:__ Full-Stack Front-End dependencies (_NodeJS_);
    * __/.*:__ Various system and configuration files;
    * __/*.json:__ Full-Stack Front-End various configuration files;
	* __/gulpfile.js:__ Front-End task runner configuration file (_Gulp_);


I.e.

```
	# Repository - Configuration
    /node_modules/
    /.*
    /*.json
    /gulpfile.js
```


### Branches

There are three branches, defined as:

- __develop__ (Development);
- __staging__ (Beta);
- __master__ (Production - _Default_);

Contributions implement the GitFlow framework (https://tinyurl.com/zt4vys8).
Please read about its specifications before commit on any branch.

### Commits

Oficial Udacity Git commit message style guide is used. Please consult the docs (http://udacity.github.io/git-styleguide/) for details.


### Merges

- __staging__: merging from __develop__;
- __master__: merging from __staging__;


### Releases

The releasing process follows the SemVer specification (https://semver.org/).
Please read about its guidelines before draft any release.


## Host

### Essential files^!

- __.ftpquota__
- __revisions.log__

^! __Not delete__
