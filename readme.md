Nginx服务器搭建
1.安装nginx：
    windows系统通过下载官网安装包，下载地址：http://nginx.org/en/download.html
    mac系统通过brew安装
        1.安装Homebrew
        2.安装nginx。brew install nginx
        3.启动nginx。终端输入brew services start nginx。启动成功，就可以直接转到浏览器输入：http://localhost:8080
        如果出现welcome to nginx界面，则表示安装并启动成功.
        4.nginx默认安装到/usr/local/Cellar/nginx/目录下
        5.进入目录/usr/local/Cellar/nginx/1.13.12/html/。在html文件夹里新建test.json文件，
        随便输入点内容，保存。回到浏览器输入http://localhost:8080/test.json
        6.nginx重启命令：brew services restart nginx
                    

2.修改配置文件。nginx配置文件在/usr/local/etc/nginx/目录下的nginx.conf文件。
  修改一：添加当前登录用户为owner
        user lizuncong owner
  修改二：在结尾大括号之前添加：
        include /Users/lizuncong/Documents/node-projects/express-upload/upload.conf;
        这里/Users/lizuncong/Documents/node-projects/express-upload/是资源文件路径。
        /Users/lizuncong/Documents/node-projects/express-upload/upload.conf是额外的配置文件，
        当前把/Users/lizuncong/Documents/node-projects/express-upload/upload.conf配置文件的内容
        加入nginx.conf也是可行的。
  修改三：添加/Users/lizuncong/Documents/node-projects/express-upload/upload.conf


3.MySQL数据库搭建
  安装MySQL，地址：https://dev.mysql.com/downloads/mysql/
  安装Navicat(MySQL的客户端)破解版，在百度网盘
  下载完navicat后，在终端输入 sudo spctl --master-disable即可破解。
  启动MySQL，进入mysql目录：
  cd /usr/local/mysql-xxxx/bin
  ./mysqld
