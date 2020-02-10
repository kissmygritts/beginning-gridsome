<template>
  <Layout>

    <section class="main">
      <g-image class="main__img img--round" alt="Example image" src="/images/nasa_250x250.jpg" />

      <div class="main__text">
        <h1>Howdy! My name is Mitchell Gritts</h1>
        <p>
          a wildlife ecologist, data analyst, and developer based in Reno, NV.
        </p>
      </div>
    </section>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '🤠 Howdy'
  }
}
</script>

<style scoped>
.main {
  height: 66.6vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main__img {
  width: 180px;
  height: 180px;
  margin-bottom: 24px;
}

.main__text {
  text-align: center;
}

.img--round {
  border-radius: 100%;
}
</style>
