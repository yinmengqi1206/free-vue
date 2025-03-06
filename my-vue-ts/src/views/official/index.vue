<template>
    <el-row class="page">
        <el-col :span="4"></el-col>
        <el-col :span="16">
            <div class="navigate">
                <div class="title">
                    <img src="../../assets/official/title.png" alt="/" style="width: 150px;">
                </div>
                <div class="menu">
                    <div class="menu-item" v-for="item in memuItem" :key="item.name">
                        <router-link :to="item.url">{{ item.name }}</router-link>
                    </div>
                </div>
                <div class="info">
                    <img class="info-image" src="../../assets/official/title.png">
                    <span style="text-align: center;">
                        <span style="display: flex;justify-content: space-between;align-items: center;">
                            <label class="label-name">{{ rigntItem.name }}</label>
                            <label class="label-time">vs</label>
                            <label class="label-name">{{ rigntItem.name1 }}</label>
                        </span>
                        <span class="label-time">{{ rigntItem.time }}</span>
                    </span>
                    <img class="info-image" src="../../assets/official/title.png">
                </div>
            </div>
            <div style="width: 100%;">
                <router-view></router-view>
            </div>
        </el-col>
        <el-col :span="4"></el-col>
    </el-row>
</template>

<script setup lang="ts">
const memuItem = [
    {
        name: 'COMPANY',
        url: "/company"
    }, {
        name: 'ESPORTS',
        url: "/esports"
    }, {
        name: 'AD SOLUTIONS',
        url: "/adSolutions"
    }, {
        name: 'TECHNOLOGY',
        url: "/technology"
    }, {
        name: 'NEWS',
        url: "/news"
    }, {
        name: 'SHOP',
        url: "/shop"
    }, {
        name: 'APP',
        url: "/app"
    }
]

const rigntItem = {
    name: 'FNC',
    name1: 'BBL',
    time: '00:00-20 Jun 2024',
    vs1img: '../../assets/official/title.png',
    vs2img: '../../assets/official/title.png'
}
</script>

<style scoped>
.page {
    background: #000000;
    border-radius: 0px 0px 0px 0px;
}

.navigate {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.info {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 320px;
    height: 54px;
    background: #ED111C;
    border-radius: 8px 8px 8px 8px;
}

.info-image {
    width: 32px;
    height: 32px;
    border-radius: 50%;
}

.label-name {
    font-family: Altinn-DIN Condensed-DINCondensed, Altinn-DIN Condensed-DINCondensed;
    font-weight: bold;
    font-size: 19px;
    color: #FFFFFF;
    line-height: 22px;
    text-align: left;
    font-style: normal;
    text-transform: none;
}

.label-time {
    font-family: Altinn-DIN Condensed-DINCondensed, Altinn-DIN Condensed-DINCondensed;
    font-weight: bold;
    font-size: 12px;
    color: #FFFFFF;
    line-height: 14px;
    text-align: left;
    font-style: normal;
    text-transform: none;
}

.title {
    border-radius: 0px 0px 0px 0px;
}

.menu {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.menu-item {
    margin-right: 15px;
    height: 19px;
    font-family: Altinn-DIN Condensed-DINCondensed, Altinn-DIN Condensed-DINCondensed;
    font-weight: bold;
    font-size: 19px;
    color: #FFFFFF;
    line-height: 22px;
    text-align: left;
    font-style: normal;
    text-transform: none;
}
</style>

<style scoped>
.router-link-active {
    text-decoration: none;
    /* 去除默认下划线 */
    color: yellow;
    /* 高亮的颜色 */
}

a {
    text-decoration: none;
    /* 去除默认下划线 */
    color: white;
    /* 设置链接文字颜色 */
}
</style>
