# Commits-list

A simple webserver to get a list of the commits of a GitHub repository

## General organization of the project

I chose to use the PHP framework Laravel (with composer) for the back-end, and ReactJS for the front-end.
I also used the GitHub API library to make my calls concerning the commits and their informations.

## Requirements

You need to have PHP 7.0, Artisan and Composer installed for the back-end.
For the front-end, you need to have node and npm.


## Installing

Clone the repo and run

```
cd commits-list
npm install
composer install
```
With all of this is installed, run the server with :

```
php artisan serve
```

In another console, within the same folder (./commits-list) build the front with :

```
npm run watch
```

You can then go to the addres http://localhost:8000 to see the webserver!

A list of the last 30 commits (as it is the basic number of commits given by the API) of the repo linux, owned by torvalds.

## Improvement

If I had a little more time, I would implement a pagination so that we could get all the commits of a repo 30 by 30 with the pages. I would also create a filter for the date of commit, and improve a bit the design.
