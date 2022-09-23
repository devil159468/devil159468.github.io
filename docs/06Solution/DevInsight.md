# 开发心得及经验

## 关于项目
1. 在立项时候着重考虑架构设计，针对需要落地的场景及当前技术团队的技术情况，选择合适的前后端架构，大多数时候顶部的架构是早就设计好的，你在接手项目的时候最好快速搞懂为什么会形成现在的架构选型，并快速理解和消化。思考下如果让你独立去完成相同体量的项目，是否能做的比现在更好
2. 注重项目积累：最好多积累一些可用的函数和库，前期可以使用一些在线文档软件进行统一记录，后续时间允许的情况下，可以做成代码包或SDK，逐渐提高项目的开发效率。也可以把常用的代码片段做成文档，方便分享。常用的功能封装好后就可以考虑做模板框架了，可以将公司项目中常用的部分抽离出来形成一套模板框架，这样在开发新的项目时，可直接以该模板框架为基础，快速进行开发迭代，提升效率


## 关于开发
1. 开发前要注重代码设计：在得到已确认的 UI 后，要多考虑组件的复用问题，以及是否具备后续快速迭代的能力，也就是通常说的 **高内聚，低耦合**。说起来很容易，但是在实际开发的过程中，面对灵活多变的需求，做出 **以不变应万变** 的方案才是个人能力高低的体现
2. 开发前要多于产品经理和UI进行沟通，确定他们到底要什么，保证大家理解的需求是统一的。否则后续会有来回扯皮的问题，最终影响的还是开发人员的时间。
3. 适当尝试砍掉需求（当然，这并不容易）：沟通时不要和产品说XX需求不好做，要尽量站在产品经理的角度上说（毕竟产品经理大概率是不懂技术的，你和Ta说技术，只会招致Ta的反感，会认为你"找茬"，甚至觉得你在"针对Ta"）。例如前期没有沟通好，在开发阶段临时加的功能，可以和产品经理说：这个功能可以做，但是会比较浪费时间，可否换一种现有的实现方式，在排期时间允许的情况下保证功能可用
4. 多写注释：尽量在开发过程中补全注释，保证任何时候修改这段代码的人都能快速看懂代码在做什么操作。你可能在很长一段时间后修改自己的代码，想象下要改几千行的代码但一行注释都没有，你该怎么办？
5. 重构：在开发迭代时间允许的条件下，尽量将不合理的代码进行小幅度的重构，在公司正常迭代中，项目几乎不会给你彻底重构的机会和时间，小幅度重构可以保证代码 **腐败** 的速度慢一点。
6. 让代码尽量简单：很多时候因为过于想复用一个组件，多次迭代后，大概率会产生无法维护的情况。这时就要考虑拆分，可参考策略模式的思想，保证逻辑独立，可以容忍有一定量的冗余DOM(后续有时间再优化)
7. 想明白再动手：尽量把一次迭代的所有工作在大脑里想清楚，至少也要过一遍，这样总比无脑堆砌代码反复返工来的好
8. 多做一些事：多做一些你职责之外但可以提升其他人效率的工作，例如在提测之前把测试可能涉及到的路由或者关键变量提前告知，帮助别人提交效率的同时，也是帮助自己提升效率。帮别人其实就是在帮自己


## 关于自身发展
1. 提高自身影响力：做一些能提高效率的事，以提升自己的效率为开始，慢慢影响到身边的同事，后续过渡到团队、部门，逐渐扩大自身的影响力
2. 要持续学习：程序员这个职业是要终身学习的，否则很容易被技术淘汰。《数据结构与算法》、《计算机原理》一类的基础书，对于非科班出身的程序员来说确实比较难啃，但我还是建议你看一看。虽然现在大多数开发人员，尤其是前端开发根本不需要了解算法，但这并不代表你不需要知道。这些是基础，是内功。对于你后续的提高会有很大的帮助。当然，这一切的前提都是你不甘于做一个普通的开发人员。









