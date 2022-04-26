export default ()=> ({
    skip: 1,
    next() {
        this.to((current, offset) => current + (offset * this.skip));
    },
    prev() {
        this.to((current, offset) => current - (offset * this.skip));
    },
    to(strategy){
        let slider = this.$refs.slider;
        console.log(slider)
        let current = slider.scrollLeft;
        let offset = slider.firstElementChild.getBoundingClientRect().width;
        slider.scrollTo({ left: strategy(current, offset), behavior: 'smooth' });
    },
    focusableWhenVisible:{
        'x-intersect:enter'(){
            this.$el.removeAttribute('tabindex');
        },
        'x-intesect:leave'(){
            this.$el.setAttribute('tabindex', '-1');
        },
    }
});