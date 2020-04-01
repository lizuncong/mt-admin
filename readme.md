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


4.Token简析
  4.1 Token是什么
      Token本质是字符串，用于请求时附带在请求头中，校验请求是否合法及判断用户身份
      
  4.2 Token与Session、Cookie的区别
      Session保存在服务端，用于客户端与服务端连接时，临时保存用户信息，当用户释放连接后，Session将被释放。
      Cookie保存在客户端，当客户端发起请求时，Cookie会附带在http header中，提供给服务端辨识用户身份。
      Token请求时提供，用于校验用户是否具备访问接口的权限。
  4.3 Token的用途主要有三点：
      拦截无效请求，降低服务器处理压力；
      实现第三方API授权，无需每次都输入用户名密码鉴权；
      身份校验，防止CSRF攻击。 

5.JWT简析。JSON Web Token(JWT)是非常流行的跨域身份验证解决方案
