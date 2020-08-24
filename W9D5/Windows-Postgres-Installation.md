# Installing PostgreSQL 12 and Postbird on Windows

You will install three pieces of software so that you can start using
PostgreSQL. You will install PostgreSQL itself on your Windows installation.
Then, you will install `psql` in your Ubuntu installation. Then you will also
install Postbird, a cross-platform graphical user interface that makes working
with SQL and PostgreSQL better than just using the command line tool `psql`.

When you read "installation", that means the actual OS that's running on your
machine. So, you have a Windows installation, Windows 10, that's running when
you boot your computer. Then, when you start the Ubuntu installation, it's as if
there's a completely separate computer running inside your computer. It's like
having two completely different laptops.

## Installing PostgreSQL 12

To install PostgreSQL 12, you need to download the installer from the Internet.
PostgreSQL's commercial company, Enterprise DB, offers installers for PostgreSQL
for every major platform.

Open https://www.enterprisedb.com/downloads/postgres-postgresql-downloads. Click
the link for PostgreSQL 12 for Windows x86-64.

![Download PostgreSQL]

Once that installer downloads, run it. You need to go through the normal steps
of installing software.

* Yes, Windows, let the installer make changes to _my_ device.
* Thanks for the welcome. Next.
* Yeah, that's a good place to install it. Next.
* I don't want that pgAdmin nor the Stack Builder things. Uncheck. Uncheck.
  Next.

  ![Deselect pgAdmin 4 and Stack Builder components]

* Also, great looking directory. Thanks. Next.
* Oooh! A password! I'll enter ********. I sure won't forget that because, if I
  do, I'll have to uninstall and reinstall PostgreSQL and lose all of my hard
  work. **Seriously, write down this password or use one you will not forget.**
  Next.
* Sure. 5432. Good to go. Next.
* Not even sure what that means. Default! Next.
* Yep. Looks good. Next.
* Geez. Really? Thanks. Next.
* _Time to get a tea._
* All right! All done. Finish!

## Installing PostgreSQL Client Tools on Ubuntu

Now, to install the PostgreSQL Client tools for Ubuntu. You need to do this so
that the Node.js (and later Python) programs running on your Ubuntu installation
can access the PostgreSQL server running on your Windows installation. You need
to tell `apt`, the package manager, that you want it to go find the PostgreSQL
12 client tools from PostgreSQL itself rather than the common package
repositories. You do that by issuing the following two commands. Copy and paste
them one at a time into your shell. (If your Ubuntu shell isn't running, start
one.)

**Pro-tip**: Copy those commands because you're not going to type them, right?
After you copy one of them, you can just right-click on the Ubuntu shell. That
should paste them in there for you.

```shell
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
```

If prompted for your password, type it.

```shell
echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" | sudo tee  /etc/apt/sources.list.d/pgdg.list
```

The last line of output of those two commands running should read "OK". If it
does not, try copying and pasting them one at a time.

Now that you've registered the PostgreSQL repositories as a source to look for
PostgreSQL, you need to update the `apt` registry. You should do this before you
install _any_ software on Ubuntu.

```shell
sudo apt update
```

Once that's finished running, the new entries for PostgreSQL 12 should be in the
repository. Now, you can install them with the following command.

```shell
sudo apt install postgresql-client-12 postgresql-common
```

If it asks you if you want to install them, please tell it "Y".

Test that it installed by typing `psql --version`. You should see it print out
information about the version of the installed tools. If it tells you that it
can't find the command, try these instructions over.

## Configuring the client tools

Since you're going to be accessing the PosgreSQL installation from your Ubuntu
installation on your Windows installation, you're going to have to type that
you want to access it over and over, which means extra typing. To prevent you
from having to do this, you can customize your shell to always add the extra
commands for you.

This assumes you're still using Bash. If you changed the shell that your Ubuntu
installation uses, please follow that shell's directions for adding an alias to
its startup file.

Make sure you're in your Ubuntu home directory. You can do that by typing `cd`
and hitting enter. Use `ls` to find out if you have a `.bash_profile` file. Type
`ls .bash_profile`. If it shows you that one exists, that's the one you will add
the alias to. If it tells you that there is no file named that, then type `ls
.profile`. If it shows you that one exists, that's the one you will add the
alias to. If it shows you that it does not exist, then use the file name
`.bash_profile` in the following section.

Now that you know which profile file to use, type `code «profile file name»`
where "profile file name" is the name of the file you determined from the last
section. Once Visual Studio Code starts up with your file, at the end of it (or
if you've already added aliases, in that section), type the following.

```shell
alias psql="psql -h localhost"
```

When you run `psql` from the command line, it will now always add the part about
wanting to connect to _localhost_ every time. You would have to type that each
time, otherwise.

To make sure that you set that up correctly, type `psql -U postgres postgres`.
This tells the `psql` client that you want to connect as the user "postgres"
(`-U postgres`) to the database postgres (`postgres` at the end), which is the
default database created when PostgreSQL is installed. It will prompt you for a
password. Type the password that you used when you installed PostgrSQL, earlier.
If the alias works correctly and you type the correct password, then you should
see something like the following output.

```shell
psql (12.2 (Ubuntu 12.2-2.pgdg18.04+1))
Type "help" for help.

postgres=#
```

Type `\q` and hit Enter to exit the PostgreSQL client tool.

Now, you will add a user for your Ubuntu identity so that you don't have to
specify it all the time. Then, you will create a file that PostgreSQL will use
to automatically send your password every time.

Copy and paste the following into your Ubuntu shell. Think of a password that
you want to use for your user. Replace the password in the single quotes in the
command with the password that you want. It _has_ to be a non-empty string.
PostgreSQL doesn't like it when it's not.

```shell
psql -U postgres -c "CREATE USER `whoami` WITH PASSWORD 'password' SUPERUSER"
```

It should prompt you for a password. Type the password that you created when you
installed PostgreSQL. Once you type the correct password, you should see "CREATE
ROLE".

Now you will create your PostgreSQL password file. Type the following into your
Ubuntu shell to open Visual Studio Code and create a new file.

```shell
code ~/.pgpass
```

In that file, you will add this line, which tells it that on localhost for port
5432 (where PostgreSQL is running), for all databases (*), use your Ubuntu user
name and the password that you just created for that user with the `psql`
command you just typed. (If you have forgotten your Ubuntu user name, type
`whoami` on the command line.) Your entry in the file should have this format.

```
localhost:5432:*:«your Ubuntu user name»:«the password you just used»
```

For the curriculum writers' systems, it looks like this in Visual Studio Code.

![pgpass file]

Once you have that information in the file, save it, and close Visual Studio
Code.

The last step you have to take is change the permission on that file so that it
is only readable by your user. PostgreSQL will ignore it if just anyone can read
and write to it. This is for _your_ security. Change the file permissions so
only you can read and write to it. You did this once upon a time. Here's the
command.

```shell
chmod go-rw ~/.pgpass
```

You can confirm that only you have read/write permission by typing `ls -al
~/.pgpass`. That should return output that looks like this, with your Ubuntu
user name instead of "appacademy".

```shell
-rw------- 1 appacademy appacademy 37 Mar 28 21:20 /home/appacademy/.pgpass
```

Now, try connecting to PostreSQL by typing `psql postgres`. Because you added
the alias to your startup script, and because you created your **.pgpass** file,
it should now connect without prompting you for any credentials! Type `\q` and
press Enter to exit the PostgreSQL command line client.

## Installing Postbird

Head over to the Postbird releases page on GitHub. Click the installer for
Windows which you can recognize because it's the only file in the list that ends
with ".exe".

![Download Postbird]

After that installer downloads, run it. You will get a warning from Windows that
this is from an unidentified developer. If you don't want to install this, find
a PostgreSQL GUI client that you do trust and install it or do everything from
the command line.

![Postbird installation warning]

You should get used to seeing this because many open-source applications aren't
signed with the Microsoft Store for monetary and philosophical reasons.

Otherwise, if you trust Paxa like App Academy and tens of thousands of other
developers do, then click the link that reads "More info" and the "Run anyway"
button.

![Postbird run anyway]

When it's done installing, it will launch itself. Test it out by typing the
"postgres" into the "Username" field and the password from your installation in
the "Password" field. Click the Connect button. It should properly connect to
the running

You can close it for now. It also installed an icon on your desktop. You can
launch it from there or your Start Menu at any time.

## What you did

You installed and configured PosgreSQL 12, a relational database management
system, and tools to use it! Well done!

[Download PostgreSQL]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/download-postgresql.png
[Deselect pgAdmin 4 and Stack Builder components]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/postgresql-installation-uncheck-components.png
[Download Postbird]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/download-postbird.png
[Postbird installation warning]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/postbird-installation-warning.png
[Postbird run anyway]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/postbird-installation-run-anyway.png
[pgpass file]: https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Module-SQL/assets/windows-pgpass-configuration.png
