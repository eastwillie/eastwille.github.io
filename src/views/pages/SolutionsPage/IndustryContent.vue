<template>
    <div class="industry-content">
        <div class="title">{{title}}</div>
        <el-row>
            <el-col :span="6">Problem Statement:</el-col>
            <el-col :span="18"><slot name="problem" /></el-col>
        </el-row>
        <el-row>
            <el-col :span="6">Solution Statement:</el-col>
            <el-col :span="18"><slot name="solution" /></el-col>
        </el-row>
        <el-row>
            <el-col :span="6">AI Service Pipeline:</el-col>
            <el-col :span="18"><slot name="pipeline" /></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
    },
};
</script>

<style lang="scss" scoped>
    .industry-content {
        display: flex;
        width: 100%;
        flex-direction: column;
        gap: 1rem;

        .title {
            font-size: 0.24rem;
        }
    }
</style>
