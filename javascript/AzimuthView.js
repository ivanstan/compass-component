(() => {

    var owner = document.currentScript.ownerDocument;

    class AzimuthView extends BaseView {

        createdCallback() {
            super.createdCallback();
            this.azimuth = this.validateAngle(this.getAttribute("azimuth"));
            this.radius = this.getAttribute("radius") ? parseInt(this.getAttribute("radius")) : 100;
            this.title = this.getAttribute("title") ? parseInt(this.getAttribute("title")) : 'Azimuth';
            this.root = this.createShadowRoot();
            this.innerScale = 0.8;
            this.template = owner.querySelector("template");
            this.clone = this.template.content.cloneNode(this.template);
            this.arrow = $(this.clone).find(".arrow");
            this.label = $(this.clone).find('.main-label');
            this.titleLabel = $(this.clone).find('.title-label');
            this.unitLabel = $(this.clone).find('.unit-label');
            var discOuter = $(this.clone).find(".disc-outer"),
                discInner = $(this.clone).find(".disc-inner"),
                labelN = $(this.clone).find(".label-n"),
                labelS = $(this.clone).find(".label-s"),
                labelE = $(this.clone).find(".label-e"),
                labelW = $(this.clone).find(".label-w"),
                arrowHeight = this.radius * 0.1,
                arrowWidth = arrowHeight + 5;

            this.root.appendChild(this.clone);

            var labelWidth = labelN.width(),
                labelHeight = labelN.height();

            labelN
                .css("top", 0)
                .css('font-size', this.radius * 0.16)
                .css("left", Math.floor(this.radius - (labelWidth / 2)) + "px");
            labelS
                .css("bottom", - this.radius * 0.04)
                .css('font-size', this.radius * 0.16)
                .css("left", Math.floor(this.radius - (labelWidth / 2) + 2) + "px");
            labelE
                .css("top", Math.floor(this.radius - (labelHeight / 2)) + "px")
                .css('font-size', this.radius * 0.16)
                .css("right", 4);
            labelW
                .css("top", Math.floor(this.radius - (labelHeight / 2)) + "px")
                .css('font-size', this.radius * 0.16)
                .css("left", 2 + 1);

            discOuter
                .width(this.radius * 2)
                .height(this.radius * 2)
                .css("background-color", this.colorPrimary);

            var diff = (this.radius) - (this.radius * this.innerScale);
            discInner
                .width(this.radius * 2 * this.innerScale)
                .height(this.radius * 2 * this.innerScale)
                .css("top", diff + "px")
                .css("left", diff + "px")
                .css("background-color", this.colorSecondary);

            this.arrow
                .css("border-width", "0px " + (arrowWidth / 2) + "px " + arrowHeight + "px " + (arrowWidth / 2) + "px")
                .css("border-color", "transparent transparent #fff transparent")
                .css("left", this.radius - (arrowWidth / 2))
                .css("top", arrowHeight * 2 + 2)
                .css("transform-origin", ((arrowWidth / 2)) + "px " + (this.radius - diff - 2) + "px")
                .css("transform", "rotate(" + this.azimuth + "deg)");

            this.label
                .css('top', this.radius - (this.label.height() / 2))
                .css('left', 5)
                .css('font-size', this.radius * 0.25)
                .html(this.azimuth + '°');

            this.titleLabel
                .css('bottom', this.radius + (this.label.height() / 2) * 1.5)
                .css('font-size', this.radius * 0.16)
                .html(this.title);

            this.unitLabel
                .css('top', this.radius + (this.label.height() / 2) * 1.5)
                .css('font-size', this.radius * 0.16);
        }

        attributeChangedCallback(attrName, oldVal, newVal) {
            if (attrName == "azimuth") {
                this.azimuth = this.validateAngle(this.getAttribute("azimuth"));
                this.arrow.css("transform", "rotate(" + this.azimuth + "deg)");
                this.label.html(this.azimuth + '°');
            }
        }

    }

    document.registerElement("azimuth-view", AzimuthView);

})();