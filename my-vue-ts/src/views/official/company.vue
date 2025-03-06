<template>
    <div class="company">
        <div class="title">
            SHOW THE WORLD YOUR <label>GAME</label>
        </div>
        <div style="margin-top: 90px;">
            <img src="../../assets/official/conmany/1.jpg" style="width: 100%; height: 100%;">
        </div>
        <div class="title">
            <label>V</label>ER<label>S</label>US <label>P</label>LAYER <label>O</label>NE
        </div>
        <el-row class="content">
            <el-col :span="12" class="content-item">
                <img src="../../assets/official/conmany/2.jpg" style="width: 100%; height: 100%;">
            </el-col>
            <el-col :span="12" class="content-item">
                <div class="content-item-title">
                    {{ item1[0].title }}
                </div>
                <div class="content-item-content">
                    {{ item1[0].content }}
                </div>
            </el-col>
            <el-col :span="12" class="content-item">
                <div class="content-item-title">
                    {{ item1[1].title }}
                </div>
                <div class="content-item-content">
                    {{ item1[1].content }}
                </div>
            </el-col>
            <el-col :span="12" class="content-item">
                <img src="../../assets/official/conmany/3.jpg" style="width: 100%; height: 100%;">
            </el-col>
        </el-row>
        <div class="content">
            <el-col :span="8" class="content-item1" v-for="item in item">
                <div>
                    <div class="content-item1-title">{{ item.title }}</div>
                    <div class="content-item1-content">{{ item.content }}</div>
                </div>
            </el-col>
        </div>
    </div>
</template>

<script setup lang="ts">
const item1 = [
    {
        title: 'THE FUTURE IS NOW.',
        content: `One Blend your style and experience on a global, competitive stage. You have 13 rounds to attac and
                    defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll
                    need to think faster than your opponent if you want to survive. Take on foes across Com-petitive and
                    Unrankedmodes as well as Death-match and Spike Rush.Blend your style and experience on a global,
                    competitive stage. You have 13 rounds to attac and defend your side using sharp gunplay and tactical
                    abilities. And, your side using sharp gunplay and tactical abilities. And,`
    },
    {
        title: 'THE FUTURE IS NOW.',
        content: `Two Blend your style and experience on a global, competitive stage. You have 13 rounds to attac and
                    defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll
                    need to think faster than your opponent if you want to survive. Take on foes across Com-petitive and
                    Unrankedmodes as well as Death-match and Spike Rush.Blend your style and experience on a global,
                    competitive stage. You have 13 rounds to attac and defend your side using sharp gunplay and tactical
                    abilities. And, your side using sharp gunplay and tactical abilities. And,  Blend your style and experience on a global, competitive stage. You have 13 rounds to attac and
                    defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll
                    need to think faster than your opponent if you want to survive. Take on foes across Com-petitive and
                    Unrankedmodes as well as Death-match and Spike Rush.Blend your style and experience on a global,
                    competitive stage. You have 13 rounds to attac and defend your side using sharp gunplay and tactical
                    abilities. And, your side using sharp gunplay and tactical abilities. And,`
    }
]
const item = [
    {
        title: 'No.1',
        content: 'In esports revenue in Asia'
    },
    {
        title: 'No.1',
        content: 'in number of tournaments orga-nized in Asia'
    },
    {
        title: '1300+',
        content: 'In esports revenue in Asia'
    },
    {
        title: '800M+',
        content: 'SOCIAL MEDIA FANS'
    },
    {
        title: '4,000+',
        content: 'matches per year'
    },
    {
        title: '2,600+',
        content: 'hours of broadcast pery ear '
    }
]
</script>

<style scoped>
.company {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.title {
    margin-top: 100px;
    font-family: Altinn-DIN Condensed-DINCondensed, Altinn-DIN Condensed-DINCondensed;
    font-weight: bold;
    font-size: 52px;
    color: #FFFFFF;
    line-height: 61px;
    text-align: center;
    font-style: normal;
    text-transform: none;
}

.title label {
    color: #ED111C;
}

.content {
    margin-top: 60px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.content-item {
    height: 500px;
}

.content-item-title {
    height: 20%;
    margin: 0 40px;
    font-family: Altinn-DIN Condensed-DINCondensed, Altinn-DIN Condensed-DINCondensed;
    font-weight: bold;
    font-size: 46px;
    color: #ED111C;
    line-height: 54px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    display: flex;
    align-items: center;
}

.content-item-content {
    height: 80%;
    margin: 0 40px;
    overflow: auto;
    font-family: Lato, Lato;
    font-weight: 400;
    font-size: 18px;
    color: #CCCCCC;
    line-height: 27px;
    text-align: left;
    font-style: normal;
    text-transform: none;
}

.content-item1 {
    text-align: center;
    display: flex;
    justify-content: center;
    height: 200px;
}

.content-item1-title {
    font-family: Altinn-DIN Condensed-DINCondensed, Altinn-DIN Condensed-DINCondensed;
    font-weight: bold;
    font-size: 56px;
    color: #FFFFFF;
    line-height: 66px;
    text-align: center;
    font-style: normal;
    text-transform: none;
}

.content-item1-content {
    margin-top: 40px;
    font-family: Lato, Lato;
    font-weight: 400;
    font-size: 18px;
    color: #808080;
    line-height: 21px;
    font-style: normal;
    text-transform: none;
}
</style>