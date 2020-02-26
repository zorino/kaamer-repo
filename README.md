# kAAmer repo


### Installation

Repository data is located in src/data.json

To test locally.

``` shell
npm install
gatsby build
gatsby serve
```

To deploy with nginx.

``` shell
npm install
# change pathPrefix in gatsby-config.js if needed
gatsby build --prefix-paths
```

Example location (prefix path) nginx config :

``` nginx
        location /kaamer-repo/ {
                alias /data/kaamer-repo/public/;
                index index.html;
        }
```

