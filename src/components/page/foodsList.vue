<template>
    <div id="foodsList">
        <table id="foodsList-table">
            <tr>
                <th>菜品ID</th>
                <th>菜品名称</th>
                <th>菜品价格</th>
                <th>菜品描述</th>
                <th>菜品图片地址</th>
                <th>菜品类型</th>
                <th>操作</th>
            </tr>
            <tr v-for="item in foodsList" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.price}}</td>
                <td>{{item.description}}</td>
                <td style="max-width: 100px; overflow: scroll;">{{item.imgsrc}}</td>
                <td>{{item.typeid}}</td>
                <td>
                    <input type="button" value="删除" @click="deleteFood(item.id)"> 
                    <router-link tag="button" :to="{ path: 'setFoods', query: { id: item.id, name: item.name, imgsrc:item.imgsrc, typeid: item.typeid, description: item.description, price: item.price } }">更改</router-link>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import {getMenu} from '../../api/business'
import {deleteFoods} from '../../api/business'
export default {
    data () {
        return {
            foodsList: [],
        }
    },
    created () {
        getMenu().then(res => {
            this.foodsList = res.foods.filter(element => {
                return element.businessId == 1
            })
            // console.log(this.foodsList)
        })
    },
    methods: {
        deleteFood (id) {
            let params = {}
            params.id = id
            deleteFoods(params).then(res => {
                console.log(res.success[0])
                if(res.success[0]) {
                    location.reload()
                }
            })
        }
    }
}
</script>

<style scoped>
#foodsList-table {
    position: absolute;
    left: 0;
    border-collapse: collapse;
}
th, td{
    /* box-sizing: border-box; */
    border: solid rgb(185, 104, 104);
    border-width: 1px 1px 1px 1px;
    text-align: center;
    padding: 10px 45px;
}

</style>


