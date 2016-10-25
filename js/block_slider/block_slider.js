(function( exports ){

    function BlockSlider( data ) {

        this.content = data.content;
        this.right = data.btnRight;
        this.header = data.header;
        this.left = data.btnLeft;
        this.list = data.list;
        this.link = data.link;
        this.img = data.img;
        this.source = data.source;

        var that = this,
            max = this.list.length - 1;
            min = 0,
            counter = 0;

        this.left.addEventListener('click', function( event ){

            if( counter > 0 ) {

                counter--;
                that.changeActiveBlock( counter );
            }
        });

        this.right.addEventListener('click', function( event ){

            if( counter < max ) {

                counter++;
                that.changeActiveBlock( counter );
            }
        });
    };

    BlockSlider.prototype.changeActiveBlock = (function() {

        return function( counter ){

            this.content.innerHTML = this.list[counter].content;
            this.link.innerHTML = this.list[counter].linkText;
            this.header.innerHTML = this.list[counter].header;
            this.link.href = this.list[counter].linkUrl;
            this.img.src = this.list[counter].imgSrc;
            this.source.srcset = this.list[counter].imgSmall;
        }

    })();

    exports.BlockSlider = BlockSlider;

})( window );