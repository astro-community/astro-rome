import{deepmerge as i}from"deepmerge-ts";import p from"./lib/pipe-all.js";import a from"./options/index.js";import n from"./lib/forward-slash-it.js";import f from"./lib/get-config.js";const s=JSON.parse(await f("rome.json"));var u=(r={})=>{for(const o in r)Object.prototype.hasOwnProperty.call(r,o)&&r[o]===!0&&(r[o]=a()[o]);const t=i(a(),r);return(typeof t.rome>"u"||t.rome===null)&&(t.rome=s),{name:"astro-rome",hooks:{"astro:config:done":async o=>{t.path=t.path?t.path:o.config.outDir.toString()},"astro:build:done":async()=>{let o=new Set;if(typeof t.path<"u")if(t.path instanceof Array||t.path instanceof Set)for(const e of t.path)o.add(n(e));else o.add(n(t.path));for(const e of o)await p(e,t,t.logger)}}}};export{u as default};
