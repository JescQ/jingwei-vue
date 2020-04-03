<template>
  <div class="login_style">
    <a-row class="login_row" type="flex" align="middle">
      <a-col class="login_project_name_left">MI-5000综合能源管理系统</a-col>
      <a-col class="login_cloumn">
        <a-row class="login_project_top">
          <!-- <a-col>
                        <a-image src="./static/images/sxlogo.png"></a-image>
          </a-col>-->
          <a-col class="login_project_top_name">MI-5000综合能源管理系统</a-col>
        </a-row>
        <a-row>
          <a-row class="login_header">
            <a-col>登录</a-col>
          </a-row>
          <a-row class="login_messages_box">
            <a-row>
              <a-col class="login_user">
                <a-input v-model="username" prefix-icon="a-icon-user" placeholder="请输入账号"></a-input>
              </a-col>
              <a-col class="login_pwd">
                <a-input
                  placeholder="请输入密码"
                  prefix-icon="a-icon-lock"
                  v-model="password"
                  show-password
                ></a-input>
              </a-col>
              <a-col class="login_find">
                <!-- <a-link :underline="false">忘记密码？</a-link> -->
              </a-col>
              <a-col class="login_btn">
                <div @click="login">登录</div>
              </a-col>
            </a-row>
          </a-row>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import {
    message
} from 'ant-design-vue'
import { userLogin } from "@/api/login";
export default {
  data() {
    return {
      username: "",
      password: "",
      webSocket: null
    };
  },
  methods: {
    login() {
      let data = {
        username: this.username,
        password: this.password
      };
      userLogin(data)
        .then(res => {
          console.log(res);
            if(+res.data.code == 0){
              this.$router.history.push({
                name: "energyOverview"
              });
            }else if(+res.data.code == 500){
              message.error(res.data.msg)
            }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.login_style {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00367a;
  // background: url(/static/images/bg.jpg) no-repeat center center;
  // background-size: cover;
  // user-select: none;
  .login_row {
    position: relative;
    width: 100%;
    height: 500px;
    .login_project_name_left {
      opacity: 1;
      width: calc(100% - 600px);
      text-align: center;
      font-size: 48px;
      font-weight: bolder;
      color: #f1f0ee;
      text-shadow: 5px 5px 5px #000;
      transition: all 0.5s ease;
      user-select: text;
    }
    .login_cloumn {
      position: absolute;
      right: 150px;
      box-sizing: border-box;
      padding: 60px 40px 0;
      width: 450px;
      height: 100%;
      box-shadow: -15px 15px 15px rgba(0, 0, 0, 0.3);
      background: #ffffff;
      transition: all 0.5s ease;
      .login_project_top {
        // display: none;
        position: absolute;
        left: 0;
        top: -89px;
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 24px;
        text-shadow: 5px 5px 5px #000;
        transition: all 0.5s ease;
        .login_project_top_name {
          opacity: 0;
          transition: all 0.5s ease;
          user-select: text;
        }
      }
      .login_header {
        font-size: 26px;
        color: #00367a;
      }
      .login_messages_box {
        margin-top: 22px;
        .login_user {
          margin-top: 38px;
        }
        .login_user,
        .login_pwd {
          margin-bottom: 16px;
          /deep/ .a-input {
            font-style: 16px;
          }
          /deep/ .a-input__inner {
            height: 50px;
            line-height: 50px;
          }
          /deep/ .a-input__inner:focus {
            border-color: #00367a;
          }
          /deep/ .a-input__icon {
            line-height: 50px;
          }
        }
        .login_find {
          // color: #00367a;
          font-size: 14px;
          text-align: right;
          /deep/ .a-link.a-link--default {
            color: #00367a;
            transition: all 0.5s ease;
          }
          /deep/ .a-link.a-link--default:hover {
            color: #1661bb;
          }
        }
        .login_btn {
          margin-top: 40px;
          height: 52px;
          line-height: 52px;
          text-align: center;
          border-radius: 24px;
          color: #fff;
          background: #00367a;
          cursor: pointer;
          transition: all 0.5s ease;
          // /deep/.a-button--primary{
          //     background-color:#00367a;
          //     border-color: #00367a;
          // }
          // /deet/ .a-button{
          //     width: 100%;
          // }
        }
        .login_btn:hover {
          background: #1661bb;
        }
      }
    }
  }
}
@media screen and (max-width: 1366px) {
  .login_style {
    .login_row {
      .login_project_name_left {
        // display: none;
        opacity: 0;
      }
      .login_cloumn {
        // position: relative;
        .login_project_top {
          top: -60px;
          .login_project_top_name {
            // display: block;
            opacity: 1;
          }
        }
        right: calc(50% - 225px);
      }
    }
  }
}
</style>
