# Release Process :rocket:

#### 1. Get everything onto `develop`
All changes that need to go out in a release must be merged into the `develop` branch.

#### 2. Open a new Pull Request titled `changes for the next release` or `YYYY-MM-DD release`
Once all necessary changes are on `develop`, it's time to open a new Pull Request to merge `develop` into `master`. Set the `base` branch as `master`, set the `compare` branch as `develop`, and please title this Pull Request:

    changes for the next release

**IMPORTANT:** The Pull Request can be merged only when the continuous integration checks pass.

#### 3. Run the release script
The release script **should only be run from the master branch**. Checkout the master branch locally, `pull` in all latest changes, and confirm that the changes from the previous Pull Request made it into your local `master` branch.

Before we run the release script, we need to decide whether this is a `major`, `minor`, or `patch` release.

We're trying to follow `SemVer`, so please make sure you're familiar with the philosophy. Here's a few good resource:

- http://semver.org
- https://docs.npmjs.com/misc/semver

Until we reach `v1.0.0`, please **DO NOT** release a `major` version. To run the release script, make sure you're inside `lattice-ui-kit`, and run one of the following commands:

    npm run release:minor
    npm run release:patch

Please take note of the release version; you'll see things like `releasing v0.1.2` and `lattice-ui-kit@0.1.2`.

**IMPORTANT:** We're not done yet!

#### 4. Open a new Pull Request titled `changes from release v0.1.2` or `v0.1.2 release`
Once the release script finishes, it's time to open a new Pull Request to merge `master` into `develop`. Set the `base` branch as `develop`, set the `compare` branch as `master`, and please title this Pull Request:

    changes from release {version}

... where `{version}` is the version that was just released (`v0.1.2` from the example above).

#### 5. We're done! Let's celebrate! :tada: :beers:
