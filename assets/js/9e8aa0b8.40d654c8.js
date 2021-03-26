(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{106:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return l}));var r=a(3),i=a(7),c=(a(0),a(125)),n={id:"cameradevice.cameradeviceformat",title:"Interface: CameraDeviceFormat",sidebar_label:"CameraDeviceFormat",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/cameradevice.cameradeviceformat",id:"api/interfaces/cameradevice.cameradeviceformat",isDocsHomePage:!1,title:"Interface: CameraDeviceFormat",description:"Interface: CameraDeviceFormat",source:"@site/docs/api/interfaces/cameradevice.cameradeviceformat.md",slug:"/api/interfaces/cameradevice.cameradeviceformat",permalink:"/react-native-vision-camera/docs/api/interfaces/cameradevice.cameradeviceformat",editUrl:null,version:"current",sidebar_label:"CameraDeviceFormat",sidebar:"visionSidebar",previous:{title:"Interface: CameraDevice",permalink:"/react-native-vision-camera/docs/api/interfaces/cameradevice.cameradevice-1"},next:{title:"Interface: FrameRateRange",permalink:"/react-native-vision-camera/docs/api/interfaces/cameradevice.frameraterange"}},b=[{value:"Properties",id:"properties",children:[{value:"autoFocusSystem",id:"autofocussystem",children:[]},{value:"colorSpaces",id:"colorspaces",children:[]},{value:"fieldOfView",id:"fieldofview",children:[]},{value:"frameRateRanges",id:"framerateranges",children:[]},{value:"isHighestPhotoQualitySupported",id:"ishighestphotoqualitysupported",children:[]},{value:"maxISO",id:"maxiso",children:[]},{value:"maxZoom",id:"maxzoom",children:[]},{value:"minISO",id:"miniso",children:[]},{value:"photoHeight",id:"photoheight",children:[]},{value:"photoWidth",id:"photowidth",children:[]},{value:"supportsPhotoHDR",id:"supportsphotohdr",children:[]},{value:"supportsVideoHDR",id:"supportsvideohdr",children:[]},{value:"videoHeight",id:"videoheight",children:[]},{value:"videoStabilizationModes",id:"videostabilizationmodes",children:[]},{value:"videoWidth",id:"videowidth",children:[]}]}],p={toc:b};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-cameradeviceformat"},"Interface: CameraDeviceFormat"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice"},"CameraDevice"),".CameraDeviceFormat"),Object(c.b)("p",null,"A Camera Device's video format. Do not create instances of this type yourself, only use ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/camera.camera-1#getavailablecameradevices"},Object(c.b)("inlineCode",{parentName:"a"},"Camera.getAvailableCameraDevices()")),"."),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"autofocussystem"},"autoFocusSystem"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"autoFocusSystem"),": ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice#autofocussystem"},Object(c.b)("em",{parentName:"a"},"AutoFocusSystem"))),Object(c.b)("p",null,"Specifies this format's auto focus system."),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/501827c/src/CameraDevice.ts#L148"},"CameraDevice.ts:148")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"colorspaces"},"colorSpaces"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"colorSpaces"),": ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice#colorspace"},Object(c.b)("em",{parentName:"a"},"ColorSpace")),"[]"),Object(c.b)("p",null,"The available color spaces."),Object(c.b)("p",null,"Note: On Android, this will always be only ",Object(c.b)("inlineCode",{parentName:"p"},'["yuv"]')),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/501827c/src/CameraDevice.ts#L132"},"CameraDevice.ts:132")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"fieldofview"},"fieldOfView"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"fieldOfView"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"The video field of view in degrees"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/501827c/src/CameraDevice.ts#L122"},"CameraDevice.ts:122")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"framerateranges"},"frameRateRanges"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"frameRateRanges"),": ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/cameradevice.frameraterange"},Object(c.b)("em",{parentName:"a"},"FrameRateRange")),"[]"),Object(c.b)("p",null,"All available frame rate ranges. You can query this to find the highest frame rate available"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/501827c/src/CameraDevice.ts#L144"},"CameraDevice.ts:144")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"ishighestphotoqualitysupported"},"isHighestPhotoQualitySupported"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"isHighestPhotoQualitySupported"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"A boolean value specifying whether this format supports the highest possible photo quality that can be delivered on the current platform."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"platform"))," iOS 13.0+"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/501827c/src/CameraDevice.ts#L110"},"CameraDevice.ts:110")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"maxiso"},"maxISO"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"maxISO"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Maximum supported ISO value"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/501827c/src/CameraDevice.ts#L114"},"CameraDevice.ts:114")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"maxzoom"},"maxZoom"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"maxZoom"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"The maximum zoom factor"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/501827c/src/CameraDevice.ts#L126"},"CameraDevice.ts:126")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"miniso"},"minISO"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"minISO"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Minimum supported ISO value"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/501827c/src/CameraDevice.ts#L118"},"CameraDevice.ts:118")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"photoheight"},"photoHeight"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"photoHeight"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"The height of the highest resolution a still image (photo) can be produced in"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/501827c/src/CameraDevice.ts#L88"},"CameraDevice.ts:88")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"photowidth"},"photoWidth"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"photoWidth"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"The width of the highest resolution a still image (photo) can be produced in"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/501827c/src/CameraDevice.ts#L92"},"CameraDevice.ts:92")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"supportsphotohdr"},"supportsPhotoHDR"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"supportsPhotoHDR"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Specifies whether this format supports HDR mode for photo capture"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/501827c/src/CameraDevice.ts#L140"},"CameraDevice.ts:140")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"supportsvideohdr"},"supportsVideoHDR"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"supportsVideoHDR"),": ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Specifies whether this format supports HDR mode for video capture"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/501827c/src/CameraDevice.ts#L136"},"CameraDevice.ts:136")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"videoheight"},"videoHeight"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"videoHeight"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"The video resolutions's height"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"platform"))," iOS 13.0"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/501827c/src/CameraDevice.ts#L98"},"CameraDevice.ts:98")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"videostabilizationmodes"},"videoStabilizationModes"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"videoStabilizationModes"),": ",Object(c.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice#videostabilizationmode"},Object(c.b)("em",{parentName:"a"},"VideoStabilizationMode")),"[]"),Object(c.b)("p",null,"All supported video stabilization modes"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/501827c/src/CameraDevice.ts#L152"},"CameraDevice.ts:152")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"videowidth"},"videoWidth"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"videoWidth"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"The video resolution's width"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"platform"))," iOS 13.0"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/501827c/src/CameraDevice.ts#L104"},"CameraDevice.ts:104")))}l.isMDXComponent=!0},125:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var r=a(0),i=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,n=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,d=m["".concat(n,".").concat(u)]||m[u]||s[u]||c;return a?i.a.createElement(d,o(o({ref:t},p),{},{components:a})):i.a.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,n=new Array(c);n[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,n[1]=o;for(var p=2;p<c;p++)n[p]=a[p];return i.a.createElement.apply(null,n)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);