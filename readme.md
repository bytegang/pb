# Proto Buffer


git clone 之后在代码仓库目录执行下面命令:

- proto-buffer编译gRPC:bastion: `protoc --go_out=. --go-grpc_out=. bastion.proto`

- `protoc --proto_path=src --js_out=library=whizz/ponycopter,binary:build/gen src/foo.proto src/bar/baz.proto
  `
  
//https://juejin.cn/post/6844903698351521805  前端调用gRPC

前端调用JS
```

protoc --go_out=. --go-grpc_out=. bastion.proto
protoc -I=. bastion.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.



```
