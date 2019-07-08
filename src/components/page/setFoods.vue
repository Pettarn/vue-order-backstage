<template>
    <div id="form">
        <input type="text" v-model="foodsObj.id" placeholder="菜品ID">
        <input type="text" v-model="foodsObj.businessId" placeholder="商家ID">
        <input type="text" v-model="foodsObj.name" placeholder="菜品名称">
        <input type="text" v-model="foodsObj.price" placeholder="菜品价格">
        <input type="text" v-model="foodsObj.description" placeholder="菜品描述">
        <input type="text" v-model="foodsObj.typeid" placeholder="菜品分类ID">
        <input type="text" v-model="foodsObj.imgsrc" placeholder="菜品图片地址">
        <input type="button" @click="changeFoods" value="更改">
    </div>
</template>

<script>
import {updateFoods} from '../../api/business'
export default {
    data () {
        return {
            foodsObj: {
                id: this.$route.query.id,
                businessId: 1,
                name: this.$route.query.name,
                price: this.$route.query.price,
                description: this.$route.query.description,
                typeid: this.$route.query.typeid,
                imgsrc: this.$route.query.imgsrc,
            }
        }
    },
    methods: {
        changeFoods () {
            let params = {}
            for(let item in this.foodsObj) {
                params[item] = this.foodsObj[item]
            }
            updateFoods(params).then(res => {
                if(res.success[0]) {
                    this.$router.push('foodsList')
                }
            })    
        }
    },
    // created () {
    //     let params = {}
    //     for(let item in this.foodsObj) {
    //         params[item] = this.foodsObj[item]
    //     }
    //     updateFoods(params).then(res => {
    //         if(res.success[0]) {
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
