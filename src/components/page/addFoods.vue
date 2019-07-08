<template>
    <div id="form">
        <input type="text" v-model="foodsObj.businessId" placeholder="商家ID">
        <input type="text" v-model="foodsObj.name" placeholder="菜品名称">
        <input type="text" v-model="foodsObj.price" placeholder="菜品价格">
        <input type="text" v-model="foodsObj.description" placeholder="菜品描述">
        <input type="text" v-model="foodsObj.typeid" placeholder="菜品分类ID">
        <input type="text" v-model="foodsObj.imgsrc" placeholder="菜品图片地址">
        <input type="button" @click="addFoods()" value="添加">
    </div>
</template>

<script>
import {insertFoods} from '../../api/business'
export default {
    data () {
        return {
            foodsObj: {
                businessId: 1,
                name: '',
                price: '',
                description: '',
                typeid: null,
                imgsrc: '',
            }
        }
    },
    methods: {
        addFoods () {
            let params = {}
            // 拷贝对象
            for(let item in this.foodsObj) {
                params[item] = this.foodsObj[item]
            }
            console.log(params)
            insertFoods(params).then(res => {
                console.log(res.success)
                if(res.success) {
                    this.$router.push('foodsList')
                }
            })
        }
    },
    //https://img03.sogoucdn.com/v2/thumb?t=2&url=http%3A%2F%2Fp.jingyanben.com%2Fcbf%2F0d66dd08dfe91.gif32.jpg&appid=200580
    // created () {
    //     let params = {}
    //     // 拷贝对象
    //     for(let item in this.foodsObj) {
    //         params[item] = this.foodsObj[item]
    //     }
    //     insertFoods(params).then(res => {
    //         console.log(res.success)
    //         if(res.success) {
    //             this.$router.push('foodsList')
    //         }
    //     })
    // }
    
}
</script>


<style scoped>
input {
    width: 100%;
    height: 50px;
    font-size: 2em;
}
</style>
