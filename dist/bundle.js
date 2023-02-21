#!/usr/bin/env node
(()=>{"use strict";var e={877:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.colored=void 0,t.colored=(e,t="info")=>`${{info:"[36m",error:"[31m",success:"[32m"}[t]}${e}[0m`},915:function(e,t,o){var i=this&&this.__createBinding||(Object.create?function(e,t,o,i){void 0===i&&(i=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,i,r)}:function(e,t,o,i){void 0===i&&(i=o),e[i]=t[o]}),r=this&&this.__exportStar||function(e,t){for(var o in e)"default"===o||Object.prototype.hasOwnProperty.call(t,o)||i(t,e,o)};Object.defineProperty(t,"__esModule",{value:!0}),r(o(877),t),r(o(162),t),r(o(214),t)},162:function(e,t,o){var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(r,n){function a(e){try{s(i.next(e))}catch(e){n(e)}}function c(e){try{s(i.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.optimizer=void 0;const r=o(12);t.optimizer=(e,t,o,n,a=r.AUTO,c=80)=>i(void 0,void 0,void 0,(function*(){const i=`${e}\\${t}`,s=yield(0,r.read)(i);if(yield s.contain(n,a),yield s.quality(c),o)yield s.writeAsync(i);else{const o=t.split("."),i=o.slice(0,o.length-1).join("."),r=o[o.length-1];yield s.writeAsync(`${e}\\${i}-optimized.${r}`)}}))},214:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=o(877);process.on("uncaughtException",((e,t)=>{console.log((0,i.colored)(e.message,"error")),console.log((0,i.colored)(t,"error"))}))},519:function(e,t,o){var i=this&&this.__awaiter||function(e,t,o,i){return new(o||(o=Promise))((function(r,n){function a(e){try{s(i.next(e))}catch(e){n(e)}}function c(e){try{s(i.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,c)}s((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=o(515),n=o(147),a=o(12),c=o(521),s=o(915);o(214);const l=new r.ArgumentParser({description:"Phoptimizator is a simple image optimizator from -cli."}),u=(0,c.createInterface)({input:process.stdin,output:process.stdout}),d=["jpg","jpeg","png","tif","gif","bmp"];l.add_argument("-v","--version",{action:"version",version:o(598).i8}),l.add_argument("-f","--file",{help:"Image name on current path. Example: xxx.jpg",default:"ALL"}),l.add_argument("-p","--path",{help:"Image path destination. Default: process.cwd()",default:process.cwd()}),l.add_argument("-q","--quality",{help:"Image quality. Default: 70",default:70}),l.add_argument("-he","--height",{help:"Image height. Default: AUTO",default:a.AUTO}),l.add_argument("-w","--width",{help:"Image width. Default: 1920",default:1920}),l.add_argument("-o","--overwrite",{help:"Overwrite. If you set this option, optimized image overwrites original file with same name.",default:!1});const p=l.parse_args();i(void 0,void 0,void 0,(function*(){const e=Object.keys(p).reduce(((e,t)=>e+`${t}: ${p[t]}\n`),"Options: \n")+"\nAre you sure you want to continue? (y/n)";u.question(e,(e=>i(void 0,void 0,void 0,(function*(){if("y"===e.toLowerCase()){let e=[];"ALL"===p.file?(e=(yield n.promises.readdir(p.path)).filter((e=>{const t=e.split("."),o=t[t.length-1];return d.includes(o)})),console.log(e)):e.push(p.file);for(let t=0;t<e.length;t++){const o=e[t];console.log((0,s.colored)(`Optimizing ${o}... [${t+1}/${e.length}]`,"info")),yield(0,s.optimizer)(p.path,o,p.overwrite,"number"==typeof p.width?p.width:Number(p.width),"number"==typeof p.height?p.height:Number(p.height),p.quality)}console.log((0,s.colored)("Optimization completed!","success")),process.exit(5)}else console.log((0,s.colored)("Optimization canceled!","error")),process.exit(13)}))))}))},515:e=>{e.exports=require("argparse")},12:e=>{e.exports=require("jimp")},147:e=>{e.exports=require("fs")},521:e=>{e.exports=require("readline")},598:e=>{e.exports={i8:"2.5.6"}}},t={};!function o(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,o),n.exports}(519)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBSUUsSUFBQWpCLFdBQ0owQyxFQUFRekMsS0FDUnFELEVBQ0FaLEVBQVF2QyxVQUNpQixpQkFBbEJ1QyxFQUFRdEMsTUFBcUJzQyxFQUFRdEMsTUFBUTRELE9BQU90QixFQUFRdEMsT0FDekMsaUJBQW5Cc0MsRUFBUXJDLE9BQXNCcUMsRUFBUXJDLE9BQVMyRCxPQUFPdEIsRUFBUXJDLFFBQ3JFcUMsRUFBUW5DLFEsQ0FJWmlCLFFBQVFDLEtBQUksSUFBQS9CLFNBQVEsMEJBQTJCLFlBQy9DMEIsUUFBUTZDLEtBQUssRSxNQUViekMsUUFBUUMsS0FBSSxJQUFBL0IsU0FBUSx5QkFBMEIsVUFDOUMwQixRQUFRNkMsS0FBSyxHQUVqQixLQUNGLEcsVUNwR0FDLEVBQU9DLFFBQVVDLFFBQVEsVyxTQ0F6QkYsRUFBT0MsUUFBVUMsUUFBUSxPLFVDQXpCRixFQUFPQyxRQUFVQyxRQUFRLEssVUNBekJGLEVBQU9DLFFBQVVDLFFBQVEsVyxtQ0NDckJDLEVBQTJCLENBQUMsR0FHaEMsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQkUsSUFBakJELEVBQ0gsT0FBT0EsRUFBYUwsUUFHckIsSUFBSUQsRUFBU0csRUFBeUJFLEdBQVksQ0FHakRKLFFBQVMsQ0FBQyxHQU9YLE9BSEFPLEVBQW9CSCxHQUFVSSxLQUFLVCxFQUFPQyxRQUFTRCxFQUFRQSxFQUFPQyxRQUFTRyxHQUdwRUosRUFBT0MsT0FDZixDQ25CMEJHLENBQW9CLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waG9wdGltaXplci8uL3NyYy9saWIvY29sb3JlZC50cyIsIndlYnBhY2s6Ly9waG9wdGltaXplci8uL3NyYy9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vcGhvcHRpbWl6ZXIvLi9zcmMvbGliL29wdGltaXplci50cyIsIndlYnBhY2s6Ly9waG9wdGltaXplci8uL3NyYy9saWIvdW5jYXVnaHQtaGFuZGxlci50cyIsIndlYnBhY2s6Ly9waG9wdGltaXplci8uL3NyYy9tYWluLnRzIiwid2VicGFjazovL3Bob3B0aW1pemVyL2V4dGVybmFsIGNvbW1vbmpzIFwiYXJncGFyc2VcIiIsIndlYnBhY2s6Ly9waG9wdGltaXplci9leHRlcm5hbCBjb21tb25qcyBcImppbXBcIiIsIndlYnBhY2s6Ly9waG9wdGltaXplci9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZnNcIiIsIndlYnBhY2s6Ly9waG9wdGltaXplci9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicmVhZGxpbmVcIiIsIndlYnBhY2s6Ly9waG9wdGltaXplci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9waG9wdGltaXplci93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGNvbG9yZWQgPSAoXHJcbiAgbWVzc2FnZTogc3RyaW5nLFxyXG4gIHR5cGU6IFwiaW5mb1wiIHwgXCJlcnJvclwiIHwgXCJzdWNjZXNzXCIgPSBcImluZm9cIlxyXG4pOiBzdHJpbmcgPT4ge1xyXG4gIGNvbnN0IGNvbG9ycyA9IHtcclxuICAgIGluZm86IFwiXFx4MWJbMzZtXCIsXHJcbiAgICBlcnJvcjogXCJcXHgxYlszMW1cIixcclxuICAgIHN1Y2Nlc3M6IFwiXFx4MWJbMzJtXCIsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGAke2NvbG9yc1t0eXBlXX0ke21lc3NhZ2V9XFx4MWJbMG1gO1xyXG59O1xyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9jb2xvcmVkXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL29wdGltaXplclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi91bmNhdWdodC1oYW5kbGVyXCI7XHJcbiIsImltcG9ydCB7IEFVVE8sIHJlYWQgfSBmcm9tIFwiamltcFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9wdGltaXplciA9IGFzeW5jIChcclxuICBwYXRoOiBzdHJpbmcsXHJcbiAgaW1hZ2VOYW1lOiBzdHJpbmcsXHJcbiAgb3ZlcndyaXRlOiBib29sZWFuLFxyXG4gIHdpZHRoOiBudW1iZXIsXHJcbiAgaGVpZ2h0ID0gQVVUTyxcclxuICBxdWFsaXR5ID0gODBcclxuKSA9PiB7XHJcbiAgY29uc3QgaW1hZ2VQYXRoID0gYCR7cGF0aH1cXFxcJHtpbWFnZU5hbWV9YDtcclxuICBjb25zdCBpbWFnZSA9IGF3YWl0IHJlYWQoaW1hZ2VQYXRoKTtcclxuXHJcbiAgYXdhaXQgaW1hZ2UuY29udGFpbih3aWR0aCwgaGVpZ2h0KTtcclxuICBhd2FpdCBpbWFnZS5xdWFsaXR5KHF1YWxpdHkpO1xyXG5cclxuICBpZiAob3ZlcndyaXRlKSB7XHJcbiAgICBhd2FpdCBpbWFnZS53cml0ZUFzeW5jKGltYWdlUGF0aCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IGltYWdlTmFtZVNwbGl0dGVkID0gaW1hZ2VOYW1lLnNwbGl0KFwiLlwiKTtcclxuICAgIGNvbnN0IGltYWdlTmFtZVdpdGhvdXRFeHRlbnNpb24gPSBpbWFnZU5hbWVTcGxpdHRlZFxyXG4gICAgICAuc2xpY2UoMCwgaW1hZ2VOYW1lU3BsaXR0ZWQubGVuZ3RoIC0gMSlcclxuICAgICAgLmpvaW4oXCIuXCIpO1xyXG4gICAgY29uc3QgaW1hZ2VFeHRlbnNpb24gPSBpbWFnZU5hbWVTcGxpdHRlZFtpbWFnZU5hbWVTcGxpdHRlZC5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBhd2FpdCBpbWFnZS53cml0ZUFzeW5jKFxyXG4gICAgICBgJHtwYXRofVxcXFwke2ltYWdlTmFtZVdpdGhvdXRFeHRlbnNpb259LW9wdGltaXplZC4ke2ltYWdlRXh0ZW5zaW9ufWBcclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBjb2xvcmVkIH0gZnJvbSBcIi4vY29sb3JlZFwiO1xyXG5cclxucHJvY2Vzcy5vbihcInVuY2F1Z2h0RXhjZXB0aW9uXCIsIChlcnIsIHJlYXNvbikgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNvbG9yZWQoZXJyLm1lc3NhZ2UsIFwiZXJyb3JcIikpO1xyXG4gIGNvbnNvbGUubG9nKGNvbG9yZWQocmVhc29uLCBcImVycm9yXCIpKTtcclxufSk7XHJcbiIsImltcG9ydCB7IEFyZ3VtZW50UGFyc2VyIH0gZnJvbSBcImFyZ3BhcnNlXCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgeyBBVVRPIH0gZnJvbSBcImppbXBcIjtcclxuaW1wb3J0IHsgY3JlYXRlSW50ZXJmYWNlIH0gZnJvbSBcInJlYWRsaW5lXCI7XHJcbmltcG9ydCB7IGNvbG9yZWQsIG9wdGltaXplciB9IGZyb20gXCIuL2xpYlwiO1xyXG5pbXBvcnQgXCIuL2xpYi91bmNhdWdodC1oYW5kbGVyXCI7XHJcblxyXG5jb25zdCBwYXJzZXIgPSBuZXcgQXJndW1lbnRQYXJzZXIoe1xyXG4gIGRlc2NyaXB0aW9uOiBcIlBob3B0aW1pemF0b3IgaXMgYSBzaW1wbGUgaW1hZ2Ugb3B0aW1pemF0b3IgZnJvbSAtY2xpLlwiLFxyXG59KTtcclxuXHJcbmNvbnN0IGNsaSA9IGNyZWF0ZUludGVyZmFjZSh7XHJcbiAgaW5wdXQ6IHByb2Nlc3Muc3RkaW4sXHJcbiAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dCxcclxufSk7XHJcblxyXG5jb25zdCBTVVBQT1JURURfVFlQRVMgPSBbXCJqcGdcIiwgXCJqcGVnXCIsIFwicG5nXCIsIFwidGlmXCIsIFwiZ2lmXCIsIFwiYm1wXCJdO1xyXG5cclxucGFyc2VyLmFkZF9hcmd1bWVudChcIi12XCIsIFwiLS12ZXJzaW9uXCIsIHtcclxuICBhY3Rpb246IFwidmVyc2lvblwiLFxyXG4gIHZlcnNpb246IHJlcXVpcmUoXCIuLy4uL3BhY2thZ2UuanNvblwiKS52ZXJzaW9uLFxyXG59KTtcclxucGFyc2VyLmFkZF9hcmd1bWVudChcIi1mXCIsIFwiLS1maWxlXCIsIHtcclxuICBoZWxwOiBcIkltYWdlIG5hbWUgb24gY3VycmVudCBwYXRoLiBFeGFtcGxlOiB4eHguanBnXCIsXHJcbiAgZGVmYXVsdDogXCJBTExcIixcclxufSk7XHJcbnBhcnNlci5hZGRfYXJndW1lbnQoXCItcFwiLCBcIi0tcGF0aFwiLCB7XHJcbiAgaGVscDogXCJJbWFnZSBwYXRoIGRlc3RpbmF0aW9uLiBEZWZhdWx0OiBwcm9jZXNzLmN3ZCgpXCIsXHJcbiAgZGVmYXVsdDogcHJvY2Vzcy5jd2QoKSxcclxufSk7XHJcbnBhcnNlci5hZGRfYXJndW1lbnQoXCItcVwiLCBcIi0tcXVhbGl0eVwiLCB7XHJcbiAgaGVscDogXCJJbWFnZSBxdWFsaXR5LiBEZWZhdWx0OiA3MFwiLFxyXG4gIGRlZmF1bHQ6IDcwLFxyXG59KTtcclxucGFyc2VyLmFkZF9hcmd1bWVudChcIi1oZVwiLCBcIi0taGVpZ2h0XCIsIHtcclxuICBoZWxwOiBcIkltYWdlIGhlaWdodC4gRGVmYXVsdDogQVVUT1wiLFxyXG4gIGRlZmF1bHQ6IEFVVE8sXHJcbn0pO1xyXG5wYXJzZXIuYWRkX2FyZ3VtZW50KFwiLXdcIiwgXCItLXdpZHRoXCIsIHtcclxuICBoZWxwOiBcIkltYWdlIHdpZHRoLiBEZWZhdWx0OiAxOTIwXCIsXHJcbiAgZGVmYXVsdDogMTkyMCxcclxufSk7XHJcbnBhcnNlci5hZGRfYXJndW1lbnQoXCItb1wiLCBcIi0tb3ZlcndyaXRlXCIsIHtcclxuICBoZWxwOiBcIk92ZXJ3cml0ZS4gSWYgeW91IHNldCB0aGlzIG9wdGlvbiwgb3B0aW1pemVkIGltYWdlIG92ZXJ3cml0ZXMgb3JpZ2luYWwgZmlsZSB3aXRoIHNhbWUgbmFtZS5cIixcclxuICBkZWZhdWx0OiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCBvcHRpb25zID0gcGFyc2VyLnBhcnNlX2FyZ3MoKTtcclxuXHJcbihhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcXVlc3Rpb25TdHJpbmcgPVxyXG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykucmVkdWNlKChhY2MsIGtleSkgPT4ge1xyXG4gICAgICByZXR1cm4gYWNjICsgYCR7a2V5fTogJHtvcHRpb25zW2tleV19YCArIFwiXFxuXCI7XHJcbiAgICB9LCBgT3B0aW9uczogXFxuYCkgKyBgXFxuQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNvbnRpbnVlPyAoeS9uKWA7XHJcblxyXG4gIGNsaS5xdWVzdGlvbihxdWVzdGlvblN0cmluZywgYXN5bmMgKGFuc3dlcikgPT4ge1xyXG4gICAgaWYgKGFuc3dlci50b0xvd2VyQ2FzZSgpID09PSBcInlcIikge1xyXG4gICAgICBsZXQgb3B0aW1pemVGaWxlczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICAgIGlmIChvcHRpb25zLmZpbGUgPT09IFwiQUxMXCIpIHtcclxuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRkaXIob3B0aW9ucy5wYXRoKTtcclxuXHJcbiAgICAgICAgb3B0aW1pemVGaWxlcyA9IGZpbGVzLmZpbHRlcigoZmlsZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc3BsaXR0ZWRGaWxlID0gZmlsZS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBzcGxpdHRlZEZpbGVbc3BsaXR0ZWRGaWxlLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICAgIHJldHVybiBTVVBQT1JURURfVFlQRVMuaW5jbHVkZXMoZXh0ZW5zaW9uKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cob3B0aW1pemVGaWxlcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3B0aW1pemVGaWxlcy5wdXNoKG9wdGlvbnMuZmlsZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW1pemVGaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBvcHRpbWl6ZUZpbGVzW2ldO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgY29sb3JlZChcclxuICAgICAgICAgICAgYE9wdGltaXppbmcgJHtmaWxlfS4uLiBbJHtpICsgMX0vJHtvcHRpbWl6ZUZpbGVzLmxlbmd0aH1dYCxcclxuICAgICAgICAgICAgXCJpbmZvXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBhd2FpdCBvcHRpbWl6ZXIoXHJcbiAgICAgICAgICBvcHRpb25zLnBhdGgsXHJcbiAgICAgICAgICBmaWxlLFxyXG4gICAgICAgICAgb3B0aW9ucy5vdmVyd3JpdGUsXHJcbiAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy53aWR0aCA9PT0gXCJudW1iZXJcIiA/IG9wdGlvbnMud2lkdGggOiBOdW1iZXIob3B0aW9ucy53aWR0aCksXHJcbiAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5oZWlnaHQgPT09IFwibnVtYmVyXCIgPyBvcHRpb25zLmhlaWdodCA6IE51bWJlcihvcHRpb25zLmhlaWdodCksXHJcbiAgICAgICAgICBvcHRpb25zLnF1YWxpdHlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhjb2xvcmVkKFwiT3B0aW1pemF0aW9uIGNvbXBsZXRlZCFcIiwgXCJzdWNjZXNzXCIpKTtcclxuICAgICAgcHJvY2Vzcy5leGl0KDUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coY29sb3JlZChcIk9wdGltaXphdGlvbiBjYW5jZWxlZCFcIiwgXCJlcnJvclwiKSk7XHJcbiAgICAgIHByb2Nlc3MuZXhpdCgxMyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFyZ3BhcnNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImppbXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhZGxpbmVcIik7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1MTkpO1xuIl0sIm5hbWVzIjpbImNvbG9yZWQiLCJtZXNzYWdlIiwidHlwZSIsImluZm8iLCJlcnJvciIsInN1Y2Nlc3MiLCJvcHRpbWl6ZXIiLCJwYXRoIiwiaW1hZ2VOYW1lIiwib3ZlcndyaXRlIiwid2lkdGgiLCJoZWlnaHQiLCJBVVRPIiwicXVhbGl0eSIsImltYWdlUGF0aCIsImltYWdlIiwicmVhZCIsImNvbnRhaW4iLCJ3cml0ZUFzeW5jIiwiaW1hZ2VOYW1lU3BsaXR0ZWQiLCJzcGxpdCIsImltYWdlTmFtZVdpdGhvdXRFeHRlbnNpb24iLCJzbGljZSIsImxlbmd0aCIsImpvaW4iLCJpbWFnZUV4dGVuc2lvbiIsInByb2Nlc3MiLCJvbiIsImVyciIsInJlYXNvbiIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZXIiLCJBcmd1bWVudFBhcnNlciIsImRlc2NyaXB0aW9uIiwiY2xpIiwiY3JlYXRlSW50ZXJmYWNlIiwiaW5wdXQiLCJzdGRpbiIsIm91dHB1dCIsInN0ZG91dCIsIlNVUFBPUlRFRF9UWVBFUyIsImFkZF9hcmd1bWVudCIsImFjdGlvbiIsInZlcnNpb24iLCJoZWxwIiwiZGVmYXVsdCIsImN3ZCIsIm9wdGlvbnMiLCJwYXJzZV9hcmdzIiwicXVlc3Rpb25TdHJpbmciLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwia2V5IiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJ0b0xvd2VyQ2FzZSIsIm9wdGltaXplRmlsZXMiLCJmaWxlIiwiZnMiLCJwcm9taXNlcyIsInJlYWRkaXIiLCJmaWx0ZXIiLCJzcGxpdHRlZEZpbGUiLCJleHRlbnNpb24iLCJpbmNsdWRlcyIsInB1c2giLCJpIiwiTnVtYmVyIiwiZXhpdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImNhbGwiXSwic291cmNlUm9vdCI6IiJ9