<template>
	<div>
		<h3 class="headline">
			Enter your email below to sign up for our Newsletter.
		</h3>
		<v-form>
			<!-- here, add logic -->
			<v-text-field
				ref="form"
				v-if="!emailAdded"
				v-model="email"
				:rules="emailRules"
				label="E-mail"
				required
			>
			</v-text-field>
			<v-btn @click="submit">
				Submit
			</v-btn>
		</v-form>
	</div>
</template>

<script>
import { DB } from '../firebase/db'
export default {
	data() {
		return {
			email: '',
			emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
			emailAdded: false,
		}
	},
	methods: {
		submit() {
			DB.collection('emails')
				.doc(this.email)
				.set({
					email: this.email
				}).then(() => {
					this.email = undefined
					this.$refs.form.resetValidation()
				})
		},
		addRules() {
			this.emailRules = [
				v => !!v || 'E-mail is required',
				v => /.+@.+/.test(v) || 'E-mail must be valid',
			]
		}
	}
}
</script>

<style scoped>

</style>