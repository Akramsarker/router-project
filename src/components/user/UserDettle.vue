<template>
  <div>
      <p>Some User Dettle Id: {{$route.params.id}}</p>
    <h3>Some User Details</h3>
    <router-link tag="button" class="btn btn primary" :to="{name: 'userEdit', params: {id: $route.params.id}, query: {locale: 'en', q: 100} }" >User Edit</router-link>
  </div>
</template>
