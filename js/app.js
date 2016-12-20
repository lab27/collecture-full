/* --------------------------------------------------
jQuery Quick Modal v1.08

By Kevin Beronilla
http://www.kevinberonilla.com

Fork on GitHub
https://github.com/kevinberonilla/jquery-quick-modal

Free to use under the MIT license
http://www.opensource.org/licenses/mit-license.php
-------------------------------------------------- */
!function(n){function e(n,e,i){n.setSpeed(null).setTiming(null),e.setSpeed(null).setTiming(null),(250!=i.speed||"ease"!=i.timing)&&(n.setSpeed(i.speed).setTiming(i.timing),e.setSpeed(i.speed).setTiming(i.timing))}n.fn.setSpeed=function(n){return this.css({"-webkit-transition-duration":n+"ms","-moz-transition-duration":n+"ms","-ms-transition-duration":n+"ms","-o-transition-duration":n+"ms","transition-duration":n+"ms"})},n.fn.setTiming=function(n){return this.css({"-webkit-transition-timing-function":n,"-moz-transition-timing-function":n,"-ms-transition-timing-function":n,"-o-transition-timing-function":n,"transition-timing-function":n})},n.fn.quickModal=function(i,o){function a(n){27==n.keyCode&&c.is(":visible")&&s.enableEsc&&t()}function t(){r.quickModal("close",s),d.unbind("keyup",a),l.unbind("click"),n("#modal-background").unbind("click")}if(null!==i&&"string"==typeof i){var s=n.extend({animation:"fade-zoom",speed:250,timing:"ease",closeModalSelector:".close-modal",enableEsc:!0,enableClickAway:!0,enableBodyScroll:!1,appendBackgroundTo:"body",onOpen:function(){},onClose:function(){}},o),d=n("body"),l=n(s.closeModalSelector),c=n(".modal"),r=this;switch(n("#modal-background").length||n(s.appendBackgroundTo).append('<div id="modal-background"></div>'),e(r,n("#modal-background"),s),c.removeClass().addClass("modal").addClass("animation-"+s.animation),i){case"open":s.enableBodyScroll||d.addClass("disable-scroll"),c.hide(),r.show(),d.keyup(a),n("#modal-background").show(),setTimeout(function(){s.enableClickAway&&n("#modal-background").click(t),n("#modal-background").addClass("visible"),r.addClass("visible"),r.trigger("modalopen"),s.onOpen.call()},25),l.click(function(n){n.preventDefault(),t()});break;case"close":d.removeClass("disable-scroll"),n("#modal-background").removeClass("visible"),r.removeClass("visible"),s.onClose.call(),setTimeout(function(){n("#modal-background").hide(),r.hide(),r.trigger("modalclose")},s.speed);break;case"trigger":var u=r.data("modal-id"),m=n("#"+u);m.quickModal("open",s);break;default:console.error("The method you entered does not exist.")}}else{var r=this;r.click(function(e){e.preventDefault();var o=n(this).data("modal-id"),a=n("#"+o);void 0===o?console.error('No "data-modal-id" attribute has been set.'):a.quickModal("open",i)})}return this}}(jQuery);


$(document).ready(function() {
    $('.open-modal').quickModal();
});


//SVG vars
var peopleBlur = document.getElementById('blurAmt');
var phoneBlur = document.getElementById('phoneBlurAmt');
var people = $("#people")
var person = $("g[data-name='person']");
var pointhand = $("#point-hand")
var handphone = $("#handphone")
var groupBox = $(".group-tab .box")
var description = $("#description-edit")
var studentScene = $("#student-scene")
var body = $("body")
var footer = $("footer")
var crntAnchor = ""
var crntLbl = ""
var nxtIndx = ""
// var keys = new Object()

// function getKeyPositions() {
//   $(".key").each(function(){
//     var myX = $(this).position().left
//     var myY = $(this).position().top
//   })
// }

var keyD = $('.key[data-key="d"]')

//date 
var d = new Date();
var month = d.getMonth()+1;
var day = d.getDate();
var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
var dateTimeOutput = (day<10 ? '0' : '') + day + '.' +
  (month<10 ? '0' : '') + month + '.' +
  d.getFullYear() + ', ' + 
  time;

//Colors
var blue = "#39beca",
    green = "#4bddad",
    dark= "#353F50",
    gray= "#c3cbd5",
    lightGray= "#f4f9fa",
    orange= "#c9a03a",
    red= "#fd4a49",
    fadedWhite = "rgba(255,255,255,.3)";

//helpers

var getCurrentAnchor = function(anchor){
    crntAnchor = anchor
}



//Initial sets:
TweenMax.set(pointhand,{x:1000,y:1000})
TweenMax.set(handphone,{x:0,y:1000})
TweenMax.set(groupBox, {fill: green})
TweenMax.set(description, {autoAlpha: 0})
TweenMax.set($("#shadow"),{autoAlpha:.3})

TweenMax.set($(".group-tab.private .box"), {fill: "white"})

var tmax_options = {
  delay: 0,
  paused: true,
  onComplete: function() {
    console.log('animation is complete: ' + crntLbl);
  },
  onCompleteScope: function(){
    console.log("scope completed")
  },
  tweens: [],
  stagger: 0,
  align: 'normal',
  useFrames: false,
  onStart: function() {
    console.log('on start called');
  },
  onStartScope: {},
  onUpdate: function() {
    // getCurrentLabel()
    // console.log('on update called: ' + crntLbl);
    // console.log('next label: ' + wholeMovie.getLabelAfter())
  },
  onUpdateScope: {},
  onRepeat: function() {
    console.log('on repeat called');
  },
  onRepeatScope: {},
  onReverseComplete: function() {
    console.log('on reverse complete');
  },
  onReverseCompleteScope: {},
  autoRemoveChildren: false,
  smoothChildTiming: false,
  repeat: 0,
  repeatDelay: 0,
  yoyo: false,
  onCompleteParams: [],
  onReverseCompleteParams: [],
  onStartParams: [],
  onUpdateParams: [],
  onRepeatParams: []
};



//Timelines!
var tl_main = new TimelineMax(tmax_options);
tl_main
  .add("introStart")
  .set($("#groups"),{autoAlpha:0})
  .set($("#talk"),{autoAlpha:0})
  .set($("#recordings"),{autoAlpha:1})
  .to($("body"),.5,{backgroundColor:blue},"introStart")
  //topbg colors
  .to($("#topBG"),.2,{fill:"white"},"-=.1")
  .to($("#record-btn"),.2,{fill:green},"-=.1")
  .set($("#record-text tspan"),{text:"record"})
  .to($("#record-text"),.2,{fill:green},"-=.1")
  //phone up and normal size
  .to(handphone,1,{x:0, y:0, scale: 1, ease:Power4.easeOut},"introStart")
  //unblur
  .to(phoneBlur, 0.6,{attr:{stdDeviation:0}},"introStart")
  //hand down
  .to(pointhand,.5,{x:800, y:800}, "-=.5")
  //blur the people
  .to(peopleBlur, 0.6,{attr:{stdDeviation:10}})
  //hide the people
  .staggerTo(person,.2,{autoAlpha: 0},.1)
  .add("introEnd")
  .addPause("introEnd")
//easy
  .add("easyStart")
  .set($("#groups"),{autoAlpha:0})
  .to(people,.2,{autoAlpha: 1},"easyStart")
  .to(body,.5,{backgroundColor:blue},"easyStart")
  //phone to center
  .to(handphone,.7,{x:0, y:0, scale: 1, ease:Power4.easeInOutCubic},"easyStart")
  //show the people
  .staggerTo(person,.2,{autoAlpha: 1},.1)
  //pointer to zero
  .to(pointhand,.5,{x:0, y:-65, ease:Power4.easeInOutCubic},"easyStart")
  //pointer stays, then goes back down
  .to(pointhand,1,{x:500,y:500, ease:Power4.easeOut},"easyStart+=.7")
  //topbg green
  .to($("#topBG"),.2,{fill:green},"easyStart+=.7")
  .to($("#record-btn"),.2,{fill:"white"},"easyStart+=.7")
  .set($("#record-text tspan"),{text:"00:00"},"easyStart+=.7")
  .to($("#record-text"),.2,{fill:"white"},"easyStart+=.7")
  .to($("#record-text tspan"),1,{text:"00:01"})
  .to($("#record-text tspan"),1,{text:"00:02"})
  .to($("#record-text tspan"),1,{text:"00:03"})
  .add("handDown")
  //unblur the people
  .to(peopleBlur, 0.6,{attr:{stdDeviation:0}},"handDown")
  //blur the phone
  .to(phoneBlur, 0.6,{attr:{stdDeviation:6}},"handDown")
  //hand/phone down:
  .to(handphone,.7,{x:0, y:500, ease:Power4.easeInOutCubic},"handDown")
  .to($("#topBG"),4,{fill:green},"+=2")
  .add("easyEnd")
//groups
  .add("groupsStart")
  .set($("#recordings"),{autoAlpha:0},"groupsStart+=.1")
  .set($("#groups"),{autoAlpha:1})
  .set($("#talk"),{autoAlpha:0})
  //topbg colors
  .to($("#topBG"),.2,{fill:"white"},"-=.1")
  .to($("#record-btn"),.2,{fill:green},"-=.1")
  .set($("#record-text tspan"),{text:"record"})
  .to($("#record-text"),.2,{fill:green},"-=.1")
  //setup:
  .to(people,.2,{autoAlpha:0},"groupsStart")
  .to(phoneBlur, 0.6,{attr:{stdDeviation:0}},"groupsStart")
  .to(handphone,.5,{x:-400,y:0, scale: 1, ease:Power4.easeOut},"groupsStart")
  .to(body,.5,{backgroundColor:dark},"groupsStart")

  .add("group1")
  .to(pointhand,.5,{x:85,y:0, ease:Power4.easeOut},"group1")
  .to($("#new-group-1"),.2,{autoAlpha:1},"group1+=.7")
  .to($("#new-group-1 .box"),.2,{fill:"white"},"group1+=.9")
  .to(pointhand,.5,{x:200,y:300, ease:Power4.easeInOutCubic},"group1+=.7")

  .add("group2")
  .to(pointhand,.5,{x:85,y:0, ease:Power4.easeOut},"group2+=1")
  .to($("#new-group-2"),.2,{autoAlpha:1},"group2+=1.7")
  .to($("#new-group-2 .box"),.2,{fill:"white"},"group2+=1.9")
  .to(body,.5,{backgroundColor:orange},"group2+=1")
  .to(pointhand,1,{x:200,y:300, ease:Power4.easeOut},"group2+=1.7")

  .add("group3")
  .to(pointhand,.5,{x:85,y:0, ease:Power4.easeOut},"group3+=1")
  .to($("#new-group-3"),.2,{autoAlpha:1},"group3+=1.7")
  .to($("#new-group-3 .box"),.2,{fill:"white"},"group3+=1.9")
  .to(body,.5,{backgroundColor:red},"groupd3+=1")
  .to(pointhand,1,{x:200,y:300, ease:Power4.easeOut},"group3+=1.7")
  .to($("#new-group-3 .box"),.5,{fill:"white"},"+=2")
  .add("groupsEnd")
//organize
  .add("organizeStart")
  
  .to(people,.2,{autoAlpha:0},"organizeStart")
  .to(body,.5,{backgroundColor:green},"organizeStart")
  .to($("#groups"),.2,{autoAlpha:0},"organizeStart")
  .to($("#datetime"),.2,{text:'Recorded ' + dateTimeOutput},"organizeStart")
  .to($("#talk"),.2,{autoAlpha:1},"organizeStart")
  .to(handphone,.5,{x:"-100", y: 0, scale:1.3,ease:Power4.easeOut},"organizeStart")
  .to(pointhand,.5,{x:0,y:100})
  .to(description,.2,{autoAlpha:1})
  .add("typing")
  .fromTo($("#cursor"),4.2,{x:-126},{x:-3, ease: SteppedEase.config(21)},"typing")
  .to($("#description-input"),4.2,{text:"Discussed Carl Sagan.",ease: SteppedEase.config(21)},"typing")
  .to(pointhand,.2,{x:10,y:100},"typing")
  //D
  .to(pointhand,.2,{x:-30,y:145},"typing")
  //.to($(".key[data-key='d']"),.1,{fill: "white"},"typing")
  //.to($(".key[data-key='d']"),.1,{fill: fadedWhite},"typing+=.1")
  //i
  .to(pointhand,.2,{x:50,y:119},"typing+=.2")
  //.to($(".key[data-key='i']"),.1,{fill: "white"},"typing+=.2")
  //.to($(".key[data-key='i']"),.1,{fill: fadedWhite},"typing+=.3")
  //s
  .to(pointhand,.2,{x:-55,y:150},"typing+=.4")
  //.to($(".key[data-key='s']"),.1,{fill: "white"},"typing+=.4")
  //.to($(".key[data-key='s']"),.1,{fill: fadedWhite},"typing+=.5")
  //c
  .to(pointhand,.2,{x:-15,y:182},"typing+=.6")
  //.to($(".key[data-key='c']"),.1,{fill: "white"},"typing+=.6")
  //.to($(".key[data-key='c']"),.1,{fill: fadedWhite},"typing+=.7")
  //u
  .to(pointhand,.2,{x:30,y:120},"typing+=.8")
  //.to($(".key[data-key='u']"),.1,{fill: "white"},"typing+=.8")
  //.to($(".key[data-key='u']"),.1,{fill: fadedWhite},"typing+=.9")
  //s
  .to(pointhand,.2,{x:-55,y:150},"typing+=1")
  //.to($(".key[data-key='s']"),.1,{fill: "white"},"typing+=1")
  //.to($(".key[data-key='s']"),.1,{fill: fadedWhite},"typing+=1.1")
  //s
  .to(pointhand,.2,{x:-55,y:150},"typing+=1.2")
  //.to($(".key[data-key='s']"),.1,{fill: "white"},"typing+=1.2")
  //.to($(".key[data-key='s']"),.1,{fill: fadedWhite},"typing+=1.4")
  //e
  .to(pointhand,.2,{x:-45,y:120},"typing+=1.2")
  //.to($(".key[data-key='e']"),.1,{fill: "white"},"typing+=1.4")
  //.to($(".key[data-key='e']"),.1,{fill: fadedWhite},"typing+=1.5")
  //d
  .to(pointhand,.2,{x:-30,y:145},"typing+=1.6")
  //.to($(".key[data-key='d']"),.1,{fill: "white"},"typing+=1.6")
  //.to($(".key[data-key='d']"),.1,{fill: fadedWhite},"typing+=1.7")
  //space
  .to(pointhand,.2,{x:5,y:215},"typing+=1.8")
  //.to($(".key[data-key='space']"),.1,{fill: "white"},"typing+=1.8")
  //.to($(".key[data-key='space']"),.1,{fill: fadedWhite},"typing+=1.9") 
  //------
  //C
  .to(pointhand,.2,{x:-20,y:180},"typing+=2")
  //.to($(".key[data-key='c']"),.1,{fill: "white"},"typing+=2")
  //.to($(".key[data-key='c']"),.1,{fill: fadedWhite},"typing+=2")
  //a
  .to(pointhand,.2,{x:-74,y:149},"typing+=2.2")
  //.to($(".key[data-key='a']"),.1,{fill: "white"},"typing+=2.2")
  //.to($(".key[data-key='a']"),.1,{fill: fadedWhite},"typing+=2.3")
  //r
  .to(pointhand,.2,{x:-26,y:118},"typing+=2.4")
  //.to($(".key[data-key='r']"),.1,{fill: "white"},"typing+=2.4")
  //.to($(".key[data-key='r']"),.1,{fill: fadedWhite},"typing+=2.5")
  //l
  .to(pointhand,.2,{x:74,y:151},"typing+=2.6")
  //.to($(".key[data-key='l']"),.1,{fill: "white"},"typing+=2.6")
  //.to($(".key[data-key='l']"),.1,{fill: fadedWhite},"typing+=2.7")
  //space
  .to(pointhand,.2,{x:5,y:215},"typing+=2.8")
  //.to($(".key[data-key='space']"),.1,{fill: "white"},"typing+=2.8")
  //.to($(".key[data-key='space']"),.1,{fill: fadedWhite},"typing+=2.9") 
  //------

  //S
  .to(pointhand,.2,{x:-55,y:150},"typing+=3")
  //.to($(".key[data-key='s']"),.1,{fill: "white"},"typing+=3")
  //.to($(".key[data-key='s']"),.1,{fill: fadedWhite},"typing+=3.1")
  //a
  .to(pointhand,.2,{x:-74,y:149},"typing+=3.2")
  //.to($(".key[data-key='a']"),.1,{fill: "white"},"typing+=3.2")
  //.to($(".key[data-key='a']"),.1,{fill: fadedWhite},"typing+=3.3")
  //g
  .to(pointhand,.2,{x:2,y:149},"typing+=3.4")
  //.to($(".key[data-key='g']"),.1,{fill: "white"},"typing+=3.4")
  //.to($(".key[data-key='g']"),.1,{fill: fadedWhite},"typing+=3.5")
  //a
  .to(pointhand,.2,{x:74,y:151},"typing+=3.6")
  //.to($(".key[data-key='a']"),.1,{fill: "white"},"typing+=3.6")
  //.to($(".key[data-key='a']"),.1,{fill: fadedWhite},"typing+=3.7")
  //n
  .to(pointhand,.2,{x:36,y:181},"typing+=3.8")
  //.to($(".key[data-key='n']"),.1,{fill: "white"},"typing+=3.8")
  //.to($(".key[data-key='n']"),.1,{fill: fadedWhite},"typing+=3.9")
  //space
  .to(pointhand,.2,{x:83,y:185},"typing+=4")
  //.to($(".key[data-key='del']"),.1,{fill: "white"},"typing+=4")
  //.to($(".key[data-key='del']"),.1,{fill: fadedWhite},"typing+=4.1") 
  //------
  .add("ok")
   //OK
  .to(pointhand,.2,{x:73,y:67},"ok+=1")
  .to(description,.2,{autoAlpha:0},"ok+=1.5")
  .to($("#description"),.1,{text:"Discuss Carl Sagan.",fill:dark},"ok")
  .to(pointhand,.2,{x:-40,y:137},"ok+=2")
  .to(pointhand,.5,{x:40,y:137,ease:Power4.easeOut})
  //------

  .add("organizeEnd")
//share
  .add("shareStart")
  .to(people,.2,{autoAlpha:0},"shareStart")
  .to($("body"),.5,{backgroundColor:dark})
  .to(handphone,.5,{x:0,y:800,scale:1,ease:Power4.easeOut})
  .to(studentScene,.2,{autoAlpha:1,scale:.8,y:-60,x:90})
  .to(footer,.5,{bottom:"0",textAlign:"left",left:"24px", ease:Power4.easeOut},"shareStart")
  .to($("footer img"),.5,{width:"120px", height:"120px",display:"inline",margin:"0",ease:Power4.easeOut},"shareStart")
  .add("shareEnd")
//download
  .add("downloadStart")
  .to(studentScene,.2,{y:300, ease: Power4.easeOut})
  .to(people,.2,{autoAlpha:0},"downloadStart")
  .to($("body"),.5,{backgroundColor:blue})
  .to(footer,.5,{bottom:"50vh",textAlign:"center",left:0})
  .to($("footer img"),.5,{width:"160px", height:"160px",display:"inline-block",margin:"36px"},"-=.5")
  .add("downloadEnd");
   

//hide people at first
TweenMax.set(person,{autoAlpha:0})

var playTheRightScene = function(anchor){
  if (anchor == 1) {
    console.log("I should play the first anim...")
    tl_main.tweenFromTo("introStart","introEnd")
  } else if (anchor == 2) {
    tl_main.tweenFromTo("easyStart","easyEnd")
  } else if (anchor == 3) {
    tl_main.tweenFromTo("groupsStart","groupsEnd")
  } else if (anchor == 4) {
    tl_main.tweenFromTo("organizeStart","organizeEnd")
  } else if (anchor == 5) {
    tl_main.tweenFromTo("shareStart","shareEnd")
  } else if(anchor == 6) {
    tl_main.tweenFromTo("downloadStart","downloadEnd")
  }
}


$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        //anchors:['one', 'two','three','four','five','six'],
        navigation: true,
        navigationPosition: 'right',
        //navigationTooltips: ['intro', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        paddingTop: '5em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){
          tl_main.pause()
        },
        afterLoad: function(anchorLink, index){
            console.log("+++++++++++++++++++")
            console.log("just loaded: " + index)
            //getCurrentAnchor(anchorLink)
            playTheRightScene(index)
        },
        afterRender: function(){
            console.log("+++++++++++++++++++")
            console.log("just rendered")
            $('#fullpage').css('display','block')
            $('#people-root').css('display','block')
        },
        afterResize: function(){
        console.log("+++++++++++++++++++")
            console.log("just resized")
        },
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});

