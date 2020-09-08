<template>
	<v-card>
		<v-card-title>
			Affiliate Link
		</v-card-title>
		<v-card-text>
			https://forage-basket-7a7ed.web.app/?utm_source={{user.userName}}
		</v-card-text>
	</v-card>
</template>

<script>
import { mapState } from 'vuex'
import { DB } from '../firebase/db'

export default {
	data() {
		return {
			affiliate: undefined,
		}
	},
	computed: {
		...mapState(['user']),
	},
	methods: {
		isAffiliate() {
			DB.collection('user').doc(this.user.uid).collection('affiliateInfo').doc().get().then((affiliateInfo) => {
				this.affiliate = affiliateInfo.data()
			})
	 }
	},
	beforeMount() {
		this.isAffiliate()
	}
}
</script>

<style>

</style>