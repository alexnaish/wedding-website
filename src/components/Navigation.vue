<template>
  <header class="header">
    <div class="main">Alex <span class="heart">&hearts;</span> Sara</div>
    <ul class="nav">
      <li class="nav__item"><router-link to="/">Home</router-link></li>
      <li class="nav__item"><router-link to="/england">England</router-link></li>
      <li class="nav__item"><router-link to="/hungary">Hungary</router-link></li>
      <li class="nav__item"><router-link to="/rsvp">RSVP</router-link></li>
    </ul>
  </header>
</template>

<style scoped lang="scss">
  
  .header {
    display: flex;
    flex-direction: column;
    background: white;
    padding: 20px 0;
    text-align: center;
  }

  .main {
    font-family: 'Dancing Script', cursive;
    font-size: 48px;
    margin: 0;
  }

  .heart {
    font-size: 32px;
    color: #ebc064;
  }

  .nav {
    list-style: none;
    padding: 0;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
  }

  .nav__item a {
    text-decoration: none;
    color: #2c3e50;
    padding: 0 20px 10px;

    &.router-link-exact-active {
      font-weight: bold;
      border-bottom: 1px solid lightgrey;
    }
  }

  @media only screen and (max-width: 400px) {
    .nav__item a {
      font-size: 14px;
      padding: 0 10px 10px;
    }
  }

</style>
