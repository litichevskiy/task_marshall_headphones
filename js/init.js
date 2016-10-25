(function(){

    window.onload = function(){

        document.querySelector('.container').style.opacity = '1';
        document.querySelector('.loading').style.display = 'none';

        var block_slider = new BlockSlider({

            btnLeft   : document.querySelector('.left'),
            btnRight  : document.querySelector('.right'),
            img       : document.querySelector('.img_block_slider'),
            source    : document.querySelector('.block_slider source'),
            content   : document.querySelector('.block_slider .content'),
            header    : document.querySelector('.block_slider .header_block_main'),
            link      : document.querySelector('.block_slider .link_content'),
            list      : [
                {
                    imgSrc   : 'less/blocks/block_slider/img/banner_1.jpg',
                    imgSmall : 'less/blocks/block_slider/img/banner_1_small.png',
                    header   : 'ACTON OXBLOOD',
                    content  : 'Same big sound, new limited edition colour',
                    linkText : 'Shop Acton Oxblood',
                    linkUrl  : 'https://www.marshallheadphones.com/mh_europe_en/acton-oxblood'
                },
                {
                    imgSrc   : 'less/blocks/block_slider/img/banner_2.jpg',
                    imgSmall : 'less/blocks/block_slider/img/banner_2_small.png',
                    header   : 'Steel Series',
                    content  : 'Exclusively Available Online',
                    linkText : 'Shop Steel Series',
                    linkUrl  : 'https://www.marshallheadphones.com/mh_europe_en/steel-series'
                },
                {
                    imgSrc   : 'less/blocks/block_slider/img/banner_3.jpg',
                    imgSmall : 'less/blocks/block_slider/img/banner_3_small.png',
                    header   : 'Back in Black',
                    content  : '30% OFF MAJOR II PITCH BLACK',
                    linkText : 'Shop Now',
                    linkUrl  : 'https://www.marshallheadphones.com/mh_europe_en/major-ii-pitch-black'
                }
            ]
        }),

        observeOfScroll = new ObserveOfScroll({

            container : window,
            list: [
                document.querySelector('.block_main'),
                document.querySelector('.block_popular_items'),
                document.querySelector('.block_slider'),
                document.querySelector('.block_img'),
                document.querySelector('.block_footer')
            ]
        });

        window.onresize = function() {
            observeOfScroll.setHeights();
        };
    }

})();