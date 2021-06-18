/**
 * @fileoverview gRPC-Web generated client stub for ByteGangster
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.ByteGangster = require('./bastion_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ByteGangster.ByteGangsterClient =
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
proto.ByteGangster.ByteGangsterPromiseClient =
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
 *   !proto.ByteGangster.ReqAuthPassword,
 *   !proto.ByteGangster.User>}
 */
const methodDescriptor_ByteGangster_AuthPw = new grpc.web.MethodDescriptor(
  '/ByteGangster.ByteGangster/AuthPw',
  grpc.web.MethodType.UNARY,
  proto.ByteGangster.ReqAuthPassword,
  proto.ByteGangster.User,
  /**
   * @param {!proto.ByteGangster.ReqAuthPassword} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ByteGangster.ReqAuthPassword,
 *   !proto.ByteGangster.User>}
 */
const methodInfo_ByteGangster_AuthPw = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ByteGangster.User,
  /**
   * @param {!proto.ByteGangster.ReqAuthPassword} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.User.deserializeBinary
);


/**
 * @param {!proto.ByteGangster.ReqAuthPassword} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ByteGangster.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ByteGangster.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ByteGangster.ByteGangsterClient.prototype.authPw =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ByteGangster.ByteGangster/AuthPw',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_AuthPw,
      callback);
};


/**
 * @param {!proto.ByteGangster.ReqAuthPassword} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ByteGangster.User>}
 *     Promise that resolves to the response
 */
proto.ByteGangster.ByteGangsterPromiseClient.prototype.authPw =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ByteGangster.ByteGangster/AuthPw',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_AuthPw);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ByteGangster.ReqAuthPublicKey,
 *   !proto.ByteGangster.User>}
 */
const methodDescriptor_ByteGangster_AuthPk = new grpc.web.MethodDescriptor(
  '/ByteGangster.ByteGangster/AuthPk',
  grpc.web.MethodType.UNARY,
  proto.ByteGangster.ReqAuthPublicKey,
  proto.ByteGangster.User,
  /**
   * @param {!proto.ByteGangster.ReqAuthPublicKey} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.User.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ByteGangster.ReqAuthPublicKey,
 *   !proto.ByteGangster.User>}
 */
const methodInfo_ByteGangster_AuthPk = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ByteGangster.User,
  /**
   * @param {!proto.ByteGangster.ReqAuthPublicKey} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.User.deserializeBinary
);


/**
 * @param {!proto.ByteGangster.ReqAuthPublicKey} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ByteGangster.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ByteGangster.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ByteGangster.ByteGangsterClient.prototype.authPk =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ByteGangster.ByteGangster/AuthPk',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_AuthPk,
      callback);
};


/**
 * @param {!proto.ByteGangster.ReqAuthPublicKey} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ByteGangster.User>}
 *     Promise that resolves to the response
 */
proto.ByteGangster.ByteGangsterPromiseClient.prototype.authPk =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ByteGangster.ByteGangster/AuthPk',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_AuthPk);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ByteGangster.ReqSshUser,
 *   !proto.ByteGangster.UserKb>}
 */
const methodDescriptor_ByteGangster_AuthKb = new grpc.web.MethodDescriptor(
  '/ByteGangster.ByteGangster/AuthKb',
  grpc.web.MethodType.UNARY,
  proto.ByteGangster.ReqSshUser,
  proto.ByteGangster.UserKb,
  /**
   * @param {!proto.ByteGangster.ReqSshUser} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.UserKb.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ByteGangster.ReqSshUser,
 *   !proto.ByteGangster.UserKb>}
 */
const methodInfo_ByteGangster_AuthKb = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ByteGangster.UserKb,
  /**
   * @param {!proto.ByteGangster.ReqSshUser} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.UserKb.deserializeBinary
);


/**
 * @param {!proto.ByteGangster.ReqSshUser} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ByteGangster.UserKb)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ByteGangster.UserKb>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ByteGangster.ByteGangsterClient.prototype.authKb =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ByteGangster.ByteGangster/AuthKb',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_AuthKb,
      callback);
};


/**
 * @param {!proto.ByteGangster.ReqSshUser} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ByteGangster.UserKb>}
 *     Promise that resolves to the response
 */
proto.ByteGangster.ByteGangsterPromiseClient.prototype.authKb =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ByteGangster.ByteGangster/AuthKb',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_AuthKb);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ByteGangster.ReqAssetsQuery,
 *   !proto.ByteGangster.AssetList>}
 */
const methodDescriptor_ByteGangster_FetchAsset = new grpc.web.MethodDescriptor(
  '/ByteGangster.ByteGangster/FetchAsset',
  grpc.web.MethodType.UNARY,
  proto.ByteGangster.ReqAssetsQuery,
  proto.ByteGangster.AssetList,
  /**
   * @param {!proto.ByteGangster.ReqAssetsQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.AssetList.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ByteGangster.ReqAssetsQuery,
 *   !proto.ByteGangster.AssetList>}
 */
const methodInfo_ByteGangster_FetchAsset = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ByteGangster.AssetList,
  /**
   * @param {!proto.ByteGangster.ReqAssetsQuery} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.AssetList.deserializeBinary
);


/**
 * @param {!proto.ByteGangster.ReqAssetsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ByteGangster.AssetList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ByteGangster.AssetList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ByteGangster.ByteGangsterClient.prototype.fetchAsset =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ByteGangster.ByteGangster/FetchAsset',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_FetchAsset,
      callback);
};


/**
 * @param {!proto.ByteGangster.ReqAssetsQuery} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ByteGangster.AssetList>}
 *     Promise that resolves to the response
 */
proto.ByteGangster.ByteGangsterPromiseClient.prototype.fetchAsset =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ByteGangster.ByteGangster/FetchAsset',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_FetchAsset);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ByteGangster.ReqAssetUser,
 *   !proto.ByteGangster.ResSshConnCfg>}
 */
const methodDescriptor_ByteGangster_FetchAssetSshConfig = new grpc.web.MethodDescriptor(
  '/ByteGangster.ByteGangster/FetchAssetSshConfig',
  grpc.web.MethodType.UNARY,
  proto.ByteGangster.ReqAssetUser,
  proto.ByteGangster.ResSshConnCfg,
  /**
   * @param {!proto.ByteGangster.ReqAssetUser} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.ResSshConnCfg.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ByteGangster.ReqAssetUser,
 *   !proto.ByteGangster.ResSshConnCfg>}
 */
const methodInfo_ByteGangster_FetchAssetSshConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ByteGangster.ResSshConnCfg,
  /**
   * @param {!proto.ByteGangster.ReqAssetUser} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.ResSshConnCfg.deserializeBinary
);


/**
 * @param {!proto.ByteGangster.ReqAssetUser} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ByteGangster.ResSshConnCfg)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ByteGangster.ResSshConnCfg>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ByteGangster.ByteGangsterClient.prototype.fetchAssetSshConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ByteGangster.ByteGangster/FetchAssetSshConfig',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_FetchAssetSshConfig,
      callback);
};


/**
 * @param {!proto.ByteGangster.ReqAssetUser} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ByteGangster.ResSshConnCfg>}
 *     Promise that resolves to the response
 */
proto.ByteGangster.ByteGangsterPromiseClient.prototype.fetchAssetSshConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ByteGangster.ByteGangster/FetchAssetSshConfig',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_FetchAssetSshConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ByteGangster.ReqToken,
 *   !proto.ByteGangster.ResSshConnCfg>}
 */
const methodDescriptor_ByteGangster_WebXtermSsh = new grpc.web.MethodDescriptor(
  '/ByteGangster.ByteGangster/WebXtermSsh',
  grpc.web.MethodType.UNARY,
  proto.ByteGangster.ReqToken,
  proto.ByteGangster.ResSshConnCfg,
  /**
   * @param {!proto.ByteGangster.ReqToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.ResSshConnCfg.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ByteGangster.ReqToken,
 *   !proto.ByteGangster.ResSshConnCfg>}
 */
const methodInfo_ByteGangster_WebXtermSsh = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ByteGangster.ResSshConnCfg,
  /**
   * @param {!proto.ByteGangster.ReqToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.ResSshConnCfg.deserializeBinary
);


/**
 * @param {!proto.ByteGangster.ReqToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ByteGangster.ResSshConnCfg)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ByteGangster.ResSshConnCfg>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ByteGangster.ByteGangsterClient.prototype.webXtermSsh =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ByteGangster.ByteGangster/WebXtermSsh',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_WebXtermSsh,
      callback);
};


/**
 * @param {!proto.ByteGangster.ReqToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ByteGangster.ResSshConnCfg>}
 *     Promise that resolves to the response
 */
proto.ByteGangster.ByteGangsterPromiseClient.prototype.webXtermSsh =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ByteGangster.ByteGangster/WebXtermSsh',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_WebXtermSsh);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ByteGangster.ReqToken,
 *   !proto.ByteGangster.ResSshConnCfg>}
 */
const methodDescriptor_ByteGangster_WebXtermPod = new grpc.web.MethodDescriptor(
  '/ByteGangster.ByteGangster/WebXtermPod',
  grpc.web.MethodType.UNARY,
  proto.ByteGangster.ReqToken,
  proto.ByteGangster.ResSshConnCfg,
  /**
   * @param {!proto.ByteGangster.ReqToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.ResSshConnCfg.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ByteGangster.ReqToken,
 *   !proto.ByteGangster.ResSshConnCfg>}
 */
const methodInfo_ByteGangster_WebXtermPod = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ByteGangster.ResSshConnCfg,
  /**
   * @param {!proto.ByteGangster.ReqToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.ResSshConnCfg.deserializeBinary
);


/**
 * @param {!proto.ByteGangster.ReqToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ByteGangster.ResSshConnCfg)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ByteGangster.ResSshConnCfg>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ByteGangster.ByteGangsterClient.prototype.webXtermPod =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ByteGangster.ByteGangster/WebXtermPod',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_WebXtermPod,
      callback);
};


/**
 * @param {!proto.ByteGangster.ReqToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ByteGangster.ResSshConnCfg>}
 *     Promise that resolves to the response
 */
proto.ByteGangster.ByteGangsterPromiseClient.prototype.webXtermPod =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ByteGangster.ByteGangster/WebXtermPod',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_WebXtermPod);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ByteGangster.ReqToken,
 *   !proto.ByteGangster.ResGuacamole>}
 */
const methodDescriptor_ByteGangster_Guacamole = new grpc.web.MethodDescriptor(
  '/ByteGangster.ByteGangster/Guacamole',
  grpc.web.MethodType.UNARY,
  proto.ByteGangster.ReqToken,
  proto.ByteGangster.ResGuacamole,
  /**
   * @param {!proto.ByteGangster.ReqToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.ResGuacamole.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ByteGangster.ReqToken,
 *   !proto.ByteGangster.ResGuacamole>}
 */
const methodInfo_ByteGangster_Guacamole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ByteGangster.ResGuacamole,
  /**
   * @param {!proto.ByteGangster.ReqToken} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.ResGuacamole.deserializeBinary
);


/**
 * @param {!proto.ByteGangster.ReqToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ByteGangster.ResGuacamole)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ByteGangster.ResGuacamole>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ByteGangster.ByteGangsterClient.prototype.guacamole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ByteGangster.ByteGangster/Guacamole',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_Guacamole,
      callback);
};


/**
 * @param {!proto.ByteGangster.ReqToken} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ByteGangster.ResGuacamole>}
 *     Promise that resolves to the response
 */
proto.ByteGangster.ByteGangsterPromiseClient.prototype.guacamole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ByteGangster.ByteGangster/Guacamole',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_Guacamole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ByteGangster.ReqSshdData,
 *   !proto.ByteGangster.ResStatus>}
 */
const methodDescriptor_ByteGangster_SaveLogSshSession = new grpc.web.MethodDescriptor(
  '/ByteGangster.ByteGangster/SaveLogSshSession',
  grpc.web.MethodType.UNARY,
  proto.ByteGangster.ReqSshdData,
  proto.ByteGangster.ResStatus,
  /**
   * @param {!proto.ByteGangster.ReqSshdData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.ResStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ByteGangster.ReqSshdData,
 *   !proto.ByteGangster.ResStatus>}
 */
const methodInfo_ByteGangster_SaveLogSshSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ByteGangster.ResStatus,
  /**
   * @param {!proto.ByteGangster.ReqSshdData} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.ResStatus.deserializeBinary
);


/**
 * @param {!proto.ByteGangster.ReqSshdData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ByteGangster.ResStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ByteGangster.ResStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ByteGangster.ByteGangsterClient.prototype.saveLogSshSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ByteGangster.ByteGangster/SaveLogSshSession',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_SaveLogSshSession,
      callback);
};


/**
 * @param {!proto.ByteGangster.ReqSshdData} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ByteGangster.ResStatus>}
 *     Promise that resolves to the response
 */
proto.ByteGangster.ByteGangsterPromiseClient.prototype.saveLogSshSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ByteGangster.ByteGangster/SaveLogSshSession',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_SaveLogSshSession);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ByteGangster.ReqAuthLog,
 *   !proto.ByteGangster.ResStatus>}
 */
const methodDescriptor_ByteGangster_SaveLogAuth = new grpc.web.MethodDescriptor(
  '/ByteGangster.ByteGangster/SaveLogAuth',
  grpc.web.MethodType.UNARY,
  proto.ByteGangster.ReqAuthLog,
  proto.ByteGangster.ResStatus,
  /**
   * @param {!proto.ByteGangster.ReqAuthLog} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.ResStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ByteGangster.ReqAuthLog,
 *   !proto.ByteGangster.ResStatus>}
 */
const methodInfo_ByteGangster_SaveLogAuth = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ByteGangster.ResStatus,
  /**
   * @param {!proto.ByteGangster.ReqAuthLog} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ByteGangster.ResStatus.deserializeBinary
);


/**
 * @param {!proto.ByteGangster.ReqAuthLog} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ByteGangster.ResStatus)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ByteGangster.ResStatus>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ByteGangster.ByteGangsterClient.prototype.saveLogAuth =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ByteGangster.ByteGangster/SaveLogAuth',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_SaveLogAuth,
      callback);
};


/**
 * @param {!proto.ByteGangster.ReqAuthLog} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ByteGangster.ResStatus>}
 *     Promise that resolves to the response
 */
proto.ByteGangster.ByteGangsterPromiseClient.prototype.saveLogAuth =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ByteGangster.ByteGangster/SaveLogAuth',
      request,
      metadata || {},
      methodDescriptor_ByteGangster_SaveLogAuth);
};


module.exports = proto.ByteGangster;

