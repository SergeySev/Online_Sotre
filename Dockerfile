FROM bellsoft/liberica-openjdk-alpine-musl:17

WORKDIR /app

COPY target/fb_project-0.0.1-SNAPSHOT.jar app.jar

COPY python /app/python

RUN apk add --no-cache python3 py3-pip
RUN pip3 install requests
RUN pip3 install requests_toolbelt

CMD exec java -jar app.jar & sleep 30 && python3 /app/python/add_data.py & tail -f /dev/null

