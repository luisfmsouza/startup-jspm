"bundle";
System.registerDynamic("modules/radar/contentData.json!github:systemjs/plugin-json@0.1.0", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = {"content": [{
      "title": "Radar First",
      "body": "First content"
    }, {
      "title": "Radar Second",
      "body": "Second content"
    }]};
  global.define = __define;
  return module.exports;
});

(function() {
var _removeDefine = System.get("@@amd-helpers").createDefine();
"format amd";
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define("github:components/handlebars.js@4.0.4/handlebars.runtime", [], factory);
  else if (typeof exports === 'object')
    exports["Handlebars"] = factory();
  else
    root["Handlebars"] = factory();
})(this, function() {
  return (function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
      if (installedModules[moduleId])
        return installedModules[moduleId].exports;
      var module = installedModules[moduleId] = {
        exports: {},
        id: moduleId,
        loaded: false
      };
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      module.loaded = true;
      return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.p = "";
    return __webpack_require__(0);
  })([function(module, exports, __webpack_require__) {
    'use strict';
    var _interopRequireWildcard = __webpack_require__(7)['default'];
    var _interopRequireDefault = __webpack_require__(8)['default'];
    exports.__esModule = true;
    var _handlebarsBase = __webpack_require__(1);
    var base = _interopRequireWildcard(_handlebarsBase);
    var _handlebarsSafeString = __webpack_require__(2);
    var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
    var _handlebarsException = __webpack_require__(3);
    var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
    var _handlebarsUtils = __webpack_require__(4);
    var Utils = _interopRequireWildcard(_handlebarsUtils);
    var _handlebarsRuntime = __webpack_require__(5);
    var runtime = _interopRequireWildcard(_handlebarsRuntime);
    var _handlebarsNoConflict = __webpack_require__(6);
    var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
    function create() {
      var hb = new base.HandlebarsEnvironment();
      Utils.extend(hb, base);
      hb.SafeString = _handlebarsSafeString2['default'];
      hb.Exception = _handlebarsException2['default'];
      hb.Utils = Utils;
      hb.escapeExpression = Utils.escapeExpression;
      hb.VM = runtime;
      hb.template = function(spec) {
        return runtime.template(spec, hb);
      };
      return hb;
    }
    var inst = create();
    inst.create = create;
    _handlebarsNoConflict2['default'](inst);
    inst['default'] = inst;
    exports['default'] = inst;
    module.exports = exports['default'];
  }, function(module, exports, __webpack_require__) {
    'use strict';
    var _interopRequireDefault = __webpack_require__(8)['default'];
    exports.__esModule = true;
    exports.HandlebarsEnvironment = HandlebarsEnvironment;
    var _utils = __webpack_require__(4);
    var _exception = __webpack_require__(3);
    var _exception2 = _interopRequireDefault(_exception);
    var _helpers = __webpack_require__(9);
    var _decorators = __webpack_require__(10);
    var _logger = __webpack_require__(11);
    var _logger2 = _interopRequireDefault(_logger);
    var VERSION = '4.0.4';
    exports.VERSION = VERSION;
    var COMPILER_REVISION = 7;
    exports.COMPILER_REVISION = COMPILER_REVISION;
    var REVISION_CHANGES = {
      1: '<= 1.0.rc.2',
      2: '== 1.0.0-rc.3',
      3: '== 1.0.0-rc.4',
      4: '== 1.x.x',
      5: '== 2.0.0-alpha.x',
      6: '>= 2.0.0-beta.1',
      7: '>= 4.0.0'
    };
    exports.REVISION_CHANGES = REVISION_CHANGES;
    var objectType = '[object Object]';
    function HandlebarsEnvironment(helpers, partials, decorators) {
      this.helpers = helpers || {};
      this.partials = partials || {};
      this.decorators = decorators || {};
      _helpers.registerDefaultHelpers(this);
      _decorators.registerDefaultDecorators(this);
    }
    HandlebarsEnvironment.prototype = {
      constructor: HandlebarsEnvironment,
      logger: _logger2['default'],
      log: _logger2['default'].log,
      registerHelper: function registerHelper(name, fn) {
        if (_utils.toString.call(name) === objectType) {
          if (fn) {
            throw new _exception2['default']('Arg not supported with multiple helpers');
          }
          _utils.extend(this.helpers, name);
        } else {
          this.helpers[name] = fn;
        }
      },
      unregisterHelper: function unregisterHelper(name) {
        delete this.helpers[name];
      },
      registerPartial: function registerPartial(name, partial) {
        if (_utils.toString.call(name) === objectType) {
          _utils.extend(this.partials, name);
        } else {
          if (typeof partial === 'undefined') {
            throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
          }
          this.partials[name] = partial;
        }
      },
      unregisterPartial: function unregisterPartial(name) {
        delete this.partials[name];
      },
      registerDecorator: function registerDecorator(name, fn) {
        if (_utils.toString.call(name) === objectType) {
          if (fn) {
            throw new _exception2['default']('Arg not supported with multiple decorators');
          }
          _utils.extend(this.decorators, name);
        } else {
          this.decorators[name] = fn;
        }
      },
      unregisterDecorator: function unregisterDecorator(name) {
        delete this.decorators[name];
      }
    };
    var log = _logger2['default'].log;
    exports.log = log;
    exports.createFrame = _utils.createFrame;
    exports.logger = _logger2['default'];
  }, function(module, exports, __webpack_require__) {
    'use strict';
    exports.__esModule = true;
    function SafeString(string) {
      this.string = string;
    }
    SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
      return '' + this.string;
    };
    exports['default'] = SafeString;
    module.exports = exports['default'];
  }, function(module, exports, __webpack_require__) {
    'use strict';
    exports.__esModule = true;
    var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
    function Exception(message, node) {
      var loc = node && node.loc,
          line = undefined,
          column = undefined;
      if (loc) {
        line = loc.start.line;
        column = loc.start.column;
        message += ' - ' + line + ':' + column;
      }
      var tmp = Error.prototype.constructor.call(this, message);
      for (var idx = 0; idx < errorProps.length; idx++) {
        this[errorProps[idx]] = tmp[errorProps[idx]];
      }
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, Exception);
      }
      if (loc) {
        this.lineNumber = line;
        this.column = column;
      }
    }
    Exception.prototype = new Error();
    exports['default'] = Exception;
    module.exports = exports['default'];
  }, function(module, exports, __webpack_require__) {
    'use strict';
    exports.__esModule = true;
    exports.extend = extend;
    exports.indexOf = indexOf;
    exports.escapeExpression = escapeExpression;
    exports.isEmpty = isEmpty;
    exports.createFrame = createFrame;
    exports.blockParams = blockParams;
    exports.appendContextPath = appendContextPath;
    var escape = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };
    var badChars = /[&<>"'`=]/g,
        possible = /[&<>"'`=]/;
    function escapeChar(chr) {
      return escape[chr];
    }
    function extend(obj) {
      for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
            obj[key] = arguments[i][key];
          }
        }
      }
      return obj;
    }
    var toString = Object.prototype.toString;
    exports.toString = toString;
    var isFunction = function isFunction(value) {
      return typeof value === 'function';
    };
    if (isFunction(/x/)) {
      exports.isFunction = isFunction = function(value) {
        return typeof value === 'function' && toString.call(value) === '[object Function]';
      };
    }
    exports.isFunction = isFunction;
    var isArray = Array.isArray || function(value) {
      return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
    };
    exports.isArray = isArray;
    function indexOf(array, value) {
      for (var i = 0,
          len = array.length; i < len; i++) {
        if (array[i] === value) {
          return i;
        }
      }
      return -1;
    }
    function escapeExpression(string) {
      if (typeof string !== 'string') {
        if (string && string.toHTML) {
          return string.toHTML();
        } else if (string == null) {
          return '';
        } else if (!string) {
          return string + '';
        }
        string = '' + string;
      }
      if (!possible.test(string)) {
        return string;
      }
      return string.replace(badChars, escapeChar);
    }
    function isEmpty(value) {
      if (!value && value !== 0) {
        return true;
      } else if (isArray(value) && value.length === 0) {
        return true;
      } else {
        return false;
      }
    }
    function createFrame(object) {
      var frame = extend({}, object);
      frame._parent = object;
      return frame;
    }
    function blockParams(params, ids) {
      params.path = ids;
      return params;
    }
    function appendContextPath(contextPath, id) {
      return (contextPath ? contextPath + '.' : '') + id;
    }
  }, function(module, exports, __webpack_require__) {
    'use strict';
    var _interopRequireWildcard = __webpack_require__(7)['default'];
    var _interopRequireDefault = __webpack_require__(8)['default'];
    exports.__esModule = true;
    exports.checkRevision = checkRevision;
    exports.template = template;
    exports.wrapProgram = wrapProgram;
    exports.resolvePartial = resolvePartial;
    exports.invokePartial = invokePartial;
    exports.noop = noop;
    var _utils = __webpack_require__(4);
    var Utils = _interopRequireWildcard(_utils);
    var _exception = __webpack_require__(3);
    var _exception2 = _interopRequireDefault(_exception);
    var _base = __webpack_require__(1);
    function checkRevision(compilerInfo) {
      var compilerRevision = compilerInfo && compilerInfo[0] || 1,
          currentRevision = _base.COMPILER_REVISION;
      if (compilerRevision !== currentRevision) {
        if (compilerRevision < currentRevision) {
          var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
              compilerVersions = _base.REVISION_CHANGES[compilerRevision];
          throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
        } else {
          throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
        }
      }
    }
    function template(templateSpec, env) {
      if (!env) {
        throw new _exception2['default']('No environment passed to template');
      }
      if (!templateSpec || !templateSpec.main) {
        throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
      }
      templateSpec.main.decorator = templateSpec.main_d;
      env.VM.checkRevision(templateSpec.compiler);
      function invokePartialWrapper(partial, context, options) {
        if (options.hash) {
          context = Utils.extend({}, context, options.hash);
          if (options.ids) {
            options.ids[0] = true;
          }
        }
        partial = env.VM.resolvePartial.call(this, partial, context, options);
        var result = env.VM.invokePartial.call(this, partial, context, options);
        if (result == null && env.compile) {
          options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
          result = options.partials[options.name](context, options);
        }
        if (result != null) {
          if (options.indent) {
            var lines = result.split('\n');
            for (var i = 0,
                l = lines.length; i < l; i++) {
              if (!lines[i] && i + 1 === l) {
                break;
              }
              lines[i] = options.indent + lines[i];
            }
            result = lines.join('\n');
          }
          return result;
        } else {
          throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
        }
      }
      var container = {
        strict: function strict(obj, name) {
          if (!(name in obj)) {
            throw new _exception2['default']('"' + name + '" not defined in ' + obj);
          }
          return obj[name];
        },
        lookup: function lookup(depths, name) {
          var len = depths.length;
          for (var i = 0; i < len; i++) {
            if (depths[i] && depths[i][name] != null) {
              return depths[i][name];
            }
          }
        },
        lambda: function lambda(current, context) {
          return typeof current === 'function' ? current.call(context) : current;
        },
        escapeExpression: Utils.escapeExpression,
        invokePartial: invokePartialWrapper,
        fn: function fn(i) {
          var ret = templateSpec[i];
          ret.decorator = templateSpec[i + '_d'];
          return ret;
        },
        programs: [],
        program: function program(i, data, declaredBlockParams, blockParams, depths) {
          var programWrapper = this.programs[i],
              fn = this.fn(i);
          if (data || depths || blockParams || declaredBlockParams) {
            programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
          } else if (!programWrapper) {
            programWrapper = this.programs[i] = wrapProgram(this, i, fn);
          }
          return programWrapper;
        },
        data: function data(value, depth) {
          while (value && depth--) {
            value = value._parent;
          }
          return value;
        },
        merge: function merge(param, common) {
          var obj = param || common;
          if (param && common && param !== common) {
            obj = Utils.extend({}, common, param);
          }
          return obj;
        },
        noop: env.VM.noop,
        compilerInfo: templateSpec.compiler
      };
      function ret(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var data = options.data;
        ret._setup(options);
        if (!options.partial && templateSpec.useData) {
          data = initData(context, data);
        }
        var depths = undefined,
            blockParams = templateSpec.useBlockParams ? [] : undefined;
        if (templateSpec.useDepths) {
          if (options.depths) {
            depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
          } else {
            depths = [context];
          }
        }
        function main(context) {
          return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
        }
        main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
        return main(context, options);
      }
      ret.isTop = true;
      ret._setup = function(options) {
        if (!options.partial) {
          container.helpers = container.merge(options.helpers, env.helpers);
          if (templateSpec.usePartial) {
            container.partials = container.merge(options.partials, env.partials);
          }
          if (templateSpec.usePartial || templateSpec.useDecorators) {
            container.decorators = container.merge(options.decorators, env.decorators);
          }
        } else {
          container.helpers = options.helpers;
          container.partials = options.partials;
          container.decorators = options.decorators;
        }
      };
      ret._child = function(i, data, blockParams, depths) {
        if (templateSpec.useBlockParams && !blockParams) {
          throw new _exception2['default']('must pass block params');
        }
        if (templateSpec.useDepths && !depths) {
          throw new _exception2['default']('must pass parent depths');
        }
        return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
      };
      return ret;
    }
    function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
      function prog(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
        var currentDepths = depths;
        if (depths && context !== depths[0]) {
          currentDepths = [context].concat(depths);
        }
        return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
      }
      prog = executeDecorators(fn, prog, container, depths, data, blockParams);
      prog.program = i;
      prog.depth = depths ? depths.length : 0;
      prog.blockParams = declaredBlockParams || 0;
      return prog;
    }
    function resolvePartial(partial, context, options) {
      if (!partial) {
        if (options.name === '@partial-block') {
          partial = options.data['partial-block'];
        } else {
          partial = options.partials[options.name];
        }
      } else if (!partial.call && !options.name) {
        options.name = partial;
        partial = options.partials[partial];
      }
      return partial;
    }
    function invokePartial(partial, context, options) {
      options.partial = true;
      if (options.ids) {
        options.data.contextPath = options.ids[0] || options.data.contextPath;
      }
      var partialBlock = undefined;
      if (options.fn && options.fn !== noop) {
        options.data = _base.createFrame(options.data);
        partialBlock = options.data['partial-block'] = options.fn;
        if (partialBlock.partials) {
          options.partials = Utils.extend({}, options.partials, partialBlock.partials);
        }
      }
      if (partial === undefined && partialBlock) {
        partial = partialBlock;
      }
      if (partial === undefined) {
        throw new _exception2['default']('The partial ' + options.name + ' could not be found');
      } else if (partial instanceof Function) {
        return partial(context, options);
      }
    }
    function noop() {
      return '';
    }
    function initData(context, data) {
      if (!data || !('root' in data)) {
        data = data ? _base.createFrame(data) : {};
        data.root = context;
      }
      return data;
    }
    function executeDecorators(fn, prog, container, depths, data, blockParams) {
      if (fn.decorator) {
        var props = {};
        prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
        Utils.extend(prog, props);
      }
      return prog;
    }
  }, function(module, exports, __webpack_require__) {
    (function(global) {
      'use strict';
      exports.__esModule = true;
      exports['default'] = function(Handlebars) {
        var root = typeof global !== 'undefined' ? global : window,
            $Handlebars = root.Handlebars;
        Handlebars.noConflict = function() {
          if (root.Handlebars === Handlebars) {
            root.Handlebars = $Handlebars;
          }
        };
      };
      module.exports = exports['default'];
    }.call(exports, (function() {
      return this;
    }())));
  }, function(module, exports, __webpack_require__) {
    "use strict";
    exports["default"] = function(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};
        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key))
              newObj[key] = obj[key];
          }
        }
        newObj["default"] = obj;
        return newObj;
      }
    };
    exports.__esModule = true;
  }, function(module, exports, __webpack_require__) {
    "use strict";
    exports["default"] = function(obj) {
      return obj && obj.__esModule ? obj : {"default": obj};
    };
    exports.__esModule = true;
  }, function(module, exports, __webpack_require__) {
    'use strict';
    var _interopRequireDefault = __webpack_require__(8)['default'];
    exports.__esModule = true;
    exports.registerDefaultHelpers = registerDefaultHelpers;
    var _helpersBlockHelperMissing = __webpack_require__(12);
    var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
    var _helpersEach = __webpack_require__(13);
    var _helpersEach2 = _interopRequireDefault(_helpersEach);
    var _helpersHelperMissing = __webpack_require__(14);
    var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
    var _helpersIf = __webpack_require__(15);
    var _helpersIf2 = _interopRequireDefault(_helpersIf);
    var _helpersLog = __webpack_require__(16);
    var _helpersLog2 = _interopRequireDefault(_helpersLog);
    var _helpersLookup = __webpack_require__(17);
    var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
    var _helpersWith = __webpack_require__(18);
    var _helpersWith2 = _interopRequireDefault(_helpersWith);
    function registerDefaultHelpers(instance) {
      _helpersBlockHelperMissing2['default'](instance);
      _helpersEach2['default'](instance);
      _helpersHelperMissing2['default'](instance);
      _helpersIf2['default'](instance);
      _helpersLog2['default'](instance);
      _helpersLookup2['default'](instance);
      _helpersWith2['default'](instance);
    }
  }, function(module, exports, __webpack_require__) {
    'use strict';
    var _interopRequireDefault = __webpack_require__(8)['default'];
    exports.__esModule = true;
    exports.registerDefaultDecorators = registerDefaultDecorators;
    var _decoratorsInline = __webpack_require__(19);
    var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
    function registerDefaultDecorators(instance) {
      _decoratorsInline2['default'](instance);
    }
  }, function(module, exports, __webpack_require__) {
    'use strict';
    exports.__esModule = true;
    var _utils = __webpack_require__(4);
    var logger = {
      methodMap: ['debug', 'info', 'warn', 'error'],
      level: 'info',
      lookupLevel: function lookupLevel(level) {
        if (typeof level === 'string') {
          var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
          if (levelMap >= 0) {
            level = levelMap;
          } else {
            level = parseInt(level, 10);
          }
        }
        return level;
      },
      log: function log(level) {
        level = logger.lookupLevel(level);
        if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
          var method = logger.methodMap[level];
          if (!console[method]) {
            method = 'log';
          }
          for (var _len = arguments.length,
              message = Array(_len > 1 ? _len - 1 : 0),
              _key = 1; _key < _len; _key++) {
            message[_key - 1] = arguments[_key];
          }
          console[method].apply(console, message);
        }
      }
    };
    exports['default'] = logger;
    module.exports = exports['default'];
  }, function(module, exports, __webpack_require__) {
    'use strict';
    exports.__esModule = true;
    var _utils = __webpack_require__(4);
    exports['default'] = function(instance) {
      instance.registerHelper('blockHelperMissing', function(context, options) {
        var inverse = options.inverse,
            fn = options.fn;
        if (context === true) {
          return fn(this);
        } else if (context === false || context == null) {
          return inverse(this);
        } else if (_utils.isArray(context)) {
          if (context.length > 0) {
            if (options.ids) {
              options.ids = [options.name];
            }
            return instance.helpers.each(context, options);
          } else {
            return inverse(this);
          }
        } else {
          if (options.data && options.ids) {
            var data = _utils.createFrame(options.data);
            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
            options = {data: data};
          }
          return fn(context, options);
        }
      });
    };
    module.exports = exports['default'];
  }, function(module, exports, __webpack_require__) {
    'use strict';
    var _interopRequireDefault = __webpack_require__(8)['default'];
    exports.__esModule = true;
    var _utils = __webpack_require__(4);
    var _exception = __webpack_require__(3);
    var _exception2 = _interopRequireDefault(_exception);
    exports['default'] = function(instance) {
      instance.registerHelper('each', function(context, options) {
        if (!options) {
          throw new _exception2['default']('Must pass iterator to #each');
        }
        var fn = options.fn,
            inverse = options.inverse,
            i = 0,
            ret = '',
            data = undefined,
            contextPath = undefined;
        if (options.data && options.ids) {
          contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
        }
        if (_utils.isFunction(context)) {
          context = context.call(this);
        }
        if (options.data) {
          data = _utils.createFrame(options.data);
        }
        function execIteration(field, index, last) {
          if (data) {
            data.key = field;
            data.index = index;
            data.first = index === 0;
            data.last = !!last;
            if (contextPath) {
              data.contextPath = contextPath + field;
            }
          }
          ret = ret + fn(context[field], {
            data: data,
            blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
          });
        }
        if (context && typeof context === 'object') {
          if (_utils.isArray(context)) {
            for (var j = context.length; i < j; i++) {
              if (i in context) {
                execIteration(i, i, i === context.length - 1);
              }
            }
          } else {
            var priorKey = undefined;
            for (var key in context) {
              if (context.hasOwnProperty(key)) {
                if (priorKey !== undefined) {
                  execIteration(priorKey, i - 1);
                }
                priorKey = key;
                i++;
              }
            }
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1, true);
            }
          }
        }
        if (i === 0) {
          ret = inverse(this);
        }
        return ret;
      });
    };
    module.exports = exports['default'];
  }, function(module, exports, __webpack_require__) {
    'use strict';
    var _interopRequireDefault = __webpack_require__(8)['default'];
    exports.__esModule = true;
    var _exception = __webpack_require__(3);
    var _exception2 = _interopRequireDefault(_exception);
    exports['default'] = function(instance) {
      instance.registerHelper('helperMissing', function() {
        if (arguments.length === 1) {
          return undefined;
        } else {
          throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
        }
      });
    };
    module.exports = exports['default'];
  }, function(module, exports, __webpack_require__) {
    'use strict';
    exports.__esModule = true;
    var _utils = __webpack_require__(4);
    exports['default'] = function(instance) {
      instance.registerHelper('if', function(conditional, options) {
        if (_utils.isFunction(conditional)) {
          conditional = conditional.call(this);
        }
        if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
          return options.inverse(this);
        } else {
          return options.fn(this);
        }
      });
      instance.registerHelper('unless', function(conditional, options) {
        return instance.helpers['if'].call(this, conditional, {
          fn: options.inverse,
          inverse: options.fn,
          hash: options.hash
        });
      });
    };
    module.exports = exports['default'];
  }, function(module, exports, __webpack_require__) {
    'use strict';
    exports.__esModule = true;
    exports['default'] = function(instance) {
      instance.registerHelper('log', function() {
        var args = [undefined],
            options = arguments[arguments.length - 1];
        for (var i = 0; i < arguments.length - 1; i++) {
          args.push(arguments[i]);
        }
        var level = 1;
        if (options.hash.level != null) {
          level = options.hash.level;
        } else if (options.data && options.data.level != null) {
          level = options.data.level;
        }
        args[0] = level;
        instance.log.apply(instance, args);
      });
    };
    module.exports = exports['default'];
  }, function(module, exports, __webpack_require__) {
    'use strict';
    exports.__esModule = true;
    exports['default'] = function(instance) {
      instance.registerHelper('lookup', function(obj, field) {
        return obj && obj[field];
      });
    };
    module.exports = exports['default'];
  }, function(module, exports, __webpack_require__) {
    'use strict';
    exports.__esModule = true;
    var _utils = __webpack_require__(4);
    exports['default'] = function(instance) {
      instance.registerHelper('with', function(context, options) {
        if (_utils.isFunction(context)) {
          context = context.call(this);
        }
        var fn = options.fn;
        if (!_utils.isEmpty(context)) {
          var data = options.data;
          if (options.data && options.ids) {
            data = _utils.createFrame(options.data);
            data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
          }
          return fn(context, {
            data: data,
            blockParams: _utils.blockParams([context], [data && data.contextPath])
          });
        } else {
          return options.inverse(this);
        }
      });
    };
    module.exports = exports['default'];
  }, function(module, exports, __webpack_require__) {
    'use strict';
    exports.__esModule = true;
    var _utils = __webpack_require__(4);
    exports['default'] = function(instance) {
      instance.registerDecorator('inline', function(fn, props, container, options) {
        var ret = fn;
        if (!props.partials) {
          props.partials = {};
          ret = function(context, options) {
            var original = container.partials;
            container.partials = _utils.extend({}, original, props.partials);
            var ret = fn(context, options);
            container.partials = original;
            return ret;
          };
        }
        props.partials[options.args[0]] = options.fn;
        return ret;
      });
    };
    module.exports = exports['default'];
  }]);
});
;

_removeDefine();
})();
System.registerDynamic("modules/radar/contentTemplate.hbs!github:davis/plugin-hbs@1.2.1", ["github:components/handlebars.js@4.0.4/handlebars.runtime"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  module.exports = $__require('github:components/handlebars.js@4.0.4/handlebars.runtime').template({
    "1": function(container, depth0, helpers, partials, data) {
      var helper;
      return "  <h3>" + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
        "name": "title",
        "hash": {},
        "data": data
      }) : helper))) + "</h3>\n  <p>" + container.escapeExpression(((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
        "name": "body",
        "hash": {},
        "data": data
      }) : helper))) + "</p>\n";
    },
    "compiler": [7, ">= 4.0.0"],
    "main": function(container, depth0, helpers, partials, data) {
      var stack1,
          helper;
      return "<h2>" + container.escapeExpression(((helper = (helper = helpers["radar:page.name"] || (depth0 != null ? depth0["radar:page.name"] : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
        "name": "radar:page.name",
        "hash": {},
        "data": data
      }) : helper))) + "</h2>\n\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {}, (depth0 != null ? depth0.content : depth0), {
        "name": "each",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data
      })) != null ? stack1 : "") + "\n<a href=\"#\"> back to " + container.escapeExpression(((helper = (helper = helpers["app.name"] || (depth0 != null ? depth0["app.name"] : depth0)) != null ? helper : helpers.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {}, {
        "name": "app.name",
        "hash": {},
        "data": data
      }) : helper))) + "</a>\n";
    },
    "useData": true
  });
  global.define = __define;
  return module.exports;
});

System.register('modules/radar/init.js', ['modules/radar/contentTemplate.hbs!github:davis/plugin-hbs@1.2.1', 'modules/radar/contentData.json!github:systemjs/plugin-json@0.1.0'], function (_export) {

  //template
  // import contentTemplateHbs from './contentTemplate.hbs!hbs';
  'use strict';

  //data
  var contentTemplate, contentData, moduleName;

  _export('createContent', createContent);

  function createContent() {

    i18n.options = {
      getAsync: false
    };

    i18n.loadNamespace('radar', function () {
      console.log('T: ' + i18n.t('radar:page.name'));

      // console.log(contentTemplate);

      // var template = Handlebars.compile(contentTemplate);
      // var html    = template(contentTemplate);

      var html = contentTemplate(contentData);

      // console.log(contentTemplate(contentData));

      $('#content').html(html);
    });

    console.log('T: ' + i18n.t('app.name'));

    console.timeEnd('Module radar');
  }

  return {
    setters: [function (_modulesRadarContentTemplateHbsGithubDavisPluginHbs121) {
      contentTemplate = _modulesRadarContentTemplateHbsGithubDavisPluginHbs121['default'];
    }, function (_modulesRadarContentDataJsonGithubSystemjsPluginJson010) {
      contentData = _modulesRadarContentDataJsonGithubSystemjsPluginJson010['default'];
    }],
    execute: function () {
      moduleName = 'radar';
    }
  };
});
//# sourceMappingURL=build-radar.js.map