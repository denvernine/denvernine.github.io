# denvernine.github.io

use [rbenv](https://github.com/rbenv/rbenv).

## dev environment

```sh
$ cat /etc/system-release /etc/os-release
Amazon Linux release 2 (Karoo)
NAME="Amazon Linux"
VERSION="2"
ID="amzn"
ID_LIKE="centos rhel fedora"
VERSION_ID="2"
PRETTY_NAME="Amazon Linux 2"
ANSI_COLOR="0;33"
CPE_NAME="cpe:2.3:o:amazon:amazon_linux:2"
HOME_URL="https://amazonlinux.com/"

$ ruby -v
ruby 2.6.5p114 (2019-10-01 revision 67812) [x86_64-linux]

$ gem -v
3.0.3

$ bundle -v
Bundler version 2.1.1
```

## install

```sh
$ git clone https://github.com/denvernine/denvernine
$ bundle init \
  && bundle config set path 'vendor/bundle' \
  && bundle install
```

## build

```sh
$ bundle exec jekyll build
```

### auto-regeneration

```sh
$ bundle exec jekyll serve \
  --watch \
  --source=. \
  --host=HOST \
  --port=PORT
```
