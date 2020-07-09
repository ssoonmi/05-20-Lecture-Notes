## How do Transport Protocols fit in?
- Packages up units of data with instructions for how to put it back together (order of segments), providing reliability in data transfer
- Acts as the middleman between HTTP (application-to-application communication) and IP (machine-to-machine communication)

## Ports
- Virtual interfaces used by transport protocols in order to determine what application or service the data is intended for at the IP address.
- Indicated by a number:
  - 127.0.0.1:3000 indicates port 3000 at IP address 127.0.0.1 (localhost:3000)
  - Written together like this is called a socket

## TCP
- Transmission Control Protocol
- Connection oriented protocol, connecting two sockets to transmit data.
- Segments of data have an order, allowing the data to be built back up on the other side.
- If segments are received out of order or lost, we are able to request the segment to be resent.
- Takes a relatively long amount of time because of the checks in place to make the transmission reliable.
- Examples: HTTP, file transfers, media streaming (YouTube)

## UDP
- User Datagram Protocol
- Connection-less, meaning there is no verification that data was received.
- Services that prioritize speed rely on UDP
- Examples: Live video (Zoom!), VoIP, DNS (coming up soon!)



## Main Takeaways
1. Transport protocols define the middlemen between our Application Layer (HTTP) and our Internet Layer (IP). Converts the data that the applications are communicating with into segments that can be transferred by our IP packets.
2. Ports define which application/service our segments are intended for at a destination IP address.
3. TCP is a reliable transport protocol that protects against loss of data.
- Good use case: HTTP, file transfers, media streaming (YouTube, etc.)
4. UDP is an unreliable transport protocol that prioritizes speed.
- Good use case: real-time communication like live video and VoIP, DNS (prioritizing speed here)
