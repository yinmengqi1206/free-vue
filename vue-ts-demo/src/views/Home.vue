<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <el-button type="primary" @click="logout()">注销</el-button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    setup() {
        const route = useRouter()
        if (!localStorage.getItem("token")) {
            route.push("/login")
        }
        const logout = () => {
            localStorage.removeItem("token")
            route.push("/login")
        }
        return {logout}
    }
})
</script>

<style scoped></style>