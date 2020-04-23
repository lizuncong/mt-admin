运行本项目需要安装mysql及redis。
首先启动redis
运行npm run build执行打包
运行npm run dev启动服务

普通方法测试可以使用jest
http接口测试使用supertest

TODO:
1.统一文件服务：上传文件时，如果上传的文件在当前node服务所在目录，比如使用path.join(__dirname, '../upload-files')
指定上传的文件的目录。这样做有个问题，如果服务部署到多个服务器，则这些服务器都有个upload-files目录，而且不能共享。
因此后续需要使用统一文件服务器存储上传的文件。
