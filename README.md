# sinkingpoint.github.io

## Build

### Release [quirl.co.nz](https://quirl.co.nz)
[![Build Status](https://ci.sinkingpoint.com/buildStatus/icon?job=Personal/quirl.co.nz)](https://ci.sinkingpoint.com/job/Personal/job/quirl.co.nz/)

### Testing [test.quirl.co.nz](http://test.quirl.co.nz)
[![Build Status](https://ci.sinkingpoint.com/buildStatus/icon?job=Personal/quirl feature branch)](https://ci.sinkingpoint.com/job/Personal/job/quirl%20feature%20branch/)

## About
This is the backing repo to [quirl.co.nz](https://quirl.co.nz) and [sinkingpoint.com](https://sinkingpoint.com).
Any commits to the master branch are pushed to the underlying S3 bucket automatically! Yay! Commits to the release branch
are automatically deployed to [test.quirl.co.nz](http://test.quirl.co.nz). In front of the main site is CloudFlare,
which is configured not to cache the test site, but will cache the main ones, so changes may take up to half an hour to appear due to caching.
