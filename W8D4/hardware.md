## Three main types of Network Hardware
  - Hubs
  - Switches
  - Routers

## Hub
  - Physical layer (layer 1) device
  - Takes a single connection and converts it into multiple connections by duplicating the data and broadcasting it to all connected devices.
  - 'Dumb' devices. No sort of filtering or directed forwarding. Everything that passes into a hub with be duplicated and sent to everything that is connected to it.
  - Very little reason to use them in a modern network.

## Switch
  - Data Link layer (layer 2) device
  - Extend physical connection as well as connection management based on frames and MAC addressess
  - Can be thought of as "intelligent" hubs. They know which devices are connected to them (through a MAC address table) and can direct network traffic to them specifically.
  - A switch can perform three actions with data that it receives:
    - Flood: If it doesn't have the MAC address that was intended in its table, it will send the data out to every device (except where it received it from). If the intended device was found and responds, the switch updates its table so it know specifically where to send the data in the future.
    - Forward: If the MAC address is already in its table, it will send the data specifically to that device.
    - Filter: If the intended device for the data is the same as the source, the switch will not do anything with it and drop the data. This is beneficial because no other device needs to know about it, so we stop the propagation.

## Router
  - Network layer (layer 3) device
  - Manage packets at the network level and handle routing between remote networks
  - Connect separate networks with each other.
  - Maintains a routing table to pass data to hardware connected to the local network.
  - A router uses Network Address Translation (NAT), which assigns the router one IP address for all external communication. The router is able to translate ports associated with that data to the IP address used on the internal network for different devices.




## Main Takeaways
1. Three main categories of hardware devices are hubs, switches, and routers
2. A hub will broadcast to everything that it's connected to.
3. A switch is able to pass data to a specific device on a network if it already has a reference (forward), or it can broadcast to all devices (flood) if its MAC address is not in its table yet.
4. A router connects a local network to other networks. A single IP address is used for external communication, then the router can forward to the IP addresses used on the internal network.