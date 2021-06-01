<template>
	<form @submit.prevent="handleSubmit">
		<input type="email" required placeholder="Email" v-model="email">
		<input type="password" required placeholder="Password" v-model="password">
		<div class="error">{{ error }}</div>
		<button class="button-auth">Sign in</button>
	</form>
</template>	

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'
export default {
	setup(props, context) {
		const {error, signin}= useLogin()

		const email = ref('');
		const password = ref('');

		const handleSubmit = async () => {
			await signin(email.value, password.value);
			if(!error.value){
				context.emit('login');
			}
			email.value = '';
			password.value = '';
		}
		return {
			email, password,handleSubmit,error
		}
	},
}
</script>