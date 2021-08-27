<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <h4>RECO Dev Corporation</h4>
      <p>
        {{Version}}
      </p>
      <!-- 
      <div class="icons">
        <i class="fa fa-facebook"></i>
        <i class="fa fa-twitter"></i>
        <i class="fa fa-instagram"></i>
        <i class="fa fa-linkedin"></i>
      </div>
      -->
    </body>
  </html>
</template>
<script>
export default {
  setup() {
    const Version = 'cams21: Aug 24 2021, 1.12';
    return {
      Version
    }
  }
}
</script>