var catalog = function () {

    var container;

    function events() {
        $(document).on("click", ".toggle-sidebar", function (e) {
            e.preventDefault();
            container.isotope('layout');
        });

        $(document).on("click", ".view-options label", function (e) {
            e.preventDefault();
            if ($(this).data("view") === "grid") {
                container.isotope('layout');
            } else if ($(this).data("view") === "list") {
                container.isotope('layout');
            }
        });

        $(window).load(function () {
            container = $(".feed").isotope({
                resizable: false,
                itemSelector: ".switch-item",
                layoutMode: "masonry"
            });

            $(".filter a").on("click", function () {

                var selector = $(this).attr("data-filter");
                $(".filter").find("li").removeClass("active");
                $(this).parent().addClass("active");
                container.isotope({
                    filter: selector
                });

                return false;
            });

        });
    }

    return {
        init: function () {
            events();
        }
    };
}();

$(function () {
    "use strict";
    catalog.init();
});