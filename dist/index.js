Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var react$1 = require('@ionic/react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var ModalContext = react.createContext(undefined);
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = react.useState(false), visible = _b[0], setVisible = _b[1];
    var _c = react.useState(), content = _c[0], setContent = _c[1];
    var showModal = function (component) {
        setContent(component);
        setVisible(true);
    };
    var hideModal = function () {
        setContent(undefined);
        setVisible(false);
    };
    return (jsxRuntime.jsxs(ModalContext.Provider, __assign({ value: { content: content, showModal: showModal, hideModal: hideModal } }, { children: [jsxRuntime.jsx(react$1.IonModal, __assign({ onDidDismiss: hideModal, isOpen: visible }, { children: content }), void 0), children] }), void 0));
};
/**
 * Need to use this hook in order to have the possibility to use Redux store inside modals
 */
var useModal = function () {
    var _a = react.useContext(ModalContext), showModal = _a.showModal, hideModal = _a.hideModal;
    return { showModal: showModal, hideModal: hideModal };
};

exports.ModalProvider = ModalProvider;
exports.useModal = useModal;
//# sourceMappingURL=index.js.map
