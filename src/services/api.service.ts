export const apiService = {
  getHealth: async () => ({ status: 'ok' }),
  predictChampion: async (gameState: any) => ({ prediction: null }),
};
