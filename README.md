# feature-toggle-react
Proof of concept illustrating feature toggles in a front end react.js project.

Feature toggles will facilitate an interface that exposes a system to integrate features in a
codebase using CommonJS modules, before they're finished and ready to be release.

Said features must be configured in a file called `toggles.js` which must reside in the `config`
dir.

*Feature toggles should be toggled at the largest scale possible.*

# caveats
When introducing feature toggles some sort of logic is required to interpret how certain features
are toggles. Strictly speaking, at the moment said logic is implemented, technical debt is
introduced.

Therefore extra discipline is required from developers when managing features. For instance, when
a feature has been accepted, any toggle logic must be removed from the codebase as soon as possible.
