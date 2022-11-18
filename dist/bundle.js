#!/usr/bin/env node
(()=>{"use strict";var e={877:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.colored=void 0,t.colored=(e,t="info")=>`${{info:"[36m%s[0m",error:"[31m%s[0m",success:"[32m%s[0m"}[t]}${e}[0m`},915:function(e,t,i){var o=this&&this.__createBinding||(Object.create?function(e,t,i,o){void 0===o&&(o=i);var r=Object.getOwnPropertyDescriptor(t,i);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,o,r)}:function(e,t,i,o){void 0===o&&(o=i),e[o]=t[i]}),r=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||o(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),r(i(877),t),r(i(162),t),r(i(214),t)},162:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(r,n){function a(e){try{c(o.next(e))}catch(e){n(e)}}function s(e){try{c(o.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.optimizer=void 0;const r=i(12);t.optimizer=(e,t,i,n,a=r.AUTO,s=80)=>o(void 0,void 0,void 0,(function*(){const o=yield(0,r.read)(e);if(yield o.contain(n,a),yield o.quality(s),i)yield o.writeAsync(`${e}\\${t}`);else{const i=t.split("."),r=i.slice(0,i.length-1).join("."),n=i[i.length-1];yield o.writeAsync(`${e}\\${r}-optimized.${n}`)}}))},214:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=i(877);process.on("uncaughtException",(e=>{console.log((0,o.colored)(e.message,"error"))}))},519:function(e,t,i){var o=this&&this.__awaiter||function(e,t,i,o){return new(i||(i=Promise))((function(r,n){function a(e){try{c(o.next(e))}catch(e){n(e)}}function s(e){try{c(o.throw(e))}catch(e){n(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),i(214);const r=i(12),n=i(515),a=i(521),s=i(955),c=i(147),u=i(915),l=i(461),d=new n.ArgumentParser({description:"Phoptimizator is a simple image optimizator from -cli."}),p=(0,a.createInterface)({input:process.stdin,output:process.stdout}),f=["jpg","jpeg","png","tif","gif","bmp"];d.add_argument("-v","--version",{action:"version",version:i(598).i8}),d.add_argument("-f","--file",{help:"Image name on current path. Example: xxx.jpg",default:"ALL"}),d.add_argument("-p","--path",{help:"Image path destination. Default: process.cwd()",default:process.cwd()}),d.add_argument("-q","--quality",{help:"Image quality. Default: 70",default:70}),d.add_argument("-he","--height",{help:"Image height. Default: AUTO",default:r.AUTO}),d.add_argument("-w","--width",{help:"Image width. Default: 1920",default:1920}),d.add_argument("-o","--overwrite",{help:"Overwrite. If you set this option, optimized image overwrites original file with same name.",default:!1});const h=d.parse_args();o(void 0,void 0,void 0,(function*(){const e=Object.keys(h).reduce(((e,t)=>e+`${t}: ${h[t]}\n`),"Options: \n")+"\nAre you sure you want to continue? (y/n)";p.question(e,(e=>o(void 0,void 0,void 0,(function*(){if("y"===e.toLowerCase()){let e=[];"ALL"===h.file?e=(yield c.promises.readdir(h.path)).filter((e=>{const t=e.split("."),i=t[t.length-1];return f.includes(i)})):e.push(h.file);const t=s.default.dots;let i=0;const o=setInterval((()=>{const{frames:e}=t;l(e[i=++i%e.length])}),t.interval);for(const t of e)yield(0,u.optimizer)(h.path,t,h.overwrite,h.width,h.height,h.quality);clearInterval(o),l((0,u.colored)("Optimization completed!","success"))}else l((0,u.colored)("Optimization canceled!","error")),process.exit(13)}))))}))},515:e=>{e.exports=require("argparse")},955:e=>{e.exports=require("cli-spinners")},12:e=>{e.exports=require("jimp")},461:e=>{e.exports=require("log-update")},147:e=>{e.exports=require("fs")},521:e=>{e.exports=require("readline")},598:e=>{e.exports={i8:"2.0.0"}}},t={};!function i(o){var r=t[o];if(void 0!==r)return r.exports;var n=t[o]={exports:{}};return e[o].call(n.exports,n,n.exports,i),n.exports}(519)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UXRDLFVBQ1JzQyxFQUFRckMsTUFDUnFDLEVBQVFwQyxPQUNSb0MsRUFBUWxDLFNBSVo2RCxjQUFjSCxHQUNkekMsR0FBVSxJQUFBOUIsU0FBUSwwQkFBMkIsVyxNQUU3QzhCLEdBQVUsSUFBQTlCLFNBQVEseUJBQTBCLFVBQzVDeUIsUUFBUWtELEtBQUssR0FFakIsS0FDRixHLFVDckdBQyxFQUFPQyxRQUFVQyxRQUFRLFcsVUNBekJGLEVBQU9DLFFBQVVDLFFBQVEsZSxTQ0F6QkYsRUFBT0MsUUFBVUMsUUFBUSxPLFVDQXpCRixFQUFPQyxRQUFVQyxRQUFRLGEsVUNBekJGLEVBQU9DLFFBQVVDLFFBQVEsSyxVQ0F6QkYsRUFBT0MsUUFBVUMsUUFBUSxXLG1DQ0NyQkMsRUFBMkIsQ0FBQyxHQUdoQyxTQUFTQyxFQUFvQkMsR0FFNUIsSUFBSUMsRUFBZUgsRUFBeUJFLEdBQzVDLFFBQXFCRSxJQUFqQkQsRUFDSCxPQUFPQSxFQUFhTCxRQUdyQixJQUFJRCxFQUFTRyxFQUF5QkUsR0FBWSxDQUdqREosUUFBUyxDQUFDLEdBT1gsT0FIQU8sRUFBb0JILEdBQVVJLEtBQUtULEVBQU9DLFFBQVNELEVBQVFBLEVBQU9DLFFBQVNHLEdBR3BFSixFQUFPQyxPQUNmLENDbkIwQkcsQ0FBb0IsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Bob3B0aW1pemVyLy4vc3JjL2xpYi9jb2xvcmVkLnRzIiwid2VicGFjazovL3Bob3B0aW1pemVyLy4vc3JjL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly9waG9wdGltaXplci8uL3NyYy9saWIvb3B0aW1pemVyLnRzIiwid2VicGFjazovL3Bob3B0aW1pemVyLy4vc3JjL2xpYi91bmNhdWdodC1oYW5kbGVyLnRzIiwid2VicGFjazovL3Bob3B0aW1pemVyLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vcGhvcHRpbWl6ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJhcmdwYXJzZVwiIiwid2VicGFjazovL3Bob3B0aW1pemVyL2V4dGVybmFsIGNvbW1vbmpzIFwiY2xpLXNwaW5uZXJzXCIiLCJ3ZWJwYWNrOi8vcGhvcHRpbWl6ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJqaW1wXCIiLCJ3ZWJwYWNrOi8vcGhvcHRpbWl6ZXIvZXh0ZXJuYWwgY29tbW9uanMgXCJsb2ctdXBkYXRlXCIiLCJ3ZWJwYWNrOi8vcGhvcHRpbWl6ZXIvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImZzXCIiLCJ3ZWJwYWNrOi8vcGhvcHRpbWl6ZXIvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInJlYWRsaW5lXCIiLCJ3ZWJwYWNrOi8vcGhvcHRpbWl6ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGhvcHRpbWl6ZXIvd2VicGFjay9zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjb2xvcmVkID0gKFxuICBtZXNzYWdlOiBzdHJpbmcsXG4gIHR5cGU6IFwiaW5mb1wiIHwgXCJlcnJvclwiIHwgXCJzdWNjZXNzXCIgPSBcImluZm9cIlxuKTogc3RyaW5nID0+IHtcbiAgY29uc3QgY29sb3JzID0ge1xuICAgIGluZm86IFwiXFx4MWJbMzZtJXNcXHgxYlswbVwiLFxuICAgIGVycm9yOiBcIlxceDFiWzMxbSVzXFx4MWJbMG1cIixcbiAgICBzdWNjZXNzOiBcIlxceDFiWzMybSVzXFx4MWJbMG1cIixcbiAgfTtcblxuICByZXR1cm4gYCR7Y29sb3JzW3R5cGVdfSR7bWVzc2FnZX1cXHgxYlswbWA7XG59O1xuIiwiZXhwb3J0ICogZnJvbSBcIi4vY29sb3JlZFwiO1xuZXhwb3J0ICogZnJvbSBcIi4vb3B0aW1pemVyXCI7XG5leHBvcnQgKiBmcm9tIFwiLi91bmNhdWdodC1oYW5kbGVyXCI7XG4iLCJpbXBvcnQgeyBBVVRPLCByZWFkIH0gZnJvbSBcImppbXBcIjtcblxuZXhwb3J0IGNvbnN0IG9wdGltaXplciA9IGFzeW5jIChcbiAgcGF0aDogc3RyaW5nLFxuICBpbWFnZU5hbWU6IHN0cmluZyxcbiAgb3ZlcndyaXRlOiBib29sZWFuLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQgPSBBVVRPLFxuICBxdWFsaXR5ID0gODBcbikgPT4ge1xuICBjb25zdCBpbWFnZSA9IGF3YWl0IHJlYWQocGF0aCk7XG5cbiAgYXdhaXQgaW1hZ2UuY29udGFpbih3aWR0aCwgaGVpZ2h0KTtcbiAgYXdhaXQgaW1hZ2UucXVhbGl0eShxdWFsaXR5KTtcblxuICBpZiAob3ZlcndyaXRlKSB7XG4gICAgYXdhaXQgaW1hZ2Uud3JpdGVBc3luYyhgJHtwYXRofVxcXFwke2ltYWdlTmFtZX1gKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBpbWFnZU5hbWVTcGxpdHRlZCA9IGltYWdlTmFtZS5zcGxpdChcIi5cIik7XG4gICAgY29uc3QgaW1hZ2VOYW1lV2l0aG91dEV4dGVuc2lvbiA9IGltYWdlTmFtZVNwbGl0dGVkXG4gICAgICAuc2xpY2UoMCwgaW1hZ2VOYW1lU3BsaXR0ZWQubGVuZ3RoIC0gMSlcbiAgICAgIC5qb2luKFwiLlwiKTtcbiAgICBjb25zdCBpbWFnZUV4dGVuc2lvbiA9IGltYWdlTmFtZVNwbGl0dGVkW2ltYWdlTmFtZVNwbGl0dGVkLmxlbmd0aCAtIDFdO1xuXG4gICAgYXdhaXQgaW1hZ2Uud3JpdGVBc3luYyhcbiAgICAgIGAke3BhdGh9XFxcXCR7aW1hZ2VOYW1lV2l0aG91dEV4dGVuc2lvbn0tb3B0aW1pemVkLiR7aW1hZ2VFeHRlbnNpb259YFxuICAgICk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBjb2xvcmVkIH0gZnJvbSBcIi4vY29sb3JlZFwiO1xuXG5wcm9jZXNzLm9uKFwidW5jYXVnaHRFeGNlcHRpb25cIiwgKGVycikgPT4ge1xuICBjb25zb2xlLmxvZyhjb2xvcmVkKGVyci5tZXNzYWdlLCBcImVycm9yXCIpKTtcbn0pO1xuIiwiaW1wb3J0IFwiLi9saWIvdW5jYXVnaHQtaGFuZGxlclwiO1xuaW1wb3J0IHsgQVVUTyB9IGZyb20gXCJqaW1wXCI7XG5pbXBvcnQgeyBBcmd1bWVudFBhcnNlciB9IGZyb20gXCJhcmdwYXJzZVwiO1xuaW1wb3J0IHsgY3JlYXRlSW50ZXJmYWNlIH0gZnJvbSBcInJlYWRsaW5lXCI7XG5pbXBvcnQgY2xpU3Bpbm5lcnMgZnJvbSBcImNsaS1zcGlubmVyc1wiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBjb2xvcmVkLCBvcHRpbWl6ZXIgfSBmcm9tIFwiLi9saWJcIjtcblxuY29uc3QgbG9nVXBkYXRlID0gcmVxdWlyZShcImxvZy11cGRhdGVcIik7XG5cbmNvbnN0IHBhcnNlciA9IG5ldyBBcmd1bWVudFBhcnNlcih7XG4gIGRlc2NyaXB0aW9uOiBcIlBob3B0aW1pemF0b3IgaXMgYSBzaW1wbGUgaW1hZ2Ugb3B0aW1pemF0b3IgZnJvbSAtY2xpLlwiLFxufSk7XG5cbmNvbnN0IGNsaSA9IGNyZWF0ZUludGVyZmFjZSh7XG4gIGlucHV0OiBwcm9jZXNzLnN0ZGluLFxuICBvdXRwdXQ6IHByb2Nlc3Muc3Rkb3V0LFxufSk7XG5cbmNvbnN0IFNVUFBPUlRFRF9UWVBFUyA9IFtcImpwZ1wiLCBcImpwZWdcIiwgXCJwbmdcIiwgXCJ0aWZcIiwgXCJnaWZcIiwgXCJibXBcIl07XG5cbnBhcnNlci5hZGRfYXJndW1lbnQoXCItdlwiLCBcIi0tdmVyc2lvblwiLCB7XG4gIGFjdGlvbjogXCJ2ZXJzaW9uXCIsXG4gIHZlcnNpb246IHJlcXVpcmUoXCIuLy4uL3BhY2thZ2UuanNvblwiKS52ZXJzaW9uLFxufSk7XG5wYXJzZXIuYWRkX2FyZ3VtZW50KFwiLWZcIiwgXCItLWZpbGVcIiwge1xuICBoZWxwOiBcIkltYWdlIG5hbWUgb24gY3VycmVudCBwYXRoLiBFeGFtcGxlOiB4eHguanBnXCIsXG4gIGRlZmF1bHQ6IFwiQUxMXCIsXG59KTtcbnBhcnNlci5hZGRfYXJndW1lbnQoXCItcFwiLCBcIi0tcGF0aFwiLCB7XG4gIGhlbHA6IFwiSW1hZ2UgcGF0aCBkZXN0aW5hdGlvbi4gRGVmYXVsdDogcHJvY2Vzcy5jd2QoKVwiLFxuICBkZWZhdWx0OiBwcm9jZXNzLmN3ZCgpLFxufSk7XG5wYXJzZXIuYWRkX2FyZ3VtZW50KFwiLXFcIiwgXCItLXF1YWxpdHlcIiwge1xuICBoZWxwOiBcIkltYWdlIHF1YWxpdHkuIERlZmF1bHQ6IDcwXCIsXG4gIGRlZmF1bHQ6IDcwLFxufSk7XG5wYXJzZXIuYWRkX2FyZ3VtZW50KFwiLWhlXCIsIFwiLS1oZWlnaHRcIiwge1xuICBoZWxwOiBcIkltYWdlIGhlaWdodC4gRGVmYXVsdDogQVVUT1wiLFxuICBkZWZhdWx0OiBBVVRPLFxufSk7XG5wYXJzZXIuYWRkX2FyZ3VtZW50KFwiLXdcIiwgXCItLXdpZHRoXCIsIHtcbiAgaGVscDogXCJJbWFnZSB3aWR0aC4gRGVmYXVsdDogMTkyMFwiLFxuICBkZWZhdWx0OiAxOTIwLFxufSk7XG5wYXJzZXIuYWRkX2FyZ3VtZW50KFwiLW9cIiwgXCItLW92ZXJ3cml0ZVwiLCB7XG4gIGhlbHA6IFwiT3ZlcndyaXRlLiBJZiB5b3Ugc2V0IHRoaXMgb3B0aW9uLCBvcHRpbWl6ZWQgaW1hZ2Ugb3ZlcndyaXRlcyBvcmlnaW5hbCBmaWxlIHdpdGggc2FtZSBuYW1lLlwiLFxuICBkZWZhdWx0OiBmYWxzZSxcbn0pO1xuXG5jb25zdCBvcHRpb25zID0gcGFyc2VyLnBhcnNlX2FyZ3MoKTtcblxuKGFzeW5jICgpID0+IHtcbiAgY29uc3QgcXVlc3Rpb25TdHJpbmcgPVxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgIHJldHVybiBhY2MgKyBgJHtrZXl9OiAke29wdGlvbnNba2V5XX1gICsgXCJcXG5cIjtcbiAgICB9LCBgT3B0aW9uczogXFxuYCkgKyBgXFxuQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNvbnRpbnVlPyAoeS9uKWA7XG5cbiAgY2xpLnF1ZXN0aW9uKHF1ZXN0aW9uU3RyaW5nLCBhc3luYyAoYW5zd2VyKSA9PiB7XG4gICAgaWYgKGFuc3dlci50b0xvd2VyQ2FzZSgpID09PSBcInlcIikge1xuICAgICAgbGV0IG9wdGltaXplRmlsZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICAgIGlmIChvcHRpb25zLmZpbGUgPT09IFwiQUxMXCIpIHtcbiAgICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkZGlyKG9wdGlvbnMucGF0aCk7XG5cbiAgICAgICAgb3B0aW1pemVGaWxlcyA9IGZpbGVzLmZpbHRlcigoZmlsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNwbGl0dGVkRmlsZSA9IGZpbGUuc3BsaXQoXCIuXCIpO1xuICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IHNwbGl0dGVkRmlsZVtzcGxpdHRlZEZpbGUubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICByZXR1cm4gU1VQUE9SVEVEX1RZUEVTLmluY2x1ZGVzKGV4dGVuc2lvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW1pemVGaWxlcy5wdXNoKG9wdGlvbnMuZmlsZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNwaW5uZXIgPSBjbGlTcGlubmVycy5kb3RzO1xuICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBmcmFtZXMgfSA9IHNwaW5uZXI7XG4gICAgICAgIGxvZ1VwZGF0ZShmcmFtZXNbKGkgPSArK2kgJSBmcmFtZXMubGVuZ3RoKV0pO1xuICAgICAgfSwgc3Bpbm5lci5pbnRlcnZhbCk7XG5cbiAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBvcHRpbWl6ZUZpbGVzKSB7XG4gICAgICAgIGF3YWl0IG9wdGltaXplcihcbiAgICAgICAgICBvcHRpb25zLnBhdGgsXG4gICAgICAgICAgZmlsZSxcbiAgICAgICAgICBvcHRpb25zLm92ZXJ3cml0ZSxcbiAgICAgICAgICBvcHRpb25zLndpZHRoLFxuICAgICAgICAgIG9wdGlvbnMuaGVpZ2h0LFxuICAgICAgICAgIG9wdGlvbnMucXVhbGl0eVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgIGxvZ1VwZGF0ZShjb2xvcmVkKFwiT3B0aW1pemF0aW9uIGNvbXBsZXRlZCFcIiwgXCJzdWNjZXNzXCIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nVXBkYXRlKGNvbG9yZWQoXCJPcHRpbWl6YXRpb24gY2FuY2VsZWQhXCIsIFwiZXJyb3JcIikpO1xuICAgICAgcHJvY2Vzcy5leGl0KDEzKTtcbiAgICB9XG4gIH0pO1xufSkoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFyZ3BhcnNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsaS1zcGlubmVyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqaW1wXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZy11cGRhdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhZGxpbmVcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1MTkpO1xuIl0sIm5hbWVzIjpbImNvbG9yZWQiLCJtZXNzYWdlIiwidHlwZSIsImluZm8iLCJlcnJvciIsInN1Y2Nlc3MiLCJvcHRpbWl6ZXIiLCJwYXRoIiwiaW1hZ2VOYW1lIiwib3ZlcndyaXRlIiwid2lkdGgiLCJoZWlnaHQiLCJBVVRPIiwicXVhbGl0eSIsImltYWdlIiwicmVhZCIsImNvbnRhaW4iLCJ3cml0ZUFzeW5jIiwiaW1hZ2VOYW1lU3BsaXR0ZWQiLCJzcGxpdCIsImltYWdlTmFtZVdpdGhvdXRFeHRlbnNpb24iLCJzbGljZSIsImxlbmd0aCIsImpvaW4iLCJpbWFnZUV4dGVuc2lvbiIsInByb2Nlc3MiLCJvbiIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJsb2dVcGRhdGUiLCJwYXJzZXIiLCJBcmd1bWVudFBhcnNlciIsImRlc2NyaXB0aW9uIiwiY2xpIiwiY3JlYXRlSW50ZXJmYWNlIiwiaW5wdXQiLCJzdGRpbiIsIm91dHB1dCIsInN0ZG91dCIsIlNVUFBPUlRFRF9UWVBFUyIsImFkZF9hcmd1bWVudCIsImFjdGlvbiIsInZlcnNpb24iLCJoZWxwIiwiZGVmYXVsdCIsImN3ZCIsIm9wdGlvbnMiLCJwYXJzZV9hcmdzIiwicXVlc3Rpb25TdHJpbmciLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJ0b0xvd2VyQ2FzZSIsIm9wdGltaXplRmlsZXMiLCJmaWxlIiwiZnMiLCJwcm9taXNlcyIsInJlYWRkaXIiLCJmaWx0ZXIiLCJzcGxpdHRlZEZpbGUiLCJleHRlbnNpb24iLCJpbmNsdWRlcyIsInB1c2giLCJzcGlubmVyIiwiZG90cyIsImkiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiZnJhbWVzIiwiY2xlYXJJbnRlcnZhbCIsImV4aXQiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsIl9fd2VicGFja19tb2R1bGVzX18iLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==