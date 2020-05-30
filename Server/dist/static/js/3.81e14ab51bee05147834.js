webpackJsonp([3],{VYHB:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("mvHQ"),s=t.n(o),n={name:"login",data:function(){var r=this,e=/^[\da-zA-Z]{6,12}$/i;return{ruleForm:{username:"",password:""},regForm:{regusername:"",regpassword:"",password_confirm:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:function(r,t,o){e.test(t)?o():o(new Error("密码应是6-12位数字或字母！"))},trigger:"blur"}]},regrules:{regusername:[{required:!0,message:"请输入用户名",trigger:"blur"}],regpassword:[{required:!0,message:"请输入密码",trigger:"blur"},{validator:function(t,o,s){e.test(o)?r.regForm.password_confirm!==o?s(new Error("两次输入的密码不一致！")):s():s(new Error("密码应是6-12位数字或字母！"))},trigger:"blur"}],password_confirm:[{required:!0,message:"请确认密码",trigger:"blur"},{validator:function(t,o,s){e.test(o)?r.regForm.regpassword!==o?s(new Error("两次输入的密码不一致！")):s():s(new Error("密码应是6-12位数字或字母！"))},trigger:"blur"}]},loading:!1,log:!0}},methods:{submitForm:function(r){var e=this,t=this;this.$refs[r].validate(function(o){if("ruleForm"===r){if(!o)return e.$message.error("请输入用户名与密码"),!1;e.loading=!0,e.$http.post(e.url+"/users/login",{user_name:e.ruleForm.username,password:e.ruleForm.password}).then(function(r){if(1===r.data)t.$message.error("用户名或密码错误");else if(0===r.data){var e={user_id:r.info.user_id,user_name:r.info.user_name};sessionStorage.setItem("EX_token",s()(e)),console.log(sessionStorage.getItem("EX_token")),t.$router.push("/")}t.loading=!1}).catch(function(r){console.log(r),t.loading=!1})}else if("regForm"===r){if(!o)return e.$message.error("请输入用户名与密码"),!1;e.loading=!0,e.$http.post(e.url+"/users/reg",{user_name:e.regForm.regusername,password:e.regForm.regpassword}).then(function(r){console.log(r),0===r.data?t.$message.error("用户名重复"):1===r.data&&(t.$message.success("注册成功，请登录"),t.backlog()),t.loading=!1}).catch(function(r){console.log(r),t.loading=!1})}})},reg:function(){this.log=!1,this.ruleForm=this.$options.data().ruleForm},backlog:function(){this.log=!0,this.regForm=this.$options.data().regForm}},mounted:function(){}},a={render:function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"login-wrapper"},[t("div",{staticClass:"login-main"},[t("h3",{staticClass:"login-title"},[r._v("个人助理工具")]),r._v(" "),r.log?[t("el-form",{ref:"ruleForm",attrs:{model:r.ruleForm,rules:r.rules}},[t("el-form-item",{attrs:{prop:"username"}},[t("el-input",{attrs:{placeholder:"用户名"},model:{value:r.ruleForm.username,callback:function(e){r.$set(r.ruleForm,"username","string"==typeof e?e.trim():e)},expression:"ruleForm.username"}})],1),r._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&r._k(e.keyCode,"enter",13,e.key,"Enter")?null:r.submitForm("ruleForm")}},model:{value:r.ruleForm.password,callback:function(e){r.$set(r.ruleForm,"password","string"==typeof e?e.trim():e)},expression:"ruleForm.password"}})],1),r._v(" "),t("el-form-item",[t("el-button",{staticClass:"login-btn",attrs:{type:"primary",loading:r.loading},on:{click:function(e){return r.submitForm("ruleForm")}}},[r._v("登录")]),r._v(" "),t("el-button",{staticClass:"reg-btn",attrs:{type:"info"},on:{click:function(e){return r.reg()}}},[r._v("去注册")])],1)],1)]:[t("el-form",{ref:"regForm",attrs:{model:r.regForm,rules:r.regrules}},[t("el-form-item",{attrs:{prop:"regusername"}},[t("el-input",{attrs:{placeholder:"用户名"},model:{value:r.regForm.regusername,callback:function(e){r.$set(r.regForm,"regusername","string"==typeof e?e.trim():e)},expression:"regForm.regusername"}})],1),r._v(" "),t("el-form-item",{attrs:{prop:"regpassword"}},[t("el-input",{attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&r._k(e.keyCode,"enter",13,e.key,"Enter")?null:r.submitForm("regForm")}},model:{value:r.regForm.regpassword,callback:function(e){r.$set(r.regForm,"regpassword","string"==typeof e?e.trim():e)},expression:"regForm.regpassword"}})],1),r._v(" "),t("el-form-item",{attrs:{prop:"password_confirm"}},[t("el-input",{attrs:{type:"password",placeholder:"再次输入密码"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&r._k(e.keyCode,"enter",13,e.key,"Enter")?null:r.submitForm("regForm")}},model:{value:r.regForm.password_confirm,callback:function(e){r.$set(r.regForm,"password_confirm","string"==typeof e?e.trim():e)},expression:"regForm.password_confirm"}})],1),r._v(" "),t("el-form-item",[t("el-button",{staticClass:"login-btn",attrs:{type:"primary",loading:r.loading},on:{click:function(e){return r.submitForm("regForm")}}},[r._v("立即注册")]),r._v(" "),t("el-button",{staticClass:"reg-btn",attrs:{type:"info"},on:{click:function(e){return r.backlog()}}},[r._v("返回登录")])],1)],1)]],2)])},staticRenderFns:[]};var i=t("VU/8")(n,a,!1,function(r){t("YpES")},null,null);e.default=i.exports},YpES:function(r,e){},mvHQ:function(r,e,t){r.exports={default:t("qkKv"),__esModule:!0}},qkKv:function(r,e,t){var o=t("FeBl"),s=o.JSON||(o.JSON={stringify:JSON.stringify});r.exports=function(r){return s.stringify.apply(s,arguments)}}});
//# sourceMappingURL=3.81e14ab51bee05147834.js.map