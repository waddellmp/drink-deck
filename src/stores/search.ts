import { http } from '@/axios';
import { defineStore } from 'pinia';

interface DrinkDto {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strTags: string | null;
  strVideo: string | null;
  strCategory: string;
  strIBA: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string | null;
  strInstructionsDE: string;
  strInstructionsFR: string | null;
  strInstructionsIT: string;
  'strInstructionsZH-HANS': string | null;
  'strInstructionsZH-HANT': string | null;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strImageSource: string;
  strImageAttribution: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string;
}

interface DrinksListDto {
  drinks: DrinkDto[];
}

export const useSearchStore = defineStore('search', {
  state: () => ({
    results: { drinks: [] as DrinkDto[] }
  }),
  actions: {
    async searchByNameAsync(nameQuery: string) {
      const response = await http.get<DrinksListDto>(`/search.php?s=${nameQuery}`);
      this.results = {
        drinks: response.data.drinks
      };
    }
  }
});
