###
 # @Date: 2020-01-20 20:45:06
 # @LastEditors  : Asen Wang
 # @LastEditTime : 2020-01-20 21:09:27
 # @content: I
 ###
docker build -t registry.cn-shanghai.aliyuncs.com/first_ry/mblog:v1 .
docker run -d -p 4000:4000 --name blogMidv1 registry.cn-shanghai.aliyuncs.com/first_ry/mblog:v1
docker push registry.cn-shanghai.aliyuncs.com/first_ry/mblog:v1

version: '2'

services:
  mblog:
    image: registry.cn-shanghai.aliyuncs.com/first_ry/mblog:v1
    restart: always
    ports:
      - 4000:4000