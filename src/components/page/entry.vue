<template>
    <div id="entry">
        <div id="entry-container">
            <div id="entry-container-head">
                <router-link to="login" tag="div">登录</router-link>
                <router-link to="register" tag="div">注册</router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#entry {
    width: 100%;
    height: 800px;
}
/* #entry-container {
    position: absolute;
    width: 300px;
    height: 600px;
    left: 50%;
    transform: translateX(-50%);
    background-color: blue;
} */
#entry-container {
    position: relative;
    width: 300px;
    left: 50%;
    transform: translateX(-50%);
    background-color: blue;
}
#entry-container-head {
    position: relative;
    display: grid;
    grid-template: 1fr / 50% 50%;
}
#entry-container-head>div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    cursor: pointer;
}
</style>

