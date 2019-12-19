<template>
	<v-form>
		<v-container>
			<v-row justify="center">
				<v-col xs="12" sm="6" md="6">
					<v-card class="pa-3">
						<v-subheader>Signup</v-subheader>
						<v-divider :inset="false"></v-divider>
						<v-text-field
							v-model="email"
							:rules="emailRules"
							label="E-mail"
							required
						></v-text-field>
						<v-text-field
							v-model="password"
							:rules="passwordRules"
							:counter="8"
							type="password"
							label="Password"
							required
						></v-text-field>
						<v-btn @click="onSignup">Signup</v-btn>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-form>
</template>

<script>
import { signup } from './APIUtils'

export default {
	data: () => ({
		response: '',
		password: '',
		passwordRules: [
			v => !!v || 'password is required',
			v => v.length >= 8 || 'password must be at least 8 characters'
		],
		email: '',
		emailRules: [
			v => !!v || 'E-mail is required',
			v => /.+@.+/.test(v) || 'E-mail must be valid'
		]
	}),
	methods: {
		onSignup() {
			localStorage.email = this.email
			const signupRequest = {
				email: this.email,
				password: this.password
			}
			signup(signupRequest).then(response => {
				this.response = response
			})
		}
	}
}
</script>
