# TrackBat
A project to learn more about how much we really are being tracked online.

The savy amongst us know that we can use our `/etc/hosts` file to route sites we don't like to localhost to stop our computers from speaking to trackers.

```bash
# cat /etc/hosts
127.0.0.1	localhost
255.255.255.255	broadcasthost
::1             localhost
127.0.0.1       facebook.com
127.0.0.1       www.facebook.com
```

However, if you point your `/etc/hosts` to trackbat, you can help us gather data about which sites and which endpoints are tracking you!  

```bash
# cat /etc/hosts
127.0.0.1	localhost
255.255.255.255	broadcasthost
::1             localhost
trackbat.com    facebook.com
trackbat.com    www.facebook.com
```

This project is developed in the open, and be viewed at [https://github.com/evantahler/trackbat](https://github.com/evantahler/trackbat)

Thanks!
