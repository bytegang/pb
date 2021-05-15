/**
 * @fileoverview gRPC-Web generated client stub for bytegang
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.bytegang = require('./bastion_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bytegang.CmdbClient =
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
proto.bytegang.CmdbPromiseClient =
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
 *   !proto.bytegang.ReqAuthPassword,
 *   !proto.bytegang.User>}
 */
const methodDescriptor_Cmdb_AuthPw = new grpc.web.MethodDescriptor(
  '/bytegang.Cmdb/AuthPw',
  grpc.web.MethodType.UNARY,
  proto.bytegang.ReqAuthPassword,
  proto.bytegang.User,
  /**
   * @param {!proto.bytegang.ReqAuthPassword} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bytegang.ReqAuthPassword,
 *   !proto.bytegang.User>}
 */
const methodInfo_Cmdb_AuthPw = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bytegang.User,
  /**
   * @param {!proto.bytegang.ReqAuthPassword} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.User.deserializeBinary
);


/**
 * @param {!proto.bytegang.ReqAuthPassword} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bytegang.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bytegang.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bytegang.CmdbClient.prototype.authPw =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bytegang.Cmdb/AuthPw',
      request,
      metadata || {},
      methodDescriptor_Cmdb_AuthPw,
      callback);
};


/**
 * @param {!proto.bytegang.ReqAuthPassword} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bytegang.User>}
 *     Promise that resolves to the response
 */
proto.bytegang.CmdbPromiseClient.prototype.authPw =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bytegang.Cmdb/AuthPw',
      request,
      metadata || {},
      methodDescriptor_Cmdb_AuthPw);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bytegang.ReqAuthPublicKey,
 *   !proto.bytegang.User>}
 */
const methodDescriptor_Cmdb_AuthPk = new grpc.web.MethodDescriptor(
  '/bytegang.Cmdb/AuthPk',
  grpc.web.MethodType.UNARY,
  proto.bytegang.ReqAuthPublicKey,
  proto.bytegang.User,
  /**
   * @param {!proto.bytegang.ReqAuthPublicKey} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bytegang.ReqAuthPublicKey,
 *   !proto.bytegang.User>}
 */
const methodInfo_Cmdb_AuthPk = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bytegang.User,
  /**
   * @param {!proto.bytegang.ReqAuthPublicKey} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.User.deserializeBinary
);


/**
 * @param {!proto.bytegang.ReqAuthPublicKey} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bytegang.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bytegang.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bytegang.CmdbClient.prototype.authPk =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bytegang.Cmdb/AuthPk',
      request,
      metadata || {},
      methodDescriptor_Cmdb_AuthPk,
      callback);
};


/**
 * @param {!proto.bytegang.ReqAuthPublicKey} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bytegang.User>}
 *     Promise that resolves to the response
 */
proto.bytegang.CmdbPromiseClient.prototype.authPk =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bytegang.Cmdb/AuthPk',
      request,
      metadata || {},
      methodDescriptor_Cmdb_AuthPk);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bytegang.ReqSshUser,
 *   !proto.bytegang.UserKb>}
 */
const methodDescriptor_Cmdb_AuthKb = new grpc.web.MethodDescriptor(
  '/bytegang.Cmdb/AuthKb',
  grpc.web.MethodType.UNARY,
  proto.bytegang.ReqSshUser,
  proto.bytegang.UserKb,
  /**
   * @param {!proto.bytegang.ReqSshUser} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.UserKb.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bytegang.ReqSshUser,
 *   !proto.bytegang.UserKb>}
 */
const methodInfo_Cmdb_AuthKb = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bytegang.UserKb,
  /**
   * @param {!proto.bytegang.ReqSshUser} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.UserKb.deserializeBinary
);


/**
 * @param {!proto.bytegang.ReqSshUser} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bytegang.UserKb)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bytegang.UserKb>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bytegang.CmdbClient.prototype.authKb =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bytegang.Cmdb/AuthKb',
      request,
      metadata || {},
      methodDescriptor_Cmdb_AuthKb,
      callback);
};


/**
 * @param {!proto.bytegang.ReqSshUser} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bytegang.UserKb>}
 *     Promise that resolves to the response
 */
proto.bytegang.CmdbPromiseClient.prototype.authKb =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bytegang.Cmdb/AuthKb',
      request,
      metadata || {},
      methodDescriptor_Cmdb_AuthKb);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bytegang.ReqAssetsQuery,
 *   !proto.bytegang.AssetList>}
 */
const methodDescriptor_Cmdb_FetchAsset = new grpc.web.MethodDescriptor(
  '/bytegang.Cmdb/FetchAsset',
  grpc.web.MethodType.UNARY,
  proto.bytegang.ReqAssetsQuery,
  proto.bytegang.AssetList,
  /**
   * @param {!proto.bytegang.ReqAssetsQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.AssetList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bytegang.ReqAssetsQuery,
 *   !proto.bytegang.AssetList>}
 */
const methodInfo_Cmdb_FetchAsset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bytegang.AssetList,
  /**
   * @param {!proto.bytegang.ReqAssetsQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.AssetList.deserializeBinary
);


/**
 * @param {!proto.bytegang.ReqAssetsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bytegang.AssetList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bytegang.AssetList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bytegang.CmdbClient.prototype.fetchAsset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bytegang.Cmdb/FetchAsset',
      request,
      metadata || {},
      methodDescriptor_Cmdb_FetchAsset,
      callback);
};


/**
 * @param {!proto.bytegang.ReqAssetsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bytegang.AssetList>}
 *     Promise that resolves to the response
 */
proto.bytegang.CmdbPromiseClient.prototype.fetchAsset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bytegang.Cmdb/FetchAsset',
      request,
      metadata || {},
      methodDescriptor_Cmdb_FetchAsset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bytegang.ReqAssetUser,
 *   !proto.bytegang.AssetSshAccount>}
 */
const methodDescriptor_Cmdb_FetchAssetSshConfig = new grpc.web.MethodDescriptor(
  '/bytegang.Cmdb/FetchAssetSshConfig',
  grpc.web.MethodType.UNARY,
  proto.bytegang.ReqAssetUser,
  proto.bytegang.AssetSshAccount,
  /**
   * @param {!proto.bytegang.ReqAssetUser} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.AssetSshAccount.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bytegang.ReqAssetUser,
 *   !proto.bytegang.AssetSshAccount>}
 */
const methodInfo_Cmdb_FetchAssetSshConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bytegang.AssetSshAccount,
  /**
   * @param {!proto.bytegang.ReqAssetUser} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.AssetSshAccount.deserializeBinary
);


/**
 * @param {!proto.bytegang.ReqAssetUser} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bytegang.AssetSshAccount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bytegang.AssetSshAccount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bytegang.CmdbClient.prototype.fetchAssetSshConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bytegang.Cmdb/FetchAssetSshConfig',
      request,
      metadata || {},
      methodDescriptor_Cmdb_FetchAssetSshConfig,
      callback);
};


/**
 * @param {!proto.bytegang.ReqAssetUser} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bytegang.AssetSshAccount>}
 *     Promise that resolves to the response
 */
proto.bytegang.CmdbPromiseClient.prototype.fetchAssetSshConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bytegang.Cmdb/FetchAssetSshConfig',
      request,
      metadata || {},
      methodDescriptor_Cmdb_FetchAssetSshConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bytegang.ReqWebXterm,
 *   !proto.bytegang.ResWebXterm>}
 */
const methodDescriptor_Cmdb_WebXtermSsh = new grpc.web.MethodDescriptor(
  '/bytegang.Cmdb/WebXtermSsh',
  grpc.web.MethodType.UNARY,
  proto.bytegang.ReqWebXterm,
  proto.bytegang.ResWebXterm,
  /**
   * @param {!proto.bytegang.ReqWebXterm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.ResWebXterm.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bytegang.ReqWebXterm,
 *   !proto.bytegang.ResWebXterm>}
 */
const methodInfo_Cmdb_WebXtermSsh = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bytegang.ResWebXterm,
  /**
   * @param {!proto.bytegang.ReqWebXterm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.ResWebXterm.deserializeBinary
);


/**
 * @param {!proto.bytegang.ReqWebXterm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bytegang.ResWebXterm)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bytegang.ResWebXterm>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bytegang.CmdbClient.prototype.webXtermSsh =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bytegang.Cmdb/WebXtermSsh',
      request,
      metadata || {},
      methodDescriptor_Cmdb_WebXtermSsh,
      callback);
};


/**
 * @param {!proto.bytegang.ReqWebXterm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bytegang.ResWebXterm>}
 *     Promise that resolves to the response
 */
proto.bytegang.CmdbPromiseClient.prototype.webXtermSsh =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bytegang.Cmdb/WebXtermSsh',
      request,
      metadata || {},
      methodDescriptor_Cmdb_WebXtermSsh);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bytegang.ReqWebXterm,
 *   !proto.bytegang.ResWebXterm>}
 */
const methodDescriptor_Cmdb_WebXtermPod = new grpc.web.MethodDescriptor(
  '/bytegang.Cmdb/WebXtermPod',
  grpc.web.MethodType.UNARY,
  proto.bytegang.ReqWebXterm,
  proto.bytegang.ResWebXterm,
  /**
   * @param {!proto.bytegang.ReqWebXterm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.ResWebXterm.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bytegang.ReqWebXterm,
 *   !proto.bytegang.ResWebXterm>}
 */
const methodInfo_Cmdb_WebXtermPod = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bytegang.ResWebXterm,
  /**
   * @param {!proto.bytegang.ReqWebXterm} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.ResWebXterm.deserializeBinary
);


/**
 * @param {!proto.bytegang.ReqWebXterm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bytegang.ResWebXterm)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bytegang.ResWebXterm>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bytegang.CmdbClient.prototype.webXtermPod =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bytegang.Cmdb/WebXtermPod',
      request,
      metadata || {},
      methodDescriptor_Cmdb_WebXtermPod,
      callback);
};


/**
 * @param {!proto.bytegang.ReqWebXterm} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bytegang.ResWebXterm>}
 *     Promise that resolves to the response
 */
proto.bytegang.CmdbPromiseClient.prototype.webXtermPod =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bytegang.Cmdb/WebXtermPod',
      request,
      metadata || {},
      methodDescriptor_Cmdb_WebXtermPod);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bytegang.ReqSshdData,
 *   !proto.bytegang.ResStatus>}
 */
const methodDescriptor_Cmdb_SaveLogSshSession = new grpc.web.MethodDescriptor(
  '/bytegang.Cmdb/SaveLogSshSession',
  grpc.web.MethodType.UNARY,
  proto.bytegang.ReqSshdData,
  proto.bytegang.ResStatus,
  /**
   * @param {!proto.bytegang.ReqSshdData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.ResStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bytegang.ReqSshdData,
 *   !proto.bytegang.ResStatus>}
 */
const methodInfo_Cmdb_SaveLogSshSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bytegang.ResStatus,
  /**
   * @param {!proto.bytegang.ReqSshdData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.ResStatus.deserializeBinary
);


/**
 * @param {!proto.bytegang.ReqSshdData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bytegang.ResStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bytegang.ResStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bytegang.CmdbClient.prototype.saveLogSshSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bytegang.Cmdb/SaveLogSshSession',
      request,
      metadata || {},
      methodDescriptor_Cmdb_SaveLogSshSession,
      callback);
};


/**
 * @param {!proto.bytegang.ReqSshdData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bytegang.ResStatus>}
 *     Promise that resolves to the response
 */
proto.bytegang.CmdbPromiseClient.prototype.saveLogSshSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bytegang.Cmdb/SaveLogSshSession',
      request,
      metadata || {},
      methodDescriptor_Cmdb_SaveLogSshSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.bytegang.ReqAuthLog,
 *   !proto.bytegang.ResStatus>}
 */
const methodDescriptor_Cmdb_SaveLogAuth = new grpc.web.MethodDescriptor(
  '/bytegang.Cmdb/SaveLogAuth',
  grpc.web.MethodType.UNARY,
  proto.bytegang.ReqAuthLog,
  proto.bytegang.ResStatus,
  /**
   * @param {!proto.bytegang.ReqAuthLog} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.ResStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bytegang.ReqAuthLog,
 *   !proto.bytegang.ResStatus>}
 */
const methodInfo_Cmdb_SaveLogAuth = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bytegang.ResStatus,
  /**
   * @param {!proto.bytegang.ReqAuthLog} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.ResStatus.deserializeBinary
);


/**
 * @param {!proto.bytegang.ReqAuthLog} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bytegang.ResStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bytegang.ResStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bytegang.CmdbClient.prototype.saveLogAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bytegang.Cmdb/SaveLogAuth',
      request,
      metadata || {},
      methodDescriptor_Cmdb_SaveLogAuth,
      callback);
};


/**
 * @param {!proto.bytegang.ReqAuthLog} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bytegang.ResStatus>}
 *     Promise that resolves to the response
 */
proto.bytegang.CmdbPromiseClient.prototype.saveLogAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bytegang.Cmdb/SaveLogAuth',
      request,
      metadata || {},
      methodDescriptor_Cmdb_SaveLogAuth);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.bytegang.SshArkClient =
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
proto.bytegang.SshArkPromiseClient =
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
 *   !proto.bytegang.ReqShellExec,
 *   !proto.bytegang.ResShellExec>}
 */
const methodDescriptor_SshArk_execShell = new grpc.web.MethodDescriptor(
  '/bytegang.SshArk/execShell',
  grpc.web.MethodType.UNARY,
  proto.bytegang.ReqShellExec,
  proto.bytegang.ResShellExec,
  /**
   * @param {!proto.bytegang.ReqShellExec} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.ResShellExec.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.bytegang.ReqShellExec,
 *   !proto.bytegang.ResShellExec>}
 */
const methodInfo_SshArk_execShell = new grpc.web.AbstractClientBase.MethodInfo(
  proto.bytegang.ResShellExec,
  /**
   * @param {!proto.bytegang.ReqShellExec} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.bytegang.ResShellExec.deserializeBinary
);


/**
 * @param {!proto.bytegang.ReqShellExec} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.bytegang.ResShellExec)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.bytegang.ResShellExec>|undefined}
 *     The XHR Node Readable Stream
 */
proto.bytegang.SshArkClient.prototype.execShell =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/bytegang.SshArk/execShell',
      request,
      metadata || {},
      methodDescriptor_SshArk_execShell,
      callback);
};


/**
 * @param {!proto.bytegang.ReqShellExec} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.bytegang.ResShellExec>}
 *     Promise that resolves to the response
 */
proto.bytegang.SshArkPromiseClient.prototype.execShell =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/bytegang.SshArk/execShell',
      request,
      metadata || {},
      methodDescriptor_SshArk_execShell);
};


module.exports = proto.bytegang;

