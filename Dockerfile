# 基础镜像
FROM openjdk:11.0-jre-buster

# 设定时区
ENV TZ=Asia/Shanghai
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 安装 FFmpeg
RUN apt-get update && apt-get install -y ffmpeg

# 拷贝jar包
COPY webpan-1.0-SNAPSHOT.jar /app.jar

# 入口
ENTRYPOINT ["java", "-jar", "/app.jar"]