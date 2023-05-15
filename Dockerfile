FROM bellsoft/liberica-openjdk-alpine-musl:17

WORKDIR /app

COPY target/fb_project-0.0.1-SNAPSHOT.jar app.jar

CMD ["java", "-jar", "app.jar"]

