FROM centos/nodejs-12-centos7
USER root
workdir /src
run node -v
COPY . .

run chmod +x autoSRT.sh



ENTRYPOINT ["./autoSRT.sh"]

CMD ["HEAD"]
