---
title: Github Style Branching
date: "2017-04-01 10:00:00"
---

Like many companies, at Xero we use GitHub enterprise to handle git based things.
For obvious reason: GitHub is the big player in the hosted git world. 
There's no getting around interacting with GitHub in a modern development world.

Now, one of my interests when it comes to helping teams be better with software 
is their branching strategy. Herein lies my pet peeve with GitHub. Almost every 
recommended branching strategy, and indeed most I've seen in the wild, 
utilise GitHub forks as a major component. 

A typical Git based CI flow might work like this:

Make a feature branch from master (Or some integration branch), do some work, 
push your commits to that branch, Pull Request back into the source branch. 
Actually a Pull Request may take the form of generating a patch file and 
distributing it, or something similar. You get the idea though. 

Easy. 

The problem herein lies with our third step - Push your commits back to that branch. 
GitHub maintains a level of permissions - only contributors to a repository can push 
to that repository branches. In effect, this means that for non contributors, the 
above model is a non starter - they can't push their branches back to the main repository.

Enter: The Fork. What if we had a way to make branches outside the permissions model of 
the original repository? That's a fork. It's a branch that's controlled by someone not 
the original owner of the repository. So we augment our above workflow to something seen 
often in the GitHub world:

Fork the repository, feature branch off of your fork, commit to that feature branch, 
push to it, and Pull Request back into the source branch/repository. Quick note: 
branching off your fork is not strictly necessary, but avoids the problem that 
only one Pull Request can be open per branch.

The problem that lies in this approach are :

1. The extra steps add an unnecessary overhead to the development process
2. The extra indirection kills discoverability
3. Forks lose all context of the original repository

Lets go through them shall we?

## The extra indirection kills discoverability

One of the key nicities with git branching is the ability to do a simple
`git branch` (Or look at the relevant page on a Web Interface) and see all
the work that is currently underway. All the other active contributions to the project
can be seen in a list of the branches. The problem that exists here is
that there is no such mechanism for forks. Up until recently it was difficult to even list the
users that have forked a repo, let alone find out what features that fork contained. The
naming of git branches, generally linking to JIRA issues and the like provide this context nicely.

## The extra steps add an unnecessary overhead to the development process

This ones sort of trivial. Forking and branching off that fork, while necessary in
this workflow (So one can have multiple independent pull requests open at the same time),
is an extra layer of indirection. This extra step is not just an extra addition when it comes to creating
and pull requesting into master, it's another place where changes have to be propagated. 
Just another point where if changes aren't merged, it could break your repo.

## Forks lose all context of the original repository

When it comes to hosted git solutions, they're often bundled with things like Issues
and Pull Requests. These are identified by a number, which can be linked using a #(Hash)
number. Particularly in commits, linking these to provide context can be very useful - 
the ability to point to a particular issue/comment chain for a bug fix etc can provide
more context around what a commit is actually doing. Forks however maintain their own
set of issues and pull requests. This means that working on a fork makes any linked issues
and pull requests useless. 

## In conclusion

Basically, I don't like forks. In my opinion, they're a bad solution to pushing Git into a
web based permissions system that is poorly designed for the purpose it's been applied to. 
What I would like to see is a permissions model in which non contributors have permission
to create branches on the main repo rather than having to fork themselves. Anyway. Rant over.
