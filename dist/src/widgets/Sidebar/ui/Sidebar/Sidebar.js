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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';
export var Sidebar = function (_a) {
    var _b;
    var className = _a.className;
    var _c = useState(false), collapsed = _c[0], setCollapsed = _c[1];
    var onToggle = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    var t = useTranslation().t;
    return (_jsxs("div", __assign({ className: classNames(cls.Sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]) }, { children: [_jsx(Button, __assign({ onClick: onToggle }, { children: t('Toggle') })), _jsxs("div", __assign({ className: cls.switchers }, { children: [_jsx(ThemeSwitcher, { className: cls.SidebarThemeSwitcher }), _jsx(LangSwitcher, { className: cls.SidebarLangSwitcher })] }))] })));
};
