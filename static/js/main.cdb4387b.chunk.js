(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(4),o=a.n(c),s=(a(26),a(6)),i=a(15),l=a(16),u=a(17),h=a(21),d=a(20),m=(a(27),a(18)),j=a.n(m),b=function(e,t){return j.a.get("".concat("https://pixabay.com/api/","?key=").concat("21278728-75c92b248ac1d6dd7323efa86","&q=").concat(e,"&page=").concat(t,"&per_page=12")).then((function(e){return e.data.hits}))},g=a(0),f=function(e){var t=e.onSubmit,a=e.searchQuery,n=e.onChange;return Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{className:"SearchForm-input",value:a,name:"searchQuery",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:n})]})})},p=function(e){var t=e.onLoadMore;return Object(g.jsx)("button",{type:"button",className:"Button",onClick:t,children:"See more"})},O=document.querySelector("#modal-root"),S=function(e){var t=e.src,a=e.alt,n=e.onClick;return Object(c.createPortal)(Object(g.jsx)("div",{className:"Overlay",onClick:n,children:Object(g.jsx)("div",{className:"Modal",children:Object(g.jsx)("img",{src:t,alt:a})})}),O)},x=(a(47),a(19)),y=a.n(x),v=function(){return Object(g.jsx)("div",{className:"Loader",children:Object(g.jsx)(y.a,{type:"Hearts",color:"#3f51b5",height:50,width:50,timeout:3e3})})},M=function(e){var t=e.pictures,a=e.onClick;return Object(g.jsx)(g.Fragment,{children:t.map((function(e,t){var n=e.webformatURL,r=e.id,c=e.tags,o=e.largeImageURL;return Object(g.jsx)("li",{className:"ImageGalleryItem",children:Object(g.jsx)("img",{src:n,"data-url":o,alt:c,className:"ImageGalleryItem-image",onClick:a})},r)}))})},C=function(e){var t=e.pictures,a=e.onClick;return Object(g.jsx)("ul",{className:"ImageGallery",children:Object(g.jsx)(M,{pictures:t,onClick:a})})},L=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={articles:[],isLoading:!1,isLoadingMore:!1,error:null,searchQuery:"",showModal:!1,modalSrc:"",modalTag:"",currentPage:1},e.handleChange=function(t){var a=t.currentTarget,n=a.name,r=a.value;e.setState(Object(i.a)({},n,r))},e.clearInput=function(){e.setState({searchQuery:""})},e.resetPage=function(){e.setState((function(){return{currentPage:1}}))},e.handlerSubmit=function(t){t.preventDefault(),e.setState({isLoading:!0}),e.resetPage(),console.log("submit",e.state),e.state.searchQuery?b(e.state.searchQuery,e.state.currentPage).then((function(t){t.length<1&&alert("Nothing found"),e.setState({articles:t})})).catch((function(t){return e.setState({error:t.message})})).finally((function(){return e.setState({isLoading:!1})})):alert("Please enter some query")},e.openModal=function(t){e.setState({showModal:!0,modalSrc:t.currentTarget.dataset.url,modalTag:t.currentTarget.alt})},e.closeModal=function(){e.setState({showModal:!1})},e.onLoadMore=function(t){t.preventDefault(),e.setState({isLoadingMore:!0}),e.setState((function(e){return{currentPage:e.currentPage+1}})),console.log("load more",e.state),b(e.state.searchQuery,e.state.currentPage+1).then((function(t){t.length<1&&alert("Nothing found"),e.setState((function(e){return{articles:[].concat(Object(s.a)(e.articles),Object(s.a)(t))}}))})).catch((function(t){return e.setState({error:t.message})})).finally((function(){e.setState({isLoadingMore:!1}),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.articles,a=e.isLoading,n=e.error,r=e.searchQuery,c=e.showModal,o=e.modalSrc,s=e.modalTag,i=e.isLoadingMore;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(f,{onSubmit:this.handlerSubmit,searchQuery:r,onChange:this.handleChange}),n&&Object(g.jsxs)("p",{className:"Error",children:[" ",n," "]}),a?Object(g.jsx)(v,{}):Object(g.jsx)(C,{pictures:t,onClick:this.openModal,onLoadMore:this.onLoadMore}),i&&Object(g.jsx)(v,{}),this.state.articles.length>0&&Object(g.jsx)(p,{onLoadMore:this.onLoadMore}),c&&Object(g.jsx)(S,{src:o,alt:s,onClick:this.closeModal})]})}}]),a}(n.Component),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(L,{})}),document.getElementById("root")),N()}},[[68,1,2]]]);
//# sourceMappingURL=main.cdb4387b.chunk.js.map