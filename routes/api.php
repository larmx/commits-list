<?php

use App\Http\Controllers\Commits;

Route::get('/commits/{owner}/{repo}', function ($owner, $repo){
    $commits = new Commits();

    $list = $commits->getCommits($repo, $owner);

    return $list;
});

Route::get('/commit/{owner}/{repo}/{sha}', function($owner, $repo, $sha) {
    $commits = new Commits();

    $commitDetails = $commits->getCommitDetails($sha, $repo, $owner);

    return $commitDetails;
});

