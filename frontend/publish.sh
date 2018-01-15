#!/bin/bash
sudo cp -a ~/apps/startum/frontend/. ~/htdocs
sudo /opt/bitnami/ctlscript.sh restart apache
echo "published to http://54.175.185.8/"
