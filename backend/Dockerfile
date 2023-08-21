FROM openjdk:11-jdk
VOLUME /tmp
ARG JAR_FILE=build/libs/jukebox-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} eeaao.jar

ENTRYPOINT ["java", "-jar", "/eeaao.jar"]