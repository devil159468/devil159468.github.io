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


## 常用正则
```vue
watch: {
    <!-- 仅中文 -->
    'text1': {
        handler (n, o) {
            let reg = /[^\u4E00-\u9FA5]/g;
            console.log('中文',n.replace(reg,''));
            this.name = n.replace(reg, '');
        }
    },
    <!-- 仅数字及字字母 -->
    'text2': {
        handler (n, o) {
            let re = /[^\w\/]/ig;
            console.log('来访身份证校验',n.replace(re,''));
            this.text2 = n.replace(re, '');
        }
    },
    
    <!-- 仅 大小写字母及中文 -->
    'text3': {
        handler (n, o) {
            let reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g;
            console.log('',n.replace(reg,''));
            this.text3 = n.replace(reg, '');
        }
    }
}
```


## 电话号码补位成 3 4 4 格式
```javascript
/*
 * phoneNumber: 待格式化字符串
 * str：this中挂载的变量，this[str] 可动态获取变量
 */ 
phoneSeparated (phoneNumber,str) {
  let value = phoneNumber.replace(/[^0-9*]/ig, '');
  console.log('phoneSeparated', this.nationCode1, typeof this.nationCode1,this.nationCode2,value);

  if (this[str] === null || this[str] - 0 === 86) {
    if (value.length > 3 && value.length < 7) {
      value = value.substring(0, 3) + ' ' + value.substring(3);
    } else if (value.length == 7) {
      value = value.substring(0, 3) + ' ' + value.substring(3, 7);
    } else if (value.length > 7) {
      value = value.substring(0, 3) + ' ' + value.substring(3, 7) + ' ' + value.substring(7);
    }
    return value.substring(0, 13);
  } else {
    return value;
  }
}

```


## input IOS 获取焦点
```vue
<input ref="input" id="input" autofocus type="text" v-model="searchKeyWord" placeholder="搜索咨询师" @keyup.13="searchHandler">

let input = document.getElementById('input');
window.addEventListener('click',function(){
  input.focus();
});
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
                    
                    <el-form-item label="来访ID">
                        <el-input v-model="searchQuery.userId" placeholder="来访者ID" clearable></el-input>
                    </el-form-item>
                    
                    <el-form-item label="用户预约时间">
                        <el-date-picker
                            v-model="searchQuery.userTime"
                            type="daterange"
                            align="right"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </el-form-item>
                    
                    <el-form-item label="节点时间">
                        <el-date-picker
                            v-model="searchQuery.nodeTime"
                            type="daterange"
                            align="right"
                            unlink-panels
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            value-format="yyyy/MM/dd">
                        </el-date-picker>
                    </el-form-item>
                    
                    <el-form-item label="分配助理姓名">
                        <el-input v-model="searchQuery.assistant" placeholder="分配助理姓名" clearable></el-input>
                    </el-form-item>
                    
                    <el-form-item label="联系类型">
                        <el-select clearable v-model="searchQuery.type" filterable placeholder="请选择状态">
                            <el-option v-for="item in optionsList.typeList" :key="item.value"
                                       :label="item.label" :value="item.value"/>
                        </el-select>
                    </el-form-item>
                    
                    <el-form-item label="状态">
                        <el-select clearable v-model="searchQuery.status" filterable placeholder="请选择状态">
                            <el-option v-for="item in optionsList.statusOptions" :key="item.value"
                                       :label="item.label" :value="item.value"/>
                        </el-select>
                    </el-form-item>
                
                </el-form>
            </div>
            
            <!-- 按钮 -->
            <div class="flexSC">
                <div>
                    <el-button type="primary" @click="searchHandler">查询</el-button>
                    <el-button type="info" @click="resetSearchHandler">重置</el-button>
                </div>
                <div>
                    <el-button type="success" @click="outFile">导出表单</el-button>
                </div>
            </div>
        
        
        </div>
        <br>
        
        <!-- 表格 -->
        <div>
            <el-table :data="dataList" border v-loading="dataListLoading" style="width: 100%;">
                
                <el-table-column label="来访ID" prop="avatar" header-align="center" align="center" width="50"/>
                <el-table-column label="预约申请单电话" prop="name" header-align="center" align="center"/>
                <el-table-column label="联系类型" prop="name" header-align="center" align="center">
                    <template slot-scope="scope">
                        <div v-if="1">主动预约联系</div>
                        <div v-if="1">第一次咨询结束</div>
                    </template>
                </el-table-column>
                <el-table-column label="用户预约时间" prop="name" header-align="center" align="center"/>
                <el-table-column label="节点时间" prop="name" header-align="center" align="center"/>
                <el-table-column label="咨询助理" prop="name" header-align="center" align="center"/>
                <el-table-column label="用户事由" prop="name" header-align="center" align="center"/>
                <el-table-column label="回访记录" prop="name" header-align="center" align="center"/>
                
                <el-table-column label="状态" prop="list" header-align="center" align="center">
                    <template slot-scope="scope">
                        <div v-if="1">待联系</div>
                        <div v-if="1">未联系上</div>
                        <div v-if="1">已联系</div>
                    </template>
                </el-table-column>
                
                <el-table-column label="操作" align="center">
                    <template slot-scope="scope">
                        <el-button type="warning" size="small" @click="togglePop(1)">修改为未联系上</el-button>
                        <br><br>
                        <el-button type="success" size="small" @click="togglePop(2)">修改为已联系</el-button>
                        <br><br>
                        <el-button type="info" size="small" @click="toggleEdit(true, scope.row.name)">编辑回访记录</el-button>
                    </template>
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
        
        
        <!-- 弹窗 -->
        <div>
            
            <!-- 变更状态弹窗 -->
            <el-dialog title="变更状态" :close-on-click-modal="false" :visible.sync="statusPop" :show-close="false">
                <span v-if="popWindow.statusShow === 1">
                    是否将该状态变更为 <span style="font-weight: bold">未联系上</span>？变更后该状态可继续更改
                </span>
                <span v-else-if="popWindow.statusShow === 2">
                    是否将该状态变更为 <span style="font-weight: bold">已联系</span>？变更后该状态不可再次更改
                </span>
                
                <span slot="footer" class="dialog-footer">
                  <el-button @click="togglePop()">取消</el-button>
                  <el-button type="primary" @click="popSubmit(popWindow.statusShow)">确定</el-button>
                </span>
            </el-dialog>
            
            <!-- 编辑回访记录 -->
            <el-dialog title="变更状态" :close-on-click-modal="false" :visible.sync="popWindow.editShow"
                       :show-close="false">
                <div>
                    <el-input v-model="popWindow.editContent" type="textarea"></el-input>
                </div>
                
                <span slot="footer" class="dialog-footer">
                  <el-button @click="toggleEdit()">取消</el-button>
                  <el-button type="primary" @click="submitEdit(popWindow.statusShow)">确定</el-button>
                </span>
            </el-dialog>
        </div>
    
    </div>
</template>

<script>
export default {
    name: 'feedback',
    data () {
        return {
            // 搜索参数
            searchQuery: {
                userId: '',
                userTime: '',
                nodeTime: '',
                assistant: '',
                type: '',
                status: ''
            },
            resetSearchQuery: {},
            
            // 筛选项集合
            optionsList: {
                // 联系类型
                typeList: [
                    {
                        label: '主动预约联系',
                        value: '0'
                    },
                    {
                        label: '第一次咨询结束',
                        value: '1'
                    }
                ],
                // 状态
                statusOptions: [
                    {
                        label: '待联系',
                        value: '0'
                    },
                    {
                        label: '未联系上',
                        value: '1'
                    },
                    {
                        label: '已联系',
                        value: '2'
                    }
                ]
            },
            
            // 表格展示数据
            dataList: [
                {
                    avatar: '1',
                    name: 'name',
                    list: [1, 2, 3]
                }
            ],
            dataListLoading: false,
            pageIndex: 1,
            pageSize: 10,
            totalPage: 0,
            
            popWindow: {
                statusShow: 0,
                editShow: false,
                editContent: 'editContent'
            }
        }
    },
    computed: {
        statusPop () {
            return Boolean(this.popWindow.statusShow) || false
        }
    },
    mounted () {
        this.initPage()
    },
    methods: {
        initPage () {
            // 初始化重置查询对象
            this.resetSearchQuery = Object.assign({}, this.searchQuery)
            
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
            // 重置搜索参数
            this.searchQuery = Object.assign({}, this.resetSearchQuery)
            // 请求初始化数据
            this.getDataList()
        },
        // 导出表单
        outFile () {
        
        },
        
        // 变更状态弹窗
        togglePop (num, edit) {
            if (num) {
                this.popWindow.statusShow = num
            } else {
                this.popWindow.statusShow = 0
            }
        },
        // 确认变更
        popSubmit () {
            console.log('确认更新', this.popWindow.statusShow)
            // 调用接口请求
            
            // 完成后关闭弹窗
            this.togglePop()
        },
        
        // 编辑 回访
        toggleEdit (edit, content) {
            if (edit) {
                this.popWindow.editShow = true
                this.popWindow.editContent = content
            } else {
                this.popWindow.editShow = false
                this.popWindow.editContent = ''
            }
        },
        // 提交编辑
        submitEdit () {
            console.log('提交编辑')
            
            // 完成后关闭弹窗
            this.toggleEdit()
        }
    
    }
}
</script>

<style lang="scss" scoped>
.flexSC {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
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


## 管理后台 数据请求
```javascript
// Get 请求
this.$http({
	url: this.$http.adornUrl('xxx'),
	method: 'get',
	params: this.$http.adornParams({
		key: 'value'
	})
}).then(({data}) => {
	console.log('结果', data)
})

// Post 请求
this.$http({
    url: this.$http.adornUrl('xxx'),
    method: 'post',
    data: this.$http.adornData({
      key: 'value'
    })
}).then(({data}) => {
    console.log('结果', data)
})
```
