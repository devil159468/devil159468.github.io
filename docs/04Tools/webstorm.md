# WebStorm

## Vue2初始化模板
```vue
<template>
    <div class="eg">
        qwe
    </div>
</template>

<script>
  export default {
    name: "qwe",
    scrollToTop: true,
    head() {
      return {
        title: '页面标题',
      };
    },
    data() {
      return {}
    },
    computed:{
      me() {
        return this.$store.state.me;
      },
      urlPath () {
        const _url = window.location.host + window.location.pathname + '?';
        return _url;
      },
      utmParams () {
        // this.$route.query
        let utmParams = '';
        for (const i in this.$route.query) {
          if (i !== 'userId') {
            utmParams = utmParams + i + '=' + this.$route.query[i] + '&';
          }
        }
        return utmParams;
      }
    },
    beforeMount() {
      this.$navigator.title('APP标题');
    },
    mounted() {
      this.$store.commit('header/set', {
        show: true,
        title: 'H5标题'
      });    

      this.$loading.show();

      // 如果 URL 的哈希值大于1，则表明是返回的页面
      let scrollNumber = 0;
      if ( window.location.hash.length >= 2 ) {
        scrollNumber = window.location.hash.substr(1);
        console.log('scrollNumber',scrollNumber);
      }

      setTimeout(()=>{
        window.scrollTo(
          {top:scrollNumber,
            behavior:'smooth'}
        );
      },500);

      this.initData();

      // 分享文案
      this.shareInfo();
    },
    methods: {
      initData(){
        console.info("initData");
        // 判断登录
        if (!this.me.id) {
          // window.location.href = '/sign_up';
          this.$router.push({path: '/sign_up'});
          return false;
        }
        this.$loading.close();
      },


      // 初始化挂载分享信息
      shareInfo () {
        let _link = this.urlPath +  'utm_source=share&utm_medium=cpc&utm_campaign=readingday&';
        if ( this.me.id ) {
          _link = _link + `userId=${this.me.id}`;
        }

        this.$share.ready({
          title: '分享标题',
          content: '分享内容',
          image: '分享图片',
          link: _link ,
        });
      },

      // 滚动监听事件
      scrollAction () {
        if (this.timeout) return;

        this.timeout = setTimeout(() => {
          const srcoll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          window.location.hash = srcoll;
          clearTimeout(this.timeout);
          this.timeout = null;
        }, 2000);

      },

    },
    destroyed () {
      window.removeEventListener('scroll',this.scrollAction);
    },
    fetch({store}) {
      return Promise.resolve().then(() => {
        store.commit('header/set', {
          show: true,
          title: '移动端头部'
        });
      });
    },
    layout(ctx) {
      return ctx.layout;
    },
  }
</script>

<style scoped>
    .eg{

    }
</style>
```

## Vue3初始化模板

## React初始化模板

## Golang初始化模板

## Rust初始化模板
