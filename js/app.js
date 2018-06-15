//Hide Warning
//Show Warning Slowly
//$(".primary-content").hide().show("slow");
if ($('input').hasClass('wholesale')) {
  function clicked() {

    var formdata = {},
    $form= $('#formId'),
    interests = [];

formdata.User = $form.find('#name').val();
formdata.Business = $form.find('#business').val();
formdata.City = $form.find('#cityStreet').val();
formdata.Phone = $form.find('#number').val();
formdata.Email = $form.find('#email').val();
formdata.Message = $form.find('#bio').val();


if ($form.find('#design').is(':checked')) {
    interests.push('Equipment');
}
if ($form.find('#train').is(':checked')) {
    interests.push('Training');
}
if ($form.find('#development').is(':checked')) {
    interests.push('Consulting');
}
formdata['Interests'] = interests.join(', ');
// 'Training, Equipment';


    $.ajax('//formspree.io/luke.v@att.net', {
      data: formdata,
      type: 'post',
      dataType: "json",
      success: function() {
        swal("Good job", "You clicked the button!", "success");
      }
    })
    return false;
  }
}

$('.new-details').on('click', function(e) {

  e.preventDefault();

  var message = $(this).siblings('.content').find('.message').html();
  console.log(message);

  swal({
    title: "<small></small>",
    text: message,
    confirmButtonColor: "#c9bb38",
    html: true
  });
});
$('.new-notes').on('click', function(e) {

  e.preventDefault();

  var message = $(this).siblings('.content').find('.note').html();
  console.log(message);

  swal({
    title: "<small></small>",
    text: message,
    confirmButtonColor: "#c9bb38",
    html: true
  });
});

if ($('body').hasClass('location')) {
  var geocoder = new google.maps.Geocoder(),
    address = "306 W Woodlawn Ave, Louisville, KY 40214",
    color = "#AB9559",
    latitude,
    longitude;

  function getGeocode() {
    geocoder.geocode({
      'address': address
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        latitude = results[0].geometry.location.lat();
        longitude = results[0].geometry.location.lng();
        initGoogleMap();
      }
    });
  }

  function initGoogleMap() {
    var styles = [{
      stylers: [{
        saturation: -100
      }]
    }];
    options = {
        mapTypeControlOptions: {
          mapTypeIds: ['Styled']
        },
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 16,
        scrollwheel: true,
        navigationControl: true,
        mapTypeControl: true,
        zoomControl: true,
        disableDefaultUI: false,
        mapTypeId: 'Styled'
      },
      div = document.getstyleById('map'),
      map = new google.maps.Map(div, options);
    marker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(latitude, longitude)
    });
    var styledMapType = new google.maps.StyledMapType(styles, {
      name: 'Styled'
    });
    map.mapTypes.set('Styled', styledMapType);
    var infowindow = new google.maps.InfoWindow({
      content: "<div class='iwContent'>" + address + "</div>"
    });
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });
    bounds = new google.maps.LatLngBounds(new google.maps.LatLng(-84.999999, -
      179.999999), new google.maps.LatLng(84.999999, 179.999999));
    rect = new google.maps.Rectangle({
      bounds: bounds,
      fillColor: color,
      fillOpacity: 0.2,
      strokeWeight: 0,
      map: map
    });
  }
  google.maps.event.addDomListener(window, 'load', getGeocode);
}
if (window.Vue){
new Vue({
  el: '#formId',
  data: {
    message: ''
  }
});

new Vue({
  el: '#validation'
})}














var slidebars=function(){var b=$("[canvas]"),e={},i=false,d=false,c=["top","right","bottom","left"],j=["reveal","push","overlay","shift"],g=function(n){var l=$(),k="0px, 0px",m=parseFloat(e[n].style.css("transitionDuration"),10)*1000;
if(e[n].style==="reveal"||e[n].style==="push"||e[n].style==="shift"){l=l.add(b)
}if(e[n].style==="push"||e[n].style==="overlay"||e[n].style==="shift"){l=l.add(e[n].style)
}if(e[n].active){if(e[n].side==="top"){k="0px, "+e[n].style.css("height")
}else{if(e[n].side==="right"){k="-"+e[n].style.css("width")+", 0px"
}else{if(e[n].side==="bottom"){k="0px, -"+e[n].style.css("height")
}else{if(e[n].side==="left"){k=e[n].style.css("width")+", 0px"
}}}}}return{styles:l,amount:k,duration:m}
},f=function(n,l,m,k){if(a(n)){throw"Error registering Slidebar, a Slidebar with id '"+n+"' already exists."
}e[n]={id:n,side:l,style:m,style:k,active:false}
},a=function(k){if(e.hasOwnProperty(k)){return true
}else{return false
}};
this.init=function(k){if(i){throw"Slidebars has already been initialized."
}if(!d){$("[off-canvas]").each(function(){var l=$(this).attr("off-canvas").split(" ",3);
if(!l||!l[0]||c.indexOf(l[1])===-1||j.indexOf(l[2])===-1){throw"Error registering Slidebar, please specifiy a valid id, side and style'."
}f(l[0],l[1],l[2],$(this))
});
d=true
}i=true;
this.css();
$(h).trigger("init");
if(typeof k==="function"){k()
}};
this.exit=function(l){if(!i){throw"Slidebars hasn't been initialized."
}var k=function(){i=false;
$(h).trigger("exit");
if(typeof l==="function"){l()
}};
if(this.getActiveSlidebar()){this.close(k)
}else{k()
}};
this.css=function(m){if(!i){throw"Slidebars hasn't been initialized."
}for(var l in e){if(a(l)){var k;
if(e[l].side==="top"||e[l].side==="bottom"){k=e[l].style.css("height")
}else{k=e[l].style.css("width")
}if(e[l].style==="push"||e[l].style==="overlay"||e[l].style==="shift"){e[l].style.css("margin-"+e[l].side,"-"+k)
}}}if(this.getActiveSlidebar()){this.open(this.getActiveSlidebar())
}$(h).trigger("css");
if(typeof m==="function"){m()
}};
this.open=function(m,l){if(!i){throw"Slidebars hasn't been initialized."
}if(!m){throw"You must pass a Slidebar id."
}if(!a(m)){throw"Error opening Slidebar, there is no Slidebar with id '"+m+"'."
}var k=function(){e[m].active=true;
e[m].style.css("display","block");
$(h).trigger("opening",[e[m].id]);
var n=g(m);
n.styles.css({"transition-duration":n.duration+"ms",transform:"translate("+n.amount+")"});
setTimeout(function(){$(h).trigger("opened",[e[m].id]);
if(typeof l==="function"){l()
}},n.duration)
};
if(this.getActiveSlidebar()&&this.getActiveSlidebar()!==m){this.close(k)
}else{k()
}};
this.close=function(m,l){if(typeof m==="function"){l=m;
m=null
}if(!i){throw"Slidebars hasn't been initialized."
}if(m&&!a(m)){throw"Error closing Slidebar, there is no Slidebar with id '"+m+"'."
}if(!m){m=this.getActiveSlidebar()
}if(m&&e[m].active){e[m].active=false;
$(h).trigger("closing",[e[m].id]);
var k=g(m);
k.styles.css("transform","");
setTimeout(function(){k.styles.css("transition-duration","");
e[m].style.css("display","");
$(h).trigger("closed",[e[m].id]);
if(typeof l==="function"){l()
}},k.duration)
}};
this.toggle=function(l,k){if(!i){throw"Slidebars hasn't been initialized."
}if(!l){throw"You must pass a Slidebar id."
}if(!a(l)){throw"Error toggling Slidebar, there is no Slidebar with id '"+l+"'."
}if(e[l].active){this.close(l,function(){if(typeof k==="function"){k()
}})
}else{this.open(l,function(){if(typeof k==="function"){k()
}})
}};
this.isActive=function(){return i
};
this.isActiveSlidebar=function(k){if(!i){throw"Slidebars hasn't been initialized."
}if(!k){throw"You must provide a Slidebar id."
}if(!a(k)){throw"Error retrieving Slidebar, there is no Slidebar with id '"+k+"'."
}return e[k].active
};
this.getActiveSlidebar=function(){if(!i){throw"Slidebars hasn't been initialized."
}var k=false;
for(var l in e){if(a(l)){if(e[l].active){k=e[l].id;
break
}}}return k
};
this.getSlidebars=function(){if(!i){throw"Slidebars hasn't been initialized."
}var k=[];
for(var l in e){if(a(l)){k.push(e[l].id)
}}return k
};
this.getSlidebar=function(k){if(!i){throw"Slidebars hasn't been initialized."
}if(!k){throw"You must pass a Slidebar id."
}if(!a(k)){throw"Error retrieving Slidebar, there is no Slidebar with id '"+k+"'."
}return e[k]
};
this.events={};
var h=this.events;
$(window).on("resize",this.css.bind(this))
};
window.ADTApp=window.ADTApp||{};
window.ADTApp.navigation={vars:{lastScroll:0,mobileWindowWidth:991,largeDeviceWindowWidth:1199,mainNavHeight:40,mobileHeaderNavHeight:55,desktopScrollPosCheck:800,scrollTimer:200,revealButtonTimer:50,pushPhoneNumberTimer:50,lastTabbedSubNavLink:"",forwardDirection:true,initializedLazyNav:false},DOM:{$desktopNavBar:null,$mobileNavBar:null,$overlayForm:null,$callStickyButton:null,$coreHeader:null,$mobileTapToCallSticky:null,$mainNavBar:null,$dropdownNavContainer:null,$subNavDropdownLink:null,$dropdownNavBar:null},init:function(){try{this.vars.lastScroll=$(window).scrollTop(),this.DOM.$desktopNavBar=$(".global-nav-container"),this.DOM.$mobileNavBar=$(".mobile-nav-bar"),this.DOM.$overlayForm=$("#form-overlay-button-id"),this.DOM.callStickyButton=$("#call-sticky-button-id"),this.DOM.$coreHeader=$(".coreheader"),this.DOM.$mobileTapToCallSticky=$("#mobile-tap-to-call-sticky"),this.DOM.$mainNavBar=$(".main-nav-bar"),this.DOM.$dropdownNavContainer=$(".dropdown-nav-container"),this.DOM.$subNavDropdownLink=$(".sub-nav-bar .sub-nav-dropdown-link"),this.DOM.$dropdownNavBar=this.DOM.$dropdownNavContainer.find(".dropdown-navbar"),window.ADTApp.navigation.Events.adjustNavPadding(),$(window).resize(window.ADTApp.navigation.Events.adjustNavPadding),$(window).on("scroll touchmove",window.ADTApp.navigation.Events.collapsedNav),setTimeout(function(){$(window).trigger("scroll")
},this.vars.scrollTimer),window.ADTApp.navigation.Events.subNavTabSlider(true).init(),this.DOM.$subNavDropdownLink.mouseenter(window.ADTApp.navigation.Events.subNavmouseenter).mouseleave(window.ADTApp.navigation.Events.subNavmouseleave),this.DOM.$dropdownNavBar.mouseenter(window.ADTApp.navigation.Events.openMegaNav).mouseleave(window.ADTApp.navigation.Events.closeMegaNav);
this.DOM.$subNavDropdownLink.on("keyup",function(d){var c=d.keyCode||d.which||d.key;
if(c!=9){return
}var b=$("#"+this.id+"-dropdownmenu");
if(b.length>0){if($("#"+this.id+"-dropdownmenu").hasClass("dropdown-navbar--hover")||$("#"+this.id+"-dropdownmenu").hasClass("dropdown-navbar--active")){}else{b.addClass("dropdown-navbar--hover")
}$("#"+this.id+"-dropdownmenu").focus()
}});
this.DOM.$subNavDropdownLink.focusout(function(){var c=$("#"+this.id+"-dropdownmenu");
if(c.length>0){if($("#"+this.id+"-dropdownmenu").hasClass("dropdown-navbar--hover")){var b=c.find("a");
if(b.length>0){window.ADTApp.navigation.vars.lastTabbedSubNavLink=this.id;
if(window.ADTApp.navigation.vars.forwardDirection){b[0].focus()
}else{b[b.length-1].focus()
}}console.log("subNavmouseleave1 p")
}else{}}});
this.DOM.$dropdownNavContainer.find(".dropdown-navbar").each(function(){var c=$(this).find("a").last();
if(c){c.focusout(function(){if(!window.ADTApp.navigation.vars.forwardDirection){return
}var d=$("#"+window.ADTApp.navigation.vars.lastTabbedSubNavLink+"-dropdownmenu");
if(d.length>0){d.removeClass("dropdown-navbar--hover")
}var e=$("#"+window.ADTApp.navigation.vars.lastTabbedSubNavLink).next().find("a");
if(e.length>0){e.focus()
}})
}var b=$(this).find("a").first();
if(b){b.focusout(function(){if(window.ADTApp.navigation.vars.forwardDirection){return
}var d=$("#"+window.ADTApp.navigation.vars.lastTabbedSubNavLink+"-dropdownmenu");
if(d.length>0){d.removeClass("dropdown-navbar--hover")
}var e=$("#"+window.ADTApp.navigation.vars.lastTabbedSubNavLink).prev().find("a");
if(e.length>0){e.focus()
}})
}});
this.DOM.$dropdownNavContainer.focusout(function(){var b=$(".dropdownmenu");
if(b.length>0){b.removeClass("dropdown-navbar--hover")
}});
this.DOM.$subNavDropdownLink.on("keydown",function(c){var b=c.keyCode||c.which||c.key;
if(c.shiftKey&&b==9){window.ADTApp.navigation.vars.forwardDirection=false
}else{window.ADTApp.navigation.vars.forwardDirection=true
}});
this.DOM.$dropdownNavContainer.on("keydown",function(c){var b=c.keyCode||c.which||c.key;
if(c.shiftKey&&b==9){window.ADTApp.navigation.vars.forwardDirection=false
}else{window.ADTApp.navigation.vars.forwardDirection=true
}})
}catch(a){console.info("Error in navigation init(): "+a)
}},Events:{subNavmouseenter:function(){var a=$("#"+this.id+"-dropdownmenu");
if(a.length>0){if($("#"+this.id+"-dropdownmenu").hasClass("dropdown-navbar--hover")||$("#"+this.id+"-dropdownmenu").hasClass("dropdown-navbar--active")){}else{a.addClass("dropdown-navbar--hover")
}}if(window.ADTApp.navigation.vars.initializedLazyNav==true){return
}else{window.ADTApp.navigation.vars.initializedLazyNav=true;
console.info("Initializing Nav lazy load first time. ");
$(".lazy-nav").Lazy({effect:"show",visibleOnly:false,onFinishedAll:function(){console.info("Completed Nav lazy load. ")
},onError:function(b){console.log("error loading "+b)
}})
}},subNavmouseleave:function(){var a=$("#"+this.id+"-dropdownmenu");
if(a.length>0){if($("#"+this.id+"-dropdownmenu").hasClass("dropdown-navbar--hover")){a.removeClass("dropdown-navbar--hover");
console.log("subNavmouseleave1")
}else{}}},openMegaNav:function(){var a=$("#"+this.id);
if(a.length>0){a.addClass("dropdown-navbar--active");
console.log("openMegaNav")
}},closeMegaNav:function(b){var c=$("#"+this.id);
if(c.length>0){b.preventDefault();
c.removeClass("dropdown-navbar--active");
console.log("closeMegaNav")
}},adjustNavPadding:function(){if($(window).width()>window.ADTApp.navigation.vars.mobileWindowWidth){if(window.ADTApp.navigation.DOM.$desktopNavBar.length>0&&window.ADTApp.navigation.DOM.$coreHeader.length>0){window.ADTApp.navigation.DOM.$coreHeader.css("padding-bottom",window.ADTApp.navigation.DOM.$desktopNavBar.innerHeight())
}}else{if(window.ADTApp.navigation.DOM.$mobileNavBar.length>0&&window.ADTApp.navigation.DOM.$coreHeader.length>0){window.ADTApp.navigation.DOM.$coreHeader.css("padding-bottom",window.ADTApp.navigation.DOM.$mobileTapToCallSticky.innerHeight()+window.ADTApp.navigation.DOM.$mobileNavBar.innerHeight())
}}},removeNavPadding:function(){if($(window).width()>window.ADTApp.navigation.vars.mobileWindowWidth){if(window.ADTApp.navigation.DOM.$desktopNavBar.length>0&&window.ADTApp.navigation.DOM.$coreHeader.length>0){window.ADTApp.navigation.DOM.$coreHeader.css("padding-bottom","")
}}else{if(window.ADTApp.navigation.DOM.$mobileNavBar.length>0&&window.ADTApp.navigation.DOM.$coreHeader.length>0){window.ADTApp.navigation.DOM.$coreHeader.css("padding-bottom",window.ADTApp.navigation.DOM.$mobileTapToCallSticky.innerHeight())
}}},collapsedNav:function(b){var a=$(window).scrollTop();
if($(window).width()>window.ADTApp.navigation.vars.largeDeviceWindowWidth){if(window.ADTApp.navigation.DOM.$desktopNavBar.length>0){if(a>-1){if(a>window.ADTApp.navigation.vars.lastScroll&&a-window.ADTApp.navigation.vars.lastScroll>window.ADTApp.navigation.vars.mainNavHeight){window.ADTApp.navigation.vars.lastScroll=$(window).scrollTop();
if(typeof window.ADTApp.navigation.DOM.$desktopNavBar.attr("style")=="undefined"||window.ADTApp.navigation.DOM.$desktopNavBar.attr("style").indexOf("top")==-1){window.ADTApp.navigation.DOM.$desktopNavBar.css("top","-="+window.ADTApp.navigation.DOM.$mainNavBar.innerHeight()).addClass("scrolled")
}if(window.ADTApp.navigation.DOM.$dropdownNavContainer.length>0){window.ADTApp.navigation.DOM.$dropdownNavContainer.css("top",window.ADTApp.navigation.DOM.$desktopNavBar.innerHeight()-window.ADTApp.navigation.DOM.$mainNavBar.innerHeight()).addClass("scrolled")
}}else{if(a<window.ADTApp.navigation.vars.lastScroll&&window.ADTApp.navigation.vars.lastScroll-a>1){window.ADTApp.navigation.vars.lastScroll=$(window).scrollTop();
window.ADTApp.navigation.DOM.$desktopNavBar.css("top","").removeClass("scrolled");
window.ADTApp.navigation.DOM.$dropdownNavContainer.css("top",window.ADTApp.navigation.DOM.$desktopNavBar.innerHeight()).removeClass("scrolled")
}}}}}else{if($(window).width()>window.ADTApp.navigation.vars.mobileWindowWidth&&$(window).width()<window.ADTApp.navigation.vars.largeDeviceWindowWidth){if(window.ADTApp.navigation.DOM.$desktopNavBar.length>0){if(a>-1){if(a>window.ADTApp.navigation.vars.lastScroll&&a-window.ADTApp.navigation.vars.lastScroll>window.ADTApp.navigation.vars.mainNavHeight){window.ADTApp.navigation.vars.lastScroll=$(window).scrollTop();
if(typeof window.ADTApp.navigation.DOM.$desktopNavBar.attr("style")=="undefined"||window.ADTApp.navigation.DOM.$desktopNavBar.attr("style").indexOf("top")==-1){window.ADTApp.navigation.DOM.$desktopNavBar.css("top","-="+window.ADTApp.navigation.DOM.$mainNavBar.innerHeight()).addClass("scrolled")
}if(window.ADTApp.navigation.DOM.$dropdownNavContainer.length>0){window.ADTApp.navigation.DOM.$dropdownNavContainer.css("top",window.ADTApp.navigation.DOM.$desktopNavBar.innerHeight()-window.ADTApp.navigation.DOM.$mainNavBar.innerHeight()).addClass("scrolled")
}}else{if(a<window.ADTApp.navigation.vars.lastScroll&&window.ADTApp.navigation.vars.lastScroll-a>1){window.ADTApp.navigation.vars.lastScroll=$(window).scrollTop();
window.ADTApp.navigation.DOM.$desktopNavBar.css("top","").removeClass("scrolled");
window.ADTApp.navigation.DOM.$dropdownNavContainer.css("top",window.ADTApp.navigation.DOM.$desktopNavBar.innerHeight()).removeClass("scrolled")
}}}}}else{if(window.ADTApp.navigation.DOM.$mobileNavBar.length>0){if(a>-1){if(a>window.ADTApp.navigation.vars.lastScroll&&a-window.ADTApp.navigation.vars.lastScroll>window.ADTApp.navigation.vars.mobileHeaderNavHeight){window.ADTApp.navigation.vars.lastScroll=$(window).scrollTop();
if(typeof window.ADTApp.navigation.DOM.$mobileNavBar.attr("style")=="undefined"||window.ADTApp.navigation.DOM.$mobileNavBar.attr("style").indexOf("top")==-1){window.ADTApp.navigation.DOM.$mobileNavBar.css("top","-="+window.ADTApp.navigation.DOM.$mobileNavBar.innerHeight()).addClass("scrolled")
}}else{if(a<window.ADTApp.navigation.vars.lastScroll&&window.ADTApp.navigation.vars.lastScroll-a>1){window.ADTApp.navigation.vars.lastScroll=$(window).scrollTop();
window.ADTApp.navigation.DOM.$mobileNavBar.css("top","").removeClass("scrolled")
}}}if(a<window.ADTApp.navigation.vars.mobileHeaderNavHeight){window.ADTApp.navigation.DOM.$overlayForm.hide();
window.ADTApp.navigation.DOM.callStickyButton.hide()
}else{if(a!=0&&a>window.ADTApp.navigation.vars.mobileHeaderNavHeight){window.ADTApp.navigation.DOM.$overlayForm.show();
window.ADTApp.navigation.DOM.callStickyButton.show()
}}}}}if($("ul.nav-quote-cta li").length>1){if(a>=600){$(".nav-quote-cta").css({right:"7px",transition:"1s"})
}else{if(a<=599){$(".nav-quote-cta").css("right","-217px")
}}}else{$(".nav-quote-cta").css({right:"7px",transition:"1s"})
}},subNavTabSlider:function(l){var b=document.querySelector(".sub-nav-bar");
var h=false;
var g=b.querySelector(".sub-nav-flexbox");
var j=b.querySelectorAll(".sub-nav-dropdown-link");
var n=b.querySelectorAll(".sub-nav-category-link");
var f=l?d():false;
var m=0;
function k(){if(!h){h=true;
for(var o=0;
o<n.length;
o++){var p=j[o];
i(p,o)
}if(f){e(n[m])
}}}function i(p,o){p.addEventListener("mouseover",function(q){q.preventDefault();
a(o)
});
$("div.sub-nav-bar").mouseleave(function(){$("div.current-sub-nav-marker").removeAttr("style")
})
}function a(o){if(o>=0&&o!=m&&o<=n.length){if(f){c(n[o])
}m=o
}}function d(){var o=document.createstyle("div");
o.classList.add("current-sub-nav-marker");
g.appendChild(o);
return o
}function e(o){}function c(o){f.style.left=o.offsetLeft+"px";
var p=$(o).width();
f.style.width=p+"px"
}return{init:k,goToTab:a}
}}};
window.ADTApp.init=function(){window.ADTApp.navigation.init()
};
$(document).ready(window.ADTApp.init);
(function(g){var d=new slidebars();
d.init();
function c(j,l){try{j.stopPropagation();
d.open(l);
g("html, body").css({overflow:"hidden",height:"auto",width:"100%","touch-action":"none"});
var h=g(".mask-div");
if(h.length>0){h.remove()
}else{g("body").append('<div class="mask-div" style="background:rgba(0,0,0, 0.4)"> </div>');
g(".mask-div").fadeIn(300);
g(".mask-div").on("click",function(m){g(".js-close-adt-form-header:visible").trigger("click");
g(".js-close-mainmenu-flyout:visible").trigger("click");
g(".js-close-contactus-flyout:visible").trigger("click");
resetPlaceHolders()
});
var k=g(document).height();
if(k&&k>0){g(".mask-div").css("height",k+"px")
}}}catch(i){console.info("Error in openNav: "+i)
}try{g(".mask-div, #section-content-id").bind("touchmove",function(m){m.preventDefault()
})
}catch(i){console.info("Error in openNav: "+i)
}}function b(j,k){try{j.stopPropagation();
d.close(k);
g("html, body").removeAttr("style");
var h=g(".mask-div");
if(h.length>0){h.remove()
}else{g(".mask-div").fadeOut(700)
}}catch(i){console.info("Error in closeNav: "+i)
}try{g(".mask-div, #section-content-id").unbind("touchmove")
}catch(i){console.info("Error in closeNav: "+i)
}}function a(h){try{if(!h){return
}showFormHeaderBody(h)
}catch(i){console.info("Error in processForms: "+i)
}}var e=false;
g(window).resize(function(){var i=g(window).width();
if(i<=991){var h=g(window).height();
var j=g(".mobile-flyout-nav:visible");
if(j&&j.length>0){e=true;
j.height(h)
}}else{if(e){b(event,"mobile-mainmenu-flyout");
g("#section-content-id").removeClass("fixedPosition");
e=false
}}});
g(".js-open-mainmenu-flyout").on("click",function(i){c(i,"mobile-mainmenu-flyout");
console.log("opened");
g("#section-content-id").addClass("fixedPosition");
var h=g(window).height();
g(".mobile-flyout-nav:visible").height(h)
});
g(".js-close-mainmenu-flyout").on("click",function(h){b(h,"mobile-mainmenu-flyout");
console.log("closed");
g("#section-content-id").removeClass("fixedPosition")
});
g(".js-close-flyout-get-quote-button").on("click",function(h){b(h,"mobile-mainmenu-flyout");
openOverlayForm()
});
g(".js-open-contactus-flyout").on("click",function(h){c(h,"mobile-contactus-flyout");
if(g(".get-help-section").length>0){setTimeout(function(){g(".get-help-section").fadeIn()
},200)
}});
g(".js-close-contactus-flyout").on("click",function(h){b(h,"mobile-contactus-flyout");
if(g(".get-help-section").length>0){g(".get-help-section").css("display","none")
}});
var f;
g(".js-open-adt-form-header").on("click",function(h){c(h,"adt-form-header");
g(".js-close-adt-form-header").focus();
f=g(this)
});
g(".js-close-adt-form-header").on("click",function(h){b(h,"adt-form-header");
a(this);
resetPlaceHolders();
if(f){f.focus()
}});
g(".js-close-adt-form-header.close").on("keydown",function(i){var h=i.keyCode||i.which||i.key;
if(i.shiftKey&&h==9){i.preventDefault()
}});
g(".adt-header-footer-link").on("keydown",function(i){var h=i.keyCode||i.which||i.key;
if(h==9){i.preventDefault();
g(".js-close-adt-form-header").focus()
}});
g(".form-header").parent().on("keydown",function(i){var h=i.keyCode||i.which||i.key;
if(h==27){b(event,"adt-form-header");
a(this);
resetPlaceHolders();
if(f){f.focus()
}}});
g(".sub-nav-flexbox li").removeClass("active");
if(window.location.href.indexOf("compare")>-1){g(".sub-nav-flexbox li:nth-child(2)").addClass("active");
g(".phone-number-link").removeClass("active")
}else{if(window.location.href.indexOf("products")>-1||window.location.href.indexOf("home-security")>-1||window.location.href.indexOf("video-surveillance")>-1||window.location.href.indexOf("home-automation")>-1||window.location.href.indexOf("life-safety")>-1||window.location.href.indexOf("services")>-1){g(".sub-nav-flexbox li:nth-child(3)").addClass("active")
}else{if(window.location.href.indexOf("security-benefits")>-1||window.location.href.indexOf("history")>-1||window.location.href.indexOf("stories")>-1||window.location.href.indexOf("always-cares")>-1){g(".sub-nav-flexbox li:nth-child(4)").addClass("active")
}else{if(window.location.href.indexOf("resources")>-1){g(".sub-nav-flexbox li:nth-child(5)").addClass("active")
}}}}g(".main-nav-flexbox li").removeClass("active");
if(window.location.href.indexOf("contact-adt")>-1){g(".main-nav-flexbox li:nth-child(6) a").addClass("active")
}})(jQuery);
(function(k){k.bean={secHeroId:"#sec-hero-id",secHeroBannerId:"#sec-hero-banner-id",secHeroBannerRowId:"#sec-hero-banner-row-id",secHeroBannerCompId:"#adt-comp-id",secHeaderBodyId:"#section-header-body-id",secRowHeight:".adt5-row-height",selector:"#hero-background",secHeroDataId:"#banner-data-container-id",topHeroCompId:"#top-hero-container-id",secBannerOfferId:".banner-cunt-b",formBanner:"#container-form-banner-id",formBannerContentDiv:".form-row-cont",imgPosMobile:"50% 50%",imgPosDesktop:"50% 50%",imgPosTablet:"50% 50%",imgPosDesktopXL:"50% 50%",deviceSrcType:"desktop",mobileBreakPoint:767,tabletBreakPoint:1024,desktopBreakPoint:1599,curWinHeight:null,curWinWidth:null,curSrc:null,isMobile:null,isMobileBck:false,isTabletBck:false,isDesktopBck:false,isDesktopXLBck:false,mobileHeightMulti:50,desktopHeightMulti:100,tabletHeightMulti:100,desktopXLHeightMulti:100,isOffsetMobile:false,isOffsetDesktop:false,headerHeightMobile:0,headerHeightDesktop:0,useFixedMobile:false,useFixedTablet:false,useFixedDesktop:false,useFixedDesktopXL:false,backgM:null,backgD:null,backgT:null,backgXL:null,isBanner:false,orientation:null,useAutoMobile:false,backMGrd:null,backTGrd:null,backDGrd:null,backXLGrd:null};
var j;
var m;
var a;
var b;
var c=function(){try{if(heroBannerBean==undefined||heroBannerBean==null||!heroBannerBean){return
}k.bean.mobileHeightMulti=heroBannerBean.heightM;
if(k.bean.mobileHeightMulti.indexOf("px")>0){k.bean.useFixedMobile=true
}if(k.bean.mobileHeightMulti.indexOf("auto")>=0){k.bean.useAutoMobile=true
}k.bean.mobileHeightMulti=k.bean.mobileHeightMulti.replace(/[^0-9]/g,"");
if(!k.bean.mobileHeightMulti||(k.bean.useFixedMobile==false&&(k.bean.mobileHeightMulti>100||k.bean.mobileHeightMulti<=0))){k.bean.mobileHeightMulti=100;
k.bean.useFixedMobile=false
}k.bean.tabletHeightMulti=heroBannerBean.heightT;
if(k.bean.tabletHeightMulti.indexOf("px")>0){k.bean.useFixedTablet=true
}k.bean.tabletHeightMulti=k.bean.tabletHeightMulti.replace(/[^0-9]/g,"");
if(!k.bean.tabletHeightMulti||(k.bean.useFixedTablet==false&&(k.bean.tabletHeightMulti>100||k.bean.tabletHeightMulti<=0))){k.bean.tabletHeightMulti=100;
k.bean.useFixedTablet=false
}k.bean.desktopHeightMulti=heroBannerBean.heightD;
if(k.bean.desktopHeightMulti.indexOf("px")>0){k.bean.useFixedDesktop=true
}k.bean.desktopHeightMulti=k.bean.desktopHeightMulti.replace(/[^0-9]/g,"");
if(!k.bean.desktopHeightMulti||(k.bean.useFixedDesktop==false&&(k.bean.desktopHeightMulti>100||k.bean.desktopHeightMulti<=0))){k.bean.desktopHeightMulti=100;
k.bean.useFixedDesktop=false
}k.bean.desktopXLHeightMulti=heroBannerBean.heightXL;
if(k.bean.desktopXLHeightMulti.indexOf("px")>0){k.bean.useFixedDesktopXL=true
}k.bean.desktopXLHeightMulti=k.bean.desktopXLHeightMulti.replace(/[^0-9]/g,"");
if(!k.bean.desktopXLHeightMulti||(k.bean.useFixedDesktopXL==false&&(k.bean.desktopXLHeightMulti>100||k.bean.desktopXLHeightMulti<=0))){k.bean.desktopXLHeightMulti=100;
k.bean.useFixedDesktopXL=false
}if(heroBannerBean.mobileBrk){k.bean.mobileBreakPoint=heroBannerBean.mobileBrk
}if(heroBannerBean.isOffsetM){k.bean.isOffsetMobile=heroBannerBean.isOffsetM
}if(heroBannerBean.isOffsetD){k.bean.isOffsetDesktop=heroBannerBean.isOffsetD
}if(heroBannerBean.imgPosM){k.bean.imgPosMobile=heroBannerBean.imgPosM
}if(heroBannerBean.imgPosD){k.bean.imgPosDesktop=heroBannerBean.imgPosD
}if(heroBannerBean.imgPosT){k.bean.imgPosTablet=heroBannerBean.imgPosT
}if(heroBannerBean.imgPosXL){k.bean.imgPosDesktopXL=heroBannerBean.imgPosXL
}if(heroBannerBean.backgM){k.bean.backgM=heroBannerBean.backgM
}if(heroBannerBean.backgT){k.bean.backgT=heroBannerBean.backgT
}if(heroBannerBean.backgD){k.bean.backgD=heroBannerBean.backgD
}if(heroBannerBean.backgXL){k.bean.backgXL=heroBannerBean.backgXL
}if(heroBannerBean.isBanner){k.bean.isBanner=heroBannerBean.isBanner
}if(heroBannerBean.backMGrd){k.bean.backMGrd=heroBannerBean.backMGrd
}if(heroBannerBean.backTGrd){k.bean.backTGrd=heroBannerBean.backTGrd
}if(heroBannerBean.backMGrd){k.bean.backDGrd=heroBannerBean.backDGrd
}if(heroBannerBean.backMGrd){k.bean.backXLGrd=heroBannerBean.backXLGrd
}}catch(q){console.info("Warning - initBean() failed. Using default config : "+q)
}try{j=$(k.bean.selector);
if(!j||j.length==0){return
}m=j.parent().find(k.bean.secHeroBannerId);
a=m.find(k.bean.secHeroBannerRowId);
b=a.find(k.bean.secRowHeight);
var o=j.parent().find(k.bean.secBannerOfferId);
if(o&&o.length>0){try{var n=campaignBean.isBannerOverride;
var r=campaignBean.staticBannerOverride;
if(n==true){try{var p="";
if(r&&r.length>0){p=window.atob(r)
}}catch(q){console.info("Error in decode Banner Offer: "+q)
}if(p&&p.length>0){o.html(p)
}}}catch(q){console.info("Error in processing Banner Campaign: "+q)
}o.show()
}}catch(q){console.info("Warning - initBean() error initializing campaign custom hero banner: "+q)
}};
var f=function(o,p){var r="";
try{if(campaignBean!=undefined&&(campaignBean.isCampaignEnabled===true)&&(campaignBean.isPageDefaultOrrerideEnabled===false)){if(k.bean.isMobile){r=campaignBean.banner_image_mobile;
k.bean.deviceSrcType="mobile"
}else{r=campaignBean.banner_image_desktop;
k.bean.deviceSrcType="desktop"
}}if(r&&r.length>0){return r
}if(p<=k.bean.mobileBreakPoint){k.bean.isMobileBck=true;
k.bean.deviceSrcType="mobile"
}else{if(p>k.bean.mobileBreakPoint&&p<=k.bean.tabletBreakPoint){k.bean.isTabletBck=true;
k.bean.deviceSrcType="tablet"
}else{if(p>k.bean.tabletBreakPoint&&p<=k.bean.desktopBreakPoint){k.bean.isDesktopBck=true;
k.bean.deviceSrcType="desktop"
}else{k.bean.isDesktopXLBck=true;
k.bean.deviceSrcType="desktopXL"
}}}var n=o.find("span[data-type='"+k.bean.deviceSrcType+"']");
if(n){r=n.attr("data-src")
}}catch(q){console.info("Error in getSrc() failed "+q)
}finally{if(r){k.bean.curSrc=r
}}return r
};
var d=function(n){return new RegExp(n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"))
};
var l=function(p,n){try{if(!p||p.length==0||!n||n.length==0){return
}p[0].appendChild(n[0])
}catch(o){console.info("Error in adt adtPictureFill - appendChild - using Jquery append(). ");
try{p.append(n)
}catch(o){console.info("Error in adt adtPictureFill - Jquery append(): "+o)
}}};
var e=function(){var n=false;
try{if(window.matchMedia("(orientation: landscape)").matches){n=true
}}catch(o){console.info("Error in isLandscapeView(): "+o)
}return n
};
var h=function(){var n=false;
try{if(window.matchMedia("(orientation: portrait)").matches){n=true
}}catch(o){console.info("Error in isPortraitView(): "+o)
}return n
};
var g=function(){var n=false;
try{if(e()){if(k.bean.orientation=="LANDSCAPE"){n=true
}k.bean.orientation="PORTRAIT"
}else{if(h()){if(k.bean.orientation=="PORTRAIT"){n=true
}k.bean.orientation="LANDSCAPE"
}}}catch(o){console.info("Error in isOrientationChanged(): "+o)
}return n
};
var i=function(o){var n=false;
try{if(o<k.bean.mobileBreakPoint){if(k.bean.isMobile==false){n=true
}k.bean.isMobile=true
}else{if(k.bean.isMobile==true){n=true
}k.bean.isMobile=false
}}catch(p){console.info("Error in isDeviceChanged(): "+p)
}return n
};
k.adtPictureFill=function(){try{if(!j||j.length==0){j=$(k.bean.selector);
if(!j||j.length==0){return
}}var y=window.innerWidth;
var H=g();
var o=i(y);
var u=f(j,y);
var w=window.innerHeight,D=screen.height;
if((o==false&&H==false)||(D<w)){if((d(u).test(j.css("background-image")))&&((k.bean.curWinHeight==w&&k.bean.curWinWidth==y)||(D<w))){return
}}var v="";
var A="";
var q="";
if(k.bean.deviceSrcType=="mobile"){A=k.bean.backgM;
q=k.bean.imgPosMobile;
v=k.bean.backMGrd
}else{if(k.bean.deviceSrcType=="tablet"){A=k.bean.backgT;
q=k.bean.imgPosTablet;
v=k.bean.backTGrd
}else{if(k.bean.deviceSrcType=="desktop"){A=k.bean.backgD;
q=k.bean.imgPosDesktop;
v=k.bean.backDGrd
}else{A=k.bean.backgXL;
q=k.bean.imgPosDesktopXL;
v=k.bean.backXLGrd
}}}if(u){q=((q==null)?"":q);
j.removeAttr("style");
j.css({"background-image":"url('"+u+"')","background-size":"cover","background-repeat":"no-repeat","background-position":q,display:"block","background-color":""})
}else{if(A){j.removeAttr("style");
A=((A==null)?"":A);
if(A){j.css({"background-color":A})
}}else{if(v){j.css({background:v})
}}}k.bean.curWinWidth=y,k.bean.curWinHeight=w;
var z;
var G=$(k.bean.topHeroCompId).height();
if(G==null||!G){G=0
}if(k.bean.isMobile){var t=null;
if(k.bean.deviceSrcType=="tablet"){if(k.bean.useFixedTablet){z=k.bean.tabletHeightMulti
}else{t=k.bean.tabletHeightMulti
}}else{if(k.bean.useFixedMobile){z=k.bean.mobileHeightMulti
}else{t=k.bean.mobileHeightMulti
}}if(t&&t!=null&&k.bean.useAutoMobile==false){if(k.bean.isOffsetMobile==true){k.bean.headerHeightMobile=$(k.bean.secHeaderBodyId).height()+G
}z=(w-k.bean.headerHeightMobile)*(t/100)
}}else{var t=null;
if(k.bean.deviceSrcType=="tablet"){if(k.bean.useFixedTablet){z=k.bean.tabletHeightMulti
}else{t=k.bean.tabletHeightMulti
}}else{if(k.bean.deviceSrcType=="desktop"){if(k.bean.useFixedDesktop){z=k.bean.desktopHeightMulti
}else{t=k.bean.desktopHeightMulti
}}else{if(k.bean.useFixedDesktopXL){z=k.bean.desktopXLHeightMulti
}else{t=k.bean.desktopXLHeightMulti
}}}if(t&&t!=null){if(k.bean.isOffsetDesktop==true){var E=$(k.bean.secHeaderBodyId);
var x=$(k.bean.secHeroBannerCompId);
if(H==true){if((k.bean.isMobile==true&&h())||y<992){var p=E.find(".mobile-nav-bar").height();
k.bean.headerHeightDesktop=((p)?p:55)+x.height()
}else{var p=E.find(".global-nav-container").height();
k.bean.headerHeightDesktop=((p)?p:135)+x.height()
}}else{k.bean.headerHeightDesktop=E.height()+x.height()+G
}}z=(w-k.bean.headerHeightDesktop)*(t/100)
}}if(m&&m.length>0){if(k.bean.isMobile&&k.bean.isBanner==false){l(j.siblings("#sec-hero-ban-cont-id"),m)
}else{l(j,m)
}m.css({display:"block"});
if(u&&A){m.css({"background-color":A})
}}if(b.length>0){b.each(function(){$(this).css({height:((k.bean.isMobile&&k.bean.isBanner==false)?"":z+"px")})
})
}var C=j.find(k.bean.secHeroDataId);
if(C&&C.length>0){var F=C.height();
if(F>0){if((F)&&(F>0)&&(z<F)){z=F+20
}var s=C.find(k.bean.formBannerContentDiv);
if(s&&s.length>0){var n=s.height();
if((n)&&(n>0)&&(n>z)){z=n+20
}}}}if(u||A){j.css({height:z+"px"})
}if(a&&a.length>0){var B=((k.bean.isMobile&&k.bean.isBanner==false)?"":z+"px");
a.css({height:B});
if(b.length>0){b.each(function(){$(this).css({height:B})
})
}}if(m&&m.length>0){m.css({height:((k.bean.isMobile&&k.bean.isBanner==false)?"":z+"px"),display:"block"})
}}catch(r){console.info("Error in adt adtPictureFill(): "+r)
}};
c();
$(window).resize(function(){k.adtPictureFill()
});
$(document).ready(function(){k.adtPictureFill()
})
}(this));
function initLinkClick(a){try{if(!a){return
}$(a).find(".card").each(function(){var d=$(this).find(".adt5-button").find("a");
if(!d||d.length==0){return
}var c=d.attr("href");
if(!c||c.length==0){return
}$(this).on("click",function(){window.location=c
});
$(this).find("a").click(function(f){f.stopPropagation()
})
})
}catch(b){console.info("initLinkClick: "+b)
}}function initLinkClick(a){try{if(!a){return
}$(a).find(".card").each(function(){var d=$(this).find(".adt5-button").find("a");
if(!d||d.length==0){return
}var c=d.attr("href");
if(!c||c.length==0){return
}$(this).on("click",function(){window.location=c
});
$(this).find("a").click(function(f){f.stopPropagation()
})
})
}catch(b){console.info("initLinkClick: "+b)
}}$(function(c){try{var a=c(".lazy-story");
if(!a){return
}a.Lazy({scrollDirection:"vertical",effect:"fadeIn",effectTime:250,threshold:50,visibleOnly:true,afterLoad:function(e){var f=c(e);
if(!f){return
}console.log("loaded: "+e.attr("src"));
var d=f.closest(".mc-story-card");
if(!d){return
}d.removeAttr("style");
d.fadeIn()
},onError:function(d){console.log("error loading "+d.data("src"))
}})
}catch(b){console.info("Error lazy-story load: "+b)
}});
(function(){var c=window.location.pathname.toLowerCase().slice(1).replace(/content\/adt5\/en_US\/|content\/adtcore\/en_US\/|.html/gi,"").split("/").toString();
var b=(campaignBean.section==="home"||campaignBean.section==="none")?"resi":(campaignBean.section==="business")?"business":campaignBean.section;
getForms=function(){var d=$("form").length;
if(d>0){return"Form Page"
}else{return"Content Page"
}};
setDnis=(isMobileDevice())?campaignBean.dnis_mobile:campaignBean.dnis_desktop;
setChatDnis=(isMobileDevice())?campaignBean.chat_mobile:campaignBean.chat_desktop;
setTFNsales=(isMobileDevice())?campaignBean.tfn_mobile:campaignBean.tfn_desktop;
if(c.replace(/,/gi," | ")=="index"||c.replace(/,/gi," | ")==""||c.replace(/,/gi," | ")=="/"){var a="us | corp | home "
}else{var a="us | "+b+" | "+c.replace(/,/gi," | ")
}analyticsObj={accountVariable:(isMobileDevice())?"Mobile":"Desktop",experience:(isMobileDevice())?"Mobile Experience":"Desktop Experience",formType:getForms(),pageName:a,pageType:getForms(),siteSection:b,dnis:(setDnis!=="")?setDnis:"WEB0004248",dnisChat:(setChatDnis!=="")?setChatDnis:"WEB0004257",tfnSales:(setTFNsales!=="")?setTFNsales:"800.521.1729",viewportSize:$(window).width()+"x"+$(window).height(),visitorSegment:"corp"};
_satellite.pageBottom()
}());
