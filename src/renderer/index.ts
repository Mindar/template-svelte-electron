// @ts-check
import App from './App.svelte'

new App({
  target: document.getElementById('app')!,
  props: {
    name: 'world',
  },
})
