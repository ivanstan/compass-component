class BaseView extends HTMLElement {

    createdCallback() {
        this.colorPrimary = this.getAttribute("color-primary") ? this.getAttribute("color-primary") : '#263174';
        this.colorSecondary = this.getAttribute("color-secondary") ? this.getAttribute("color-secondary") : '#3646a7';
    }

    validateAngle(anlge) {
        if (0 < anlge && anlge < 360) {
            return parseInt(anlge);
        }

        anlge = anlge % 360;
        this.setAttribute("azimuth", anlge);
        return parseInt(anlge);
    }

}