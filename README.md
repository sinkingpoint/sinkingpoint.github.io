# sinkingpoint.github.io

## Build

[![Build Status](https://ci.sinkingpoint.com/buildStatus/icon?job=quirl.co.nz)](https://ci.sinkingpoint.com/job/quirl.co.nz/)

## About
This is the backing repo to [quirl.co.nz](https://quirl.co.nz) and [sinkingpoint.com](https://sinkingpoint.com).
Any commits to the master branch are pushed to the underlying S3 bucket automatically! Yay! Commits to the release branch
are automatically deployed to [test.quirl.co.nz](http://test.quirl.co.nz). In front of the main site is CloudFlare,
which is configured not to cache the test site, but will cache the main ones, so changes may take up to half an hour to appear due to caching.
