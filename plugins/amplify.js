import Amplify, * as AmplifyModules from 'aws-amplify'
import { AmplifyPlugin, components } from 'aws-amplify-vue'
import Vue from 'vue'
import '@aws-amplify/ui-vue'
import awsconfig from '~/aws-exports'

Amplify.configure(awsconfig)

Vue.use(AmplifyModules, AmplifyPlugin)
Vue.component(components)
