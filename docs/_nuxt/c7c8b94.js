(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(o,e,n){"use strict";n(130),n(14);e.a=function(o){var e=o.$axios,n=o.$auth,r=o.redirect;o.error,o.route,o.$router;e.onRequest((function(o){return console.log("Making request to "+o.url),o.data instanceof FormData||(o.headers["Content-Type"]="application/json",console.log("DATA",o.data)),o})),e.onError((function(o){if(!o.message||!o.message.startsWith("timeout of"))return o.response&&401===o.response.status?(console.log("axios error"),localStorage.removeItem("user"),window.location.reload(),n.reset(),r("/login")):(o.response&&o.response.status,Promise.resolve(!1))})),e.onResponse((function(o){var e;console.log(o),null!==(e=o.data)&&void 0!==e&&e.error}))}},208:function(o,e,n){n(209),o.exports=n(210)}},[[208,6,1,7]]]);