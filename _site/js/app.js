

//SVG vars
var peopleBlur = document.getElementById('blurAmt');
var phoneBlur = document.getElementById('phoneBlurAmt');
var people = $("#people")
var person = $("g[data-name='person']");
var pointhand = $("#point-hand")
var handphone = $("#handphone")

//Colors
var blue = "#39beca",
    green = "#4bddad",
    dark= "#353F50",
    gray= "#c3cbd5",
    lightGray= "#f4f9fa",
    orange= "#c9a03a",
    red= "#4d4a49";

//Initial sets:

//Whole Timeline:
var wholeMovie = new TimelineMax();

wholeMovie.add('intro')
        //bgColor
        .to($("body"),.5,{backgroundColor:blue},"+=2")
        
        //hand down
        .to(pointhand,.5,{y:500, x:500,autoAlpha:0})
        //phone up
        .to(handphone,1,{y:0, x:0, ease:Power4.easeOut})
        //blur the people
        .to(peopleBlur, 0.6,{attr:{stdDeviation:10}})
                //hide the people
        .staggerTo(person,.2,{autoAlpha: 0},.1)
        .addPause()
    .add('ease')
        // bgColor:
        .to($("body"),.5,{backgroundColor:blue},"+=2")
        .to(pointhand,.2,{autoAlpha:1})
        .to(pointhand,.5,{y:0, x:0, ease:Power4.easeInOutCubic})
        .to(pointhand,1.5,{y:500,x:500, ease:Power4.easeOut},"+=.2")
        .to(pointhand,.2,{autoAlpha:0})
        .to(handphone,.5,{y:500,x:0,  ease:Power4.easeOut},"-=.5")
        //unblur the people
        .to(peopleBlur, 0.6,{attr:{stdDeviation:0}},"-=1")
        //blur the phone
        .to(phoneBlur, 0.6,{attr:{stdDeviation:5}},"-=1")
        .addPause()
    .add('groups')
        .to($("body"),.5,{backgroundColor:dark})
        .to(phoneBlur, 0.6,{attr:{stdDeviation:0}})
        .to(handphone,.5,{x:-400,y:0, ease:Power4.easeOut})
        //scene1
        //scene2
        .to($("body"),.5,{backgroundColor:red},"+=2")
        //scene3
        .to($("body"),.5,{backgroundColor:orange, onComplete:function(){
            play('groups')
        } },"+=2")
        .addPause()
    .add('organize')
        .to(handphone,.5,{x:"-100",scale:1.3,ease:Power4.easeOut});

//TweenLite.set(wholeMovie,{timeScale: 0})


//hide people at first
TweenMax.set(person,{autoAlpha:0})

//move hand out
TweenMax.set(pointhand,{x:1000,y:1000})

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
        anchors:['one', 'two','three','four','five','six'],
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
            console.log("+++++++++++++++++++")
            console.log("leaving: " + index)
             if (nextIndex == 1) {

                if (index == 2) {
                    //if I'm coming from 2
                    wholeMovie.reverse()
                } else {
                    // otherwise i must be coming from start
                    wholeMovie.play('intro')
                }
                showPeople()
                
            } else if (nextIndex == 2) {
                if (index == 3) {
                    //if I'm coming from 3
                    wholeMovie.reverse()
                } else {
                    //anywhere else I'm coming from
                    wholeMovie.play('ease')
                }
                showPeople()
              
                //show the people
                TweenMax.staggerTo(person,.2,{autoAlpha: 1},.1)
 
            } else if (nextIndex == 3) {
                hidePeople()
                wholeMovie.play('groups')
            } else if (nextIndex == 4) {
                wholeMovie.play('organize')
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