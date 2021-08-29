<template>
    <div class="centeredtext">
      <h4>{{version}}</h4>
      <p class="underlined">This is the amazing cams utility application Currently supports Heden and Foscam devices</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nisi atque sunt, eveniet odio laboriosam ratione ipsa, praesentium voluptates magnam quisquam nam voluptatum doloremque dicta? Maxime voluptatum pariatur recusandae blanditiis veritatis voluptates nemo facilis accusamus. Tempora quibusdam nostrum libero amet.</p> 
      <router-link :to="{ name: 'home'}"><button class="button">Home</button></router-link>
    </div>  
</template>

<script>

  export default {
    name: 'about',

    setup() {
      const version = "about 1.07, Aug 29 2021"

      return {
        version,
      }
    }
  }
</script>
