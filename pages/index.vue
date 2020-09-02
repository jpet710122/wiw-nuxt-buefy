<template>
  <amplify-authenticator>
    <section class="section">
      <Logo />
      <h1 class="title has-text-primary">whereiswill</h1>
      <h3 class="subtitle has-text-primary">
        Where there's a Will, there's
        <strong class="has-text-primary"> whereiswill!</strong>
      </h3>
      <div class="columns is-mobile">
        <card title="Free" icon="github">
          Open source on <a href="https://github.com/buefy/buefy"> GitHub </a>
        </card>

        <card title="Responsive" icon="cellphone-link">
          <b class="has-text-grey"> Every </b> component is responsive
        </card>

        <card title="Modern" icon="alert-decagram">
          Built with <a href="https://vuejs.org/"> Vue.js </a> and
          <a href="http://bulma.io/"> Bulma </a>
        </card>

        <card title="Lightweight" icon="arrange-bring-to-front">
          No other internal dependency
        </card>
      </div>
    </section>
    <amplify-sign-out></amplify-sign-out>
  </amplify-authenticator>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',

  components: {
    Card,
  },
}
</script>
