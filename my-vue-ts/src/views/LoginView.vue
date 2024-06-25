<template>
    <div class="login-box">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="80px" class="demo-ruleForm">
            <h2>后台管理系统</h2>
            <el-form-item label="账号" prop="username">
                <el-input v-model="ruleForm.username" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button class="loginBtn" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
                <el-button class="loginBtn" @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import {reactive, toRefs, ref } from 'vue'
import { LoginData } from '../type/login'
import type { FormInstance } from 'element-plus'
import { login } from '../request/api'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const data = reactive(new LoginData())

const {ruleForm} = toRefs(data)

const rules = {
    username: [
        { required: true, message: '请输入账号', trigger: 'blur' },
        { min: 3, max: 10, message: '账号长度为3到10', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 10, message: '密码长度为3-10', trigger: 'blur' },
    ],
}
const ruleFormRef = ref<FormInstance>()

const route = useRouter()

//登录
async function submitForm(formEl: FormInstance | undefined) {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
            login(data.ruleForm).then(res => {
                console.log(res)
                localStorage.setItem("token", res.data)
                route.push("/")
            }, err => {
                console.log(err)
                ElMessage.error('用户名密码错误')
            })
        } else {
            console.log('error submit!', fields)
        }
    })
}
//重置
function resetForm(formEl: FormInstance | undefined) {
    if (!formEl) return
    formEl.resetFields()
}
</script>

<style lang="scss" scoped>
.login-box {
    width: 100%;
    height: 100%;
    background: url("../assets/login_bg.jpeg");
    padding: 1px;
    text-align: center;

    .demo-ruleForm {
        width: 500px;
        margin: 200px auto;
        background-color: #fff;
        padding: 30px;
        border-radius: 20px;
    }

    .loginBtn {
        width: 48%;
    }

    h2 {
        margin-bottom: 20px;
    }
}
</style>