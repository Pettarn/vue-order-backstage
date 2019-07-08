<template>
    <div id="navbar">
        <router-link tag="div" to="foodsList" id="navbar-foodList">菜品列表</router-link>
        <router-link tag="div" to="addFoods" id="navbar-addFood">添加菜品</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#navbar {
    position: relative;
    width: 100%;
    height: 600px;
    background-color: #222d32;
    color: #ffffff;
}
#navbar>div {
    position: relative;
    display: flex;
    align-items: center;
    font-size: 1.5em;
    font-family: "Lucida Console", Courier, monospace;
    height: 50px;
    padding-left: 15px;
}

#navbar>div:hover {
    background-color: #1e282c;
}
#navbar>div:hover::before {
    position: absolute;
    content: '';
    height: 50px;
    width: 6px;
    top: 0;
    left: 0;
    background-color: #3c8dbc;
}
</style>




