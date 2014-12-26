FROM nodesource/node

WORKDIR ~/src

# ONBUILD ADD package.json /root/
# ONBUILD ADD . /root/
ONBUILD RUN npm install 2>&1

ENTRYPOINT ["npm start"]
