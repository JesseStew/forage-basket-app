<template>
	<v-card>
		<v-card-title>
			<h2>
				Create Admin
			</h2>
		</v-card-title>
		<v-card-text>
			<v-form class="px-3">
				<v-text-field label="User Email" v-model="userEmail"></v-text-field>
				<v-btn @click="submit">
					Make Admin
				</v-btn>
			</v-form>
		</v-card-text>
	</v-card>
</template>

<script>
import { Functions } from '../firebase/functions'
const addAdminRole = Functions.httpsCallable('addAdminRole')

export default {
	data() {
		return {
			userEmail: undefined
		}
	},
	methods: {
		submit() {
			addAdminRole({
				email: this.userEmail
			}).then(result => {
				console.log(result)
			})
		}
	}
}
</script>

<style scoped>

</style>