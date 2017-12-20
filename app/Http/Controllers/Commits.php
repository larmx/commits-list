<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;

class Commits extends Controller
{
    public function getCommits($repo = "linux", $owner = "torvalds") {
        $client = new Client();

        $res = $client->request('GET', 'https://api.github.com/repos/'.$owner.'/'.$repo.'/commits');
        print($res->getBody());
    }

    public function getCommitDetails($sha, $repo = "linux", $owner = "torvalds") {
        $client = new Client();

        $res = $client->request('GET', 'https://api.github.com/repos/'.$owner.'/'.$repo.'/commits/'.$sha);
        print($res->getBody());
    }
}