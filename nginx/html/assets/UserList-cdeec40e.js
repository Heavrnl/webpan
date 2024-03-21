import{j as K,r as d,ah as s,o as k,c as x,a as f,V as t,P as a,a3 as V,a9 as P,T as v,U as b,u as C,S as D,n as E}from"./@vue-b3e19c9c.js";import{u as H,b as A}from"./vue-router-1dc8d1b4.js";import{_ as G}from"./index-d9849074.js";import"./element-plus-a4c2990b.js";import"./lodash-es-2e98bc53.js";import"./@vueuse-1ae0f1a6.js";import"./@element-plus-f64d54a8.js";import"./@popperjs-c75af06c.js";import"./@ctrl-f8748455.js";import"./dayjs-7b3af433.js";import"./aplayer-d80f7f58.js";import"./async-validator-10c6301d.js";import"./memoize-one-297ddbcb.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui-ac9e5c57.js";import"./vue-cookies-9b55b892.js";import"./@highlightjs-38e4bee3.js";import"./highlight.js-0b7b0786.js";import"./axios-a342f982.js";import"./docx-preview-30c6d22b.js";import"./jszip-d9c085e9.js";import"./xlsx-04f2268f.js";import"./vue-pdf-embed-2320b362.js";import"./vue-336b0872.js";import"./dplayer-ff9c2365.js";import"./vue-clipboard3-abb1cd37.js";import"./clipboard-2fdbe17c.js";const J={class:"top-panel"},Q={class:"file-list"},W={key:0,style:{color:"#529b2e"}},X={key:1,style:{color:"#f56c6c"}},Y=["onClick"],Z=["onClick"],ee={__name:"UserList",setup(te){const{proxy:i}=K();H(),A();const S={loadDataList:"/admin/loadUserList",updateUserStatus:"/admin/updateUserStatus",updateUserSpace:"/admin/updateUserSpace"},N=[{label:"昵称",prop:"nickName"},{label:"邮箱",prop:"email"},{label:"空间使用",prop:"space",scopedSlots:"space"},{label:"加入时间",prop:"joinTime"},{label:"最后登录时间",prop:"lastLoginTime"},{label:"状态",prop:"status",scopedSlots:"status",width:80},{label:"操作",prop:"op",width:150,scopedSlots:"op"}],r=d({}),m=d({}),z={extHeight:20},c=async()=>{let o={pageNo:m.value.pageNo,pageSize:m.value.pageSize};Object.assign(o,r.value);let e=await i.Request({url:S.loadDataList,params:o});e&&(m.value=e.data)},L=o=>{i.Confirm(`你确定要【${o.status==0?"启动":"禁用"}】吗？`,async()=>{await i.Request({url:S.updateUserStatus,params:{userId:o.userId,status:o.status==0?1:0}})&&c()})},p=d({show:!1,title:"修改空间大小",buttons:[{type:"primary",text:"确定",click:o=>{j()}}]}),u=d({}),g=d(),R={changeSpace:[{required:!0,message:"请输入空间大小"}]},T=o=>{p.value.show=!0,E(()=>{g.value.resetFields(),u.value=Object.assign({},o)})},j=()=>{g.value.validate(async o=>{if(!o)return;let e={};Object.assign(e,u.value),await i.Request({url:S.updateUserSpace,params:e})&&(p.value.show=!1,i.Message.success("操作成功"),c())})};return(o,e)=>{const h=s("el-input"),_=s("el-form-item"),y=s("el-col"),U=s("el-option"),F=s("el-select"),q=s("el-button"),B=s("el-row"),w=s("el-form"),I=s("el-divider"),M=s("Table"),O=s("Dialog");return k(),x("div",null,[f("div",J,[t(w,{model:r.value,"label-width":"80px",onSubmit:e[2]||(e[2]=V(()=>{},["prevent"]))},{default:a(()=>[t(B,null,{default:a(()=>[t(y,{span:4},{default:a(()=>[t(_,{label:"用户昵称"},{default:a(()=>[t(h,{clearable:"",placeholder:"支持模糊搜索",modelValue:r.value.nickNameFuzzy,"onUpdate:modelValue":e[0]||(e[0]=l=>r.value.nickNameFuzzy=l),modelModifiers:{trim:!0},onKeyup:P(c,["native"])},null,8,["modelValue"])]),_:1})]),_:1}),t(y,{span:4},{default:a(()=>[t(_,{label:"状态"},{default:a(()=>[t(F,{clearable:"",placeholder:"请选择状态",modelValue:r.value.status,"onUpdate:modelValue":e[1]||(e[1]=l=>r.value.status=l)},{default:a(()=>[t(U,{value:1,label:"启用"}),t(U,{value:0,label:"禁用"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(y,{span:4,style:{"padding-left":"10px"}},{default:a(()=>[t(q,{type:"primary",onClick:c},{default:a(()=>[v(" 查询 ")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),f("div",Q,[t(M,{columns:N,showPagination:!0,dataSource:m.value,fetch:c,options:z},{space:a(({index:l,row:n})=>[v(b(C(i).Utils.size2Str(n.useSpace))+"/"+b(C(i).Utils.size2Str(n.totalSpace)),1)]),status:a(({index:l,row:n})=>[n.status==1?(k(),x("span",W,"启用")):D("",!0),n.status==0?(k(),x("span",X,"禁用")):D("",!0)]),op:a(({index:l,row:n})=>[f("span",{class:"a-link",onClick:$=>T(n)},"分配空间",8,Y),t(I,{direction:"vertical"}),f("span",{class:"a-link",onClick:$=>L(n)},b(n.status==0?"启用":"禁用"),9,Z)]),_:1},8,["dataSource"])]),t(O,{show:p.value.show,title:p.value.title,buttons:p.value.buttons,width:"400px",showCancel:!1,onClose:e[5]||(e[5]=l=>p.value.show=!1)},{default:a(()=>[t(w,{model:u.value,rules:R,ref_key:"formDataRef",ref:g,"label-width":"80px",onSubmit:e[4]||(e[4]=V(()=>{},["prevent"]))},{default:a(()=>[t(_,{label:"昵称"},{default:a(()=>[v(b(u.value.nickName),1)]),_:1}),t(_,{label:"空间大小",prop:"changeSpace"},{default:a(()=>[t(h,{clearable:"",placeholder:"请输入空间大小",modelValue:u.value.changeSpace,"onUpdate:modelValue":e[3]||(e[3]=l=>u.value.changeSpace=l)},{suffix:a(()=>[v("MB")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["show","title","buttons"])])}}},Ne=G(ee,[["__scopeId","data-v-9db93286"]]);export{Ne as default};
