<template>
    <div id="headbar">
        <div id="headbar-left">
            <div id="headbar-left-title">Champion Backstage</div>
        </div>
            
        <div id="headbar-right">
            <!-- <div id="headbar-right-extend">#</div> -->
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#headbar {
    z-index: 1000;
    position: fixed;
    display: grid;
    grid-template-columns: 20% 80%;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: #3c8dbc;
}
/* #headbar-left {
    position: relative;
} */

#headbar-left-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: "Lucida Console", Courier, monospace;
    font-size: 1.2em;
    background-color: #357ca5;
    color: #ffffff;
}
#headbar-right {
    display: grid;
    grid-template-columns: 7% 83%;
}
#headbar-right-extend {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
    
</style>


