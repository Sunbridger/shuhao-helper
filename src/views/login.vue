<template>
    <div>
        <el-form ref="form" label-width="60px">
            <el-form-item label="账号">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success">登陆</el-button>
                <el-button type="primary">
                    <router-link :to="{name: 'register'}">注册</router-link>
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts">
export default {
    name: 'login',
};
</script>

<style>
.el-form {
    padding: 35px;
}
.cen-tip {
    padding-left: 60px;
    padding-bottom: 40px;

}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 50px;
    height: 50px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 50px;
    height: 50px;
    display: block;
  }
  .el-message {
      min-width: 80%!important;
  }
  .el-icon-plus {
      width: 50px;
      height: 50px;
      padding-top: 10px;
  }
  a {
      text-decoration: none;
      color: white;
  }
</style>
