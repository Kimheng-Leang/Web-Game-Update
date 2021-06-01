<template>
	<form @submit.prevent="handleSubmit">
		<input type="text" required placeholder="Enter your name to be called" v-model="displayName">
		<input type="email" required placeholder="Email" v-model="email">
		<input type="password" required placeholder="Password" v-model="password">
		<input type="password" required placeholder="Confirmed Password" v-model="confirmedPassword">
		<div class="error">{{ error }}</div>

		<button class="button-auth">Sign up</button>

	</form>
</template>	

<script>
import { ref } from 'vue';
import useSignup from '../composables/useSignup';
export default {
	setup(props, context) {
		const { error, signup} = useSignup()

		const email = ref('');
		const password = ref('');
		const displayName = ref('');
		const confirmedPassword = ref('');
		const handleSubmit = async() => {
			if(confirmedPassword.value === password.value){
				await signup(email.value, password.value, displayName.value);
			}else{
				error.value = "Passwords are not match"
			}
			if(!error.value){
				context.emit('signup');
			}
			email.value = '';
			password.value = '';
			displayName.value = '';
			confirmedPassword.value = '';
		}
		return {
			email, password, handleSubmit, displayName, error,confirmedPassword
		}
	},
}
</script>