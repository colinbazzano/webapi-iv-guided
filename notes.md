# Deployment Notes

## Quote

> Developers get paid to deliver value, not lines of code.
>
> &mdash; A pragmatic Developer

## Jargon

_"Single Responsibility Principle"_

Do one thing really well. Only one reason to change.

## Deployment

- extract configuration into environment variables.
- setup Continuous Deployment from Github to Heroku.
  - commit and push to GH and the api gets updated on Heroku.
  - add a "start" script to `package.json`
  - make the Port dynamic

## Switching Remotes

- `git remove set-url origin url to new empty repository on GH`
- `git remove -v` to see where your remotes point
