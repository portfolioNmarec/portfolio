<template>
  <div class="relative flex flex-col items-center justify-center gap-4 bg-zinc-900">
    <div
      @click="closeModal()"
      :class="
        isOpen
          ? 'sticky w-full bg-zinc-950 bg-opacity-70 top-0 z-10 flex justify-center items-center h-screen cursor-pointer'
          : 'hidden'
      "
    >
      <div class="flex flex-col justify-center items-center w-[90%] rounded-lg">
        <img class="w-[90%] rounded-lg" id="modal-image" src="" alt="" />
        <span class="text-white font-semibold"
          >Cliquer n'importe où pour sortir de cette affichage</span
        >
      </div>
    </div>
    <div class="relative flex flex-col items-center justify-center my-auto h-screen gap-10">
      <h1 class="flex flex-col items-center justify-center m-0 text-zinc-300">
        <span class="text-8xl font-bold m-0 text-purple-500">Portfolio</span>
        <span class="text-3xl font-bold m-0">Stage BUT2 Informatique</span>
        <span class="text-2xl font-semibold text-zinc-500 m-0">par Nathan MARECHAL</span>
      </h1>
      <div
        id="navbar"
        :class="
          isNavScrolled
            ? 'invisible'
            : 'sticky flex flex-row items-center justify-center top-0 h-16 w-full bg-zinc-900 overflow-hidden flex-wrap'
        "
      >
        <div class="flex flex-row items-center justify-center gap-2">
          <a
            v-for="(item, index) in navItems"
            :key="index"
            :href="'#' + item.id"
            class="text-xl font-semibold hover:text-zinc-400 hover:bg-zinc-700 rounded-lg p-2 text-zinc-500"
            >{{ item.text }}</a
          >
        </div>
      </div>
    </div>
    <div
      :class="
        !isNavScrolled
          ? 'invisible'
          : 'sticky flex flex-row items-center justify-center top-0 h-16 w-full gap-2 bg-zinc-900 overflow-hidden flex-wrap'
      "
    >
      <div class="flex flex-row items-center justify-center gap-2">
        <a
          v-for="(item, index) in navItems"
          :key="index"
          :href="'#' + item.id"
          class="text-xl font-semibold hover:text-zinc-400 hover:bg-zinc-700 rounded-lg p-2 text-zinc-500"
          >{{ item.text }}</a
        >
      </div>
    </div>
    <div class="flex flex-col gap-24 lg:px-96 md:px-24 px-16 text-justify text-zinc-300 text-lg">
      <!-- Présentation du stage -->
      <div class="flex flex-col gap-4">
        <h2
          class="text-4xl font-bold w-full bg-purple-600 text-white h-16 rounded-lg flex items-center px-4"
          id="presentation-stage"
        >
          Présentation du stage et contexte
        </h2>
        <p>
          Au cours de la deuxième année du Bachelor Universitaire de Technologie (BUT), les étudiants sont invités à participer à un stage professionnel d'une durée variant de 8 à 12 semaines. Ce stage représente une opportunité précieuse pour appliquer directement les compétences et les connaissances théoriques acquises pendant les études dans un environnement réel. Il offre également la possibilité d’explorer des secteurs professionnels encore méconnus par les étudiants, enrichissant ainsi leur expérience et leur compréhension du monde du travail.<br /><br />
          Actuellement stagiaire au service de l’ESTA, une école formant des ingénieurs d'affaires, j’ai pour mission d’assurer le maintien ainsi que le développement de la plateforme nommée SEO-ELP (SEO e-learning platform). Il s’agit d’une application WEB permettant à des étudiants de se former sur le SEO (Search Engine Optimisation), plus précisément, comment faire en sorte que son site soit bien référencé par les moteurs de recherche sans avoir à passer par le système de promotion payante (SAO). Le SEO est un élément clef pour une entreprise qui souhaite mettre en avant son site web, toutefois ce domaine reste encore trop méconnu, d'où la nécessité de former les gens sur ce domaine. <br /><br />
          Au début de mon stage, j'ai rapidement observé que de nombreuses fonctionnalités de l'application existante étaient instables. Suite à une discussion avec mon tuteur, nous avons convenu qu'il était nécessaire de reconstruire l'application pour améliorer sa structure, sa fiabilité et ses performances, tout en optimisant l'expérience utilisateur. Cette refonte a impliqué de repenser entièrement les bases de l'application afin de la rendre plus maintenable.        </p>
      </div>
      <!-- Présentation des compétences -->
      <div class="flex flex-col gap-4">
        <h2
          class="text-4xl font-bold w-full bg-purple-600 text-white h-16 rounded-lg flex items-center px-4"
          id="presentation-competences"
        >
          Présentation des compétences
        </h2>
        <div class="max-w-4xl mx-auto p-5 bg-gray-800 shadow rounded-lg">
          <h5 class="text-lg font-semibold mb-4">Les compétences que j’ai choisi de mettre en avant sont les compétences :</h5>
          <ul class="list-disc pl-5">
            <li><strong>Réaliser un développement d’application</strong>, ce qui consiste à :
              <ul class="list-circle pl-4">
                <li>Développer des applications informatiques simples</li>
                <li>Partir des exigences et aller jusqu’à une application complète</li>
                <li>Adapter des applications sur un ensemble de supports</li>
              </ul>
            </li>
            <li><strong>Gérer des données de l’information</strong> :
              <ul class="list-circle pl-4">
                <li>Concevoir et mettre en place une base de données à partir d’un cahier des charges client.</li>
                <li>Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité.</li>
                <li>Administrer une base de données, concevoir et réaliser des systèmes d’informations décisionnels.</li>
              </ul>
            </li>
          </ul>
        </div>
        <h3
          class="text-2xl font-bold w-full bg-purple-500 text-white h-12 rounded-lg flex items-center px-4"
        >
          Réaliser un développement d'application
        </h3>
        <p>
          Cette compétence implique le développement d'une solution informatique personnalisée qui répond à toutes les exigences d'un client. Il est essentiel de faire des choix judicieux tant sur le plan technologique que dans la conception même de l'application, notamment l'application de principes algorithmiques appropriés. De plus, il est crucial de garantir la fonctionnalité et la maintenabilité de la solution en créant un code évolutif et bien documenté, facilitant ainsi sa gestion et sa reprise par d'autres développeurs.<br /><br />Voici un tableau récapitulant les
          apprentissages critiques (AC) de cette compétence.
        </p>
        <PrettyTable
          :headers="[
            { label: 'ac', value: 'AC' },
            { label: 'group1', value: 'Développer des applications informatiques simples' },
            {
              label: 'group2',
              value: 'Partir des exigences et aller jusqu’à une application complète'
            },
            {
              label: 'group3',
              value:
                'Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)'
            }
          ]"
          :rows="[
            {
              ac: 'AC1',
              group1: 'Implémenter des conceptions simples',
              group2:
                'Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences',
              group3: 'Choisir et implémenter les architectures adaptées'
            },
            {
              ac: 'AC2',
              group1: 'Élaborer des conceptions simples',
              group2: 'Appliquer des principes d’accessibilité et d’ergonomie',
              group3: 'Faire évoluer une application existante'
            },
            {
              ac: 'AC3',
              group1: 'Faire des essais et évaluer leurs résultats en regard des spécifications',
              group2: 'Adopter de bonnes pratiques de conception et de programmation',
              group3: 'Intégrer des solutions dans un environnement de production'
            },
            {
              ac: 'AC4',
              group1: 'Développer des interfaces utilisateurs',
              group2: 'Vérifier et valider la qualité de l’application par les tests',
              group3: '-'
            }
          ]"
        ></PrettyTable>
        <h3
          class="text-2xl font-bold w-full bg-purple-500 text-white h-12 rounded-lg flex items-center px-4"
        >
          Gérer des données de l’information
        </h3>
        <p>
          Cette compétence concerne la gestion des données en assurant leur sécurité, leur conformité, et leur efficacité. Cela inclut la création de bases de données selon des normes strictes de confidentialité et d'impact écologique, tout en optimisant leur utilisation.<br /><br />Voici un tableau
          récapitulant les apprentissages critiques (AC) de cette compétence.
        </p>
        <PrettyTable
          :headers="[
            { label: 'ac', value: 'AC' },
            { label: 'group1', value: 'Concevoir et mettre en place une\n'+
'base de données à partir d’un\n'+
'cahier des charges client' },
            {
              label: 'group2',
              value: 'Optimiser une base de données,\n'+
'interagir avec une application et\n'+
'mettre en œuvre la sécurité'
            },
            {
              label: 'group3',
              value: 'Administrer une base de\n'+
'données, concevoir et réaliser\n'+
'des systèmes d’informations\n'+
'décisionnels'
            }
          ]"
          :rows="[
            {
              ac: 'AC1',
              group1:
                'Mettre à jour et interroger une base de données relationnelle (en'+
'requêtes directes ou à travers une application)',
              group2: 'Optimiser les modèles de données de l’entreprise',
              group3:
                'Capturer et stocker des ensembles volumineux et complexes de\n'+
'données hétérogènes'
            },
            {
              ac: 'AC2',
              group1:
                'Visualiser des données',
              group2:
                'Assurer la confidentialité des données (intégrité et sécurité)',
              group3: 'Préparer et extraire les données pour l’exploitation'
            },
            {
              ac: 'AC3',
              group1: 'Concevoir une base de données relationnelle à partir d’un cahier des charges',
              group2: 'Organiser la restitution de données à travers la programmation et la visualisation',
              group3:
                'Appliquer des méthodes d’exploration et d’exploitation des données\n'+
'(apprentissage, informatique décisionnelle ou fouille de données)'
            },
            {
              ac: 'AC4',
              group1: '-',
              group2: 'Manipuler des données hétérogènes',
              group3: 'Mettre en production et optimiser le système de gestion de données de\n'+
'l’entreprise'
            }
          ]"
        ></PrettyTable>
      </div>
      <!-- Compétence 1 -->
      <div class="flex flex-col gap-4">
        <h2
          class="text-4xl font-bold w-full bg-purple-600 text-white h-16 rounded-lg flex items-center px-4"
          id="competence1"
        >
          1.Réaliser un développement d’application
        </h2>
        <p>
          Lors de mon arrivée sur le projet, la nécessité d’en refaire les fondations est apparu comme une évidence. En effet, ce site web dont le front-end est fait en vue.js, accompagné d’un back-end développé en node.js avec express avait plusieurs problèmes majeurs qu’il a fallu corriger. Premièrement, plusieurs éléments, notamment des exercices ou des cours, ont été écrits en dur dans le code. Ce qui pose problème au niveau de la maintenabilité et des possibilités d’évolution que présente la plateforme. Ensuite, un grand nombre de “bonnes pratiques” en programmation web n’avaient pas été respectées, ce qui présentait de gros risques au niveau de la sécurité ainsi que de la performance du site. A titre d’exemple, on pouvait retrouver les cours et exercices qui allaient s’écrire en dur dans le serveur en fichiers JSON ou HTML, ou encore des images décomposées en base 64 pour être stockées. Il était donc nécessaire pour moi de réimplémenter toutes les fonctionnalités du site web plus “proprement” avant de pouvoir réellement implémenter de nouvelles fonctionnalités.<br><br>
          Développer ce site web, m’a permis de développer mes compétences, notamment au niveau de la conception et du développement de site WEB, j’ai notamment pu développer des interfaces utilisateurs, adopter de bonnes pratiques de conception et de programmation, faire évoluer une application existante et également faire des essais et évaluer leurs résultats en regard des spécifications, ce qui sont des apprentissage critique de cette compétence. Voici en détail quelques systèmes et interfaces que j’ai pu concevoir (dans la peau d’un administrateur ou d’un enseignant) :<br><br>
        </p>
        <p>Il est possible d’accéder au contenu d’un cours en cliquant sur son nom, il est également possible de le rendre visible/invisble pour les étudiants ou encore de le supprimer. </p>

        <ImageContainer
          @on-click-image="openModalWithImage"
          :image="{
              path: '/Coursvisu.png',
              alt: 'Vue d’ensemble des cours et des compétences ',
              caption: 'Vue d’ensemble des cours et des compétences '
            }"
        ></ImageContainer>
        <p>Cette interface est implémentée grâce à un éditeur WYSIWYG afin de permettre facilement l’édition de cours. </p>
        <ImageContainer
          @on-click-image="openModalWithImage"
          :image="{
              path: '/courscrea.png',
              alt: 'Création et modification d’un cours :\n ',
              caption: 'Création et modification d’un cours :\n '
            }"
        ></ImageContainer>
        <p>Vue d’ensemble de toutes les questions existantes, avec possibilité d’avoir une vue détaillée de la question quand on clique dessus :</p>
        <ImageContainer
          @on-click-image="openModalWithImage"
          :image="{
              path: '/question_visu.png',
              alt: 'Vue d’ensemble des questions ',
              caption: 'Vue d’ensemble des questions '
            }"
        ></ImageContainer>
        <ImageContainer
          @on-click-image="openModalWithImage"
          :image="{
              path: '/questionCrea.png',
              alt: 'Création de Question ',
              caption: 'Création de Question '
            }"
        ></ImageContainer>
        A partir des questions, j’ai ajouté la possibilité de créer un examen :
        <ImageContainer
          @on-click-image="openModalWithImage"
          :image="{
              path: '/examenCrea.png',
              alt: 'Création d un examen ',
              caption: 'Création d un examen '
            }"
        ></ImageContainer>
        <ImageContainer
          @on-click-image="openModalWithImage"
          :image="{
              path: '/ListeExamen.png',
              alt: 'Interface permettant de lister les examens existants  ',
              caption: 'Interface permettant de lister les examens existants  '
            }"
        ></ImageContainer>
        <ImageContainer
          @on-click-image="openModalWithImage"
          :image="{
              path: '/examfaire.png',
              alt: 'Interface d’examen ',
              caption: 'Interface d’examen '
            }"
        ></ImageContainer>
        <h3
          class="text-2xl font-bold w-full bg-purple-500 text-white h-12 rounded-lg flex items-center px-4"
        >
          4.Gérer des données de l’information
        </h3>
        <p>
          Un autre point clef qui était à revoir quelques semaines après le début de mon stage a été le modèle de données. En effet, la façon dont il avait été conçu ne correspondait pas du tout aux attentes logiques d’une plateforme de e-learning traditionnelle. De plus, de nouvelles nécessités à implémenter, comme par exemple, l’introduction des compétences, ont rendu l’ancien modèle de données complètement obsolète et ont donc nécessité d’en concevoir un nouveau.<br /><br />
          Une autre compétence que m’a permis de développer ce stage est la gestion des données de l’information. En effet, afin que la plateforme puisse répondre à de nouveaux besoins, comme le fait que chaque cours ou chaque question dépende d’une compétence, ou encore que la plateforme soit maintenable dans le temps, il a été nécessaire de modifier le modèle de données existant.
        </p>

        <br />
        <div class="flex flex-row gap-4">
          <ImageContainer
            @on-click-image="openModalWithImage"
            :image="{
              path: '/ancienmcd.png',
              alt: 'Ancien MCD',
              caption: 'Ancien MCD'
            }"
          ></ImageContainer>
          <ImageContainer
            @on-click-image="openModalWithImage"
            :image="{
              path: '/newMCD.png',
              alt: 'Nouveau MCD',
              caption: 'Nouveau MCD'
            }"
          ></ImageContainer>

        </div>
        <div class="max-w-4xl mx-auto p-5 bg-gray-900 shadow-md rounded-lg mt-10">
          <h1 class="text-xl font-bold mb-4">Exigences non respectées par le modèle logique de données initial</h1>
          <p class="mb-4">Le premier modèle logique de données que vous pouvez voir est celui qui existait auparavant, il ne répondait pas aux exigences suivantes :</p>
          <ul class="list-disc pl-5 space-y-2">
            <li>Il est nécessaire de pouvoir assigner les cours et exercices à des compétences afin d’assurer la continuité pédagogique.</li>
            <li>La plateforme doit être maintenable dans le temps.</li>
            <li>Plus rien (ni exercice, ni cours) ne doit être écrit en dur dans le code.</li>
            <li>Le logiciel doit être facile d’utilisation pour les enseignants et étudiants.</li>
          </ul>
          <br><br>
          <p>Le nouveau modèle de données répond à ces exigences, on y retrouve les compétences, ainsi qu’un système complet permettant de créer des cours, des questions et des cas pratiques, donc de ne plus rien avoir d’écrit en dur dans le code. </p>
        </div>
        <h2 id="4"
          class="text-2xl font-bold w-full bg-purple-500 text-white h-12 rounded-lg flex items-center px-4"
        >
          Futur du projet
        </h2>
        <p>
          SEO-elp est loin d’être un projet abouti, les perspectives d’évolution sont multiples. On pourrait par exemple, penser à rajouter plusieurs types de questions spécifiques au SEO, ou encore développer un système complet permettant aux enseignants de suivre la progression de leurs étudiants à travers l’évolution de leurs résultats. Nous pourrions également développer la notion d’appartenance à un établissement, bien que prise en compte par le modèle de données, je n’aurai malheureusement pas le temps de l’aborder pendant mon stage.        </p>
      </div>
    </div>
    <div>
      <footer class="flex justify-center items-center h-16 text-lg font-semibold text-zinc-300">
        Nathan MARECHAL © 2024
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// eslint-disable-next-line no-unused-vars
import ImageContainer from '../components/ImagesContainer.vue'
import PrettyTable from '../components/PrettyTable.vue'

const isNavScrolled = ref(false)
const isOpen = ref(false)
const navItems = ref([])

function handleScroll() {
  if (window.scrollY >= window.screen.height - document.getElementById('navbar').offsetHeight) {
    isNavScrolled.value = true
  } else {
    isNavScrolled.value = false
  }
}

function openModalWithImage(path, alt) {
  isOpen.value = true
  console.log(path, alt)
  const img = document.getElementById('modal-image')
  console.log(img)
  img.src = path
  img.alt = alt
}

function closeModal() {
  isOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  const h2List = document.querySelectorAll('h2')
  for (const h2 of h2List) {
    const newItem = { id: h2.id, text: h2.innerText }
    navItems.value.push(newItem)
  }
  console.log(navItems.value)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
