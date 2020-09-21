# Review from Alpine Linux Setup Homework
* Did anyone run into issues that you couldn't resolve on setup?
* `setup-alpine -q` - the `-q` reduces the number of questions for setup
* Check that your virtual machine is connected to the network with `ping google.com`. Escape this with ctrl+c

# Installing Packages on Alpine Linux Video and Reading [(12 Minutes)](https://www.google.com/search?q=12+minute+timer&oq=12+minute+timer&aqs=chrome..69i57j0l7.3104j0j7&sourceid=chrome&ie=UTF-8)

### [Alpine Linux Packages](https://pkgs.alpinelinux.org/packages)


## APK's Three Repositories
* Main
* Community
* Testing

## Things to Avoid in Packages:
* Packages from the Testing Repository
* Edge version (hasn't necessarily been fully tested)

## Commands from the Video:
* `ping google.com`
* Install a package: `apk add {package_name}`
* Search for a package: `apk search {package_name}`
* Search for a package by command: `apk search cmd:{cmd_str}`
* Search for a package exactly matching search term: `apk search -e {package_name}`
* Search for a package containing: `apk search {search_string}*`
* Remove a package: `apk del package_name`
* Remove a package and it's dependencies recursively: `apk del -r {package_name}` 
* Simulate a recursive delete: `apk del -sr {package_name}`


* Navigation
    * [Python Threading](./Python_Threading.md)
    * [Linux Basics](./Linux_Basics.md)
    * [Back to LOs](./README.MD)
