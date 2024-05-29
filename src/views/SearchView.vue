<script setup lang="ts">
import { useSearchStore } from '@/stores/search';
import { onMounted, ref, watch } from 'vue';

const currentInstructions = ref<{
  drinkId: string;
  instructions: string;
}>({ drinkId: '', instructions: '' });

const search = useSearchStore();

const handleSearch = async (e: Event) => {
  const target = e.target as HTMLInputElement;
  search.searchByNameAsync(target.value);
};

const getTags = (tags: string | null) => {
  return tags ? tags.split(',') : [];
};

const displayInstructions = (id: string, instructions: string) => {
  currentInstructions.value = {
    drinkId: id,
    instructions: instructions
  };
  const el = document.getElementById(id);
  if (el) {
    (el as HTMLDialogElement).showModal();
  }
};

// Fire search post mont
onMounted(() => {
  search.searchByNameAsync('');
});
</script>

<template>
  <main>
    <div class="container px-10">
      <h1 class="text-xl">Search</h1>
      <div class="flex flex-col gap-24">
        <label class="input input-bordered flex items-center gap-2">
          <input type="text" class="grow" placeholder="Search" @input="handleSearch" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70">
            <path fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd" />
          </svg>
        </label>
        <div class="drink-list flex flex-col gap-4" v-if="search.$state.results.drinks.length > 0">
          <div v-for="drink in search.$state.results.drinks" :key="drink.idDrink"
            class="drink-list-item card shadow-xl flex flex-col gap-4">
            <!-- Drink thumbnail -->
            <figure class="flex-none flex-grow">
              <img class="" :src=" drink.strDrinkThumb" :alt="drink.strDrink" />
            </figure>

            <div class="p-4 flex flex-col gap-4">
              <!-- Drink name -->
              <div>{{ drink.strDrink }}</div>

              <!-- Instructions -->
              <div class="instructions">
                <button class="btn-outline btn btn-xs"
                  @click="() => displayInstructions(drink.idDrink, drink.strInstructions)">
                  + More
                </button>

                <dialog className="modal" :id="drink.idDrink">
                  <div className="modal-box">
                    <h3 class="font-bold text-lg">{{ drink.strDrink }}</h3>
                    <p class="py-4">{{ drink.strInstructions }}</p>
                  </div>
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>

              <!-- Category -->
              <div class="text-sm">
                Drink Category:
                <div class="badge">{{ drink.strCategory }}</div>
              </div>

              <!-- Tags -->
              <div class="flex gap-2">
                <div v-for="tag in getTags(drink.strTags)">
                  <span class="text-xs">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.drink-list {
  height: 65dvh;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}
</style>
