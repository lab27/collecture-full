//SVG vars
var peopleBlur = document.getElementById('blurAmt');
var phoneBlur = document.getElementById('phoneBlurAmt');
var people = $("#people")
var person = $("g[data-name='person']");
var pointhand = $("#point-hand")
var handphone = $("#handphone")
var body = $("body")
var footer = $("footer")
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

//Initial sets:
TweenMax.set(pointhand,{x:1000,y:1000})

var tmax_options = {
  delay: 0,
  paused: true,
  onComplete: function() {
    console.log('animation is complete');
  },
  onCompleteScope: {},
  tweens: [],
  stagger: 0,
  align: 'normal',
  useFrames: false,
  onStart: function() {
    console.log('on start called');
    //showNextMsg();
  },
  onStartScope: {},
  onUpdate: function() {
    console.log('on update called');
    getCurrentLabel()
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

//Whole Timeline:
var wholeMovie = new TimelineMax(tmax_options);

wholeMovie.add('intro')
        //bgColor
        .to($("body"),.5,{backgroundColor:blue})
        //phone up
        .to(handphone,1,{x:0, y:0, ease:Power4.easeOut})
        //hand down
        .to(pointhand,.5,{x:800, y:800}, "-=.5")
        //blur the people
        .to(peopleBlur, 0.6,{attr:{stdDeviation:10}})
        //hide the people
        .staggerTo(person,.2,{autoAlpha: 0},.1)
        // .addPause()
    .add('easy')
        // bgColor:
        .to(body,.5,{backgroundColor:blue})
        //show the people
        .staggerTo(person,.2,{autoAlpha: 1},.1)
        //pointer to zero
        .to(pointhand,.5,{x:0, y:0, ease:Power4.easeInOutCubic},"-=.3")
        //pointer stays, then goes back down
        .to(pointhand,1,{x:500,y:500, ease:Power4.easeOut},"+=.2")
        //pointer invisible:
        //.to(pointhand,.2,{autoAlpha:0})
        //unblur the people
        .to(peopleBlur, 0.6,{attr:{stdDeviation:0}})
        //blur the phone
        .to(phoneBlur, 0.6,{attr:{stdDeviation:6}})
        //hand/phone down:
        .to(handphone,.7,{x:0, y:500, ease:Power4.easeInOutCubic},"-=1")
        // .addPause()
    .add('groups')
        //hide people
        .to(people,.2,{autoAlpha:0},"groups")
        //scene1
        .add("group1")
        .to(body,.5,{backgroundColor:dark},"group1")
        .to(phoneBlur, 0.6,{attr:{stdDeviation:0}},"group1")
        .to(handphone,.5,{x:-400,y:0, ease:Power4.easeOut})
        
        .add("group2")
        .to(pointhand,.5,{x:0,y:0, ease:Power4.easeOut},"group2")
        .to(body,.5,{backgroundColor:red},"group2")
        .to(pointhand,.5,{x:200,y:300, ease:Power4.easeOut})

        .add("group3")
        .to(pointhand,.5,{x:0,y:0, ease:Power4.easeOut},"group3")
        .to(body,.5,{backgroundColor:orange},"group3")
        .to(pointhand,1,{x:200,y:300, ease:Power4.easeOut})
    .add('organize')
        .to(body,.5,{backgroundColor:green},"organize")
        .to(handphone,.5,{x:"-100", y: 0, scale:1.3,ease:Power4.easeOut},"organize")
    .add('share')
        .to($("body"),.5,{backgroundColor:dark})
        .to(handphone,.5,{x:0,y:800,scale:1,ease:Power4.easeOut})
    .add('download')
        .to($("body"),.5,{backgroundColor:blue})
        .to(footer,.5,{bottom:"50vh",textAlign:"center",left:0})
        .to($("footer img"),.5,{scale:1.5,display:"inline-block",margin:"36px"},"-=.5")
    .add('end');


//hide people at first
TweenMax.set(person,{autoAlpha:0})

//**********
//transition functions:
//************

//show people
var showPeople = function(){
    TweenMax.to(people,.2,{autoAlpha: 1})
}

//hide people
var hidePeople = function(){
    TweenMax.to(people,.2,{autoAlpha: 0})
}


//******************


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
            // console.log("+++++++++++++++++++")
            // console.log("leaving: " + index)
            // $("#header a:first-child").text(nextIndex + 
            //     ": " + wholeMovie.currentLabel())
             if (nextIndex == 1) {

             
                wholeMovie.tweenFromTo("intro","easy")
               showPeople()
                
            } else if (nextIndex == 2) {

                wholeMovie.tweenFromTo("easy","groups")
               showPeople()
              
         
 
            } else if (nextIndex == 3) {
                hidePeople()
                wholeMovie.tweenFromTo("groups","organize")
            } else if (nextIndex == 4) {
                wholeMovie.tweenFromTo("organize","share")
            } else if (nextIndex == 5) {
                  wholeMovie.tweenFromTo("share","download")

            } else if(nextIndex == 6) {
                  wholeMovie.tweenFromTo("download","end")

            }

        },
        afterLoad: function(anchorLink, index){
            console.log("+++++++++++++++++++")
            console.log("just loaded: " + anchorLink)


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

var getCurrentLabel = function(){
    crntLbl = wholeMovie.currentLabel()
    // $("#header a").text(nxtIndx + ":" +crntLbl)
}