<template>
	<v-container>
		<v-row justify="center">
			<v-col xs="12" sm="6" md="6">
				<v-card class="pa-3 ma-1">
					<div class="headline">
						<v-layout align-center justify-start>{{ avatarText }}</v-layout>
						<v-divider></v-divider>
						<v-layout class="pa-3" align-center justify-center>
							<v-avatar :tile="true" :size="300" color="grey lighten-4">
								<img :src="imageUrl" alt="avatar" />
							</v-avatar>
						</v-layout>
						<v-btn raised class="primary" @click="onPickFile">Upload</v-btn>
						<input
							type="file"
							style="display: none"
							ref="fileInput"
							accept="image/*"
							@change="onFilePicked"
						/>
					</div>
				</v-card>
			</v-col>

			<v-col xs="12" sm="6" md="6">
				<v-card class="pa-3 ma-1">
					<div class="headline">
						<v-layout align-center justify-start>{{ profileText }}</v-layout>
						<v-divider></v-divider>
					</div>
					<v-form class="pa-3" ref="form">
						<v-text-field
							label="Email"
							v-model="email"
							:disabled="true"
						></v-text-field>
						<v-text-field label="Name" v-model="profile.name"></v-text-field>
						<v-text-field label="Bio" v-model="profile.bio"></v-text-field>
						<v-text-field
							label="Company"
							v-model="profile.company"
						></v-text-field>
						<v-text-field
							label="Address"
							v-model="profile.address"
						></v-text-field>
						<v-btn color="primary" @click="onEditProfile">Edit</v-btn>
					</v-form>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { uploadAvatar, loadAvatar, editProfile, loadProfile } from './APIUtils'
export default {
	data: () => ({
		imageUrl: '',
		profileText: 'Profile',
		avatarText: 'Avatar',
		email: localStorage.email,
		profile: {
			name: null,
			bio: null,
			company: null,
			address: null
		}
	}),
	mounted() {
		this.onLoadProfile()
		this.onLoadAvatar()
	},
	methods: {
		onLoadAvatar() {
			loadAvatar(this.email)
				.then(response => {
					this.imageUrl = response.downloadUri
				})
				.catch(error => {
					/* eslint-disable no-console */
					console.log(error)
				})
		},
		onUploadAvatar(file) {
			let formData = new FormData()
			formData.append('file', file)
			formData.append('email', this.email)
			uploadAvatar(formData)
				.then(() => {
					this.onLoadAvatar()
				})
				.catch(error => {
					/* eslint-disable no-console */
					console.log(error)
				})
		},
		onFilePicked(event) {
			const files = event.target.files // file info load
			let filename = files[0].name
			if (filename.lastIndexOf('.') <= 0) {
				// filename 유효성 검사
				return alert('Please pick valid file')
			}
			const fileReader = new FileReader()
			fileReader.addEventListener('load', () => {
				this.imageUrl = fileReader.result
			})
			fileReader.readAsDataURL(files[0])
			this.onUploadAvatar(files[0])
		},
		onPickFile() {
			this.$refs.fileInput.click()
		},
		onEditProfile() {
			const signupRequest = {
				email: this.email,
				name: this.profile.name,
				bio: this.profile.bio,
				company: this.profile.company,
				address: this.profile.address
			}
			editProfile(signupRequest)
				.then(() => {
					// this.onLoadProfile()
				})
				.catch(() => {})
		},
		onLoadProfile() {
			loadProfile(this.email)
				.then(response => {
					this.profile = response
				})
				.catch(error => {
					// eslint-disable-next-line
					console.log(error)
				})
		}
	}
}
</script>
