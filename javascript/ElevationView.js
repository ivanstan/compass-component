(() => {

    var owner = document.currentScript.ownerDocument;

    class ElevationView extends BaseView {

        createdCallback() {
            super.createdCallback();

            this.elevation = this.validateAngle(this.getAttribute("elevation"));
            this.radius = this.getAttribute("radius") ? parseInt(this.getAttribute("radius")) : 100;
            this.title = this.getAttribute("title") ? parseInt(this.getAttribute("title")) : 'Elevation';
            this.root = this.createShadowRoot();
            this.innerScale = 0.8;
            this.template = owner.querySelector("template");
            this.clone = this.template.content.cloneNode(this.template);
            this.arrow = $(this.clone).find(".arrow");
            this.label = $(this.clone).find('.main-label');
            this.titleLabel = $(this.clone).find('.title-label');
            this.unitLabel = $(this.clone).find('.unit-label');
            var discOuter = $(this.clone).find(".disc-outer"),
                discInner = $(this.clone).find(".disc-inner");

            this.root.appendChild(this.clone);

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

            this.label
                .css('top', this.radius - (this.label.height() / 2))
                .css('font-size', this.radius * 0.25)
                .css('left', 5)
                .html(this.elevation + '°');

            this.titleLabel
                .css('bottom', this.radius + (this.label.height() / 2) * 1.5)
                .css('font-size', this.radius * 0.16)
                .html(this.title);

            this.unitLabel
                .css('font-size', this.radius * 0.16)
                .css('top', this.radius + (this.label.height() / 2) * 1.5)
        }

        attributeChangedCallback(attrName, oldVal, newVal) {
            if (attrName == "elevation") {
                this.elevation = this.validateAngle(this.getAttribute("elevation"));
                this.label.html(this.elevation + '°');
            }
        }

    }

    document.registerElement("elevation-view", ElevationView);

})();


