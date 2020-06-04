# The Shell, and the Command Line Interface (CLI)
## Command Line Interface Basics Lesson Learning Objectives

Below is a complete list of the terminal learning objectives for this lesson. When you complete this lesson, you should be able to perform each of the following objectives. These objectives capture how you may be evaluated on the assessment for this lesson.

1. Given a folder structure diagram, a list of 'cd (path)' commands and target files, match the paths to the target files.
2. Create, rename, and move folders using unix command line tools.
3. Use grep and | to count matches of a pattern in a sample text file and save result to another file.
4. Find what -c, -r, and -b flags do in grep by reading the manual.
5. Identify the difference in two different files using diff.
6. Open and close nano with and without saving a file.
7. Use ‘curl’ to download a file.
8. Read the variables of $PATH.
9. Explain the difference between .bash_profile and .bashrc.
10. Create a new alias by editing the .bash_profile.
11. Given a list of common scenarios, identify when it is appropriate and safe to use sudo, and when it is a dangerous mistake.
12. Write a shell script that greets a user by their $USER name using echo.
13. Use chmod to make a shell script executable.

## The Way of the Shell

>*In computing, a shell is a user interface for access to an operating system's services. In general, operating system shells use either a command-line interface (CLI) or graphical user interface (GUI), depending on a computer's role and particular operation. It is named a shell because it is the outermost layer around the operating system.*

--- *Wikipedia, "Shell (computing)"*

*In the beginning of computers that could run programs as we understand them, there was the shell.*

The **Thompson Shell** (1971) was the first Unix shell and offered a new approach to input and output redirection.  Following in this tradition, every program starts with a standard input and output file (`0` and `1`, respectively); by default these files are tied to the console, but they can be redirected from (`<`) or to (`>`) the file system using this syntax:

    my_program < my_input_file > my_output_file

programs can also be chained together using the pipe character (`|`):

    my_analysis_program < my_data | my_filter | my_report_generator > my_report

The **Bourne Shell** (1979) added the use of file descriptor 2 for error messages.  This shell kept the same program name as its predecessor, and can still be invoked on most Linux systems as `/bin/sh`.

**NOTE:** These three standard file handles - input `(0)`, output `(1)`, and errors or logging `(2)` - are associated with any program you will run that interacts with the shell.  In particular, you may remember the *input* (`process.stdin`) and *output* (`process.stdout`) attributes associated with the call to `readline.createInterface()` from the lessons on the `readline` module.

On most Linux systems and the Mac OS each user has a particular default shell; other shells will generally either already be available or easily installed.  Three notable more recent widely used shells are the **Korn Shell** (`ksh`, 1983) *(some Linux servers)*, the **Bourne-Again Shell** (`bash`, 1989) *(most Linux workstations and many servers)*, and the **Z Shell** (`zsh`, 1990) *(Mac OS Catalina)*.

(**COMMAND.COM**, **CMD.EXE** and **POWERSHELL** are all Microsoft shells with some similarities to the UNIX-style shells discussed; they will not be discussed further here)

## Graphs, Nodes, Edges, Trees & Forests

Later on, we will explore a variety of data structures in some detail - but at this point it may help to have some vocabulary that relates directly to how file systems are organized.  Via Wikipedia:
>In mathematics, and more specifically in graph theory, a graph is a structure amounting to a set of objects in which some pairs of the objects are in some sense "related". The objects correspond to mathematical abstractions called vertices (also called **nodes** or points) and each of the related pairs of vertices is called an **edge** (also called link or line). Typically, a graph is depicted in diagrammatic form as a set of dots or circles for the vertices, joined by lines or curves for the edges.  
>Edges may be directed or undirected. ... The former type of graph is called an *undirected* graph while the latter type of graph is called a *directed* graph.  

From the same article, a **tree** is defined as a *graph* where any two *nodes* are connected by exactly one **path**.  A tree will have exactly one **root** node; the file system on UNIX (Linux/Mac OS) computers is a tree rooted on the `/` folder.  In contrast, a **forest** is a disjoint collection of trees; the Windows file system is a forest with each tree rooted on a physical or virtual device.  (`C:\`, `D:\` etc)

## UNIX / Linux File Systems In General

The *nodes* in the UNIX file system are **files**, which are themselves an ordered sequence of zero or more bytes (binary files) or characters (text files).  One special type of (binary) *file* is the **directory**, which is a file that holds a list of other files.  The ***path*** for any file is the sequence of directories from some starting point to the file itself; **absolute** paths start with the root directory (`/etc/hosts`); while **relative** paths start anywhere else. (*this* file is currently `Documents/Curricula/2020-may/shell.md`, starting from my home directory)

## Shell Commands from the Lectures

- **`< | > >>`** -   (file redirection) - `< <file>` redirects the standard input stream to read from a file; `> <file>` redirects the standard output stream into a new file; `>> <file>` redirects the standard output stream into a file, appending if the file already exists.
NOTE: a common redirection pattern is `2>&1`, which means 'direct the stderr stream (`2`) to the same stream as stdout (`1`).  Another one is `2>/dev/null`, which means 'discard any error messages'.
- **`. .. ~`**    -   (special directories)   Dot (`.`) and dot-dot (`..`) are "this directory" and "the parent of this directory", respectively.  Tilde (`~`) is the user's home directory.
- **`alias`** -   define or display aliases
- **`cd`**    -   change directory
- **`chmod`** -   change file permissions
- **`cp`**    -   copy a file
- **`curl`**  -   Client URL - download the contents of a URL
- **`diff`**  -   display differences between two files
- **`echo`**  -   write a string out to the standard output
- **`git`**   -   standard source control tool
- **`grep`**  -   g/re/p - globally search for a regular expression and print matching lines
- **`ls`**    -   list files in one or more directories
- **`man`**   -   get information about a command line program or command
- **`mkdir`** -   create a directory
- **`mv`**    -   move (or rename) a file
- **`nano`**  -   simple file editor
- **`node`**  -   JavaScript execution environment
- **`npm`**   -   the *Node Package Manager* - manages optional JavaScript modules
- **`pwd`**   print the current working directory
- **`rm`**    -   remove (a file)
- **`rmdir`** -   remove an empty directory
- **`source`**    -   execute a script, loading functions and variables into the current script (aliased as `.` in modern shells)
- **`sudo`**  -   execute a command as the root user
- **`touch`** -   change file access and modification time (also creates empty files)
- **`wc`**    -   word count - count the number of words or lines or characters in a file
- **`which`** -   identify which versions of a program are found in the $PATH variable
- **`whoami`**    -   return the current user's name  

## Environmental Variables of Note

- $HOME
- $PATH
- $SHELL
- $USER

## Special places in the UNIX File System

`/` -   the root folder - **everything** is located 'under' this folder.  
`/home/<user>` -   default location for user files  
`/etc/` -   system configuration information  
`/dev/` -   system devices - normally you won't care about these unless you are mounting a device.  
`/dev/null` -   a write-only device, aka the 'bit-bucket' - output to be suppressed is routed here.
`/usr/` -   shells, programing languages, and other standard parts of the OS go here.  
`/opt/` -   custom-installed (global) programs will go here.  (non-global programs will be installed under `/home/<user>`)

*(There are more - this is just to get you started!)*

## Wednesday Lecture Notes

### Navigation

What is a path?  A series of directories, separated by slashes.  You can see the directory you are in by typing the command `pwd`.  

What is a home directory?  Every regular user has a personal storage space - on Linux it is typically `/home/<user>`; on Mac OS it is `/Users/<user>`

What is the difference between an *absolute* path and a *relative* path?  An absolute path starts at the root direcory, and so begins with a slash.

How does one navigate the file system?  The `cd` command allows one to change to a new directory; tab completion can be used to speed this process up dramatically.  Special directories often used in navigation and locating files are `~` (the user's home directory), `.` (the current directory), and `..` (the parent of the current directory).  

You can make a new directory with the `mkdir` command; this command creates directories under the current one, and can make several directories at once - as in Alex's example: `mkdir assets scripts styles`.

`touch` is a simple command to update the access time on a file; `touch <file>` "touches" the file.  `touch` will create an empty file if the named file does not exist.

`cp` (copy) and `mv` (move) will copy and move-or-rename files, respectively.  (Because all files have a unique path including their name, moving a file is the same as renaming it).  

`ls` (list) is a command you will know well - `ls` lists the contents of one or more folders.  Commonly used options are `-l` (list or detailed format), `-a` (*all files*, including hidden ones), and `-h` (human-readable file sizes).

NOTE: single character options like these are called **flags** - they are two-state (Boolean) values, and can usually be combined by running them together, thus `ls -lha`.  

Files that start with a period (or only are a period!) are *hidden*, which is to say not displayed when ls is invoked without the `-a` option.  The example Alex gave was the file he created with the command `touch assets/.keep`, in order to force `git` to include the `assets` directory in his repository.

The `rm` command removes files.  (and directories, with the proper options).  Unlike in the GUI shell, there is no recycle bin for deleted files, so be very careful using the `rm` command.  Similarly, the `rmdir` command deletes empty directories; while not as generally useful as `rm` it is less likely to be involved in a file system accident.

### Common Tasks

In this lecture, Alex demonstrated `curl` - the "Client URL" tool - that copies the document fetched from a URL to the stdout stream.  You can use the `-o` option to redirect the output of `curl` to a file.

He also demonstrated the `grep` command.  `grep` is a powerful general-purpose search tool.  (The name is short for `g/re/p`, which means *"global regular expression print"*)

A really important point he made was the use of the `man` pages - by typing `man grep` you can access extensive documentation about the `grep` command, and this same feature documents most shell commands.  The navigation commands within the `man` program are the same as in `less` (a pagination tool / document reader) and `vi` (a commonly used, older editor) - `/<string>` searches for the next occurance of *\<string>*, `n` repeats the last search, `N` reverses the search, using `?` instead of `/` searches backwards, and `q` gets you out of the program.

Alex used the pipe operator (`|`) to run grep on the output of a program; the pipe operator in general allows you to route the output of one program into the input of another.

Alex demonstrated the `nano` editor - this text editor is generally available on all modern shells and is relatively easy to use compared to older alternatives like `vi / vim` and `emacs`.  

Finally, he demonstrated the `diff` command, which like the `git diff` command, displays the differences between two files.  

(For global search-and-replace tasks, `sed` and `awk` are commonly available, and often used)

### Shell Basics

In this lecture, Alex instroduced the `bash` shell, as the default shell on the Mac OS.  (This has changed with the release of *catalina*; the default shell on Mac OS is now `zsh`)

NOTE: In general, users of modern UNIX-flavored OS's (Linux, Mac OS, WSL on Windows) have their choice of shells.  `ksh`, `bash` and `zsh` are all in common use and offer similar functionality.  They all have strong points and strong advocates, and are in practice mostly capable of the same things.

Alex mentioned the `$PATH` variable.  This is an environmental variable which documents the directories to be searched (in order) to find an executable file to run.  He also mentioned the `which` command, which will search the `$PATH` for matches on a given program's name.

Special attention was given to the `bash` user files, `.bash_profile` and `.bashrc`.  (The `zsh` shell has similar files, most notably, `.zshrc`)  These files load scripted functions and varibles into the ***environment***, which provides configurable resources to scripts and other programs at run-time.  As per the video:

`.bash_profile`: on Linux this file is loaded only on login.  (on Mac OS it was loaded for every new terminal instance)
`.bashrc`: on Linux, this file is loaded for every new terminal instance.  (on the Mac OS it only is loaded when explicit new `bash` shell is started)

NOTE: Users running Ubuntu under WSL on Windows will not have a `.bash_profile` script.  This is (presumably) because you are already logged in on Windows, so there is no additional login script to run; in this case, put your customized shell settings in `.bashrc`.

Alex mentioned `aliases`, which are short-cuts used to shorten commands and to provide default options - these are generally user-customized.

### Shell Scripting

In the last video, Alex introduced shell scripts proper.  He mentions that each generally starts with a "shebang" (`#! /<path_to_interpreter>`), which tells the shell which interpreter to use to run the script.

He noted that files by default are not executable, and so to make them runnable one must use the `chmod` command, as in `chmod +x <script>`.  He also demonstrated the `echo` command, which writes strings to the stdout stream, the `$USER` environmental variable, which is the current user's name, and the `whoami` command, which accesses this variable.

## Deep Resources for Further Study

For Free and Open Source Software (FOSS), good* documentation is generally part of the package.  In order to make the most of these resources, one has to spend some time to get to know them; you might want to download one or more of these reference guides for the shell or shells you most commonly use - all this will make more sense the more you use it!

**The GNU Bash Reference Manual**:
https://www.gnu.org/software/bash/manual/bash.pdf

**The Zsh Manual**:
http://zsh.sourceforge.net/Doc/

**KornShell (ksh) Documentation**:
http://kornshell.com/doc/

 *\*opinions often differ regarding what 'good' documentation is, of course!*

## Expanded List of Shell Commands

- `< | > >>` -   (file redirection) - `< <file>` redirects the standard input stream to read from a file; `> <file>` redirects the standard output stream into a new file; `>> <file>` redirects the standard output stream into a file, appending if the file already exists.
NOTE: a common redirection pattern is `2>&1`, which means 'direct the stderr stream (`2`) to the same stream as stdout (`1`).  Another one is `2>/dev/null`, which means 'discard any error messages'.
- `. .. ~`    -   (special directories)   Dot (`.`) and dot-dot (`..`) are "this directory" and "the parent of this directory", respectively.  Tilde (`~`) is the user's home directory.
- `", ', <backtick>`   -   (string delimiters) double-quotes delimit interpolated strings; single-quotes delimit literal strings; backticks delimit commands that are run, returning the output as a string (this backtick thing is an older syntax - the modern form is `$(<command>)`)
- `${<variable>}`   -   (variable expansion)
- `alias` -   define or display aliases
- `apt`   -   Debian/Ubuntu Linux Package Manager - installs and update software
- `brew`  -   Mac OS (add on) Package Manager = installs and update non-Apple software
- `cat`   -   concatenate and print files
- `cd`    -   change directory
- `chmod` -   change file permissions
- `chown` -   change the owner of files
- `chgrp` -   change the group files belong to
- `cp`    -   copy a file
- `curl`  -   Client URL - download the contents of a URL
- `date`  -   display the date and time
- `df`    -   report free disk space
- `diff`  -   display differences between two files
- `du`    -   estimate file space usage
- `echo`  -   write a string out to the standard output
- `env`   -   show all environmental variables (usually a long list!)
- `find`  -   file system search tool - searches on attributes - name, size, type, date
- `git`   -   standard source control tool
- `grep`  -   g/re/p - globally search for a regular expression and print matching lines
- `head`  -   copy the first part of a file
- `history`   -   list, edit, manage and re-execute previously entered commands (see also `fc`)
- `kill`  -   terminate or signal processes
- `less`  -   browse through a file by line or page; also has search functionality
- `ln`    -   link files (create softlinks with -s)
- `ls`    -   list files in one or more directories
- `man`   -   get information about a command line program or command
- `mkdir` -   create a directory
- `mv`    -   move (or rename) a file
- `nano`  -   simple file editor
- `node`  -   JavaScript execution environment
- `npm`   -   the *Node Package Manager* - manages optional JavaScript modules
- `od`    -   octal debugger - dumps files in various formats
- `ps`    -   report process status (typically used as `ps aux | grep <program>`)
- `pwd`   print the current working directory
- `rm`    -   remove (a file)
- `rmdir` -   remove an empty directory
- `sed`   -   stream editor - parses and transforms text
- `sort`  -   sort, merge or sequence check text files
- `source`    -   execute a script, loading functions and variables into the current script (aliased as `.` in modern shells)
- `sudo`  -   execute a command as the root user
- `tail`  -    copy the last part of a file (follow a log with `tail -F`)
- `top`   -   display and update sorted information about processes
- `touch` -   change file access and modification time (also creates empty files)
- `unlink`    -   remove a file system link
- `vi`    -   modal editor for test processing
- `wc`    -   word count - count the number of words or lines or characters in a file
- `which` -   identify which versions of a program are found in the $PATH variable
- `whoami`    -   return the current user's name  
