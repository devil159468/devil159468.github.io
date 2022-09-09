# Vue2

## Tab列表模板
```vue
<template>
    <!-- 模块包裹 -->
    <div v-if="isTabShow" ref="TabList">
        <!-- Tab导航 -->
        <div style="height:50px">
            <!-- Tab内层吸顶 -->
            <div ref="TabListDiv" :class="{'fixTab':fixTab,'fixTabApp':$browser.app}"
                 class="flexLC hideScrollBar tabList">
                <!-- tab选项 -->
                <div v-for="(item,key) in tabList" v-if="item.isShow" :key="item.key"
                     :class="{'activeTab':item.text === tabActive}"
                     :style="{minWidth: item.width + 'px'}" class="tabName" @click="changeTab(item,item.key)">
                    {{ item.text }}
                    
                    <!-- 高亮标志DOM -->
                    <span class="line"></span>
                </div>
            </div>
        </div>
        
        <!-- 每个Tab具体内容 -->
        <div>
            <!-- ... -->
        </div>
    
    </div>
</template>

<script>
export default {
    data () {
        return {
            isTabShow: false, // 整个模块是否展示
            fixTab: false, // 是否吸顶
            tabActive: 'tabA', // 高亮标志，与text字段一致
            tabList: [
                {
                    text: 'tabA', // Tab文案
                    width: 34, // Tab文案宽度
                    heightNum: 0, // DOM高度
                    isShow: true, // 是否展示
                    key: 1, // 唯一 Key 值
                    refName: 'refList1', // refName 便于获取 ref
                    trackName: 'sectionTabA', // 埋点名称
                    hadSaw: false, // 曝光埋点开关：是否已曝光过
                },
                {
                    text: 'tabB',
                    width: 82,
                    heightNum: 0,
                    isShow: true,
                    key: 2,
                    refName: 'refList2',
                    trackName: 'sectionTabB',
                    hadSaw: false,
                },
                {
                    text: 'tabC',
                    width: 34,
                    heightNum: 0,
                    isShow: true,
                    key: 3,
                    refName: 'refList3',
                    trackName: 'sectionTabC',
                    hadSaw: false,
                },
                {
                    text: 'tabD',
                    width: 66,
                    heightNum: 0,
                    isShow: true,
                    key: 4,
                    refName: 'refList4',
                    trackName: 'sectionTabD',
                    hadSaw: false,
                },
                {
                    text: 'tabE',
                    width: 66,
                    heightNum: 0,
                    isShow: true,
                    key: 6,
                    refName: 'refList5',
                    trackName: 'sectionTabE',
                    hadSaw: false,
                }
            ], // Tab列表
        }
    },
    computed: {
        // 滚动事件偏移量: 如果是 PC 或 app 偏移量为0，H5 的偏移量为 43
        computedOffset () {
            return (this.$browser.desktop || this.$browser.app) ? 0 : 43;
        },
        
        // 点击切换Tab时的偏移量：40为 tabList 高度，100 为 H5 导航 + 标题栏高度
        computedClickOffset () {
            return (this.$browser.desktop || this.$browser.app) ? 40 : 100;
        }
    },
    mounted () {
        // 初始化
        this.initHandler();
    },
    methods: {
        // 初始化
        initHandler () {
            
            // 添加滚动监听
            document.addEventListener('scroll', this.scrollPage);
            // 一次性移除监听方法
            // this.$once('hook:beforeDestroy', () => {
            //     this.scrollPage();
            // });
            
            // 省略：根据数据计算 tabList 中的每一条是否显示
            
            // tabList中只要有一项的显示为true，则整个模块都展示，否则全部不展示
            this.isTabShow = this.tabList.some((item) => item.isShow == true);
        
        },
        // 滚动事件
        scrollPage () {
            // 滚动距离
            let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // console.log('scrollPage', scroll);
            
            // 实际DOM
            let refTabList = this.$refs.TabList;
            
            // refTabList 存在 且 滚动的距离大于其高度时 吸顶
            let condition1 = !!refTabList.offsetTop;
            let condition2 = scroll + computedOffset > refTabList.offsetTop;
            
            
            // 获取页面中实际显示的导航数组
            let tabShowListArr = this.tabList.filter((item) => item.isShow);
            
            // 吸顶条件
            if (condition1 && condition2) {
                this.fixTab = true;
                
                // 滚动式高亮 Tab
                for (let i in tabShowListArr) {
                    
                    let _itemTop = this.$refs[`refList${tabShowListArr[i].key}`].getBoundingClientRect();
                    
                    // 
                    if (_itemTop.top - computedOffset - 60 < 0) {
                        
                        this.tabActive = tabShowListArr[i].text;
                        
                        // 曝光模块处理
                        if (!tabShowListArr[i].hadSaw) {
                            tabShowListArr[i].hadSaw = true;
                            this.$parent.initTrackServerActionInner(tabShowListArr[i].trackName);
                        }
                        // console.log('tabShowListArr[i]', tabShowListArr[i]);
                    
                    }
                
                }
            
            } else {
                // 如果未吸顶，则高亮为第一个
                this.fixTab = false;
                this.tabActive = tabShowListArr[0].text;
            }
        
        
        },
        // 切换Tab
        changeTab (obj, key) {
            // console.log('changeTab', obj, key);
            
            // 点击事件埋点
            this.$track(obj.trackName)
            
            // 滚动距离
            let scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // 获取被点击 Tab 的 DOM 属性
            let tabItem = this.$refs[`refList${key}`].getBoundingClientRect();
            // console.log('tabShowListArr', scroll, tabItem);
            
            // 滚动至对应 tab 详情：body 滚动距离 + 点击标签至可视区域顶部的距离 - 导航偏移量
            window.scrollTo({top: scroll + tabItem.top - this.computedClickOffset});
            
            // 导航 tab 滚动到可见区域
            this.$refs.TabListDiv.scrollLeft = (key - 1) * 30;
        
        },
    },
    destroyed () {
        // 移除滚动监听
        window.removeEventListener('scroll', this.scrollPage);
    },
}
</script>



```


## 手机号码格式转化为 344 格式 （188 3886 9199）
```vue
phoneSeparated (phoneNumber) {
  let value = phoneNumber.replace(/[^0-9*]/ig, '');
  if (value.length > 3 && value.length < 7) {
    value = value.substring(0, 3) + ' ' + value.substring(3);
  } else if (value.length == 7) {
    value = value.substring(0, 3) + ' ' + value.substring(3, 7);
  } else if (value.length > 7) {
    value = value.substring(0, 3) + ' ' + value.substring(3, 7) + ' ' + value.substring(7);
  }
  return value.substring(0, 13);
}
```


## 管理后台模板 页面
```vue
<template>
    <div>
        <!-- 筛选项 及 按钮 -->
        <div>
            <!-- 筛选项 -->
            <div>
                <el-form :inline="true" :model="searchQuery">
                    <el-form-item label="左侧展示文字">
                        <el-input v-model="searchQuery.orderId" placeholder="placeholder" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="下来选项">
                        <el-select clearable v-model="searchQuery.orderType" filterable placeholder="请选择">
                            <el-option v-for="item in optionsList.orderTypeOptions" :key="item.value" :label="item.label" :value="item.value" />
                        </el-select>
                    </el-form-item>
                    
                </el-form>
            </div>
            
            <!-- 按钮 -->
            <el-button type="primary" @click="searchHandler">查询</el-button>
            <el-button type="primary" @click="resetSearchHandler">重置</el-button>
        </div>
        <br>
        
        <!-- 表格 -->
        <div>
            <el-table :data="dataList" border v-loading="dataListLoading" style="width: 100%;">
                <el-table-column label="XX" prop="orderId" header-align="center" align="center"/>
                <el-table-column label="操作" prop="orderId" header-align="center" align="center">
                    <el-button type="text" size="small" @click="openDetail">查看</el-button>
                </el-table-column>
            
            </el-table>
        </div>
    
        <!-- 分页 -->
        <el-pagination
            @size-change="sizeChangeHandle"
            @current-change="currentChangeHandle"
            :current-page="pageIndex"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pageSize"
            :total="totalPage"
            layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
    
    </div>
</template>

<script>
export default {
  name: 'xxx',
  data () {
    return {
      // 搜索参数
      searchQuery: {
        orderId: '',
        visitorId: '',
        orderType: ''
      },

      // 筛选项集合
      optionsList: {
        // 是否实名
        orderTypeOptions: [
          {
            label: '否',
            value: '0'
          },
          {
            label: '是',
            value: '1'
          }
        ]

      },
    
      // 表格展示数据
      dataList: [],
      dataListLoading: false,
      pageIndex: 1,
      pageSize: 10,
      totalPage: 0,
    }
  },
  mounted () {
    this.initPage()
  },
  methods: {
    initPage () {
      this.getDataList()
    },
    // 获取接口数据
    getDataList () {
    
    },
    
    // 每页数
    sizeChangeHandle (val) {
      this.pageSize = val
      this.pageIndex = 1
      this.getDataList()
    },
    // 当前页
    currentChangeHandle (val) {
      this.pageIndex = val
      this.getDataList()
    },

    // 查询
    searchHandler () {
    },
    // 重置查询
    resetSearchHandler () {
    },
    // 查看详情
    openDetail () {
    }

  }
}
</script>

<style lang="scss" scoped>

</style>

```


## 管理后台模板 弹窗
```vue
<template>
    <el-dialog title="弹窗名称" :close-on-click-modal="false" :visible.sync="popWindow.isShow">
        <template>
        
        </template>
    
        <span slot="footer" class="dialog-footer">
          <el-button @click="togglePop()">取消</el-button>
          <el-button type="primary" @click="popSubmit()">确定</el-button>
        </span>
    </el-dialog>
</template>

<script >
export default {
    data () {
        return {
            popWindow: {
                isShow: true
            }
        }
    },
    mounted () {
        
    },
    methods: {
        togglePop () {},
        popSubmit () {},
    }
}

</script>
```
