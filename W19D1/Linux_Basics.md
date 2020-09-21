# Linux Basics

* OS like Windows and MacOS
* Open-source, unlike Windows and MacOS
* Some adaptations/customizations/distributions of Linux are specifically optimized for desktops or servers
* Often used on servers, and hosted/cloud-based services

## Shells
* bash
* zsh
* sh

## Commands 
* Escape: `control + c`
* List the files {in optional path}: `ls {./optional_path}`
    * `-l` flag shows columns of additional file information
* change directory: `cd`
* print working directory: `pwd`
* display value of an environment variable: `echo ${variable}`
* list running processes: `ps`
    * `-a`, `-au`, `-aux` flag shows all users' processes
    * `-x` flag includes background and non-terminal processes
    * `-u` includes additional process details
* read contents of a file: `less` or `more`
* Chain commands together, or "Piping": `|`
    * example: add paging up/down to the output `ls -la /usr/local/bin | less`
* Concatenate file content for view (without paging) or for export: `cat {file_name1} {file_name2}`
    * `>` can be used to passed concatenated content into a new or (overwrite an old) file: `cat {file_name1} {file_name2} > {file_name3}`
    * `>>` can be used to append to another file: `cat {file_name2} >> {file_name1}`
* Output the last portion of a file: `tail {file_name}`
    * `-f` flag adds a follow so you can see what happens to the file after you 'tail' it.
    * `-{integer}` flag sets the number of lines for the `tail` to display
* Search for text and return line numbers where found: `grep {search_term}`
    * The `-R` flag recursively searches a directory for the search term
    * Enclosing the search term in quotes will search for the full phrase
    * Use a `|` to view your results with paging: `grep -R localhost /etc | less`
* Search for a file by name: `find . -name "package.json"`
    * by part of a name: `find . -name "*.json"`
    * ignoring case: `find . -iname "readme*"`
* View current ownership of files/folders: `ls -l` or `ls -la`


    | permissions |   | user     | group |      |              | filename            |
    |-------------|---|----------|-------|------|--------------|---------------------|
    | -rw-r--r--  | 1 | edherman | staff | 1402 | Sep 21 10:34 | Alpine_Linux.md     |
    | -rw-r--r--  | 1 | edherman | staff |  763 | Sep 21 11:10 | Linux_Basics.md     |
    | -rw-r--r--  | 1 | edherman | staff | 5262 | Sep 21 10:34 | Python_Threading.md |
    | -rw-r--r--  | 1 | edherman | staff |  620 | Sep 21 10:34 | README.MD           |
    | drwxr-xr-x  | 5 | edherman | staff |  160 | Sep 18 18:37 | code_examples       |
    
    * Soooo... what does `drwxrwxrwx` tell us?!
        * First char indicates if it is a directory (or other special case)
        * Next three indicate the user's permissions
        * Middle three indicate the group's permissions
        * Last three indicate all user's on the systems permissions
        * An `_` indicates that permission is unavailable to the user/group/system
    * Set ownership of files/folders: `chown {user}:{group} {file_name}`
    * Change read(r), write(w), and execute(x) permissions: `chmod {options} {file_name}`
        * Options:
            * `a+{any combo of r, w, x}` adds permissions for all (`a`) users
            * `o-{any combo of r, w, x}` removes permissions from other (`o`) users
            * `u={any combo of r, w, x}` sets the user permissions. The `=` operator overwrites previous permissions
            * `g={any combo of r, w, x}` sets the group permissions. The `=` operator overwrites previous permissions
* View the manual for a command: `man {command}`
    * View more in depth info on a command: `{command} -h` or sometimes `--help`



## Editors
* `vi {file_name}` or `vim {file_name}`
* `nano {file_name}`

## Package Managers
* `apt` - Advance Package Toool for Debian and Ubuntu
* `yum` - Yellowdog Updateer Modified for Red Hat
* `apk` - Alpine Package keeper for Alpine Linux

## [Download a/A's Linux Basics Article here](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/docker/topics/alpine-linux/assets/reading-basics-linux.pdf)


* Navigation
    * [Alpine Linux](./Alpine_Linux.md)
    * [Python Threading](./Python_Threading.md)
    * [Back to LOs](./README.MD)