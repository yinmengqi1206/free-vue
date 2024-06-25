<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <img src="../assets/logo.png" class="logo">
                    </el-col>
                    <el-col :span="16">
                        <h2>后台管理系统</h2>
                    </el-col>
                    <el-col :span="4">
                        <el-button class="logout" type="primary" @click="logout()">注销</el-button>
                    </el-col>
                </el-row>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-col :span="20">
                        <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
                            text-color="#fff" router>
                            <el-menu-item :index="item.path" v-for="item in menu" :key="item.path">
                                <span>{{ item.meta.title }}</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const route = useRouter()
function logout(){
    localStorage.removeItem("token")
    route.push("/login")
}
const menu = route.getRoutes().filter(x => x.meta.isShow)
</script>

<style lang="scss" scoped>
.el-header {
    height: 80px;
    background-color: #666;

    .logout {
        float: right;
        margin: 20px;
    }

    .logo {
        height: 80px;
    }

    h2 {
        height: 80px;
        line-height: 80px;
        text-align: center;
    }
}

.el-aside {
    .el-menu {
        height: calc(100vh - 80px);
    }
}
</style>