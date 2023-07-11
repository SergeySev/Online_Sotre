FROM bellsoft/liberica-openjdk-alpine-musl:17

WORKDIR /app

COPY target/fb_project-0.0.1-SNAPSHOT.jar app.jar

COPY python /app/python

RUN apk add --no-cache python3 py3-pip
RUN pip3 install requests
RUN pip3 install requests_toolbelt

RUN apk add --no-cache nodejs npm

COPY Frontend /app/

RUN npm install

#CMD npm start & exec java -jar app.jar & sleep 10 && python3 /app/python/add_data.py & tail -f /dev/null
CMD python3 /app/python/add_data.py & npm start & exec java -jar app.jar

