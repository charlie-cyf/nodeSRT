FROM debian:latest
USER root
workdir /src
COPY autoSRT.sh .

RUN apt-get update
RUN apt-get -y install curl gnupg git build-essential
RUN curl -sL https://deb.nodesource.com/setup_12.x  | bash -
RUN apt-get -y install nodejs
RUN npm i -g jest
run chmod +x autoSRT.sh



ENTRYPOINT ["./autoSRT.sh"]

CMD ["HEAD"]
