"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[348],{4814:function(e,t,n){n.d(t,{Z:function(){return u}});var a,r,o=n(168),i=n(4236),s=i.Z.section(a||(a=(0,o.Z)(["\n  width: 100%;\n  font-family: sans-serif;\n  padding: 30px 0;\n\n"]))),c=i.Z.h2(r||(r=(0,o.Z)(["\n  font-size: 35px;\n"]))),l=n(184);function u(e){var t=e.title,n=e.children;return(0,l.jsxs)(s,{children:[t&&(0,l.jsx)(c,{children:t}),n]})}},5348:function(e,t,n){n.r(t),n.d(t,{default:function(){return yt}});var a,r,o=n(4814),i=n(9439),s=n(2791),c=n(9434),l=n(1775),u=n(3634),d=n(168),f=n(4236),p=f.Z.form(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 350px;\n  border: 2px solid teal;\n  margin 0 auto;\n  padding: 15px;\n  & input{\n    background-color:#c1dbdbba;\n    border-color: #337088e8;\n    &:hover{\n      border-color: #55b7c3;\n    };\n  };\n\n"]))),m=f.Z.label(r||(r=(0,d.Z)(["\n  width: 100%;\n  margin-bottom: 20px;\n"]))),v=n(896),h=n(9140),g=n(1413),y=n(4925),x=n(9886),b=n(7200),Z=n(7872),C=n(9219),E=n(2996),I=n(6923),T=n(6992),_=n(5246),j=n(184),N=["children","className"],w=(0,x.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),k=(0,i.Z)(w,2),L=k[0],A=k[1],z=(0,Z.G)((function(e,t){var n=(0,C.jC)("Input",e),a=(0,E.Lr)(e),r=a.children,o=a.className,i=(0,y.Z)(a,N),c=(0,T.cx)("chakra-input__group",o),l={},u=(0,b.W)(r),d=n.field;u.forEach((function(e){var t,a;n&&(d&&"InputLeftElement"===e.type.id&&(l.paddingStart=null!=(t=d.height)?t:d.h),d&&"InputRightElement"===e.type.id&&(l.paddingEnd=null!=(a=d.height)?a:d.h),"InputRightAddon"===e.type.id&&(l.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(l.borderStartRadius=0))}));var f=u.map((function(t){var n,a,r=(0,_.oA)({size:(null==(n=t.props)?void 0:n.size)||e.size,variant:(null==(a=t.props)?void 0:a.variant)||e.variant});return"Input"!==t.type.id?(0,s.cloneElement)(t,r):(0,s.cloneElement)(t,Object.assign(r,l,t.props))}));return(0,j.jsx)(I.m.div,(0,g.Z)((0,g.Z)({className:c,ref:t,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},"data-group":!0},i),{},{children:(0,j.jsx)(L,{value:n,children:f})}))}));z.displayName="InputGroup";var R=n(2435);function O(){var e=(0,s.useState)(""),t=(0,i.Z)(e,2),n=t[0],a=t[1],r=(0,s.useState)(""),o=(0,i.Z)(r,2),d=o[0],f=o[1],g=(0,c.v9)(l.Xy),y=(0,c.I0)(),x=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":a(r);break;case"number":f(r);break;default:return}};return(0,j.jsx)(v.M,{children:(0,j.jsxs)(p,{onSubmit:function(e){e.preventDefault();var t={name:n,number:d};g.find((function(e){return e.name===n}))?alert("".concat(n," is already in contacts")):y((0,u.uK)(t)),a(""),f("")},children:[(0,j.jsxs)(m,{children:["Name",(0,j.jsx)(h.I,{size:"sm",type:"text",placeholder:"name",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:x,required:!0})]}),(0,j.jsxs)(m,{children:["Number",(0,j.jsx)(z,{size:"sm",children:(0,j.jsx)(h.I,{type:"tel",placeholder:"phone number",name:"number",value:d,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onInput:x,required:!0})})]}),(0,j.jsx)(R.z,{type:"submit",loadingText:"Submitting",colorScheme:"teal",variant:"solid",children:"Submit"})]})})}var S=n(2625),M=["spacing","spacingX","spacingY","children","justify","direction","align","className","shouldWrapChildren"],B=["className"];function D(e){return"number"===typeof e?"".concat(e,"px"):e}var P=(0,Z.G)((function(e,t){var n=e.spacing,a=void 0===n?"0.5rem":n,r=e.spacingX,o=e.spacingY,i=e.children,c=e.justify,l=e.direction,u=e.align,d=e.className,f=e.shouldWrapChildren,p=(0,y.Z)(e,M),m=(0,s.useMemo)((function(){var e={spacingX:r,spacingY:o},t=e.spacingX,n=void 0===t?a:t,i=e.spacingY,s=void 0===i?a:i;return{"--chakra-wrap-x-spacing":function(e){return(0,S.XQ)(n,(function(t){return D((0,E.fr)("space",t)(e))}))},"--chakra-wrap-y-spacing":function(e){return(0,S.XQ)(s,(function(t){return D((0,E.fr)("space",t)(e))}))},"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:c,alignItems:u,flexDirection:l,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}}),[a,r,o,c,u,l]),v=(0,s.useMemo)((function(){return f?s.Children.map(i,(function(e,t){return(0,j.jsx)(G,{children:e},t)})):i}),[i,f]);return(0,j.jsx)(I.m.div,(0,g.Z)((0,g.Z)({ref:t,className:(0,T.cx)("chakra-wrap",d),overflow:"hidden"},p),{},{children:(0,j.jsx)(I.m.ul,{className:"chakra-wrap__list",__css:m,children:v})}))}));P.displayName="Wrap";var G=(0,Z.G)((function(e,t){var n=e.className,a=(0,y.Z)(e,B);return(0,j.jsx)(I.m.li,(0,g.Z)({ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,T.cx)("chakra-wrap__listitem",n)},a))}));G.displayName="WrapItem";var F=(0,n(5084).eC)("Card"),W=(0,i.Z)(F,2),H=W[0],q=(W[1],["className","children","direction","justify","align"]),X=(0,Z.G)((function(e,t){var n=(0,E.Lr)(e),a=n.className,r=n.children,o=n.direction,i=void 0===o?"column":o,s=n.justify,c=n.align,l=(0,y.Z)(n,q),u=(0,C.jC)("Card",e);return(0,j.jsx)(I.m.div,(0,g.Z)((0,g.Z)({ref:t,className:(0,T.cx)("chakra-card",a),__css:(0,g.Z)({display:"flex",flexDirection:i,justifyContent:s,alignItems:c,position:"relative",minWidth:0,wordWrap:"break-word"},u.container)},l),{},{children:(0,j.jsx)(H,{value:u,children:r})}))})),Q=["direction","align","justify","wrap","basis","grow","shrink"],V=(0,Z.G)((function(e,t){var n=e.direction,a=e.align,r=e.justify,o=e.wrap,i=e.basis,s=e.grow,c=e.shrink,l=(0,y.Z)(e,Q),u={display:"flex",flexDirection:n,alignItems:a,justifyContent:r,flexWrap:o,flexBasis:i,flexGrow:s,flexShrink:c};return(0,j.jsx)(I.m.div,(0,g.Z)({ref:t,__css:u},l))}));V.displayName="Flex";var Y=(0,x.k)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"}),U=(0,i.Z)(Y,2),J=U[0],K=U[1],$=["name","getInitials"];function ee(e){var t=e.split(" "),n=(0,i.Z)(t,2),a=n[0],r=n[1];return a&&r?"".concat(a.charAt(0)).concat(r.charAt(0)):a.charAt(0)}function te(e){var t=e.name,n=e.getInitials,a=(0,y.Z)(e,$),r=K();return(0,j.jsx)(I.m.div,(0,g.Z)((0,g.Z)({role:"img","aria-label":t},a),{},{__css:r.label,children:t?null==n?void 0:n(t):null}))}te.displayName="AvatarName";var ne=function(e){return(0,j.jsxs)(I.m.svg,(0,g.Z)((0,g.Z)({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),{},{children:[(0,j.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,j.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}))},ae=n(9205);function re(e){var t=e.src,n=e.srcSet,a=e.onError,r=e.onLoad,o=e.getInitials,c=e.name,l=e.borderRadius,u=e.loading,d=e.iconLabel,f=e.icon,p=void 0===f?(0,j.jsx)(ne,{}):f,m=e.ignoreFallback,v=e.referrerPolicy,h=e.crossOrigin,g=function(e){var t=e.loading,n=e.src,a=e.srcSet,r=e.onLoad,o=e.onError,c=e.crossOrigin,l=e.sizes,u=e.ignoreFallback,d=(0,s.useState)("pending"),f=(0,i.Z)(d,2),p=f[0],m=f[1];(0,s.useEffect)((function(){m(n?"loading":"pending")}),[n]);var v=(0,s.useRef)(),h=(0,s.useCallback)((function(){if(n){g();var e=new Image;e.src=n,c&&(e.crossOrigin=c),a&&(e.srcset=a),l&&(e.sizes=l),t&&(e.loading=t),e.onload=function(e){g(),m("loaded"),null==r||r(e)},e.onerror=function(e){g(),m("failed"),null==o||o(e)},v.current=e}}),[n,c,a,l,r,o,t]),g=function(){v.current&&(v.current.onload=null,v.current.onerror=null,v.current=null)};return(0,ae.G)((function(){if(!u)return"loading"===p&&h(),function(){g()}}),[p,h,u]),u?"loaded":p}({src:t,onError:a,ignoreFallback:m});return!t||!("loaded"===g)?c?(0,j.jsx)(te,{className:"chakra-avatar__initials",getInitials:o,name:c}):(0,s.cloneElement)(p,{role:"img","aria-label":d}):(0,j.jsx)(I.m.img,{src:t,srcSet:n,alt:c,onLoad:r,referrerPolicy:v,crossOrigin:null!=h?h:void 0,className:"chakra-avatar__img",loading:u,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:l}})}re.displayName="AvatarImage";var oe=["src","srcSet","name","showBorder","borderRadius","onError","onLoad","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback","crossOrigin"],ie={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},se=(0,Z.G)((function(e,t){var n=(0,C.jC)("Avatar",e),a=(0,s.useState)(!1),r=(0,i.Z)(a,2),o=r[0],c=r[1],l=(0,E.Lr)(e),u=l.src,d=l.srcSet,f=l.name,p=l.showBorder,m=l.borderRadius,v=void 0===m?"full":m,h=l.onError,x=l.onLoad,b=l.getInitials,Z=void 0===b?ee:b,_=l.icon,N=void 0===_?(0,j.jsx)(ne,{}):_,w=l.iconLabel,k=void 0===w?" avatar":w,L=l.loading,A=l.children,z=l.borderColor,R=l.ignoreFallback,O=l.crossOrigin,S=(0,y.Z)(l,oe),M=(0,g.Z)((0,g.Z)({borderRadius:v,borderWidth:p?"2px":void 0},ie),n.container);return z&&(M.borderColor=z),(0,j.jsx)(I.m.span,(0,g.Z)((0,g.Z)({ref:t},S),{},{className:(0,T.cx)("chakra-avatar",e.className),"data-loaded":(0,T.PB)(o),__css:M,children:(0,j.jsxs)(J,{value:n,children:[(0,j.jsx)(re,{src:u,srcSet:d,loading:L,onLoad:(0,T.v0)(x,(function(){c(!0)})),onError:h,getInitials:Z,name:f,borderRadius:v,icon:N,iconLabel:k,ignoreFallback:R,crossOrigin:O}),A]})}))}));se.displayName="Avatar";var ce=["size","centerContent"],le=["size"],ue=(0,I.m)("div");ue.displayName="Box";var de=(0,Z.G)((function(e,t){var n=e.size,a=e.centerContent,r=void 0===a||a,o=(0,y.Z)(e,ce),i=r?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,j.jsx)(ue,(0,g.Z)({ref:t,boxSize:n,__css:(0,g.Z)((0,g.Z)({},i),{},{flexShrink:0,flexGrow:0})},o))}));de.displayName="Square",(0,Z.G)((function(e,t){var n=e.size,a=(0,y.Z)(e,le);return(0,j.jsx)(de,(0,g.Z)({size:n,ref:t,borderRadius:"9999px"},a))})).displayName="Circle";var fe=n(5946),pe=["className","align","decoration","casing"],me=(0,Z.G)((function(e,t){var n=(0,C.mq)("Text",e),a=(0,E.Lr)(e),r=(a.className,a.align,a.decoration,a.casing,(0,y.Z)(a,pe)),o=(0,_.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,j.jsx)(I.m.p,(0,g.Z)((0,g.Z)((0,g.Z)({ref:t,className:(0,T.cx)("chakra-text",e.className)},o),r),{},{__css:n}))}));me.displayName="Text";var ve=["icon","children","isRound","aria-label"],he=(0,Z.G)((function(e,t){var n=e.icon,a=e.children,r=e.isRound,o=e["aria-label"],i=(0,y.Z)(e,ve),c=n||a,l=(0,s.isValidElement)(c)?(0,s.cloneElement)(c,{"aria-hidden":!0,focusable:!1}):null;return(0,j.jsx)(R.z,(0,g.Z)((0,g.Z)({padding:"0",borderRadius:r?"full":void 0,ref:t,"aria-label":o},i),{},{children:l}))}));he.displayName="IconButton";var ge=n(4363);function ye(e){var t=e.viewBox,n=void 0===t?"0 0 24 24":t,a=e.d,r=e.displayName,o=e.defaultProps,i=void 0===o?{}:o,c=s.Children.toArray(e.path),l=(0,Z.G)((function(e,t){return(0,j.jsx)(ge.J,(0,g.Z)((0,g.Z)((0,g.Z)({ref:t,viewBox:n},i),e),{},{children:c.length?c:(0,j.jsx)("path",{fill:"currentColor",d:a})}))}));return l.displayName=r,l}var xe=ye({d:"M2.20731,0.0127209 C2.1105,-0.0066419 1.99432,-0.00664663 1.91687,0.032079 C0.871279,0.438698 0.212942,1.92964 0.0580392,2.95587 C-0.426031,6.28627 2.20731,9.17133 4.62766,11.0689 C6.77694,12.7534 10.9012,15.5223 13.3409,12.8503 C13.6507,12.5211 14.0186,12.037 13.9993,11.553 C13.9412,10.7397 13.186,10.1588 12.6051,9.71349 C12.1598,9.38432 11.2304,8.47427 10.6495,8.49363 C10.1267,8.51299 9.79754,9.05515 9.46837,9.38432 L8.88748,9.96521 C8.79067,10.062 7.55145,9.24878 7.41591,9.15197 C6.91248,8.8228 6.4284,8.45491 6.00242,8.04829 C5.57644,7.64167 5.18919,7.19632 4.86002,6.73161 C4.7632,6.59607 3.96933,5.41495 4.04678,5.31813 C4.04678,5.31813 4.72448,4.58234 4.91811,4.2919 C5.32473,3.67229 5.63453,3.18822 5.16982,2.45243 C4.99556,2.18135 4.78257,1.96836 4.55021,1.73601 C4.14359,1.34875 3.73698,0.942131 3.27227,0.612963 C3.02055,0.419335 2.59457,0.0708094 2.20731,0.0127209 Z",displayName:"PhoneIcon",viewBox:"0 0 14 14"}),be=ye({displayName:"DeleteIcon",path:(0,j.jsx)("g",{fill:"currentColor",children:(0,j.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})}),Ze=n(9575);function Ce(){var e=(0,c.v9)(Ze.DI),t=(0,c.I0)();return(0,j.jsx)(P,{spacing:"4px",justify:"center",flexWrap:"nowrap",flexDir:"column",children:e.map((function(e){var n=e.id,a=e.name,r=e.number;return(0,j.jsx)(G,{justify:"center",children:(0,j.jsxs)(X,{w:"xs",p:"12px",justify:"space-between",flexWrap:"nowrap",flexDir:"colum",backgroundColor:"#c1dbdbba",children:[(0,j.jsxs)(V,{gap:"4",alignItems:"center",children:[(0,j.jsx)(se,{bg:"blue.500"}),(0,j.jsxs)(ue,{alignItems:"center",maxW:"180px",overflow:"clip",children:[(0,j.jsx)(fe.X,{size:"sm",children:a}),(0,j.jsx)(me,{children:r})]})]}),(0,j.jsxs)(V,{alignItems:"center",flexDir:"column",children:[(0,j.jsx)("a",{href:"tel:".concat(r),children:(0,j.jsx)(he,{size:"xs",variant:"ghost",colorScheme:"teal","aria-label":"Call the contact",icon:(0,j.jsx)(xe,{}),type:"tel"})}),(0,j.jsx)(he,{size:"xs",variant:"ghost",colorScheme:"teal","aria-label":"Delete contact",icon:(0,j.jsx)(be,{}),type:"button",onClick:function(){return t((0,Ze.m5)(n))}})]})]})},n)}))})}var Ee=n(4942),Ie=["placement"],Te=["className"],_e=["className"],je=(0,I.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),Ne=(0,Z.G)((function(e,t){var n,a,r,o=e.placement,i=void 0===o?"left":o,s=(0,y.Z)(e,Ie),c=A(),l=c.field,u="left"===i?"insetStart":"insetEnd",d=(0,g.Z)((n={},(0,Ee.Z)(n,u,"0"),(0,Ee.Z)(n,"width",null!=(a=null==l?void 0:l.height)?a:null==l?void 0:l.h),(0,Ee.Z)(n,"height",null!=(r=null==l?void 0:l.height)?r:null==l?void 0:l.h),(0,Ee.Z)(n,"fontSize",null==l?void 0:l.fontSize),n),c.element);return(0,j.jsx)(je,(0,g.Z)({ref:t,__css:d},s))}));Ne.id="InputElement",Ne.displayName="InputElement";var we=(0,Z.G)((function(e,t){var n=e.className,a=(0,y.Z)(e,Te),r=(0,T.cx)("chakra-input__left-element",n);return(0,j.jsx)(Ne,(0,g.Z)({ref:t,placement:"left",className:r},a))}));we.id="InputLeftElement",we.displayName="InputLeftElement";var ke=(0,Z.G)((function(e,t){var n=e.className,a=(0,y.Z)(e,_e),r=(0,T.cx)("chakra-input__right-element",n);return(0,j.jsx)(Ne,(0,g.Z)({ref:t,placement:"right",className:r},a))}));ke.id="InputRightElement",ke.displayName="InputRightElement";var Le=ye({d:"M23.414,20.591l-4.645-4.645a10.256,10.256,0,1,0-2.828,2.829l4.645,4.644a2.025,2.025,0,0,0,2.828,0A2,2,0,0,0,23.414,20.591ZM10.25,3.005A7.25,7.25,0,1,1,3,10.255,7.258,7.258,0,0,1,10.25,3.005Z",displayName:"Search2Icon"}),Ae=n(2759);function ze(){var e=(0,c.v9)(Ae.Gd),t=(0,c.I0)();return(0,j.jsxs)(z,{w:"50%",m:"0 auto",children:[(0,j.jsx)(we,{pointerEvents:"none",children:(0,j.jsx)(Le,{color:"teal.700"})}),(0,j.jsx)(h.I,{placeholder:"Find the contact",type:"text",name:"filter",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(e){var n=e.target.value;t((0,Ae.Mg)(n))},border:"1px solid teal",_hover:{borderColor:"#2dc8b9"}})]})}var Re=n(4164),Oe=n(3433);function Se(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=Se(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var Me=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=Se(e))&&(a&&(a+=" "),a+=t);return a},Be=["theme","type"],De=["delay","staleId"],Pe=function(e){return"number"==typeof e&&!isNaN(e)},Ge=function(e){return"string"==typeof e},Fe=function(e){return"function"==typeof e},We=function(e){return Ge(e)||Fe(e)?e:null},He=function(e){return(0,s.isValidElement)(e)||Ge(e)||Fe(e)||Pe(e)};function qe(e){var t=e.enter,n=e.exit,a=e.appendPosition,r=void 0!==a&&a,o=e.collapse,i=void 0===o||o,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var a=e.children,o=e.position,c=e.preventExitTransition,u=e.done,d=e.nodeRef,f=e.isIn,p=r?"".concat(t,"--").concat(o):t,m=r?"".concat(n,"--").concat(o):n,v=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var e,t=d.current,n=p.split(" "),a=function e(a){var r;a.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===v.current&&"animationcancel"!==a.type&&(r=t.classList).remove.apply(r,(0,Oe.Z)(n)))};(e=t.classList).add.apply(e,(0,Oe.Z)(n)),t.addEventListener("animationend",a),t.addEventListener("animationcancel",a)}),[]),(0,s.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var a=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=a+"px",r.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,u,l):u()};f||(c?t():(v.current=1,e.className+=" ".concat(m),e.addEventListener("animationend",t)))}),[f]),s.createElement(s.Fragment,null,a)}}function Xe(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var Qe={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(a){var r=setTimeout((function(){a.apply(void 0,(0,Oe.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}},Ve=function(e){var t=e.theme,n=e.type,a=(0,y.Z)(e,Be);return s.createElement("svg",(0,g.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},a))},Ye={info:function(e){return s.createElement(Ve,(0,g.Z)({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(Ve,(0,g.Z)({},e),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(Ve,(0,g.Z)({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(Ve,(0,g.Z)({},e),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function Ue(e){var t=(0,s.useReducer)((function(e){return e+1}),0),n=(0,i.Z)(t,2)[1],a=(0,s.useState)([]),r=(0,i.Z)(a,2),o=r[0],c=r[1],l=(0,s.useRef)(null),u=(0,s.useRef)(new Map).current,d=function(e){return-1!==o.indexOf(e)},f=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return u.get(e)}}).current;function p(e){var t=e.containerId;!f.props.limit||t&&f.containerId!==t||(f.count-=f.queue.length,f.queue=[])}function m(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function v(){var e=f.queue.shift();x(e.toastContent,e.toastProps,e.staleId)}function h(e,t){var a=t.delay,r=t.staleId,o=(0,y.Z)(t,De);if(He(e)&&!function(e){return!l.current||f.props.enableMultiContainer&&e.containerId!==f.props.containerId||u.has(e.toastId)&&null==e.updateId}(o)){var c=o.toastId,d=o.updateId,p=o.data,h=f.props,b=function(){return m(c)},Z=null==d;Z&&f.count++;var C,E,I=(0,g.Z)((0,g.Z)((0,g.Z)({},h),{},{style:h.toastStyle,key:f.toastKey++},Object.fromEntries(Object.entries(o).filter((function(e){var t=(0,i.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:c,updateId:d,data:p,closeToast:b,isIn:!1,className:We(o.className||h.toastClassName),bodyClassName:We(o.bodyClassName||h.bodyClassName),progressClassName:We(o.progressClassName||h.progressClassName),autoClose:!o.isLoading&&(C=o.autoClose,E=h.autoClose,!1===C||Pe(C)&&C>0?C:E),deleteToast:function(){var e=Xe(u.get(c),"removed");u.delete(c),Qe.emit(4,e);var t=f.queue.length;if(f.count=null==c?f.count-f.displayedToast:f.count-1,f.count<0&&(f.count=0),t>0){var a=null==c?f.props.limit:1;if(1===t||1===a)f.displayedToast++,v();else{var r=a>t?t:a;f.displayedToast=r;for(var o=0;o<r;o++)v()}}else n()}});I.iconOut=function(e){var t=e.theme,n=e.type,a=e.isLoading,r=e.icon,o=null,i={theme:t,type:n};return!1===r||(Fe(r)?o=r(i):(0,s.isValidElement)(r)?o=(0,s.cloneElement)(r,i):Ge(r)||Pe(r)?o=r:a?o=Ye.spinner():function(e){return e in Ye}(n)&&(o=Ye[n](i))),o}(I),Fe(o.onOpen)&&(I.onOpen=o.onOpen),Fe(o.onClose)&&(I.onClose=o.onClose),I.closeButton=h.closeButton,!1===o.closeButton||He(o.closeButton)?I.closeButton=o.closeButton:!0===o.closeButton&&(I.closeButton=!He(h.closeButton)||h.closeButton);var T=e;(0,s.isValidElement)(e)&&!Ge(e.type)?T=(0,s.cloneElement)(e,{closeToast:b,toastProps:I,data:p}):Fe(e)&&(T=e({closeToast:b,toastProps:I,data:p})),h.limit&&h.limit>0&&f.count>h.limit&&Z?f.queue.push({toastContent:T,toastProps:I,staleId:r}):Pe(a)?setTimeout((function(){x(T,I,r)}),a):x(T,I,r)}}function x(e,t,n){var a=t.toastId;n&&u.delete(n);var r={content:e,props:t};u.set(a,r),c((function(e){return[].concat((0,Oe.Z)(e),[a]).filter((function(e){return e!==n}))})),Qe.emit(4,Xe(r,null==r.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return f.containerId=e.containerId,Qe.cancelEmit(3).on(0,h).on(1,(function(e){return l.current&&m(e)})).on(5,p).emit(2,f),function(){u.clear(),Qe.emit(3,f)}}),[]),(0,s.useEffect)((function(){f.props=e,f.isToastActive=d,f.displayedToast=o.length})),{getToastToRender:function(t){var n=new Map,a=Array.from(u.values());return e.newestOnTop&&a.reverse(),a.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:l,isToastActive:d}}function Je(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Ke(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function $e(e){var t=(0,s.useState)(!1),n=(0,i.Z)(t,2),a=n[0],r=n[1],o=(0,s.useState)(!1),c=(0,i.Z)(o,2),l=c[0],u=c[1],d=(0,s.useRef)(null),f=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function x(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",E),document.addEventListener("mouseup",I),document.addEventListener("touchmove",E),document.addEventListener("touchend",I);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=Je(t.nativeEvent),f.y=Ke(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(f.boundingRect){var n=f.boundingRect,a=n.top,r=n.bottom,o=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=o&&f.x<=i&&f.y>=a&&f.y<=r?C():Z()}}function Z(){r(!0)}function C(){r(!1)}function E(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&C(),f.x=Je(t),f.y=Ke(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function I(){document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",I);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,s.useEffect)((function(){p.current=e})),(0,s.useEffect)((function(){return d.current&&d.current.addEventListener("d",Z,{once:!0}),Fe(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;Fe(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)}}),[]),(0,s.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",Z),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",Z),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var T={onMouseDown:x,onTouchStart:x,onMouseUp:b,onTouchEnd:b};return m&&v&&(T.onMouseEnter=C,T.onMouseLeave=Z),y&&(T.onClick=function(e){g&&g(e),f.canCloseOnClick&&h()}),{playToast:Z,pauseToast:C,isRunning:a,preventExitTransition:l,toastRef:d,eventHandlers:T}}function et(e){var t=e.closeToast,n=e.theme,a=e.ariaLabel,r=void 0===a?"close":a;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":r},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function tt(e){var t=e.delay,n=e.isRunning,a=e.closeToast,r=e.type,o=void 0===r?"default":r,i=e.hide,c=e.className,l=e.style,u=e.controlledProgress,d=e.progress,f=e.rtl,p=e.isIn,m=e.theme,v=i||u&&0===d,h=(0,g.Z)((0,g.Z)({},l),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:v?0:1});u&&(h.transform="scaleX(".concat(d,")"));var y=Me("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(m),"Toastify__progress-bar--".concat(o),{"Toastify__progress-bar--rtl":f}),x=Fe(c)?c({rtl:f,type:o,defaultClassName:y}):Me(y,c);return s.createElement("div",(0,Ee.Z)({role:"progressbar","aria-hidden":v?"true":"false","aria-label":"notification timer",className:x,style:h},u&&d>=1?"onTransitionEnd":"onAnimationEnd",u&&d<1?null:function(){p&&a()}))}var nt=function(e){var t=$e(e),n=t.isRunning,a=t.preventExitTransition,r=t.toastRef,o=t.eventHandlers,i=e.closeButton,c=e.children,l=e.autoClose,u=e.onClick,d=e.type,f=e.hideProgressBar,p=e.closeToast,m=e.transition,v=e.position,h=e.className,y=e.style,x=e.bodyClassName,b=e.bodyStyle,Z=e.progressClassName,C=e.progressStyle,E=e.updateId,I=e.role,T=e.progress,_=e.rtl,j=e.toastId,N=e.deleteToast,w=e.isIn,k=e.isLoading,L=e.iconOut,A=e.closeOnClick,z=e.theme,R=Me("Toastify__toast","Toastify__toast-theme--".concat(z),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":_},{"Toastify__toast--close-on-click":A}),O=Fe(h)?h({rtl:_,position:v,type:d,defaultClassName:R}):Me(R,h),S=!!T||!l,M={closeToast:p,type:d,theme:z},B=null;return!1===i||(B=Fe(i)?i(M):(0,s.isValidElement)(i)?(0,s.cloneElement)(i,M):et(M)),s.createElement(m,{isIn:w,done:N,position:v,preventExitTransition:a,nodeRef:r},s.createElement("div",(0,g.Z)((0,g.Z)({id:j,onClick:u,className:O},o),{},{style:y,ref:r}),s.createElement("div",(0,g.Z)((0,g.Z)({},w&&{role:I}),{},{className:Fe(x)?x({type:d}):Me("Toastify__toast-body",x),style:b}),null!=L&&s.createElement("div",{className:Me("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!k})},L),s.createElement("div",null,c)),B,s.createElement(tt,(0,g.Z)((0,g.Z)({},E&&!S?{key:"pb-".concat(E)}:{}),{},{rtl:_,theme:z,delay:l,isRunning:n,isIn:w,closeToast:p,hide:f,type:d,style:C,className:Z,controlledProgress:S,progress:T||0}))))},at=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},rt=qe(at("bounce",!0)),ot=(qe(at("slide",!0)),qe(at("zoom")),qe(at("flip")),(0,s.forwardRef)((function(e,t){var n=Ue(e),a=n.getToastToRender,r=n.containerRef,o=n.isToastActive,i=e.className,c=e.style,l=e.rtl,u=e.containerId;function d(e){var t=Me("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return Fe(i)?i({position:e,rtl:l,defaultClassName:t}):Me(t,We(i))}return(0,s.useEffect)((function(){t&&(t.current=r.current)}),[]),s.createElement("div",{ref:r,className:"Toastify",id:u},a((function(e,t){var n=t.length?(0,g.Z)({},c):(0,g.Z)((0,g.Z)({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var a=e.content,r=e.props;return s.createElement(nt,(0,g.Z)((0,g.Z)({},r),{},{isIn:o(r.toastId),style:(0,g.Z)((0,g.Z)({},r.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(r.key)}),a)})))})))})));ot.displayName="ToastContainer",ot.defaultProps={position:"top-right",transition:rt,autoClose:5e3,closeButton:et,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var it,st=new Map,ct=[],lt=1;function ut(){return""+lt++}function dt(e){return e&&(Ge(e.toastId)||Pe(e.toastId))?e.toastId:ut()}function ft(e,t){return st.size>0?Qe.emit(0,e,t):ct.push({content:e,options:t}),t.toastId}function pt(e,t){return(0,g.Z)((0,g.Z)({},t),{},{type:t&&t.type||e,toastId:dt(t)})}function mt(e){return function(t,n){return ft(t,pt(e,n))}}function vt(e,t){return ft(e,pt("default",t))}vt.loading=function(e,t){return ft(e,pt("default",(0,g.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},vt.promise=function(e,t,n){var a,r=t.pending,o=t.error,i=t.success;r&&(a=Ge(r)?vt.loading(r,n):vt.loading(r.render,(0,g.Z)((0,g.Z)({},n),r)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,r){if(null!=t){var o=(0,g.Z)((0,g.Z)((0,g.Z)({type:e},s),n),{},{data:r}),i=Ge(t)?{render:t}:t;return a?vt.update(a,(0,g.Z)((0,g.Z)({},o),i)):vt(i.render,(0,g.Z)((0,g.Z)({},o),i)),r}vt.dismiss(a)},l=Fe(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",o,e)})),l},vt.success=mt("success"),vt.info=mt("info"),vt.error=mt("error"),vt.warning=mt("warning"),vt.warn=vt.warning,vt.dark=function(e,t){return ft(e,pt("default",(0,g.Z)({theme:"dark"},t)))},vt.dismiss=function(e){st.size>0?Qe.emit(1,e):ct=ct.filter((function(t){return null!=e&&t.options.toastId!==e}))},vt.clearWaitingQueue=function(e){return void 0===e&&(e={}),Qe.emit(5,e)},vt.isActive=function(e){var t=!1;return st.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},vt.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,a=st.get(n||it);return a&&a.getToast(e)}(e,t);if(n){var a=n.props,r=n.content,o=(0,g.Z)((0,g.Z)((0,g.Z)({delay:100},a),t),{},{toastId:t.toastId||e,updateId:ut()});o.toastId!==e&&(o.staleId=e);var i=o.render||r;delete o.render,ft(i,o)}}),0)},vt.done=function(e){vt.update(e,{progress:1})},vt.onChange=function(e){return Qe.on(4,e),function(){Qe.off(4,e)}},vt.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},vt.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Qe.on(2,(function(e){it=e.containerId||e,st.set(it,e),ct.forEach((function(e){Qe.emit(0,e.content,e.options)})),ct=[]})).on(3,(function(e){st.delete(e.containerId||e),0===st.size&&Qe.off(0).off(1).off(5)}));var ht=document.getElementById("poUp-root");function gt(e){var t=e.children;return(0,Re.createPortal)((0,j.jsx)(ot,{position:"bottom-center",autoClose:3e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!1,theme:"colored",children:t}),ht)}function yt(){var e=(0,c.v9)(l.Xy),t=(0,c.I0)(),n=(0,c.v9)(l.xU),a=(0,c.v9)(l.zh);return(0,s.useEffect)((function(){t((0,u.mk)())}),[t]),(0,j.jsxs)(o.Z,{title:"Phonebook",children:[(0,j.jsxs)(o.Z,{children:[(0,j.jsx)("h3",{children:"Add new contact"}),(0,j.jsx)(O,{})]}),(0,j.jsxs)(o.Z,{children:[(0,j.jsx)("h3",{children:"Find your contact"}),(0,j.jsx)(ze,{})]}),(0,j.jsxs)(o.Z,{children:[(0,j.jsx)("h3",{children:"All your contacts"}),n&&!a&&(0,j.jsx)("p",{children:"Request in progress..."}),e.length>0&&(0,j.jsx)(Ce,{})]}),null!==a&&(0,j.jsx)(gt,{children:vt.error(a)})]})}},5946:function(e,t,n){n.d(t,{X:function(){return f}});var a=n(1413),r=n(4925),o=n(7872),i=n(9219),s=n(2996),c=n(6923),l=n(6992),u=n(184),d=["className"],f=(0,o.G)((function(e,t){var n=(0,i.mq)("Heading",e),o=(0,s.Lr)(e),f=(o.className,(0,r.Z)(o,d));return(0,u.jsx)(c.m.h2,(0,a.Z)((0,a.Z)({ref:t,className:(0,l.cx)("chakra-heading",e.className)},f),{},{__css:n}))}));f.displayName="Heading"}}]);
//# sourceMappingURL=348.fc8670cf.chunk.js.map