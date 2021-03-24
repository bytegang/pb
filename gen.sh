#!/bin/bash

protoc --go_out=. --go-grpc_out=. bastion.proto
go mod init github.com/bytegang/pb
go mod tidy