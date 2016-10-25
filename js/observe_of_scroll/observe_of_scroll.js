(function( exports ) {

    function ObserveOfScroll( data ) {

        this.container = data.container;
        this.list = data.list;
        this.heights = getHeights( data.list );
        this.allHeights = this.heights[ this.heights.length - 1 ].max;
        this.i = 0;

        var that = this,
            currentScroll = window.scrollY;

        this.heights.every(function(item){

            if( currentScroll > item.min ) {

                that.scrollDown();
                return true;
            }
            else return false;
        });

        this.container.onscroll = function(){
            currentScroll = window.scrollY;

            if( that.container.innerWidth < 800 ) return;

            if( currentScroll > that.heights[that.i].min ) that.scrollDown();
              else
                if( currentScroll < that.heights[that.i - 1].min ) that.scrollUp();
        };
    };

    var fn = ObserveOfScroll.prototype;

    fn.setHeights = function() {

        this.heights = getHeights( this.list );
    };

    fn.scrollUp = function() {

        this.i--;
        this.list[this.i].classList.remove('active');
    };

    fn.scrollDown = function() {

        this.list[this.i].classList.add('active');
        this.i++;
    };

    function getHeights( list ) {

        var result = [],
            last = 0, next = 0;

        list = list.forEach(function( item, i ) {

            item.style.top = last + 'px';
            result.push({ min : last, max : next += item.clientHeight });
            last = next;

        });

        return result;
    };

    exports.ObserveOfScroll = ObserveOfScroll;

})( window );