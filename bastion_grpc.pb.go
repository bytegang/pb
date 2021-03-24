// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package pb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// BastionClient is the client API for Bastion service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BastionClient interface {
	AuthPw(ctx context.Context, in *ReqAuthPassword, opts ...grpc.CallOption) (*User, error)
	AuthPk(ctx context.Context, in *ReqAuthPublicKey, opts ...grpc.CallOption) (*User, error)
	AuthKb(ctx context.Context, in *ReqSshUser, opts ...grpc.CallOption) (*UserKb, error)
	FetchAsset(ctx context.Context, in *ReqAssetsQuery, opts ...grpc.CallOption) (*AssetList, error)
	FetchAssetSshConfig(ctx context.Context, in *ReqAssetUser, opts ...grpc.CallOption) (*AssetSshAccount, error)
	SshShellExec(ctx context.Context, in *ReqSshExec, opts ...grpc.CallOption) (*ResStatus, error)
	PushSshSessionLog(ctx context.Context, in *ReqSshLog, opts ...grpc.CallOption) (*ResStatus, error)
	PushSshCmd(ctx context.Context, in *ReqSshCmd, opts ...grpc.CallOption) (*ResStatus, error)
	PushAuthLog(ctx context.Context, in *ReqAuthLog, opts ...grpc.CallOption) (*ResStatus, error)
	RemoteExec(ctx context.Context, in *ReqAssetCmd, opts ...grpc.CallOption) (*ResStatus, error)
}

type bastionClient struct {
	cc grpc.ClientConnInterface
}

func NewBastionClient(cc grpc.ClientConnInterface) BastionClient {
	return &bastionClient{cc}
}

func (c *bastionClient) AuthPw(ctx context.Context, in *ReqAuthPassword, opts ...grpc.CallOption) (*User, error) {
	out := new(User)
	err := c.cc.Invoke(ctx, "/bastion.Bastion/AuthPw", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bastionClient) AuthPk(ctx context.Context, in *ReqAuthPublicKey, opts ...grpc.CallOption) (*User, error) {
	out := new(User)
	err := c.cc.Invoke(ctx, "/bastion.Bastion/AuthPk", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bastionClient) AuthKb(ctx context.Context, in *ReqSshUser, opts ...grpc.CallOption) (*UserKb, error) {
	out := new(UserKb)
	err := c.cc.Invoke(ctx, "/bastion.Bastion/AuthKb", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bastionClient) FetchAsset(ctx context.Context, in *ReqAssetsQuery, opts ...grpc.CallOption) (*AssetList, error) {
	out := new(AssetList)
	err := c.cc.Invoke(ctx, "/bastion.Bastion/FetchAsset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bastionClient) FetchAssetSshConfig(ctx context.Context, in *ReqAssetUser, opts ...grpc.CallOption) (*AssetSshAccount, error) {
	out := new(AssetSshAccount)
	err := c.cc.Invoke(ctx, "/bastion.Bastion/FetchAssetSshConfig", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bastionClient) SshShellExec(ctx context.Context, in *ReqSshExec, opts ...grpc.CallOption) (*ResStatus, error) {
	out := new(ResStatus)
	err := c.cc.Invoke(ctx, "/bastion.Bastion/SshShellExec", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bastionClient) PushSshSessionLog(ctx context.Context, in *ReqSshLog, opts ...grpc.CallOption) (*ResStatus, error) {
	out := new(ResStatus)
	err := c.cc.Invoke(ctx, "/bastion.Bastion/PushSshSessionLog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bastionClient) PushSshCmd(ctx context.Context, in *ReqSshCmd, opts ...grpc.CallOption) (*ResStatus, error) {
	out := new(ResStatus)
	err := c.cc.Invoke(ctx, "/bastion.Bastion/PushSshCmd", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bastionClient) PushAuthLog(ctx context.Context, in *ReqAuthLog, opts ...grpc.CallOption) (*ResStatus, error) {
	out := new(ResStatus)
	err := c.cc.Invoke(ctx, "/bastion.Bastion/PushAuthLog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bastionClient) RemoteExec(ctx context.Context, in *ReqAssetCmd, opts ...grpc.CallOption) (*ResStatus, error) {
	out := new(ResStatus)
	err := c.cc.Invoke(ctx, "/bastion.Bastion/RemoteExec", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BastionServer is the server API for Bastion service.
// All implementations must embed UnimplementedBastionServer
// for forward compatibility
type BastionServer interface {
	AuthPw(context.Context, *ReqAuthPassword) (*User, error)
	AuthPk(context.Context, *ReqAuthPublicKey) (*User, error)
	AuthKb(context.Context, *ReqSshUser) (*UserKb, error)
	FetchAsset(context.Context, *ReqAssetsQuery) (*AssetList, error)
	FetchAssetSshConfig(context.Context, *ReqAssetUser) (*AssetSshAccount, error)
	SshShellExec(context.Context, *ReqSshExec) (*ResStatus, error)
	PushSshSessionLog(context.Context, *ReqSshLog) (*ResStatus, error)
	PushSshCmd(context.Context, *ReqSshCmd) (*ResStatus, error)
	PushAuthLog(context.Context, *ReqAuthLog) (*ResStatus, error)
	RemoteExec(context.Context, *ReqAssetCmd) (*ResStatus, error)
	mustEmbedUnimplementedBastionServer()
}

// UnimplementedBastionServer must be embedded to have forward compatible implementations.
type UnimplementedBastionServer struct {
}

func (UnimplementedBastionServer) AuthPw(context.Context, *ReqAuthPassword) (*User, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AuthPw not implemented")
}
func (UnimplementedBastionServer) AuthPk(context.Context, *ReqAuthPublicKey) (*User, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AuthPk not implemented")
}
func (UnimplementedBastionServer) AuthKb(context.Context, *ReqSshUser) (*UserKb, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AuthKb not implemented")
}
func (UnimplementedBastionServer) FetchAsset(context.Context, *ReqAssetsQuery) (*AssetList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FetchAsset not implemented")
}
func (UnimplementedBastionServer) FetchAssetSshConfig(context.Context, *ReqAssetUser) (*AssetSshAccount, error) {
	return nil, status.Errorf(codes.Unimplemented, "method FetchAssetSshConfig not implemented")
}
func (UnimplementedBastionServer) SshShellExec(context.Context, *ReqSshExec) (*ResStatus, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SshShellExec not implemented")
}
func (UnimplementedBastionServer) PushSshSessionLog(context.Context, *ReqSshLog) (*ResStatus, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PushSshSessionLog not implemented")
}
func (UnimplementedBastionServer) PushSshCmd(context.Context, *ReqSshCmd) (*ResStatus, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PushSshCmd not implemented")
}
func (UnimplementedBastionServer) PushAuthLog(context.Context, *ReqAuthLog) (*ResStatus, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PushAuthLog not implemented")
}
func (UnimplementedBastionServer) RemoteExec(context.Context, *ReqAssetCmd) (*ResStatus, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoteExec not implemented")
}
func (UnimplementedBastionServer) mustEmbedUnimplementedBastionServer() {}

// UnsafeBastionServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BastionServer will
// result in compilation errors.
type UnsafeBastionServer interface {
	mustEmbedUnimplementedBastionServer()
}

func RegisterBastionServer(s grpc.ServiceRegistrar, srv BastionServer) {
	s.RegisterService(&Bastion_ServiceDesc, srv)
}

func _Bastion_AuthPw_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReqAuthPassword)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BastionServer).AuthPw(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bastion.Bastion/AuthPw",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BastionServer).AuthPw(ctx, req.(*ReqAuthPassword))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bastion_AuthPk_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReqAuthPublicKey)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BastionServer).AuthPk(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bastion.Bastion/AuthPk",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BastionServer).AuthPk(ctx, req.(*ReqAuthPublicKey))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bastion_AuthKb_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReqSshUser)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BastionServer).AuthKb(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bastion.Bastion/AuthKb",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BastionServer).AuthKb(ctx, req.(*ReqSshUser))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bastion_FetchAsset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReqAssetsQuery)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BastionServer).FetchAsset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bastion.Bastion/FetchAsset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BastionServer).FetchAsset(ctx, req.(*ReqAssetsQuery))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bastion_FetchAssetSshConfig_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReqAssetUser)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BastionServer).FetchAssetSshConfig(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bastion.Bastion/FetchAssetSshConfig",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BastionServer).FetchAssetSshConfig(ctx, req.(*ReqAssetUser))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bastion_SshShellExec_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReqSshExec)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BastionServer).SshShellExec(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bastion.Bastion/SshShellExec",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BastionServer).SshShellExec(ctx, req.(*ReqSshExec))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bastion_PushSshSessionLog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReqSshLog)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BastionServer).PushSshSessionLog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bastion.Bastion/PushSshSessionLog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BastionServer).PushSshSessionLog(ctx, req.(*ReqSshLog))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bastion_PushSshCmd_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReqSshCmd)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BastionServer).PushSshCmd(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bastion.Bastion/PushSshCmd",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BastionServer).PushSshCmd(ctx, req.(*ReqSshCmd))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bastion_PushAuthLog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReqAuthLog)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BastionServer).PushAuthLog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bastion.Bastion/PushAuthLog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BastionServer).PushAuthLog(ctx, req.(*ReqAuthLog))
	}
	return interceptor(ctx, in, info, handler)
}

func _Bastion_RemoteExec_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReqAssetCmd)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BastionServer).RemoteExec(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/bastion.Bastion/RemoteExec",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BastionServer).RemoteExec(ctx, req.(*ReqAssetCmd))
	}
	return interceptor(ctx, in, info, handler)
}

// Bastion_ServiceDesc is the grpc.ServiceDesc for Bastion service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Bastion_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "bastion.Bastion",
	HandlerType: (*BastionServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "AuthPw",
			Handler:    _Bastion_AuthPw_Handler,
		},
		{
			MethodName: "AuthPk",
			Handler:    _Bastion_AuthPk_Handler,
		},
		{
			MethodName: "AuthKb",
			Handler:    _Bastion_AuthKb_Handler,
		},
		{
			MethodName: "FetchAsset",
			Handler:    _Bastion_FetchAsset_Handler,
		},
		{
			MethodName: "FetchAssetSshConfig",
			Handler:    _Bastion_FetchAssetSshConfig_Handler,
		},
		{
			MethodName: "SshShellExec",
			Handler:    _Bastion_SshShellExec_Handler,
		},
		{
			MethodName: "PushSshSessionLog",
			Handler:    _Bastion_PushSshSessionLog_Handler,
		},
		{
			MethodName: "PushSshCmd",
			Handler:    _Bastion_PushSshCmd_Handler,
		},
		{
			MethodName: "PushAuthLog",
			Handler:    _Bastion_PushAuthLog_Handler,
		},
		{
			MethodName: "RemoteExec",
			Handler:    _Bastion_RemoteExec_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "bastion.proto",
}