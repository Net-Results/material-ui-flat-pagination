"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("@material-ui/core/Button");
var styles_1 = require("@material-ui/core/styles");
var classnames_1 = require("classnames");
var core_1 = require("./core");
var styles = function (theme) {
    return styles_1.createStyles({
        root: {
            minWidth: 16,
        },
        rootCurrent: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        rootEllipsis: {
            paddingLeft: theme.spacing(0),
            paddingRight: theme.spacing(0),
        },
        rootEnd: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        rootStandard: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        label: {},
        text: {},
        textPrimary: {},
        textSecondary: {},
        colorInherit: {},
        colorInheritCurrent: {},
        colorInheritOther: {},
        disabled: {},
        sizeSmall: {
            minWidth: 8,
        },
        sizeSmallCurrent: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        sizeSmallEllipsis: {
            paddingLeft: theme.spacing(0),
            paddingRight: theme.spacing(0),
        },
        sizeSmallEnd: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        sizeSmallStandard: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        sizeLarge: {
            minWidth: 24,
        },
        sizeLargeCurrent: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        sizeLargeEllipsis: {
            paddingLeft: theme.spacing(0),
            paddingRight: theme.spacing(0),
        },
        sizeLargeEnd: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        sizeLargeStandard: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        fullWidth: {},
    });
};
var handleClick = function (page, limit, onClick) { return function (ev) {
    onClick(ev, core_1.getOffset(page, limit), page);
}; };
var PageButton = function (_a) {
    var _b, _c, _d, _e;
    var _f = _a.limit, limit = _f === void 0 ? 1 : _f, _g = _a.page, page = _g === void 0 ? 0 : _g, _h = _a.total, total = _h === void 0 ? 0 : _h, _j = _a.pageVariant, pageVariant = _j === void 0 ? 'standard' : _j, classesProp = _a.classes, currentPageColor = _a.currentPageColor, _k = _a.disabled, disabledProp = _k === void 0 ? false : _k, _l = _a.disableRipple, disableRippleProp = _l === void 0 ? false : _l, onClickProp = _a.onClick, renderButton = _a.renderButton, otherPageColor = _a.otherPageColor, size = _a.size, other = __rest(_a, ["limit", "page", "total", "pageVariant", "classes", "currentPageColor", "disabled", "disableRipple", "onClick", "renderButton", "otherPageColor", "size"]);
    var isCurrent = pageVariant === 'current';
    var isEllipsis = pageVariant === 'ellipsis';
    var isEnd = pageVariant === 'end';
    var isStandard = pageVariant === 'standard';
    var isSmall = size === 'small';
    var isLarge = size === 'large';
    var rootCurrent = classesProp.rootCurrent, rootEllipsis = classesProp.rootEllipsis, rootEnd = classesProp.rootEnd, rootStandard = classesProp.rootStandard, colorInheritCurrent = classesProp.colorInheritCurrent, colorInheritOther = classesProp.colorInheritOther, sizeSmallCurrent = classesProp.sizeSmallCurrent, sizeSmallEllipsis = classesProp.sizeSmallEllipsis, sizeSmallEnd = classesProp.sizeSmallEnd, sizeSmallStandard = classesProp.sizeSmallStandard, sizeLargeCurrent = classesProp.sizeLargeCurrent, sizeLargeEllipsis = classesProp.sizeLargeEllipsis, sizeLargeEnd = classesProp.sizeLargeEnd, sizeLargeStandard = classesProp.sizeLargeStandard, classes = __rest(classesProp, ["rootCurrent", "rootEllipsis", "rootEnd", "rootStandard", "colorInheritCurrent", "colorInheritOther", "sizeSmallCurrent", "sizeSmallEllipsis", "sizeSmallEnd", "sizeSmallStandard", "sizeLargeCurrent", "sizeLargeEllipsis", "sizeLargeEnd", "sizeLargeStandard"]);
    classes.root = classnames_1.default(classes.root, (_b = {},
        _b[rootCurrent] = isCurrent,
        _b[rootEllipsis] = isEllipsis,
        _b[rootEnd] = isEnd,
        _b[rootStandard] = isStandard,
        _b));
    classes.colorInherit = classnames_1.default(classes.colorInherit, (_c = {},
        _c[colorInheritCurrent] = isCurrent,
        _c[colorInheritOther] = !isCurrent,
        _c));
    classes.sizeSmall = classnames_1.default(classes.sizeSmall, (_d = {},
        _d[sizeSmallCurrent] = isCurrent && isSmall,
        _d[sizeSmallEllipsis] = isEllipsis && isSmall,
        _d[sizeSmallEnd] = isEnd && isSmall,
        _d[sizeSmallStandard] = isStandard && isSmall,
        _d));
    classes.sizeLarge = classnames_1.default(classes.sizeLarge, (_e = {},
        _e[sizeLargeCurrent] = isCurrent && isLarge,
        _e[sizeLargeEllipsis] = isEllipsis && isLarge,
        _e[sizeLargeEnd] = isEnd && isLarge,
        _e[sizeLargeStandard] = isStandard && isLarge,
        _e));
    var color = isCurrent ? currentPageColor : otherPageColor;
    var disabled = disabledProp || isEllipsis || page <= 0 || total <= 0;
    var disableRipple = disableRippleProp || disabled || isCurrent;
    var isClickable = !disabled && (isEnd || isStandard);
    var onClick;
    if (isClickable && onClickProp) {
        onClick = handleClick(page, limit, onClickProp);
    }
    var button = (React.createElement(Button_1.default, __assign({ classes: classes, color: color, disabled: disabled, disableRipple: disableRipple, onClick: onClick, size: size }, other)));
    if (renderButton && isClickable) {
        return renderButton({ offset: core_1.getOffset(page, limit), page: page, children: button });
    }
    return button;
};
var PageButtonWithStyles = styles_1.withStyles(styles, {
    name: 'MuiFlatPageButton',
})(PageButton);
exports.default = PageButtonWithStyles;
