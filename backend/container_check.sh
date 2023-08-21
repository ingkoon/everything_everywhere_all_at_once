#/bin/sh

SERVER_CONTAINER_ID=`docker ps -aq --filter 'tag=server'`

if [ -n "$SERVER_CONTAINER_ID" ];
  then
    echo "server container exist"
    docker stop $SERVER_CONTAINER_ID
    docker rm $SERVER_CONTAINER_ID
    docker run -d -p 8081:8081 --name server eeaao:server
  else
    echo "node container not exist"
    docker run -d -p 8081:8081 --name server eeaao:server
fi