/**
 * @fileoverview gRPC-Web generated client stub for bastion
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.bastion = require('./bastion_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bastion.CmdbClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bastion.CmdbPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bastion.ReqAuthPassword,
 *   !proto.bastion.User>}
 */
const methodDescriptor_Cmdb_AuthPw = new grpc.web.MethodDescriptor(
  '/bastion.Cmdb/AuthPw',
  grpc.web.MethodType.UNARY,
  proto.bastion.ReqAuthPassword,
  proto.bastion.User,
  /**
   * @param {!proto.bastion.ReqAuthPassword} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bastion.ReqAuthPassword,
 *   !proto.bastion.User>}
 */
const methodInfo_Cmdb_AuthPw = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bastion.User,
  /**
   * @param {!proto.bastion.ReqAuthPassword} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.User.deserializeBinary
);


/**
 * @param {!proto.bastion.ReqAuthPassword} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bastion.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bastion.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bastion.CmdbClient.prototype.authPw =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bastion.Cmdb/AuthPw',
      request,
      metadata || {},
      methodDescriptor_Cmdb_AuthPw,
      callback);
};


/**
 * @param {!proto.bastion.ReqAuthPassword} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bastion.User>}
 *     Promise that resolves to the response
 */
proto.bastion.CmdbPromiseClient.prototype.authPw =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bastion.Cmdb/AuthPw',
      request,
      metadata || {},
      methodDescriptor_Cmdb_AuthPw);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bastion.ReqAuthPublicKey,
 *   !proto.bastion.User>}
 */
const methodDescriptor_Cmdb_AuthPk = new grpc.web.MethodDescriptor(
  '/bastion.Cmdb/AuthPk',
  grpc.web.MethodType.UNARY,
  proto.bastion.ReqAuthPublicKey,
  proto.bastion.User,
  /**
   * @param {!proto.bastion.ReqAuthPublicKey} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bastion.ReqAuthPublicKey,
 *   !proto.bastion.User>}
 */
const methodInfo_Cmdb_AuthPk = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bastion.User,
  /**
   * @param {!proto.bastion.ReqAuthPublicKey} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.User.deserializeBinary
);


/**
 * @param {!proto.bastion.ReqAuthPublicKey} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bastion.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bastion.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bastion.CmdbClient.prototype.authPk =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bastion.Cmdb/AuthPk',
      request,
      metadata || {},
      methodDescriptor_Cmdb_AuthPk,
      callback);
};


/**
 * @param {!proto.bastion.ReqAuthPublicKey} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bastion.User>}
 *     Promise that resolves to the response
 */
proto.bastion.CmdbPromiseClient.prototype.authPk =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bastion.Cmdb/AuthPk',
      request,
      metadata || {},
      methodDescriptor_Cmdb_AuthPk);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bastion.ReqSshUser,
 *   !proto.bastion.UserKb>}
 */
const methodDescriptor_Cmdb_AuthKb = new grpc.web.MethodDescriptor(
  '/bastion.Cmdb/AuthKb',
  grpc.web.MethodType.UNARY,
  proto.bastion.ReqSshUser,
  proto.bastion.UserKb,
  /**
   * @param {!proto.bastion.ReqSshUser} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.UserKb.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bastion.ReqSshUser,
 *   !proto.bastion.UserKb>}
 */
const methodInfo_Cmdb_AuthKb = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bastion.UserKb,
  /**
   * @param {!proto.bastion.ReqSshUser} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.UserKb.deserializeBinary
);


/**
 * @param {!proto.bastion.ReqSshUser} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bastion.UserKb)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bastion.UserKb>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bastion.CmdbClient.prototype.authKb =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bastion.Cmdb/AuthKb',
      request,
      metadata || {},
      methodDescriptor_Cmdb_AuthKb,
      callback);
};


/**
 * @param {!proto.bastion.ReqSshUser} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bastion.UserKb>}
 *     Promise that resolves to the response
 */
proto.bastion.CmdbPromiseClient.prototype.authKb =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bastion.Cmdb/AuthKb',
      request,
      metadata || {},
      methodDescriptor_Cmdb_AuthKb);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bastion.ReqAssetsQuery,
 *   !proto.bastion.AssetList>}
 */
const methodDescriptor_Cmdb_FetchAsset = new grpc.web.MethodDescriptor(
  '/bastion.Cmdb/FetchAsset',
  grpc.web.MethodType.UNARY,
  proto.bastion.ReqAssetsQuery,
  proto.bastion.AssetList,
  /**
   * @param {!proto.bastion.ReqAssetsQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.AssetList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bastion.ReqAssetsQuery,
 *   !proto.bastion.AssetList>}
 */
const methodInfo_Cmdb_FetchAsset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bastion.AssetList,
  /**
   * @param {!proto.bastion.ReqAssetsQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.AssetList.deserializeBinary
);


/**
 * @param {!proto.bastion.ReqAssetsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bastion.AssetList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bastion.AssetList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bastion.CmdbClient.prototype.fetchAsset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bastion.Cmdb/FetchAsset',
      request,
      metadata || {},
      methodDescriptor_Cmdb_FetchAsset,
      callback);
};


/**
 * @param {!proto.bastion.ReqAssetsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bastion.AssetList>}
 *     Promise that resolves to the response
 */
proto.bastion.CmdbPromiseClient.prototype.fetchAsset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bastion.Cmdb/FetchAsset',
      request,
      metadata || {},
      methodDescriptor_Cmdb_FetchAsset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bastion.ReqAssetUser,
 *   !proto.bastion.AssetSshAccount>}
 */
const methodDescriptor_Cmdb_FetchAssetSshConfig = new grpc.web.MethodDescriptor(
  '/bastion.Cmdb/FetchAssetSshConfig',
  grpc.web.MethodType.UNARY,
  proto.bastion.ReqAssetUser,
  proto.bastion.AssetSshAccount,
  /**
   * @param {!proto.bastion.ReqAssetUser} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.AssetSshAccount.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bastion.ReqAssetUser,
 *   !proto.bastion.AssetSshAccount>}
 */
const methodInfo_Cmdb_FetchAssetSshConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bastion.AssetSshAccount,
  /**
   * @param {!proto.bastion.ReqAssetUser} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.AssetSshAccount.deserializeBinary
);


/**
 * @param {!proto.bastion.ReqAssetUser} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bastion.AssetSshAccount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bastion.AssetSshAccount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bastion.CmdbClient.prototype.fetchAssetSshConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bastion.Cmdb/FetchAssetSshConfig',
      request,
      metadata || {},
      methodDescriptor_Cmdb_FetchAssetSshConfig,
      callback);
};


/**
 * @param {!proto.bastion.ReqAssetUser} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bastion.AssetSshAccount>}
 *     Promise that resolves to the response
 */
proto.bastion.CmdbPromiseClient.prototype.fetchAssetSshConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bastion.Cmdb/FetchAssetSshConfig',
      request,
      metadata || {},
      methodDescriptor_Cmdb_FetchAssetSshConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bastion.ReqSshExec,
 *   !proto.bastion.ResStatus>}
 */
const methodDescriptor_Cmdb_SshShellExec = new grpc.web.MethodDescriptor(
  '/bastion.Cmdb/SshShellExec',
  grpc.web.MethodType.UNARY,
  proto.bastion.ReqSshExec,
  proto.bastion.ResStatus,
  /**
   * @param {!proto.bastion.ReqSshExec} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bastion.ReqSshExec,
 *   !proto.bastion.ResStatus>}
 */
const methodInfo_Cmdb_SshShellExec = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bastion.ResStatus,
  /**
   * @param {!proto.bastion.ReqSshExec} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResStatus.deserializeBinary
);


/**
 * @param {!proto.bastion.ReqSshExec} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bastion.ResStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bastion.ResStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bastion.CmdbClient.prototype.sshShellExec =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bastion.Cmdb/SshShellExec',
      request,
      metadata || {},
      methodDescriptor_Cmdb_SshShellExec,
      callback);
};


/**
 * @param {!proto.bastion.ReqSshExec} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bastion.ResStatus>}
 *     Promise that resolves to the response
 */
proto.bastion.CmdbPromiseClient.prototype.sshShellExec =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bastion.Cmdb/SshShellExec',
      request,
      metadata || {},
      methodDescriptor_Cmdb_SshShellExec);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bastion.ReqWebXterm,
 *   !proto.bastion.ResWebXterm>}
 */
const methodDescriptor_Cmdb_WebXtermSsh = new grpc.web.MethodDescriptor(
  '/bastion.Cmdb/WebXtermSsh',
  grpc.web.MethodType.UNARY,
  proto.bastion.ReqWebXterm,
  proto.bastion.ResWebXterm,
  /**
   * @param {!proto.bastion.ReqWebXterm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResWebXterm.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bastion.ReqWebXterm,
 *   !proto.bastion.ResWebXterm>}
 */
const methodInfo_Cmdb_WebXtermSsh = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bastion.ResWebXterm,
  /**
   * @param {!proto.bastion.ReqWebXterm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResWebXterm.deserializeBinary
);


/**
 * @param {!proto.bastion.ReqWebXterm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bastion.ResWebXterm)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bastion.ResWebXterm>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bastion.CmdbClient.prototype.webXtermSsh =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bastion.Cmdb/WebXtermSsh',
      request,
      metadata || {},
      methodDescriptor_Cmdb_WebXtermSsh,
      callback);
};


/**
 * @param {!proto.bastion.ReqWebXterm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bastion.ResWebXterm>}
 *     Promise that resolves to the response
 */
proto.bastion.CmdbPromiseClient.prototype.webXtermSsh =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bastion.Cmdb/WebXtermSsh',
      request,
      metadata || {},
      methodDescriptor_Cmdb_WebXtermSsh);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bastion.ReqWebXterm,
 *   !proto.bastion.ResWebXterm>}
 */
const methodDescriptor_Cmdb_WebXtermPod = new grpc.web.MethodDescriptor(
  '/bastion.Cmdb/WebXtermPod',
  grpc.web.MethodType.UNARY,
  proto.bastion.ReqWebXterm,
  proto.bastion.ResWebXterm,
  /**
   * @param {!proto.bastion.ReqWebXterm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResWebXterm.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bastion.ReqWebXterm,
 *   !proto.bastion.ResWebXterm>}
 */
const methodInfo_Cmdb_WebXtermPod = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bastion.ResWebXterm,
  /**
   * @param {!proto.bastion.ReqWebXterm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResWebXterm.deserializeBinary
);


/**
 * @param {!proto.bastion.ReqWebXterm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bastion.ResWebXterm)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bastion.ResWebXterm>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bastion.CmdbClient.prototype.webXtermPod =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bastion.Cmdb/WebXtermPod',
      request,
      metadata || {},
      methodDescriptor_Cmdb_WebXtermPod,
      callback);
};


/**
 * @param {!proto.bastion.ReqWebXterm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bastion.ResWebXterm>}
 *     Promise that resolves to the response
 */
proto.bastion.CmdbPromiseClient.prototype.webXtermPod =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bastion.Cmdb/WebXtermPod',
      request,
      metadata || {},
      methodDescriptor_Cmdb_WebXtermPod);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bastion.ReqSshdData,
 *   !proto.bastion.ResStatus>}
 */
const methodDescriptor_Cmdb_CollectSshdLog = new grpc.web.MethodDescriptor(
  '/bastion.Cmdb/CollectSshdLog',
  grpc.web.MethodType.UNARY,
  proto.bastion.ReqSshdData,
  proto.bastion.ResStatus,
  /**
   * @param {!proto.bastion.ReqSshdData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bastion.ReqSshdData,
 *   !proto.bastion.ResStatus>}
 */
const methodInfo_Cmdb_CollectSshdLog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bastion.ResStatus,
  /**
   * @param {!proto.bastion.ReqSshdData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResStatus.deserializeBinary
);


/**
 * @param {!proto.bastion.ReqSshdData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bastion.ResStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bastion.ResStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bastion.CmdbClient.prototype.collectSshdLog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bastion.Cmdb/CollectSshdLog',
      request,
      metadata || {},
      methodDescriptor_Cmdb_CollectSshdLog,
      callback);
};


/**
 * @param {!proto.bastion.ReqSshdData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bastion.ResStatus>}
 *     Promise that resolves to the response
 */
proto.bastion.CmdbPromiseClient.prototype.collectSshdLog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bastion.Cmdb/CollectSshdLog',
      request,
      metadata || {},
      methodDescriptor_Cmdb_CollectSshdLog);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bastion.ReqSshCmd,
 *   !proto.bastion.ResStatus>}
 */
const methodDescriptor_Cmdb_PushSshCmd = new grpc.web.MethodDescriptor(
  '/bastion.Cmdb/PushSshCmd',
  grpc.web.MethodType.UNARY,
  proto.bastion.ReqSshCmd,
  proto.bastion.ResStatus,
  /**
   * @param {!proto.bastion.ReqSshCmd} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bastion.ReqSshCmd,
 *   !proto.bastion.ResStatus>}
 */
const methodInfo_Cmdb_PushSshCmd = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bastion.ResStatus,
  /**
   * @param {!proto.bastion.ReqSshCmd} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResStatus.deserializeBinary
);


/**
 * @param {!proto.bastion.ReqSshCmd} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bastion.ResStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bastion.ResStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bastion.CmdbClient.prototype.pushSshCmd =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bastion.Cmdb/PushSshCmd',
      request,
      metadata || {},
      methodDescriptor_Cmdb_PushSshCmd,
      callback);
};


/**
 * @param {!proto.bastion.ReqSshCmd} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bastion.ResStatus>}
 *     Promise that resolves to the response
 */
proto.bastion.CmdbPromiseClient.prototype.pushSshCmd =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bastion.Cmdb/PushSshCmd',
      request,
      metadata || {},
      methodDescriptor_Cmdb_PushSshCmd);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bastion.ReqAuthLog,
 *   !proto.bastion.ResStatus>}
 */
const methodDescriptor_Cmdb_PushAuthLog = new grpc.web.MethodDescriptor(
  '/bastion.Cmdb/PushAuthLog',
  grpc.web.MethodType.UNARY,
  proto.bastion.ReqAuthLog,
  proto.bastion.ResStatus,
  /**
   * @param {!proto.bastion.ReqAuthLog} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bastion.ReqAuthLog,
 *   !proto.bastion.ResStatus>}
 */
const methodInfo_Cmdb_PushAuthLog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bastion.ResStatus,
  /**
   * @param {!proto.bastion.ReqAuthLog} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResStatus.deserializeBinary
);


/**
 * @param {!proto.bastion.ReqAuthLog} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bastion.ResStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bastion.ResStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bastion.CmdbClient.prototype.pushAuthLog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bastion.Cmdb/PushAuthLog',
      request,
      metadata || {},
      methodDescriptor_Cmdb_PushAuthLog,
      callback);
};


/**
 * @param {!proto.bastion.ReqAuthLog} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bastion.ResStatus>}
 *     Promise that resolves to the response
 */
proto.bastion.CmdbPromiseClient.prototype.pushAuthLog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bastion.Cmdb/PushAuthLog',
      request,
      metadata || {},
      methodDescriptor_Cmdb_PushAuthLog);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bastion.ReqAssetCmd,
 *   !proto.bastion.ResStatus>}
 */
const methodDescriptor_Cmdb_RemoteExec = new grpc.web.MethodDescriptor(
  '/bastion.Cmdb/RemoteExec',
  grpc.web.MethodType.UNARY,
  proto.bastion.ReqAssetCmd,
  proto.bastion.ResStatus,
  /**
   * @param {!proto.bastion.ReqAssetCmd} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bastion.ReqAssetCmd,
 *   !proto.bastion.ResStatus>}
 */
const methodInfo_Cmdb_RemoteExec = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bastion.ResStatus,
  /**
   * @param {!proto.bastion.ReqAssetCmd} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResStatus.deserializeBinary
);


/**
 * @param {!proto.bastion.ReqAssetCmd} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bastion.ResStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bastion.ResStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bastion.CmdbClient.prototype.remoteExec =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bastion.Cmdb/RemoteExec',
      request,
      metadata || {},
      methodDescriptor_Cmdb_RemoteExec,
      callback);
};


/**
 * @param {!proto.bastion.ReqAssetCmd} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bastion.ResStatus>}
 *     Promise that resolves to the response
 */
proto.bastion.CmdbPromiseClient.prototype.remoteExec =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bastion.Cmdb/RemoteExec',
      request,
      metadata || {},
      methodDescriptor_Cmdb_RemoteExec);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bastion.SshArkClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bastion.SshArkPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bastion.ReqShellExec,
 *   !proto.bastion.ResShellExec>}
 */
const methodDescriptor_SshArk_execShell = new grpc.web.MethodDescriptor(
  '/bastion.SshArk/execShell',
  grpc.web.MethodType.UNARY,
  proto.bastion.ReqShellExec,
  proto.bastion.ResShellExec,
  /**
   * @param {!proto.bastion.ReqShellExec} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResShellExec.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bastion.ReqShellExec,
 *   !proto.bastion.ResShellExec>}
 */
const methodInfo_SshArk_execShell = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bastion.ResShellExec,
  /**
   * @param {!proto.bastion.ReqShellExec} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bastion.ResShellExec.deserializeBinary
);


/**
 * @param {!proto.bastion.ReqShellExec} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bastion.ResShellExec)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bastion.ResShellExec>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bastion.SshArkClient.prototype.execShell =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bastion.SshArk/execShell',
      request,
      metadata || {},
      methodDescriptor_SshArk_execShell,
      callback);
};


/**
 * @param {!proto.bastion.ReqShellExec} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bastion.ResShellExec>}
 *     Promise that resolves to the response
 */
proto.bastion.SshArkPromiseClient.prototype.execShell =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bastion.SshArk/execShell',
      request,
      metadata || {},
      methodDescriptor_SshArk_execShell);
};


module.exports = proto.bastion;

