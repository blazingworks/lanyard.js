## taiga Git Commit Message Convention

> Partly adapted from Angular's [commit message guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit).

### Simple explanation
All commit messages must constructed like this:
`<type>: <subject>`
*(For the `release` Type, the Subject has to exactly be the version. For example: `release: 2.0.0`)*

### Types
- feat: A new feature
- fix: A bugfix
- bump: Increase the version of something such as a dependency
- docs: Changes to documentation
- style: Formatting, missing semicolons etc. (No actual changes to code itself)
- refactor: Refactoring production code such as changing a variable name
- perf: Performance improvements
- workflow: Changes to deployment/commit verification workflow
- wip: Work in progress
- release: Final update of version number for release of new update
```regex
/^(feat|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|types|wip): .{1,40}/;
```

### Examples
- `feat: Added Trading Cards`
- `fix: Fixed Double Trading Card Pack Bug`
- `bump: Bumped discord.js Version`
- `docs: Added Trading Cards to Documentation`
- `style: Improved Index Layout`
- `refactor: Fixed Typos in Variable Names`
- `perf: Improved Performance for Inventory Command`
- `workflow: Added GitHub Actions to verify PRs`
- `wip: Started working on new Plugin`
- `release: 2.0.0`