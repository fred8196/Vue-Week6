<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/admin/products" class="nav-link"
              >產品管理列表</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link to="/admin/orders" class="nav-link"
              >訂單管理列表</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {
      check: true
    }
  },
  created () {
    // const token
  }
}
</script>
