import{cwd as a}from"process";import{resolve as e,dirname as s}from"path";import*as r from"fs";import{fileURLToPath as m}from"url";var l=async t=>{const o=e(`${a()}/${t}`);let i=(await r.promises.readFile(e(`${s(m(import.meta.url))}/../config/${t}`),"utf-8")).toString();try{await r.promises.access(o,r.constants.R_OK),i=(await r.promises.readFile(o,"utf-8")).toString()}catch{}return i};export{l as default};