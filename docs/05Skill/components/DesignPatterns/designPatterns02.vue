<template>
    <div></div>
</template>

<script lang="ts" setup>
// 练习题一
{
    // 父类：车
    class Car {
        constructor(name, number) {
            this.name = name
            this.number = number
        }
    }
    // 子类：快车
    class Kuaiche extends Car {
        constructor(name, number) {
            super(name, number);
            this.price = 1;
        }
    }
    // 子类：专车
    class Zhuanche extends Car {
        constructor(name, number) {
            super(name, number);
            this.price = 2;
        }
    }
    
    // 行程：
    class Trip {
        constructor(car) {
            this.car = car
        }
        
        start () {
            console.log(`${this.car.name}行程开始,车牌号码为：${this.car.number}`)
        }
        
        end () {
            console.log(`行程结束，价格为：${this.car.price * 5}`)
        }
    }
    
    let car = new Kuaiche('快车A',100)
    let trip = new Trip(car)
    // trip.start()
    // trip.end()
    // console.info('===')
}

// 练习题二
{
    // 停车场
    class Park {
        constructor(floors) {
            this.floors = floors || []
            this.camera = new Camera()
            this.screen = new Screen()
            this.carList = {} // 存储摄像头拍摄返回的车辆信息
        }
        in (car) {
            // 通过摄像头获取信息
            const info = this.camera.shot(car)
            // 停到某个停车位
            const i = parseInt(Math.random() * 100 % 100)
            const place = this.floors[0].places[i]
            place.in()
            info.place = place
            // 记录信息
            this.carList[car.num] = info
        }
        out (car) {
            const info = this.carList[car.num]
            // 清空停车位
            const place = info.place
            place.out()
            // 显示时间
            this.screen.show(car, info.inTime)
            // 清空记录
            delete this.carList[car.num]
        }
        emptyNum () {
            return this.floors.map((floor) => {
                return `${floor.index} 层还有 ${floor.emptyPlaceMun()} 个车位`
            }).join('\n')
        }
    }
    // 层
    class Floor {
        constructor(index, places) {
            this.index = index
            this.places = places || []
        }
        
        emptyPlaceMun() {
            let num = 0;
            this.places.forEach(p => {
                if (p.empty) {
                    num = num + 1
                }
            })
            
            return num
        }
    }
    // 车位
    class Place {
        constructor() {
            this.empty = true
        }
    
        in() {
            this.empty = false
        }
    
        out() {
            this.empty = true
        }
    }
    
    // 摄像头
    class Camera {
        shot(car) {
            return {
                num: car.num,
                inTime: Date.now()
            }
        }
    }
    // 屏幕
    class Screen {
        show(car, inTime) {
            console.log(`车牌号：${car.num}，停车时间${Date.now() - inTime}`)
        }
    }
    
    // 车辆
    class Car {
        constructor(num) {
            this.num = num
        }
    }
    
    
    // 测试
    // 初始化停车场
    const floors = []
    for (let i = 0; i < 3; i++) {
        const places = []
        for (let j = 0; j < 100; j++) {
            places[j] = new Place()
        }
        floors[i] = new Floor( i + 1, places )
    }
    
    const park = new Park(floors)
    
    // 初始化车辆
    const car1 = new Car(100)
    const car2 = new Car(200)
    const car3 = new Car(300)
    
    // console.log('第一辆车进入')
    // console.log(park.emptyNum())
    // park.in(car1)
    // console.log('第二辆车进入')
    // console.log(park.emptyNum())
    // park.in(car2)
    // console.log('第一辆车离开')
    // park.out(car1)
    // console.log('第二辆车离开')
    // park.out(car2)
    //
    // console.log('第三辆车进入')
    // console.log(park.emptyNum())
    // park.in(car3)
    // console.log('第三辆车离开')
    // park.out(car3)
}
</script>

<style scoped>

</style>
