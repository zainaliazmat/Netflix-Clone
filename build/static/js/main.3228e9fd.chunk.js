(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{190:function(e,t,s){},196:function(e,t,s){},197:function(e,t,s){},198:function(e,t,s){},199:function(e,t,s){},200:function(e,t,s){},201:function(e,t,s){},202:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),c=s(74),i=s.n(c),r=(s(87),s(6)),l=s(3),o=(s(88),s(36)),d=s(10),j=s(26),u=s(1),m=function(e){var t=e.error;return Object(u.jsxs)("div",{children:[Object(u.jsx)(j.c,{className:"errorIcon"}),Object(u.jsx)("div",{className:"errorLine"}),Object(u.jsx)("span",{className:"errorText",children:t})]})},b=(s(190),s(48)),h=s.n(b),O=function(e){var t=e.msg,s=e.color;return Object(u.jsx)("div",{className:"popup",children:Object(u.jsxs)("div",{className:"popup-wrapper",children:[Object(u.jsx)("div",{className:h()({popuparrow:!0,popupcolor:s})}),Object(u.jsx)("div",{className:h()({popupbanner:!0,popupcolor:s}),children:Object(u.jsx)("span",{className:"popup-msg",children:t})})]})})},p=n.a.createContext(),x=function(e){var t=e.children,s=Object(a.useState)(null),n=Object(l.a)(s,2),c=n[0],i=n[1],r=Object(a.useState)("null"),o=Object(l.a)(r,2),d=o[0],j=o[1],m=Object(a.useState)([]),b=Object(l.a)(m,2),h=b[0],O={movie:c,setMovie:i,user:d,setUser:j,signup:h,setSignup:b[1]};return console.log(h),Object(u.jsx)(p.Provider,{value:O,children:t})},v=s(11),g=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),s=t[0],n=t[1],c=Object(a.useContext)(p),i=c.signup,j=c.setSignup,b=d.a().shape({firstname:d.c().min(2,"Too Short!").max(20,"Too Long!").required("Required"),lastname:d.c().min(2,"Too Short!").max(20,"Too Long!").required("Required"),phonenumber:d.c().matches(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,"Invalid Number").required("Required"),email:d.c().email().required("Required"),password:d.c().required("Required").min(8).required("Required"),confirmPassword:d.c().oneOf([d.b("password"),null],"Passwords must match").required("Required")}),h=Object(o.a)({initialValues:{firstname:"",lastname:"",phonenumber:"",email:"",password:"",confirmPassword:""},validationSchema:b,onSubmit:function(e){if(x(e)){var t=Object(r.a)(i);t.push(e),j(t),g("Registered Successfully",!1)}}}),x=function(e){return!(Object(r.a)(i).filter((function(t){return t.email===e.email})).length>=1)||(g("You have already registed through this email",!0),!1)},g=function(e,t){n({value:!0,msg:e,color:t}),setTimeout((function(){n({value:!1,msg:"",color:""})}),3e3)};return Object(u.jsxs)("div",{className:"su-li-background",children:[s.value?Object(u.jsx)(O,{msg:s.msg,color:s.color}):null,Object(u.jsxs)("div",{className:"su-li-card",children:[Object(u.jsxs)("div",{className:"card-info",children:[Object(u.jsx)("h1",{children:"Unlimited movies, TV shows, and more."}),Object(u.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(u.jsx)("h3",{children:"Ready to watch? Create a new accont or login if you already have one."})]}),Object(u.jsx)("div",{className:"wrapper-card-form",children:Object(u.jsxs)("div",{className:"card-form",children:[Object(u.jsx)("h1",{children:"Register"}),Object(u.jsxs)("form",{action:"",className:"input-from",onSubmit:h.handleSubmit,children:[Object(u.jsxs)("div",{className:"form-fields",children:[Object(u.jsxs)("div",{className:"field fn",children:[Object(u.jsx)("span",{children:"First Name"}),Object(u.jsx)("input",{type:"text",name:"firstname",onChange:h.handleChange,value:h.values.firstname}),h.errors.firstname&&h.touched.firstname?Object(u.jsx)(m,{error:h.errors.firstname}):null]}),Object(u.jsxs)("div",{className:"field ln",children:[Object(u.jsx)("span",{children:"Last Name"}),Object(u.jsx)("input",{type:"text",name:"lastname",onChange:h.handleChange,value:h.values.lastname}),h.errors.lastname&&h.touched.lastname?Object(u.jsx)(m,{error:h.errors.lastname}):null]}),Object(u.jsxs)("div",{className:"field pn",children:[Object(u.jsx)("span",{children:"Phone Number"}),Object(u.jsx)("input",{type:"tel",name:"phonenumber",onChange:h.handleChange,value:h.values.phonenumber}),h.errors.phonenumber&&h.touched.phonenumber?Object(u.jsx)(m,{error:h.errors.phonenumber}):null]}),Object(u.jsxs)("div",{className:"field em",children:[Object(u.jsx)("span",{children:"Email"}),Object(u.jsx)("input",{type:"text",name:"email",onChange:h.handleChange,value:h.values.email}),h.errors.email&&h.touched.email?Object(u.jsx)(m,{error:h.errors.email}):null]}),Object(u.jsxs)("div",{className:"field ps",children:[Object(u.jsx)("span",{children:"Password"}),Object(u.jsx)("input",{type:"password",name:"password",onChange:h.handleChange,value:h.values.password}),h.errors.password&&h.touched.password?Object(u.jsx)(m,{error:h.errors.password}):null]}),Object(u.jsxs)("div",{className:"field cps",children:[Object(u.jsx)("span",{children:"Confirm Password"}),Object(u.jsx)("input",{type:"password",name:"confirmPassword",onChange:h.handleChange,value:h.values.confirmPassword}),h.errors.confirmPassword&&h.touched.confirmPassword?Object(u.jsx)(m,{error:h.errors.confirmPassword}):null]})]}),Object(u.jsx)("input",{className:"submit",type:"submit",value:"Create Account"})]}),Object(u.jsxs)("div",{className:"login-link",children:[Object(u.jsx)("span",{children:"Already have an account? "}),Object(u.jsx)(v.b,{to:"/login",className:"su-li-link",children:"Login"})]})]})})]})]})},f=(s(196),s(4)),N=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),s=t[0],n=t[1],c=Object(a.useContext)(p),i=c.signup,j=(c.setSignup,Object(a.useContext)(p)),b=(j.user,j.setUser,Object(f.g)()),h=d.a().shape({email:d.c().email().required("Required"),password:d.c().required("Required").min(8).required("Required")}),x=Object(o.a)({initialValues:{email:"",password:""},validationSchema:h,onSubmit:function(e){g(e)}}),g=function(e){var t=Object(r.a)(i).filter((function(t){return t.email===e.email&&t.password===e.password}));if(t.length>=1)return localStorage.setItem("token","B5~R'U7Bj2pG>za_1DPmr8ETEs"),localStorage.setItem("username",t[0].firstname),void b.push("./home");N("This email or passowrd does't match, Please register before login",!0)},N=function(e,t){n({value:!0,msg:e,color:t}),setTimeout((function(){n({value:!1,msg:"",color:""})}),3e3)};return Object(u.jsxs)("div",{className:"su-li-background",children:[s.value?Object(u.jsx)(O,{msg:s.msg,color:s.color}):null,Object(u.jsxs)("div",{className:"su-li-card",children:[Object(u.jsxs)("div",{className:"card-info",children:[Object(u.jsx)("h1",{children:"Unlimited movies, TV shows, and more."}),Object(u.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(u.jsx)("h3",{children:"Ready to watch? Create a new accont or login if you already have one."})]}),Object(u.jsx)("div",{className:"wrapper-card-form",children:Object(u.jsxs)("div",{className:"li-card-form",children:[Object(u.jsx)("h1",{children:"Login to your account"}),Object(u.jsxs)("form",{action:"",className:"input-from",onSubmit:x.handleSubmit,children:[Object(u.jsxs)("div",{className:"li-form-fields",children:[Object(u.jsxs)("div",{className:"li-field ",children:[Object(u.jsx)("span",{children:"Username"}),Object(u.jsx)("input",{type:"text",name:"email",onChange:x.handleChange,value:x.values.email}),x.errors.email&&x.touched.email?Object(u.jsx)(m,{error:x.errors.email}):null]}),Object(u.jsxs)("div",{className:"li-field ",children:[Object(u.jsx)("span",{children:"Password"}),Object(u.jsx)("input",{type:"password",name:"password",onChange:x.handleChange,value:x.values.password}),x.errors.password&&x.touched.password?Object(u.jsx)(m,{error:x.errors.password}):null]})]}),Object(u.jsx)("input",{className:"li-submit",type:"submit",value:"Log In"})]}),Object(u.jsxs)("div",{className:"login-link",children:[Object(u.jsx)("span",{children:"Don't have an account yet? "}),Object(u.jsx)(v.b,{to:"/signup",className:"su-li-link",children:"Join Netflix"})]})]})})]})]})},w=(s(197),s(81)),C=(s(198),function(e){var t=e.id,s=e.title,n=e.URL,c=e.releaseDate,i=e.timeDuration,r=e.gener,o=e.age,d=Object(a.useState)(t),j=Object(l.a)(d,2),m=j[0],b=j[1],h=Object(a.useState)(s),O=Object(l.a)(h,2),p=O[0],x=O[1],v=Object(a.useState)(c),g=Object(l.a)(v,2),f=g[0],N=g[1],C=Object(a.useState)(i),y=Object(l.a)(C,2),D=y[0],S=y[1],R=Object(a.useState)(r),L=Object(l.a)(R,2),U=L[0],k=L[1],q=Object(a.useState)(o),T=Object(l.a)(q,2),P=T[0],I=T[1],A=Object(a.useState)(n),E=Object(l.a)(A,2),F=E[0],M=E[1];""===m&&b(Date.now());var V={id:m,title:p,releaseDate:f,timeDuration:D,gener:U,age:P,URL:F},B=function(){return""===p||""===f||""===D||""===U||""===P||""===F};return Object(u.jsxs)("div",{className:"Movie-Form",children:[Object(u.jsx)(w.a,{className:"form-close",onClick:function(){return e.show(!1)}}),Object(u.jsx)("h1",{className:"form-name",children:"Add Movie"}),Object(u.jsxs)("form",{action:"",className:"movie-info",children:[Object(u.jsxs)("div",{className:"movie-title info",children:[Object(u.jsx)("span",{children:"Title"}),Object(u.jsx)("input",{type:"text",value:p,onChange:function(e){return x(e.target.value)},placeholder:"Enter movie name..."})]}),Object(u.jsxs)("div",{className:"movie-release-date info",children:[Object(u.jsx)("span",{children:"Release Date"}),Object(u.jsx)("input",{type:"text",value:f,onChange:function(e){return N(e.target.value)},placeholder:"dd-mmm-yyyy"})]}),Object(u.jsxs)("div",{className:"movie-time info",children:[Object(u.jsx)("span",{children:"Time Duration"}),Object(u.jsx)("input",{type:"text",value:D,onChange:function(e){return S(e.target.value)},placeholder:"00h 00m"})]}),Object(u.jsxs)("div",{className:"movie-gener info",children:[Object(u.jsx)("span",{children:"Gener"}),Object(u.jsx)("input",{type:"text",value:U,onChange:function(e){return k(e.target.value)},placeholder:"Movie gener..."})]}),Object(u.jsxs)("div",{className:"movie-age info",children:[Object(u.jsx)("span",{children:"Age Limit"}),Object(u.jsx)("input",{type:"text",value:P,onChange:function(e){return I(e.target.value)},placeholder:"Age+"})]}),Object(u.jsxs)("div",{className:"movie-image-url info",children:[Object(u.jsx)("span",{children:"Image URL"}),Object(u.jsx)("input",{type:"text",value:F,onChange:function(e){return M(e.target.value)},placeholder:"Enter movie image url..."})]})]}),Object(u.jsx)("div",{className:"add-movie-btn",children:Object(u.jsx)("button",{onClick:function(){e.newMovieInfo(V,B()),e.show(B())},children:Object(u.jsx)("span",{children:"ADD MOVIE"})})})]})}),y=(s(199),function(e){var t=Object(f.g)(),s=Object(a.useContext)(p),n=(s.movie,s.setMovie),c=e.id,i=e.title,r=e.URL,l=e.releaseDate,o=e.timeDuration,d=e.gener,m=e.age;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-image",onClick:function(){n(e),t.push("/detail:"+c)},children:Object(u.jsx)("img",{src:r,alt:""})}),Object(u.jsxs)("div",{className:"card-detail",children:[Object(u.jsxs)("div",{className:"h1-btn",children:[Object(u.jsx)("span",{onClick:function(){n(e),t.push("/detail:"+c)},children:i}),Object(u.jsxs)("div",{className:"card-buttons",children:[Object(u.jsx)("div",{className:"card-btn-ring card-edit-ring",children:Object(u.jsx)(j.b,{className:"card-btn ",onClick:function(){return e.edit(c)}})}),Object(u.jsx)("div",{className:"card-btn-ring",children:Object(u.jsx)(j.a,{className:"card-btn card-delete",onClick:function(){return e.delete(c)}})})]})]}),Object(u.jsxs)("div",{onClick:function(){n(e),t.push("/detail:"+c)},children:[Object(u.jsxs)("div",{className:"card-d1",children:[Object(u.jsx)("span",{children:l}),Object(u.jsx)("div",{className:"card-age-icon",children:Object(u.jsx)("span",{children:m})}),Object(u.jsx)("p",{children:o}),Object(u.jsx)("div",{className:"card-hd-icon",children:Object(u.jsx)("span",{children:"HD"})})]}),Object(u.jsx)("div",{className:"card-d2",children:Object(u.jsx)("span",{children:d})})]})]})]})}),D=(s(200),function(e){var t=e.children,s=Object(f.g)(),a=localStorage.getItem("username");return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("span",{className:"header-icon",onClick:function(){return s.push("/home")},children:"NETFLIX"}),Object(u.jsxs)("div",{className:"username",children:[Object(u.jsx)("div",{className:"profile-icon "}),Object(u.jsx)("div",{className:"profile-arrow"}),Object(u.jsxs)("div",{className:"dropdown ",children:[Object(u.jsxs)("div",{className:"dropdown-profile",children:[Object(u.jsx)("div",{className:"ddp-icon profile-icon "}),Object(u.jsx)("span",{className:"ddp-name",children:a})]}),Object(u.jsx)("div",{className:"dd-line"}),Object(u.jsx)("span",{className:"dd-signout",onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("username"),s.push("/login")},children:"Sign out of Netflix"})]}),Object(u.jsx)("div",{className:"arrow"})]})]}),t]})}),S=[{id:"11",title:"Money Heist",URL:"https://images.thequint.com/thequint%2F2021-09%2Fb9aab177-f368-4185-91b4-b37f15c2b7ee%2Fmoneyheist.png?auto=format%2Ccompress&fmt=webp",releaseDate:"02-May-2017",timeDuration:"5 Seasons",gener:"Crime Suspenseful Exciting",age:"16+"},{id:"12",title:"Lucifer",URL:"https://releasedate.news/wp-content/uploads/2021/05/Lucifer-Season-6-What-Netflix-Release-Date-A-planned-sequel.jpg",releaseDate:"25-jan-2016",timeDuration:"6 Seasons",gener:"Detective fantasy Comedy-drama",age:"18+"},{id:"13",title:"Kate",URL:"https://ntvb.tmsimg.com/assets/p20115224_v_h8_aa.jpg?w=960&h=540",releaseDate:"10-sep-2021",timeDuration:"1h 46m",gener:"Thriller Adventure",age:"18+"},{id:"14",title:"The Witcher",URL:"https://images.indianexpress.com/2019/12/the-witcher-netflix-759.jpg",releaseDate:"20-dec-2019",timeDuration:"2 seasons",gener:"Fantasy ",age:"18+"},{id:"15",title:"6 Underground",URL:"https://geekireland.com/wp-content/uploads/2019/12/6-underground.jpg",releaseDate:"10-dec-2019",timeDuration:"2h 8m",gener:"Action/Thriller ",age:"18+"},{id:"16",title:"Peaky Blinders",URL:"https://thumbs-prod.si-cdn.com/Frk9N0whaZA7dSd13Tbcwd0-bbU=/420x240/filters:focal(634x85:635x86)/https://public-media.si-cdn.com/filer/7b/ba/7bba298e-7e2e-44f0-adb9-b47dfdc1e240/p05m69vt.jpg",releaseDate:"12-sep-2013",timeDuration:"5 seasons",gener:"Drama Violent",age:"18+"},{id:"17",title:"Stranger Things",URL:"https://imgix.bustle.com/inverse/98/13/35/e4/575e/4b20/afee/9ab390c35770/stranger-things-3-monster.jpeg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",releaseDate:"15-july-2016",timeDuration:"3 seasons",gener:"Sci-fi Scary Exciting",age:"16+"},{id:"",title:"The Old Guard",URL:"https://jsuchanticleer.com/wp-content/uploads/2020/10/THE-OLD-GUARD-REVIEW.jpg",releaseDate:"10-july-2020",timeDuration:"2h 5m",gener:"Action Fantasy",age:"18+"}],R=function(){var e=[{id:"",title:"",URL:"",releaseDate:"",timeDuration:"",gener:"",age:""}],t=Object(a.useState)(S),s=Object(l.a)(t,2),n=s[0],c=s[1],i=Object(a.useState)(),r=Object(l.a)(i,2),o=r[0],d=r[1],j=Object(a.useState)(!1),m=Object(l.a)(j,2),b=m[0],h=m[1],O=function(e){d(n.filter((function(t){return t.id===e}))),h(!0)},p=function(e){c(n.filter((function(t){return t.id!==e})))},x=function(e,t){if(t);else{var s=!0,a=[];n.map((function(t){return t.id===e.id?(s=!1,a.push(e)):a.push(t)})),s&&a.push(e),c(a)}},v=function(e){h(e)};return Object(u.jsxs)("div",{className:"Home",children:[b?Object(u.jsx)("div",{className:"movie-form-area",children:Object(u.jsx)("div",{className:"movie-form",children:o.map((function(e){return Object(u.jsx)(C,{id:e.id,title:e.title,URL:e.URL,releaseDate:e.releaseDate,timeDuration:e.timeDuration,gener:e.gener,age:e.age,newMovieInfo:x,show:v})}))})}):null,Object(u.jsx)(D,{}),Object(u.jsx)("div",{className:"movie-add-btn",children:Object(u.jsx)("span",{className:"header-add-movie-btn",onClick:function(){d(e),h(!0)},children:"+"})}),Object(u.jsx)("div",{className:"moviecard-display",children:n.map((function(e){return Object(u.jsx)(y,{id:e.id,title:e.title,URL:e.URL,releaseDate:e.releaseDate,timeDuration:e.timeDuration,gener:e.gener,age:e.age,delete:p,edit:O})}))})]})},L=(s(201),function(e){var t=Object(a.useContext)(p),s=t.movie,n=(t.setMovie,s),c=(n.id,n.title),i=n.URL,r=n.releaseDate,l=n.timeDuration,o=n.gener,d=n.age;return Object(u.jsx)("div",{className:"page",children:Object(u.jsxs)("div",{className:"dp-card",children:[Object(u.jsx)("div",{className:"dp-card-image",children:Object(u.jsx)("img",{src:i,alt:""})}),Object(u.jsxs)("div",{className:"dp-card-detail",children:[Object(u.jsx)("div",{className:"dp-h1-btn",children:Object(u.jsx)("h1",{children:c})}),Object(u.jsxs)("div",{className:"dp-card-d1",children:[Object(u.jsx)("span",{children:r}),Object(u.jsx)("div",{className:"dp-card-age-icon",children:Object(u.jsx)("span",{children:d})}),Object(u.jsx)("p",{children:l}),Object(u.jsx)("div",{className:"dp-card-hd-icon",children:Object(u.jsx)("span",{children:"HD"})})]}),Object(u.jsx)("div",{className:"dp-card-d2",children:Object(u.jsx)("span",{children:o})})]})]})})}),U=s(51),k=s(82),q=["children"],T=function(e){var t=e.children,s=Object(k.a)(e,q),a=localStorage.getItem("token");return Object(u.jsx)(f.b,Object(U.a)(Object(U.a)({},s),{},{render:function(){return null!==a?(console.log("true field sun"),t):(console.log("false field sun"),Object(u.jsx)(f.a,{to:"/login"}))}}))},P=function(){var e=Object(f.g)();return Object(u.jsx)("div",{className:"loading",children:Object(u.jsx)("button",{type:"button",onClick:function(){e.push("/login")},children:"Go home"})})};var I=function(){return Object(u.jsx)(x,{children:Object(u.jsx)(v.a,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(f.d,{children:[Object(u.jsx)(T,{path:"/home",children:Object(u.jsx)(R,{})}),Object(u.jsx)(T,{path:"/detail:id",children:Object(u.jsx)(D,{children:Object(u.jsx)(L,{})})}),Object(u.jsx)(f.b,{path:"/signup",children:Object(u.jsx)(g,{})}),Object(u.jsx)(f.b,{path:"/login",exact:!0,children:Object(u.jsx)(N,{})}),Object(u.jsx)(f.b,{path:"/",exact:!0,children:Object(u.jsx)(P,{})})]})})})})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,203)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),A()},87:function(e,t,s){},88:function(e,t,s){}},[[202,1,2]]]);
//# sourceMappingURL=main.3228e9fd.chunk.js.map