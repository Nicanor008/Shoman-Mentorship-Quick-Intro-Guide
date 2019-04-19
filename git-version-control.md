---
description: Be Part of a team
---

# GIT - Version Control

**Version control** is a system that records changes to a file or set of files over time so that you can recall specific versions later. Versioning of files/projects.

There are different [types of version control systems](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control). **Distributed Version control system** remote repository which is stored in a server and a local repository which is stored in the computer of each developer. This means that the code is not just stored in a central server, but the full copy of the code is present in all the developers’ computers. Git is a Distributed Version Control System since the code is present in every developer’s computer.

![file versioning](.gitbook/assets/screenshot-2019-04-19-at-07.23.37.png)

### Do I Really need Version Control?

Yes, you do. Real time projects worked on in parallel teams will always require you revert back and forth to an older version of your code. Also it independence through branching, hence you can comfortably work on your task in a team without much conflicts. `Don't worry you will understand with time`

### What is Git?

Git is the most commonly used version control. Git is an example of DVCS - `Distributed Version Control System` . Experienced software developers understand how to use git well, it's a well represented field.

Git features performance, security and flexibility.

### Installing Git

It's good to use git while you have an account at [Github](https://github.com) \(remember the "server"\). Go ahead and signup on [github.com](https://github.com)

#### Windows installation

Download [https://git-scm.com/download/win](https://git-scm.com/download/win) and install it. Read about [git for windows.](https://gitforwindows.org)

After installation, open git. Also you can create a folder for your projects, right click on it, click on `git bash` to execute git. Configure according to your credentials below.

#### Linux Installation\(Debian e.g. Ubuntu\)

On your terminal, run this 

```text
sudo apt install git-all
```

Configure according to your credentials below.

#### Mac-OS installation

The easiest way to install is to install xcode. Check if you have git, if you don't it will prompt you to install xcode.

```text
git --version
```

Configure according to your credentials below.

### Setting up git

You have to identify yourself to git. Remember your github credentials, time to use. On git bash, type the following with your credentials.

```text
git config --global user.name "Your username"
git config --global user.email Your-email-address
```

To check your credentials

```text
git config --list
```

{% hint style="info" %}
Git uses linux commands.
{% endhint %}

### Where to start

Two ways:

1. **Create a project\(repo\) on Github**

A **repository**\(repo\) is like a folder for your project. Login to your Github account and follow the steps below:

* [ ] In the upper-right corner of any page, click +, and then click **New repository**.
* [ ] In the Owner drop-down, select the account you wish to create the repository on.
* [ ] Type a name for your repository, and an optional description.
* [ ] Choose to make the repository either public or private. **Public repositories** are visible to the public, while **private repositories** are only accessible to you, and people you share them with. 
* [ ] Optionally choose to add README\(instructions doc for your project\), license and a gitignore \(what should not be sent to remote server\)
* [ ] When you're finished, click **Create repository**.
* [ ] To get started locally, click on **clone/download** on your created repo. Copy the link.

![](.gitbook/assets/screenshot-2019-04-19-at-08.28.03.png)

* [ ] Paste the link after `git clone ...` 
* [ ] check into the cloned repo `cd cloned-repo-name` . You can do `ls` to see the name of the cloned repo.
* [ ] Open your text editor here e.g. `code .`  to open VSCode while in that project.
* [ ] `Happy Coding` 
* [ ] After you satisfy that you have done enough coding, then it's time to send your codes to Github.
* [ ] `git status` to know what files you have edited
* [ ] `git add .`  to add all files or `git add filename.extension` to add single file
* [ ] `git commit -m "editing of files done` to add a snapshot for Github recognition
* [ ] `git push origin master` to send codes to Github. **Note** `master` can be replaced with your branch name.
* [ ] `emocionado (es) - Exicited (en)` 

2. **Initialise a project locally**

Let's say you had an existing project locally and want on Github for some reason.

### Common Git commands used

```text
cd - change directory e.g. (cd .. -moves back one directory)
ls - list all files and directories
pwd - print working directory (path)

git init - initialise a local project for version control
git clone - Taking a remote project to your local computer so you can
                start editing.
git status - to know status of your files after making changes
git add - add files on staging i.e. sending files from local server to 
                remote server but not yet in remote
git commit - appends a message to files to be sent to the remote server
                e.g. git commit -m "message";
git push - Sends the staged files to the remote server
git pull - brings remote(server) changes to local(your project)
```

{% hint style="info" %}
There are a lot of git commands. For beginners, don't hurry to know all of them. but if you much curious, check out [here](https://github.com/joshnh/Git-Commands) and [this](https://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1/) explains meaning of all git commands
{% endhint %}













