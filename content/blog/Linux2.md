---
author: Adarsh Liju Abraham
date: 2023-02-26T6:28:00Z
title: Storage ,File Permissions and the Terminal
draft: false
tags:
  - linux
  - foss
  - os
  - shell
  - tools
description: Deep Dive to Linux Architecture
---

## Storage Structure of Linux

In Linux, the file system creates a tree structure. All the files are arranged as a tree and its branches. The topmost directory is called the root (`/`) directory. All other directories in Linux can be accessed from the root directory. Some features in Linux include:

- **Specifying paths:** Linux does not use the backslash (`\`) to separate the components; it uses forward slash (`/`) as an alternative.
- **Partition, Directories, and Drives:** Linux does not use drive letters to organize the drive as Windows does. In Linux, we cannot tell whether we are addressing a partition, a network device, or an "ordinary" directory and a Drive.
- **Case Sensitivity:** Linux file system is case sensitive. It distinguishes between lowercase and uppercase file names. This is also followed in Linux commands.
- **File Extensions:** In Linux, a file may have the extension `.txt`, but it is not necessary that a file should have a file extension. If we use the graphical file manager, it symbolizes the files and folders.
- **Hidden files:** Linux distinguishes between standard files and hidden files, mostly the configuration files are hidden in Linux OS. Usually, we don't need to access or read the hidden files. The hidden files in Linux are represented by a dot (`.`) before the file name (e.g., `.ignore`). To access the files, we need to change the view in the file manager or need to use a specific command in the shell.

## Linux File Permissions

The basic Linux permissions model works by associating each system file with an owner and a group and assigning permission access rights for three different classes of users:

### Permission Groups

- **Owner:** The Owner permissions apply only to the owner of the file or directory; they will not impact the actions of other users.
- **Group:** The Group permissions apply only to the group that has been assigned to the file or directory; they will not affect the actions of other users.
- **All users:** The All Users permissions apply to all other users on the system; this is the permission group that you want to watch the most.

### Permission Types

Three file permissions types apply to each class of users:

- The read permission.
- The write permission.
- The execute permission.

Permission on a file or a directory:

- `r` (read) - read file content (`cat`) / read directory content (`ls`)
- `w` (write) - change file content (`vi`) / create file in directory (`touch`)
- `x` (execute) - execute the file / enter the directory (`cd`)

## Basic I/O

```bash
echo "Hello Everyone"
```

## Linux Terminal

The Linux terminal is a text-based interface used to control a Linux computer. It's just one of the many tools provided to Linux users for accomplishing any given task, but it's widely considered the most efficient method available. It's so popular, in fact, that Apple changed its foundation to Unix and has gained the `bash` and `zsh`. Microsoft developed PowerShell, its very own open-source command-line similar to Linux Terminals.

## Linux Commands

A command is a special keyword you can use in a terminal to tell your computer to perform an action. Most commands are tiny little applications that get installed with the rest of your operating system (even applications like `cat`, `ls`, `curl`).
