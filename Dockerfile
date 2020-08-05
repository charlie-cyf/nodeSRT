FROM debian:latest
USER root
workdir /src
COPY . .

RUN apt-get update
RUN apt-get -y install curl gnupg git
RUN curl -sL https://deb.nodesource.com/setup_14.x  | bash -
RUN apt-get -y install nodejs
run chmod +x autoSRT.sh



ENTRYPOINT ["./autoSRT.sh"]

CMD ["HEAD"]
