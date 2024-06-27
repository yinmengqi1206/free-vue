<template>
    <div class="page">
        <div class="sides"></div>
        <div class="middle">
            <div class="navigate">
                <div class="title">
                    VSPO
                </div>
                <div class="memu">
                    <div class="memu-item"><router-link to="/myflex/myflex-child">COMPANY</router-link></div>
                    <div class="memu-item"><router-link to="/myflex/myflex-child">ESPORTS</router-link></div>
                    <div class="memu-item"><router-link to="/myflex/myflex-child">AD SOLUTIONS</router-link></div>
                    <div class="memu-item"><router-link to="/myflex/myflex-child">TECHNOLOGY</router-link></div>
                    <div class="memu-item"><router-link to="/myflex/myflex-child">NEWS</router-link></div>
                    <div class="memu-item"><router-link to="/myflex/myflex-child">SHOP</router-link></div>
                    <div class="memu-item"><router-link to="/myflex/myflex-child">APP</router-link></div>
                    <div class="memu-item"><router-link to="/myflex/myflex-child">FNC VS BBL</router-link></div>
                </div>
            </div>
            <div style="width: 100%;height: 500px;background-color: yellow;">
                <router-view></router-view>
            </div>
            <div class="item1">
                大图
            </div>
        </div>
        <div class="sides"></div>
    </div>
</template>

<style>
.page {
    display: flex;
    width: 100%;
    height: 4704px;
    background: #000000;
    border-radius: 0px 0px 0px 0px;
}

.sides {
    width: 360px;
    height: 100%;
}

.middle {
    width: 100%;
    height: 100%;
}

.navigate {
    width: 100%;
    height: 358px;
    background-color: aqua;
    display: flex;
}

.title {
    width: 170px;
}

.memu {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.memu-item {
    margin-top: 68px;
    width: 150px;
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

.item1 {
    height: 672px;
    border-radius: 0px 0px 0px 0px;
    background-color: red;
}
</style>