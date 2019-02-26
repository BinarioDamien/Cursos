<template>
	<v-app>
		<Navigation/>
		<Toolbar/>
		<Carousel/>
		<Footer/>
	</v-app>
</template>

<script>
import Navigation from '@/components/template/Navigation.vue'
import Toolbar from '@/components/template/Toolbar.vue'
import Carousel from '@/components/widgets/Carousel.vue'
import Footer from '@/components/template/Footer.vue'

export default {	
	components:{
		Navigation,
		Toolbar,
		Carousel,
		Footer,
	},	
}
</script>
