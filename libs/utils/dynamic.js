'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (resolve) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _opts$loading = opts.loading,
      LoadingComponent = _opts$loading === undefined ? function () {
    return null;
  } : _opts$loading,
      _opts$hoc = opts.hoc,
      hoc = _opts$hoc === undefined ? function (C) {
    return C;
  } : _opts$hoc;


  return function (_Component) {
    _inherits(DynamicComponent, _Component);

    function DynamicComponent() {
      var _ref;

      _classCallCheck(this, DynamicComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = DynamicComponent.__proto__ || Object.getPrototypeOf(DynamicComponent)).call.apply(_ref, [this].concat(args)));

      _this.LoadingComponent = LoadingComponent;
      _this.state = {
        AsyncComponent: null
      };
      _this.load();
      return _this;
    }

    _createClass(DynamicComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.mounted = true;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.mounted = false;
      }
    }, {
      key: 'load',
      value: function load() {
        var _this2 = this;

        resolve().then(function (m) {
          var AsyncComponent = m.default || m;
          if (_this2.mounted) {
            _this2.setState({ AsyncComponent: AsyncComponent });
          } else {
            _this2.state.AsyncComponent = AsyncComponent; // eslint-disable-line
          }
        }).catch(function () {});
      }
    }, {
      key: 'render',
      value: function render() {
        var LoadingComponent = this.LoadingComponent,
            AsyncComponent = this.state.AsyncComponent;


        if (AsyncComponent) {
          var _Component2 = hoc(AsyncComponent);
          return _react2.default.createElement(_Component2, this.props);
        } else {
          return _react2.default.createElement(LoadingComponent, this.props);
        }
      }
    }]);

    return DynamicComponent;
  }(_react.Component);
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9keW5hbWljLmpzIl0sIm5hbWVzIjpbInJlc29sdmUiLCJvcHRzIiwibG9hZGluZyIsIkxvYWRpbmdDb21wb25lbnQiLCJob2MiLCJDIiwiYXJncyIsInN0YXRlIiwiQXN5bmNDb21wb25lbnQiLCJsb2FkIiwibW91bnRlZCIsInRoZW4iLCJtIiwiZGVmYXVsdCIsInNldFN0YXRlIiwiY2F0Y2giLCJDb21wb25lbnQiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7a0JBRWUsVUFBU0EsT0FBVCxFQUE2QjtBQUFBLE1BQVhDLElBQVcsdUVBQUosRUFBSTtBQUFBLHNCQUN1QkEsSUFEdkIsQ0FDbENDLE9BRGtDO0FBQUEsTUFDekJDLGdCQUR5QixpQ0FDTjtBQUFBLFdBQU0sSUFBTjtBQUFBLEdBRE07QUFBQSxrQkFDdUJGLElBRHZCLENBQ01HLEdBRE47QUFBQSxNQUNNQSxHQUROLDZCQUNZO0FBQUEsV0FBS0MsQ0FBTDtBQUFBLEdBRFo7OztBQUcxQztBQUFBOztBQUNFLGdDQUFxQjtBQUFBOztBQUFBOztBQUFBLHdDQUFOQyxJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFBQSxpS0FDVkEsSUFEVTs7QUFFbkIsWUFBS0gsZ0JBQUwsR0FBd0JBLGdCQUF4QjtBQUNBLFlBQUtJLEtBQUwsR0FBYTtBQUNYQyx3QkFBZ0I7QUFETCxPQUFiO0FBR0EsWUFBS0MsSUFBTDtBQU5tQjtBQU9wQjs7QUFSSDtBQUFBO0FBQUEsMENBVXNCO0FBQ2xCLGFBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0Q7QUFaSDtBQUFBO0FBQUEsNkNBY3lCO0FBQ3JCLGFBQUtBLE9BQUwsR0FBZSxLQUFmO0FBQ0Q7QUFoQkg7QUFBQTtBQUFBLDZCQWtCUztBQUFBOztBQUNMVixrQkFDR1csSUFESCxDQUNRLGFBQUs7QUFDVCxjQUFNSCxpQkFBaUJJLEVBQUVDLE9BQUYsSUFBYUQsQ0FBcEM7QUFDQSxjQUFJLE9BQUtGLE9BQVQsRUFBa0I7QUFDaEIsbUJBQUtJLFFBQUwsQ0FBYyxFQUFFTiw4QkFBRixFQUFkO0FBQ0QsV0FGRCxNQUVPO0FBQ0wsbUJBQUtELEtBQUwsQ0FBV0MsY0FBWCxHQUE0QkEsY0FBNUIsQ0FESyxDQUN1QztBQUM3QztBQUNGLFNBUkgsRUFTR08sS0FUSCxDQVNTLFlBQU0sQ0FBRSxDQVRqQjtBQVVEO0FBN0JIO0FBQUE7QUFBQSwrQkErQlc7QUFBQSxZQUNDWixnQkFERCxHQUNpRCxJQURqRCxDQUNDQSxnQkFERDtBQUFBLFlBQzRCSyxjQUQ1QixHQUNpRCxJQURqRCxDQUNtQkQsS0FEbkIsQ0FDNEJDLGNBRDVCOzs7QUFHUCxZQUFJQSxjQUFKLEVBQW9CO0FBQ2xCLGNBQU1RLGNBQVlaLElBQUlJLGNBQUosQ0FBbEI7QUFDQSxpQkFBTyw4QkFBQyxXQUFELEVBQWUsS0FBS1MsS0FBcEIsQ0FBUDtBQUNELFNBSEQsTUFHTztBQUNMLGlCQUFPLDhCQUFDLGdCQUFELEVBQXNCLEtBQUtBLEtBQTNCLENBQVA7QUFDRDtBQUNGO0FBeENIOztBQUFBO0FBQUEsSUFBc0NELGdCQUF0QztBQTBDRCxDOztBQS9DRCIsImZpbGUiOiJkeW5hbWljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHJlc29sdmUsIG9wdHMgPSB7fSkge1xyXG4gIGNvbnN0IHsgbG9hZGluZzogTG9hZGluZ0NvbXBvbmVudCA9ICgpID0+IG51bGwsIGhvYyA9IEMgPT4gQyB9ID0gb3B0cztcclxuXHJcbiAgcmV0dXJuIGNsYXNzIER5bmFtaWNDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xyXG4gICAgICBzdXBlciguLi5hcmdzKTtcclxuICAgICAgdGhpcy5Mb2FkaW5nQ29tcG9uZW50ID0gTG9hZGluZ0NvbXBvbmVudDtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBBc3luY0NvbXBvbmVudDogbnVsbCxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHRoaXMubW91bnRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoKSB7XHJcbiAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgIC50aGVuKG0gPT4ge1xyXG4gICAgICAgICAgY29uc3QgQXN5bmNDb21wb25lbnQgPSBtLmRlZmF1bHQgfHwgbTtcclxuICAgICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IEFzeW5jQ29tcG9uZW50IH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5Bc3luY0NvbXBvbmVudCA9IEFzeW5jQ29tcG9uZW50OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgY29uc3QgeyBMb2FkaW5nQ29tcG9uZW50LCBzdGF0ZTogeyBBc3luY0NvbXBvbmVudCB9IH0gPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKEFzeW5jQ29tcG9uZW50KSB7XHJcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gaG9jKEFzeW5jQ29tcG9uZW50KTtcclxuICAgICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz47XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIDxMb2FkaW5nQ29tcG9uZW50IHsuLi50aGlzLnByb3BzfSAvPjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuIl19