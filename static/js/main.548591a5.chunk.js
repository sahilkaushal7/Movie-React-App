(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},32:function(e,t,n){e.exports=n(65)},37:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),l=n.n(o),i=(n(37),n(6)),c=n(7),u=n(10),s=n(8),p=n(11),d=(n(17),n(69)),m=n(66),v=n(9),h=n(12),E=n.n(h),g=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).count=2,n.onScroll=function(){window.scrollY>=2*window.innerHeight&&E.a.get("https://akrp-server.herokuapp.com/movies?p="+n.count).then(function(e){n.props.addMovies(e.data)}),n.count=n.count+1},n.onMovieClick=function(e){n.props.history.push("/"+e)},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://akrp-server.herokuapp.com/movies?p=1").then(function(t){e.props.setMovies(t.data,!1)}).catch(function(e){console.log(e)}),window.addEventListener("scroll",this.onScroll,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll,!1)}},{key:"render",value:function(){var e=this,t=null;return t=this.props.loading?r.a.createElement("div",{style:{color:"white"}},"Still Loading ..."):this.props.movieArray.map(function(t,n){return r.a.createElement("div",{key:t._id,className:"App-movie",onClick:function(){return e.onMovieClick(t._id)},style:{backgroundImage:"url(https://image.tmdb.org/t/p/w500/"+t.poster_path+")"}},r.a.createElement("h3",null,t.original_title))}),r.a.createElement("div",{className:"App",ref:"iScroll",onScroll:this.check},r.a.createElement("div",{className:"App-movies"},t))}}]),t}(a.Component),f=Object(v.b)(function(e){return{loading:e.loading,movieArray:e.movieArray}},function(e){return{setMovies:function(t,n){return e({type:"SETMOVIES",value:t,loading:n})},addMovies:function(t){return e({type:"ADDMOVIES",value:t})}}})(g),b=n(68),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get(" https://akrp-server.herokuapp.com/movies/"+this.props.match.params.id).then(function(t){e.props.setData(t.data,!1),console.log(t.data)})}},{key:"render",value:function(){var e=null;return e=this.props.loadingMovie?r.a.createElement("div",null,"Loading Details ..."):r.a.createElement("div",{className:"App-movieone"},r.a.createElement("img",{alt:"poster",align:"left",src:"http://image.tmdb.org/t/p/original"+this.props.data[0].poster_path,height:"550",width:"400"}),r.a.createElement("table",{style:{padding:"20px",textAlign:"left"}},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{width:"100"},"Title : "),r.a.createElement("td",null,this.props.data[0].original_title)),r.a.createElement("tr",null,r.a.createElement("td",null,"Overview : "),r.a.createElement("td",null,this.props.data[0].overview)),r.a.createElement("tr",null,r.a.createElement("td",null,"Release Date : "),r.a.createElement("td",null,this.props.data[0].release_date)),r.a.createElement("tr",null,r.a.createElement("td",null,"Revenue : "),r.a.createElement("td",null,"$",this.props.data[0].revenue)),r.a.createElement("tr",null,r.a.createElement("td",null,"Rating : "),r.a.createElement("td",null,this.props.data[0].vote_average,"/10")),r.a.createElement("tr",null,r.a.createElement("td",null,"Runtime : "),r.a.createElement("td",null,this.props.data[0].runtime)),r.a.createElement("tr",null,r.a.createElement("td",null,"Status : "),r.a.createElement("td",null,this.props.data[0].status))))),r.a.createElement("div",null,r.a.createElement("button",{style:{float:"left",color:"white",margin:"20px"}},r.a.createElement(b.a,{to:"/"},"Go Back")),e)}}]),t}(a.Component),w=Object(v.b)(function(e){return{loadingMovie:e.loadingMovie,data:e.data}},function(e){return{setData:function(t,n){return e({type:"SETDATA",value:t,loadingMovie:n})}}})(y),O=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(m.a,{path:"/",exact:!0,component:f}),r.a.createElement(m.a,{path:"/:id",component:w})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=n(67),j=n(13),A=n(16),M={data:[],loadingMovie:!0,movieArray:[],loading:!0},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;if("SETDATA"===t.type)return Object(A.a)({},e,{loadingMovie:t.loadingMovie,data:t.value});if("SETMOVIES"===t.type)return Object(A.a)({},e,{movieArray:t.value,loading:t.loading});if("ADDMOVIES"===t.type){var n=e.movieArray.concat(t.value);return Object(A.a)({},e,{movieArray:n})}return e},D=Object(j.b)(S);l.a.render(r.a.createElement(k.a,null,r.a.createElement(v.a,{store:D},r.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,2,1]]]);
//# sourceMappingURL=main.548591a5.chunk.js.map