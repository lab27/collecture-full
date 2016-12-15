//=require jquery/dist/jquery.js
//=include fullpage.js/dist/jquery.fullpage.js 


TweenMax.staggerFrom('.callout',.5,{opacity:0, marginTop: 100},.2);

var tl = new TimelineLite()

$('.callout').on('click', function(){
	tl.to(this,.1,{borderTopWidth:10, borderBottomWidth:10, borderColor: "#900"})
	.to(this,.2,{color: "rgba(0,0,0,0)", backgroundColor: "#f00"},"-=.2")
	.to(this,.3,{opacity:0,height:0,ease: Back.easeIn, onComplete: function(){
		(this.target).remove()
	}});
});


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
        },
        afterLoad: function(anchorLink, index){
            console.log("+++++++++++++++++++")
            console.log("just loaded: " + anchorLink)
        },
        afterRender: function(){
            console.log("+++++++++++++++++++")
            console.log("just rendered")
            $('#fullpage').css('display','block')
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