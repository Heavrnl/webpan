import{u as Z,b as ee}from"./vue-router-1dc8d1b4.js";import{_ as se}from"./index-d9849074.js";import{j as oe,r,ah as p,ap as te,o as a,c,a as o,Q as ae,F as D,U as g,O as f,P as k,V as I,u as P,T as M,S as _,bm as ne,bk as le}from"./@vue-b3e19c9c.js";import"./element-plus-a4c2990b.js";import"./lodash-es-2e98bc53.js";import"./@vueuse-1ae0f1a6.js";import"./@element-plus-f64d54a8.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-7b3af433.js";import"./aplayer-d80f7f58.js";import"./async-validator-10c6301d.js";import"./memoize-one-297ddbcb.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-ac9e5c57.js";import"./vue-cookies-9b55b892.js";import"./@highlightjs-38e4bee3.js";import"./highlight.js-0b7b0786.js";import"./axios-a342f982.js";import"./docx-preview-30c6d22b.js";import"./jszip-d9c085e9.js";import"./xlsx-04f2268f.js";import"./vue-pdf-embed-2320b362.js";import"./vue-336b0872.js";import"./dplayer-ff9c2365.js";import"./vue-clipboard3-abb1cd37.js";import"./clipboard-2fdbe17c.js";const O=v=>(ne("data-v-e2d37c84"),v=v(),le(),v),ie={class:"share"},re={class:"share-body"},ce={key:0,class:"loading"},de={class:"share-panel"},pe={class:"share-user-info"},ue={class:"share-info"},he={class:"user-info"},fe={class:"nick-name"},_e={class:"share-time"},ve={class:"share-op-btn"},me=O(()=>o("span",{class:"iconfont icon-cancel"},null,-1)),ye=O(()=>o("span",{class:"iconfont icon-import"},null,-1)),Se={class:"file-list"},ge=["onMouseenter","onMouseleave"],ke=["title"],Ie=["onClick"],we={class:"op"},be=["onClick"],Ce=["onClick"],Fe={key:0},Te={__name:"Share",setup(v){const{proxy:n}=oe(),m=Z(),w=ee(),d={getShareLoginInfo:"/showShare/getShareLoginInfo",loadFileList:"/showShare/loadFileList",createDownloadUrl:"/showShare/createDownloadUrl",download:"/api/showShare/download",cancelShare:"/share/cancelShare",saveShare:"/showShare/saveShare"},l=w.params.shareId,i=r({});(async()=>{let e=await n.Request({url:d.getShareLoginInfo,showLoading:!1,params:{shareId:l}});if(e){if(e.data==null){m.push("/shareCheck/"+l);return}i.value=e.data}})();const U=[{label:"文件名",prop:"fileName",scopedSlots:"fileName"},{label:"修改时间",prop:"lastUpdateTime",width:200},{label:"大小",prop:"fileSize",scopedSlots:"fileSize",width:200}],u=r({}),z={extHeight:80,selectType:"checkbox"},b=async()=>{let e={pageNo:u.value.pageNo,pageSize:u.value.pageSize,shareId:l,filePid:T.value.fileId},t=await n.Request({url:d.loadFileList,params:e});t&&(u.value=t.data)},L=e=>{u.value.list.forEach(t=>{t.showOp=!1}),e.showOp=!0},V=e=>{e.showOp=!1},h=r([]),q=e=>{h.value=[],e.forEach(t=>{h.value.push(t.fileId)})},T=r({fileId:0}),$=e=>{const{curFolder:t}=e;T.value=t,b()},N=r(),R=r(),j=e=>{if(e.folderType==1){R.value.openFolder(e);return}e.shareId=l,N.value.showPreview(e,2)},B=async e=>{let t=await n.Request({url:d.createDownloadUrl+"/"+l+"/"+e});t&&(window.location.href=d.download+"/"+t.data)},y=r(),C=[],E=()=>{if(h.value.length!=0){if(!n.VueCookies.get("userInfo")){m.push("/login?redirectUrl="+w.path);return}C.values=h.value,y.value.showFolderDialog()}},A=e=>{if(!n.VueCookies.get("userInfo")){m.push("/login?redirectUrl="+w.path);return}C.values=[e.fileId],y.value.showFolderDialog()},H=async e=>{await n.Request({url:d.saveShare,params:{shareId:l,shareFileIds:C.values.join(","),myFolderId:e}})&&(b(),n.Message.success("保存成功"),y.value.close())},Q=()=>{n.Confirm("你确定要取消分享吗？",async()=>{await n.Request({url:d.cancelShare,params:{shareIds:l}})&&(n.Message.success("取消分享成功"),m.push("/"))})};return(e,t)=>{const x=p("el-button"),G=p("Navigation"),F=p("icon"),J=p("Table"),K=p("FolderSelect"),W=p("Preview"),X=te("loading");return a(),c("div",ie,[o("div",re,[Object.keys(i.value).length==0?ae((a(),c("div",ce,null,512)),[[X,Object.keys(i.value).length==0]]):(a(),c(D,{key:1},[o("div",de,[o("div",pe,[o("div",ue,[o("div",he,[o("span",fe,g(i.value.nickName),1),o("span",_e,"分享于 "+g(i.value.shareTime),1)])])]),o("div",ve,[i.value.currentUser?(a(),f(x,{key:0,type:"primary",onClick:Q},{default:k(()=>[me,M("取消分享")]),_:1})):(a(),f(x,{key:1,type:"primary",disabled:h.value.length==0,onClick:E},{default:k(()=>[ye,M("保存到我的网盘")]),_:1},8,["disabled"]))])]),I(G,{ref_key:"navigationRef",ref:R,onNavChange:$,shareId:P(l)},null,8,["shareId"]),o("div",Se,[I(J,{columns:U,showPagination:!0,dataSource:u.value,fetch:b,initFetch:!1,options:z,showPageSize:!1,onRowSelected:q},{fileName:k(({index:Y,row:s})=>[o("div",{class:"file-item",onMouseenter:S=>L(s),onMouseleave:S=>V(s)},[(s.fileType==3||s.fileType==1)&&s.status!==0?(a(),f(F,{key:0,cover:s.fileCover},null,8,["cover"])):(a(),c(D,{key:1},[s.folderType==0?(a(),f(F,{key:0,fileType:s.fileType},null,8,["fileType"])):_("",!0),s.folderType==1?(a(),f(F,{key:1,fileType:0})):_("",!0)],64)),o("span",{class:"file-name",title:s.fileName},[o("span",{onClick:S=>j(s)},g(s.fileName),9,Ie)],8,ke),o("span",we,[s.folderType==0?(a(),c("span",{key:0,class:"iconfont icon-download",onClick:S=>B(s.fileId)},"下载",8,be)):_("",!0),s.showOp&&!i.value.currentUser?(a(),c("span",{key:1,class:"iconfont icon-import",onClick:S=>A(s)},"保存到我的网盘",8,Ce)):_("",!0)])],40,ge)]),fileSize:k(({index:Y,row:s})=>[s.fileSize?(a(),c("span",Fe,g(P(n).Utils.size2Str(s.fileSize)),1)):_("",!0)]),_:1},8,["dataSource"])])],64)),I(K,{ref_key:"folderSelectRef",ref:y,onFolderSelect:H},null,512),I(W,{ref_key:"previewRef",ref:N},null,512)])])}}},os=se(Te,[["__scopeId","data-v-e2d37c84"]]);export{os as default};
