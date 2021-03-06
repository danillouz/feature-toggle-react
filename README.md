# feature-toggle-react
Proof of Concept illustrating the usage of feature toggles in a front-end
react.js project for the knowledge sharing [presentation](http://slides.com/danillouz/feature-toggles#/) at [crowdynews](http://www.crowdynews.com/).

Feature toggles can facilitate an interface that exposes a system to
integrate features in a codebase using CommonJS modules, before they're
finished and ready to be release (release toggles) or on a permanent basis
when a feature is finished (business toggles).

Said features must be configured in a feature toggle configuration file
called `toggles.js`, which must reside in the projects `config` dir.

*Feature toggles should be toggled at the largest scale possible.*

# caveats
When introducing feature toggles some sort of logic is required to interpret
how certain features are toggled. Strictly speaking, at the moment said
logic is implemented, technical debt is introduced.

Therefore extra discipline is required from developers when managing
features. For instance, when using release toggles and a feature has been
accepted, any toggle logic must be removed from the codebase and the
feature toggle configuration file as soon as possible.

# utilities
Inside the feature toggle configuration file, [feature-toggle-utils]() can
be used to add extra functionality to how certain features are toggled.
For example by means of certain symbols (email address, privileges, etc) or
by means of a specific target date in the future.

# dependencies
The [feature-toggles](https://github.com/alexlawrence/feature-toggles) module is used as a
dependency when implementing feature toggle functionality by means of a feature toggle configuration
file.

# additional-resources
- [FeatureToggle by Martin Fowler](http://martinfowler.com/bliki/FeatureToggle.html)
- [Decoupling Deployment and Release- Feature Toggles by Abhishek Tiwari](http://abhishek-tiwari.com/post/decoupling-deployment-and-release-feature-toggles)

# running the application
```
npm start
```
