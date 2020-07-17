<template>
  <!-- 导航栏组件 -->
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleClick" />
    <headnav class="f1" />

    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper disF">
          <img src="@/assets/head.png" class="user-avatar">
          <div class="role-name">
            <p style="margin-top: 3px">{{ admin_name }}</p>
            <p>{{ role_name }}</p>
          </div>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item @click.native="modifyPwd">
            修改密码
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="loginOut">
            <div>退出登录</div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 修改密码的弹框 -->
    <el-dialog title="修改密码" :visible.sync="showModify" width="500px" :before-close="closeHandler" :close-on-click-modal="false">
      <el-form label-width="70px">
        <el-form-item label="原密码">
          <el-input v-model="old_pwd" placeholder="请输入原密码" type="password" size="small" />
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="new_pwd" placeholder="请输入新密码" type="password" size="small" />
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="new_pwd_again" placeholder="请再次输入新密码" type="password" size="small" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="closeHandler">取 消</el-button>
        <el-button type="primary" size="mini" @click="saveHandler">保 存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Hamburger from '@/components/Hamburger';
import Headnav from '@/components/Headnav';
import { loginOut, modifyPwd } from '@/api/user';
import { getUserInfo } from '@/store/sessionStorage';

export default {
  name: 'Navbar',
  components: {
    Hamburger,
    Headnav
  },
  data() {
    return {
      admin_name: '',
      role_name: '',
      showModify: false,
      old_pwd: '',
      new_pwd: '',
      new_pwd_again: ''
    };
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  created() {
    const userInfo = getUserInfo();
    this.admin_name = userInfo.admin_name;
    this.role_name = userInfo.role_name;
  },
  methods: {
    toggleClick() {
      this.$store.dispatch('app/toggleSideBarAsync');
    },
    modifyPwd() {
      this.showModify = true;
    },
    loginOut() {
      this.$confirm('是否退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        loginOut();
      }).catch(() => null);
    },
    closeDialog() {
      this.old_pwd = '';
      this.new_pwd = '';
      this.new_pwd_again = '';
      this.showModify = false;
    },
    closeHandler() {
      this.$confirm('是否放弃修改密码?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.closeDialog();
      }).catch(() => null);
    },
    saveHandler() {
      if (this.new_pwd !== this.new_pwd_again) {
        this.$message.error('两次输入的密码不一致');
        return;
      } else {
        const params = {
          pass: this.new_pwd_again,
          old_pass: this.old_pwd
        };
        modifyPwd(params).then((res) => {
          if (res.status === 0) {
            this.$message.success('密码修改成功！');
            this.closeDialog();
          }
        });
      }
    }
  }
};

</script>

<style lang="scss" scoped>
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
    display: flex;
    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color: transparent;

      &:hover {
        background: rgba(0, 0, 0, .025);
      }
    }
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;
    }

    &.hover-effect {
      cursor: pointer;
      transition: background .3s;

      &:hover {
        background: rgba(0, 0, 0, .025);
      }
    }
  }

  .avatar-container {
    margin-right: 30px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;

      .role-name {
        line-height: 20px;
        p {
          margin: 0;
        }
      }
      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin: 0 10px 0 0;
      }
      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
</style>
