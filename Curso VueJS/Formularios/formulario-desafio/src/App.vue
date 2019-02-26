<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<NomeCompleto v-model="usuario"/>
				<!-- Email -->
				<Rotulo nome="Email">
					<input type="email" v-model="email">
				</Rotulo>
				<!-- Senha -->
				<Rotulo nome="Senha">
					<input type="password" v-model="senha">
				</Rotulo>
				<!-- Armazenar Dados? (Sim/Não) -->
				<Rotulo nome="Armazenar Dados?">
					<input type="checkbox" v-model="gravarDados">
				</Rotulo>
				<hr>
				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				<button @click.prevent="enviar()">Confirmar</button>
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->				
			</form>			
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="Nome">
					<span> {{ usuario.nome }} </span>
				</Rotulo>
				<Rotulo nome="Sobrenome">
					<span> {{ usuario.sobrenome }} </span>
				</Rotulo>
				<Rotulo nome="Email">
					<span> {{ email }} </span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span> {{ senha }} </span>
				</Rotulo>
				<Rotulo nome="Armazenar Dados?">
					<span> {{ gravarDados }} </span>
				</Rotulo>				
			</div>
		</div>
	</div>
</template>

<script>
import NomeCompleto from './components/NomeCompleto.vue'
import Rotulo from './components/Rotulo.vue'

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	data(){
		return{
			enviado: false,
			usuario:{nome: '', sobrenome:''},
			email: '',
			senha:'',
			gravarDados: false,
		}
	},
	methods:{
		enviar(){
			this.enviado = true
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
