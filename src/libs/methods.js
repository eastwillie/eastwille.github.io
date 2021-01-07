export default {
    install: (Vue) => {
        const vue = Vue;
        vue.prototype.$methods = {
            methodsExample() {
                console.log('This is an example where you can put global methods here such like warning, loading...');
            },
        };
    },
};
