(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: '. . .',
            canPurchase: true,
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "joe@hhomas.com"
                },
                {
                    stars: 1,
                    body: "meh...",
                    author: "haty@hater.com"
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: '. . .',
            canPurchase: false
        }
    ]

    app.controller('PanelController', function () {
        this.tab = 1;
        this.selectTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        }
    });

    app.controller('ReviewController', function () {
        this.review = {};
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        };
    });
})();

