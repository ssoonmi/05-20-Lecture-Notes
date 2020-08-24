## What is DNS?
- Domain Name System
- Provides names for devices on a network instead of having to use IP addresses.
- Simple and distributed (specifically formatted text files that are redundant across many servers)

## Domains and Subdomains
- Domains are the "friendly" name for a website's host (the server that is responding to requests with content)
- Top-level domain (TLD): the last part of the URL before application routes. Common examples would be .com, .org, .gov, etc.
  - TLDs are managed by domain registries
- Second-level domain: often combined with the TLD to be referred to as a generic "domain", this is the main name associated with the website. For example, google is the second-level domain, which we may refer to as the domain google.com. appacademy is the second-level domain for what we may refer to as the domain appacademy.io.
  - Second-level domains are purchased from domain registrars.
- Subdomains can be expanded even further to the left (but after the `https://` protocol) into third-level, fourth-level, etc. `www` would be considered a subdomain, or `open` from `open.appacademy.io`.

## DNS Resolution
- Generally, we start at the right-most domain and ask the name server if they have the IP address for our desired full domain.
- Name servers that don't have the IP address on file will pass us along to another, more relevant name server until an IP address is found.
- The name server that has the IP address on file is referred to as the authoritative name server for our domain.

## Zone Files and DNS Record Types
- A zone file is maintained by name servers that contains host names, IP addresses, and resource types
- The zone file also tracks the Time to Live (TTL) for records. This indicates long we should keep our records cached after a request comes in. Shorter caches mean more frequent updates to the current IP address, but longer caches mean less frequent reading of the zone file, which can be a longer operation.
- There are many comon record types present in these zone files:
  - SOA: Start of Authority. Points to a name server that is the primary authority for the domain. This record is present on every name server.
  - NS: Name Servers. Points to name servers for the zone. There will always be at least two name servers per zone for redundancy.
  - A / AAAA: Map a resource directly to an IP address. These are the ultimate records that our queries are looking for. `A` records are used for IPv4 addresses and `AAAA` records are used for IPv6 addresses.
  - CNAME: Acts as an alias, indicating what resource this domain should also point to. (We often see this with the www subdomain, where a CNAME record for www would exist for google.com, indicating we can request `www.google.com` and get the same response as `google.com`)
  - MX: Mail Exchanger. Used to direct messages to a mail server instead of an IP address (allows us to use `@gmail.com` instead of `@123.45.67.89` - which is obviously not the actual address)



## Main Takeaways
1. Domains are the friendly names that we can refer to instead of having to remember IP addresses
2. Top-level domains (TLDs) are the right-most part of the URL before application routes. Moving left we get second-level, third-level, etc., subdomains
- For https://open.appacademy.io/learn/js-py--feb-2020-online/
  - Top-level domain: io
  - Second-level domain: appacademy
  - Third-level domain: open 
3. Domains are tracked using DNS records in zone files that are maintained by name servers
4. There are several common DNS record types. Be familiar with each:
- SOA
- NS
- A / AAAA
- CNAME
- MX