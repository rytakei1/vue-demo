<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
const router = useRouter()
const handleLoginWithGoogle = async () => {
	await authClient.oneTap({
		fetchOptions: {
			onSuccess: () => {
				router.push('/movies')
			}
		}
	})
};
</script>

<template>
	<div class="flex grow flex-col items-center w-full justify-center bg-surface-800">
		<DotLottieVue src="/movie.lottie" loop autoplay class="w-1/3" />
		<Button @click="handleLoginWithGoogle">Login com Google</Button>
	</div>
</template>
