# Get Miles

A tool to help you manage milestones and their associated issues within a large Github project.

__Miles is a hack-day project which is very much not complete, or functional. You have been warned.__

The idea was to provide an interface that would give you a top-level view of a collection of milestones (progress, shown as tickets closed vs all tickets in the milestone), show issues which require attention (based on user-defined labels, for all issues in your selected milestones) and then an activity stream showing everything going on for all issues within your milestones (including conversations, commits, etc).

Currently, it only has a very basic view of the specified milestones. Lots of things to make it live up to plans:

- [ ] In-page auth rather than hard-coding an auth token
- [ ] Select repos (allow multiple, ideally)
- [ ] Select milestones (across repos)
- [ ] Select labels from a dynamic list from GH
- [ ] Store/cache all data locally in localStorage
- [ ] "Live" updates via some sort of polling
- [ ] Build out listing of issues in need of attention
- [ ] Query for and list all activity for all issues
- [ ] Implement conditional requests to avoid API throttling
- [ ] Provide "logout" and "reload" options to clear localStorage and reload
- [ ] Much, much love on the design
- [ ] Switch to promise-based requests to avoid race conditions
- [ ] Implement client-side friendly config handling

## Getting started:

  * `git clone https://github.com/beaulebens/getmiles.git getmiles`
  * `cd getmiles`
  * `npm install`
  * Generate a [user auth token](https://github.com/settings/applications) and insert it in `app/index.jsx`; configure other options (owner, repo, milestones and labels)
  * `npm start` (will watch files for changes)
  * Open `http://localhost:3030` in your browser

## Technologies
* Node to provide a very basic webserver (not required; everything is HTML+JS)
* Express to serve files
* Browserify to bundle things up
* React for all views/front-end
* Github is the source of all data

## Credits
Based on https://github.com/petehunt/react-browserify-template which is way out of date, so required a bunch of changes.
