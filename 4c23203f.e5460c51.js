(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(f,c(c({ref:t},l),{},{components:n})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(133)),i={id:"react-native",title:"Using with React Native"},c={unversionedId:"guides/react-native",id:"version-26.5/guides/react-native",isDocsHomePage:!1,title:"Using with React Native",description:"To use ts-jest with React Native + TypeScript and Babel 7, you'll first need to follow this tutorial.",source:"@site/versioned_docs/version-26.5/guides/react-native.md",slug:"/guides/react-native",permalink:"/ts-jest/docs/guides/react-native",editUrl:"https://github.com/kulshekhar/ts-jest/edit/master/website/versioned_docs/version-26.5/guides/react-native.md",version:"26.5",sidebar:"version-26.5-docs",previous:{title:"ESM Support",permalink:"/ts-jest/docs/guides/esm-support"},next:{title:"Using with monorepo",permalink:"/ts-jest/docs/guides/using-with-monorepo"}},s=[{value:"Babel config",id:"babel-config",children:[]},{value:"Jest config",id:"jest-config",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To use ",Object(a.b)("inlineCode",{parentName:"p"},"ts-jest")," with React Native + TypeScript and Babel 7, you'll first need to follow ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/blog/2018/05/07/using-typescript-with-react-native"}),"this tutorial"),"."),Object(a.b)("p",null,"After that, some little modifications will be required as follows:"),Object(a.b)("h3",{id:"babel-config"},"Babel config"),Object(a.b)("p",null,"If you didn't yet, move any Babel config from ",Object(a.b)("inlineCode",{parentName:"p"},".babelrc")," to ",Object(a.b)("inlineCode",{parentName:"p"},"babel.config.js"),". It should at least contain:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// babel.config.js\nmodule.exports = {\n  presets: ['module:metro-react-native-babel-preset'],\n}\n")),Object(a.b)("h3",{id:"jest-config"},"Jest config"),Object(a.b)("p",null,"In the same way that you moved Babel config, move Jest config from ",Object(a.b)("inlineCode",{parentName:"p"},"jest")," key of ",Object(a.b)("inlineCode",{parentName:"p"},"package.json")," to ",Object(a.b)("inlineCode",{parentName:"p"},"jest.config.js"),". It should look like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// jest.config.js\nconst { defaults: tsjPreset } = require('ts-jest/presets')\n\nmodule.exports = {\n  ...tsjPreset,\n  preset: 'react-native',\n  transform: {\n    ...tsjPreset.transform,\n    '\\\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',\n  },\n  globals: {\n    'ts-jest': {\n      babelConfig: true,\n    },\n  },\n  // This is the only part which you can keep\n  // from the above linked tutorial's config:\n  cacheDirectory: '.jest/cache',\n}\n")))}p.isMDXComponent=!0}}]);