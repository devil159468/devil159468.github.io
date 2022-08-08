# Vue2

## VueHook
```vue
window.addEventListener('scroll', this.handleScroll);
this.$once('hook:beforeDestroy', () => {
  this.handleScroll();
});
```
