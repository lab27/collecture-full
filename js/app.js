//SVG vars
var peopleBlur = document.getElementById('blurAmt');
var phoneBlur = document.getElementById('phoneBlurAmt');
var people = $("#people")
var person = $("g[data-name='person']");
var pointhand = $("#point-hand")
var handphone = $("#handphone")
var body = $("body")
var footer = $("footer")
var crntAnchor = ""
var crntLbl = ""
var nxtIndx = ""

//Colors
var blue = "#39beca",
    green = "#4bddad",
    dark= "#353F50",
    gray= "#c3cbd5",
    lightGray= "#f4f9fa",
    orange= "#c9a03a",
    red= "#fd4a49";

//helpers

var getCurrentAnchor = function(anchor){
    crntAnchor = anchor
}

//Initial sets:
TweenMax.set(pointhand,{x:1000,y:1000})
TweenMax.set(handphone,{x:0,y:1000})

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
var tl_intro = new TimelineMax(tmax_options);
tl_intro
  .add("introStart")
  .set($("#UI1"),{autoAlpha:1})
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
  .addPause("introEnd");

var tl_easy = new TimelineMax(tmax_options);
tl_easy
  .add("easyStart")
  .set($("#UI1"),{autoAlpha:1})
  .to(people,.2,{autoAlpha: 1},"easyStart")
  .to(body,.5,{backgroundColor:blue},"easyStart")
  //phone to center
  .to(handphone,.7,{x:0, y:0, scale: 1, ease:Power4.easeInOutCubic},"easyStart")
  //show the people
  .staggerTo(person,.2,{autoAlpha: 1},.1)
  //pointer to zero
  .to(pointhand,.5,{x:0, y:-65, ease:Power4.easeInOutCubic},"easyStart+=1")
  //pointer stays, then goes back down
  .to(pointhand,1,{x:500,y:500, ease:Power4.easeOut},"+=.2")
  //topbg green
  .to($("#topBG"),.2,{fill:green},"easyStart+=1.6")
  .to($("#record-btn"),.2,{fill:"white"},"easyStart+=1.6")
  .set($("#record-text tspan"),{text:"00:00"},"easyStart+=1.6")
  .to($("#record-text"),.2,{fill:"white"},"easyStart+=1.6")
  .to($("#record-text tspan"),1,{text:"00:01"})
  .to($("#record-text tspan"),1,{text:"00:02"})
  .to($("#record-text tspan"),1,{text:"00:03"})
  //unblur the people
  .to(peopleBlur, 0.6,{attr:{stdDeviation:0}})
  //blur the phone
  .to(phoneBlur, 0.6,{attr:{stdDeviation:6}})
  //hand/phone down:
  .to(handphone,.7,{x:0, y:500, ease:Power4.easeInOutCubic},"-=1")
  .add("easyEnd")


var tl_groups = new TimelineMax(tmax_options);
tl_groups
  .add("groupsStart")
  .set($("#UI1"),{autoAlpha:0})
  //setup:
  .to(people,.2,{autoAlpha:0},"groupsStart")
  .to(phoneBlur, 0.6,{attr:{stdDeviation:0}},"groupsStart")
  .to(handphone,.5,{x:-400,y:0, scale: 1, ease:Power4.easeOut},"groupsStart")
  .to(body,.5,{backgroundColor:dark},"groupsStart")

  .add("group1")
  .to(pointhand,.5,{x:0,y:0, ease:Power4.easeOut},"group1+1")
  .to(pointhand,.5,{x:200,y:300, ease:Power4.easeOut})

  .add("group2")
  .to(pointhand,.5,{x:0,y:0, ease:Power4.easeOut},"group2+1")
  .to(body,.5,{backgroundColor:orange})
  .to(pointhand,1,{x:200,y:300, ease:Power4.easeOut})

  .add("group3")
  .to(pointhand,.5,{x:0,y:0, ease:Power4.easeOut},"group3+1")
  .to(body,.5,{backgroundColor:red})
  .to(pointhand,1,{x:200,y:300, ease:Power4.easeOut})
  .addPause()
  .add("groupsEnd");


var tl_organize = new TimelineMax(tmax_options);
tl_organize
  .add("organizeStart")
  .to(people,.2,{autoAlpha:0},"organizeStart")
  .to(body,.5,{backgroundColor:green},"organize")
  .to(handphone,.5,{x:"-100", y: 0, scale:1.3,ease:Power4.easeOut},"organize")
  .addPause()
  .add("organizeEnd")

var tl_share = new TimelineMax(tmax_options);
tl_share
  .add("shareStart")
  .to(people,.2,{autoAlpha:0},"shareStart")
  .to($("body"),.5,{backgroundColor:dark})
  .to(handphone,.5,{x:0,y:800,scale:1,ease:Power4.easeOut})
  .to(footer,.5,{bottom:"0",textAlign:"left",left:"24px", ease:Power4.easeOut},"shareStart")
  .to($("footer img"),.5,{width:"120px", height:"120px",display:"inline",margin:"0",ease:Power4.easeOut},"shareStart")
  .add("shareEnd");
   
  
var tl_download = new TimelineMax(tmax_options);
tl_download
  .add("downloadStart")
  .to(people,.2,{autoAlpha:0},"downloadStart")
  .to($("body"),.5,{backgroundColor:blue})
  .to(footer,.5,{bottom:"50vh",textAlign:"center",left:0})
  .to($("footer img"),.5,{width:"160px", height:"160px",display:"inline-block",margin:"36px"},"-=.5")
  .add("downloadEnd");
   

//hide people at first
TweenMax.set(person,{autoAlpha:0})




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
            nxtIndx = nextIndex
            if (nextIndex == 1) {

                console.log("I should play the first anim...")
              tl_intro.tweenFromTo("introStart","introEnd")
                
            } else if (nextIndex == 2) {

                 tl_easy.tweenFromTo("easyStart","easyEnd")               
              
         
 
            } else if (nextIndex == 3) {
                 tl_groups.tweenFromTo("groupsStart","groupsEnd")
            } else if (nextIndex == 4) {
                 tl_organize.tweenFromTo("organizeStart","organizeEnd")
            } else if (nextIndex == 5) {
                 tl_share.tweenFromTo("shareStart","shareEnd")

            } else if(nextIndex == 6) {
                 tl_download.tweenFromTo("downloadStart","downloadEnd")

            }

        },
        afterLoad: function(anchorLink, index){
            console.log("+++++++++++++++++++")
            console.log("just loaded: " + index)
            getCurrentAnchor(anchorLink)
            // if (index == 1) {
            //   console.log("i'm at the beginning!")
            //   wholeMovie.tweenFromTo("introStart","introEnd")
            // }


        },
        afterRender: function(){
            console.log("+++++++++++++++++++")
            console.log("just rendered")
            $('#fullpage').css('display','block')
            $('#people-root').css('display','block')
            if (crntAnchor == "Intro") {
              console.log("I must be at the beginning?")
              tl_intro.tweenFromTo("introStart","introEnd")
            }
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

