import { QueryInterface } from 'sequelize';

// 1 América
// 2 Athletico Paranaense
// 3 Atlético Mineiro
// 4 Bahia
// 5 Botafogo
// 6 Corinthians
// 7 Coritiba
// 8 Cruzeiro
// 9 Cuiabá
// 10 Flamengo
// 11 Fluminense
// 12 Fortaleza
// 13 Goiás
// 14 Grêmio
// 15 Internacional
// 16 Palmeiras
// 17 Red Bull Bragantino
// 18 Santos
// 19 São Paulo
// 20 Vasco da Gama

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'matches',
      [
        // Round 1
        // Home team x Away team
        // Palmeiras 2 x 1 Cuiabá
        {
          home_team_id: 16,
          home_team_goals: 2,
          away_team_id: 9,
          away_team_goals: 1,
          in_progress: false,
        },
        // América 0 x 3 Fluminense
        {
          home_team_id: 1,
          home_team_goals: 0,
          away_team_id: 11,
          away_team_goals: 3,
          in_progress: false,
        },
        // Red Bull Bragantino 2 x 1 Bahia
        {
          home_team_id: 17,
          home_team_goals: 2,
          away_team_id: 4,
          away_team_goals: 1,
          in_progress: false,
        },
        // Botafogo 2 x 1 São Paulo
        {
          home_team_id: 5,
          home_team_goals: 2,
          away_team_id: 19,
          away_team_goals: 1,
          in_progress: false,
        },
        // Athletico-PR 2 x 0 Goiás
        {
          home_team_id: 2,
          home_team_goals: 2,
          away_team_id: 13,
          away_team_goals: 0,
          in_progress: false,
        },
        // Fortaleza 1 x 1 Internacional
        {
          home_team_id: 12,
          home_team_goals: 1,
          away_team_id: 15,
          away_team_goals: 1,
          in_progress: false,
        },
        // Atlético-MG 1 x 2 Vasco da Gama
        {
          home_team_id: 3,
          home_team_goals: 1,
          away_team_id: 20,
          away_team_goals: 2,
          in_progress: false,
        },
        // Flamengo 3 x 0 Coritiba
        {
          home_team_id: 10,
          home_team_goals: 3,
          away_team_id: 7,
          away_team_goals: 0,
          in_progress: false,
        },
        // Corinthians 2 x 1 Cruzeiro
        {
          home_team_id: 6,
          home_team_goals: 2,
          away_team_id: 8,
          away_team_goals: 1,
          in_progress: false,
        },
        // Grêmio 1 x 0 Santos
        {
          home_team_id: 14,
          home_team_goals: 1,
          away_team_id: 18,
          away_team_goals: 0,
          in_progress: false,
        },
        // Round 2
        // Fluminense 2 x 0 Athletico-PR
        {
          home_team_id: 11,
          home_team_goals: 2,
          away_team_id: 2,
          away_team_goals: 0,
          in_progress: false,
        },
        // São Paulo 3 x 0 América-MG
        {
          home_team_id: 19,
          home_team_goals: 3,
          away_team_id: 1,
          away_team_goals: 0,
          in_progress: false,
        },
        // Cuiabá 1 x 1 Red Bull Bragantino
        {
          home_team_id: 9,
          home_team_goals: 1,
          away_team_id: 17,
          away_team_goals: 1,
          in_progress: false,
        },
        // Cruzeiro 1 x 0 Grêmio
        {
          home_team_id: 8,
          home_team_goals: 1,
          away_team_id: 14,
          away_team_goals: 0,
          in_progress: false,
        },
        // Internacional 2 x 1 Flamengo
        {
          home_team_id: 15,
          home_team_goals: 2,
          away_team_id: 10,
          away_team_goals: 1,
          in_progress: false,
        },
        // Santos 0 x 0 Atlético-MG
        {
          home_team_id: 18,
          home_team_goals: 0,
          away_team_id: 3,
          away_team_goals: 0,
          in_progress: false,
        },
        // Vasco da Gama 2 x 2 Palmeiras
        {
          home_team_id: 20,
          home_team_goals: 2,
          away_team_id: 16,
          away_team_goals: 2,
          in_progress: false,
        },
        // Coritiba 0 x 3 Fortaleza
        {
          home_team_id: 7,
          home_team_goals: 0,
          away_team_id: 12,
          away_team_goals: 3,
          in_progress: false,
        },
        // Goiás 3 x 1 Corinthians
        {
          home_team_id: 13,
          home_team_goals: 3,
          away_team_id: 6,
          away_team_goals: 1,
          in_progress: false,
        },
        // Bahia 1 x 2 Botafogo
        {
          home_team_id: 4,
          home_team_goals: 1,
          away_team_id: 5,
          away_team_goals: 2,
          in_progress: false,
        },
        // Round 3
        // Coritiba 1 x 1 São Paulo
        {
          home_team_id: 7,
          home_team_goals: 1,
          away_team_id: 19,
          away_team_goals: 1,
          in_progress: false,
        },
        // Fortaleza 4 x 2 Fluminense
        {
          home_team_id: 12,
          home_team_goals: 4,
          away_team_id: 11,
          away_team_goals: 2,
          in_progress: false,
        },
        // Palmeiras 2 x 1 Corinthians
        {
          home_team_id: 16,
          home_team_goals: 2,
          away_team_id: 6,
          away_team_goals: 1,
          in_progress: false,
        },
        // Santos 3 x 2 América-MG
        {
          home_team_id: 18,
          home_team_goals: 3,
          away_team_id: 1,
          away_team_goals: 2,
          in_progress: false,
        },
        // Red Bull Bragantino 0 x 3 Cruzeiro
        {
          home_team_id: 17,
          home_team_goals: 0,
          away_team_id: 8,
          away_team_goals: 3,
          in_progress: false,
        },
        // Atlético-MG 2 x 1 Athletico-PR
        {
          home_team_id: 3,
          home_team_goals: 2,
          away_team_id: 2,
          away_team_goals: 1,
          in_progress: false,
        },
        // Flamengo 2 x 3 Botafogo
        {
          home_team_id: 10,
          home_team_goals: 2,
          away_team_id: 5,
          away_team_goals: 3,
          in_progress: false,
        },
        // Internacional 1 x 0 Goiás
        {
          home_team_id: 15,
          home_team_goals: 1,
          away_team_id: 13,
          away_team_goals: 0,
          in_progress: false,
        },
        // Cuiabá 1 x 2 Grêmio
        {
          home_team_id: 9,
          home_team_goals: 1,
          away_team_id: 14,
          away_team_goals: 2,
          in_progress: false,
        },
        // Vasco da Gama 0 x 1 Bahia
        {
          home_team_id: 20,
          home_team_goals: 0,
          away_team_id: 4,
          away_team_goals: 1,
          in_progress: false,
        },
        // Round 4
        // Cruzeiro 2 x 1 Santos
        {
          home_team_id: 8,
          home_team_goals: 2,
          away_team_id: 18,
          away_team_goals: 1,
          in_progress: false,
        },
        // Fluminense 1 x 1 Vasco da Gama
        {
          home_team_id: 11,
          home_team_goals: 1,
          away_team_id: 20,
          away_team_goals: 1,
          in_progress: false,
        },
        // América-MG 1 x 2 Cuiabá
        {
          home_team_id: 1,
          home_team_goals: 1,
          away_team_id: 9,
          away_team_goals: 2,
          in_progress: false,
        },
        // São Paulo 2 x 0 Internacional
        {
          home_team_id: 19,
          home_team_goals: 2,
          away_team_id: 15,
          away_team_goals: 0,
          in_progress: false,
        },
        // Athletico-PR 2 x 1 Flamengo
        {
          home_team_id: 2,
          home_team_goals: 2,
          away_team_id: 10,
          away_team_goals: 1,
          in_progress: false,
        },
        // Bahia 3 x 1 Coritiba
        {
          home_team_id: 4,
          home_team_goals: 3,
          away_team_id: 7,
          away_team_goals: 1,
          in_progress: false,
        },
        // Botafogo 2 x 0 Atlético-MG
        {
          home_team_id: 5,
          home_team_goals: 2,
          away_team_id: 3,
          away_team_goals: 0,
          in_progress: false,
        },
        // Goiás 0 x 5 Palmeiras
        {
          home_team_id: 13,
          home_team_goals: 0,
          away_team_id: 16,
          away_team_goals: 5,
          in_progress: false,
        },
        // Grêmio 3 x 3 Red Bull Bragantino
        {
          home_team_id: 14,
          home_team_goals: 3,
          away_team_id: 17,
          away_team_goals: 3,
          in_progress: false,
        },
        // Corinthians 1 x 1 Fortaleza
        {
          home_team_id: 6,
          home_team_goals: 1,
          away_team_id: 12,
          away_team_goals: 1,
          in_progress: false,
        },
        // Round 5
        // Santos 3 x 0 Bahia
        {
          home_team_id: 18,
          home_team_goals: 3,
          away_team_id: 4,
          away_team_goals: 0,
          in_progress: false,
        },
        // Red Bull Bragantino 2 x 2 América-MG
        {
          home_team_id: 17,
          home_team_goals: 2,
          away_team_id: 1,
          away_team_goals: 2,
          in_progress: false,
        },
        // Internacional 0 x 2 Athletico-PR
        {
          home_team_id: 15,
          home_team_goals: 0,
          away_team_id: 2,
          away_team_goals: 2,
          in_progress: false,
        },
        // Flamengo 2 x 0 Goiás
        {
          home_team_id: 10,
          home_team_goals: 2,
          away_team_id: 13,
          away_team_goals: 0,
          in_progress: false,
        },
        // Cuiabá 0 x 4 Atlético-MG
        {
          home_team_id: 9,
          home_team_goals: 0,
          away_team_id: 3,
          away_team_goals: 4,
          in_progress: false,
        },
        // Palmeiras 4 x 1 Grêmio
        {
          home_team_id: 16,
          home_team_goals: 4,
          away_team_id: 14,
          away_team_goals: 1,
          in_progress: false,
        },
        // Cruzeiro 0 x 2 Fluminense
        {
          home_team_id: 8,
          home_team_goals: 0,
          away_team_id: 11,
          away_team_goals: 2,
          in_progress: false,
        },
        // Coritiba 1 x 1 Vasco da Gama
        {
          home_team_id: 7,
          home_team_goals: 1,
          away_team_id: 20,
          away_team_goals: 1,
          in_progress: false,
        },
        // Botafogo 3 x 0 Corinthians
        {
          home_team_id: 5,
          home_team_goals: 3,
          away_team_id: 6,
          away_team_goals: 0,
          in_progress: false,
        },
        // Fortaleza 0 x 0 São Paulo
        {
          home_team_id: 12,
          home_team_goals: 0,
          away_team_id: 19,
          away_team_goals: 0,
          in_progress: false,
        },
        // Round 6
        // Bahia 2 x 3 Flamengo
        {
          home_team_id: 4,
          home_team_goals: 2,
          away_team_id: 10,
          away_team_goals: 3,
          in_progress: false,
        },
        // Palmeiras 1 x 1 Red Bull Bragantino
        {
          home_team_id: 16,
          home_team_goals: 1,
          away_team_id: 17,
          away_team_goals: 1,
          in_progress: false,
        },
        // Fluminense 2 x 0 Cuiabá
        {
          home_team_id: 11,
          home_team_goals: 2,
          away_team_id: 9,
          away_team_goals: 0,
          in_progress: false,
        },
        // Atlético-MG 2 x 0 Internacional
        {
          home_team_id: 3,
          home_team_goals: 2,
          away_team_id: 15,
          away_team_goals: 0,
          in_progress: false,
        },
        // Grêmio 0 x 0 Fortaleza
        {
          home_team_id: 14,
          home_team_goals: 0,
          away_team_id: 12,
          away_team_goals: 0,
          in_progress: false,
        },
        // Vasco da Gama 0 x 1 Santos
        {
          home_team_id: 20,
          home_team_goals: 0,
          away_team_id: 18,
          away_team_goals: 1,
          in_progress: false,
        },
        // Corinthians 1 x 1 São Paulo
        {
          home_team_id: 6,
          home_team_goals: 1,
          away_team_id: 19,
          away_team_goals: 1,
          in_progress: false,
        },
        // Goiás 2 x 1 Botafogo
        {
          home_team_id: 13,
          home_team_goals: 2,
          away_team_id: 5,
          away_team_goals: 1,
          in_progress: false,
        },
        // Athletico-PR 3 x 2 Coritiba
        {
          home_team_id: 2,
          home_team_goals: 3,
          away_team_id: 7,
          away_team_goals: 2,
          in_progress: false,
        },
        // América-MG 0 x 4 Cruzeiro
        {
          home_team_id: 1,
          home_team_goals: 0,
          away_team_id: 8,
          away_team_goals: 4,
          in_progress: false,
        },
        // Round 7
        // Bahia 1 x 1 Goiás
        {
          home_team_id: 4,
          home_team_goals: 1,
          away_team_id: 13,
          away_team_goals: 1,
          in_progress: false,
        },
        // São Paulo 4 x 2 Vasco da Gama
        {
          home_team_id: 19,
          home_team_goals: 4,
          away_team_id: 20,
          away_team_goals: 2,
          in_progress: false,
        },
        // Red Bull Bragantino 2 x 0 Athletico-PR
        {
          home_team_id: 17,
          home_team_goals: 2,
          away_team_id: 2,
          away_team_goals: 0,
          in_progress: false,
        },
        // Botafogo 1 x 0 Fluminense
        {
          home_team_id: 5,
          home_team_goals: 1,
          away_team_id: 11,
          away_team_goals: 0,
          in_progress: false,
        },
        // Coritiba 1 x 2 Atlético-MG
        {
          home_team_id: 7,
          home_team_goals: 1,
          away_team_id: 3,
          away_team_goals: 2,
          in_progress: false,
        },
        // América-MG 2 x 1 Fortaleza
        {
          home_team_id: 1,
          home_team_goals: 2,
          away_team_id: 12,
          away_team_goals: 1,
          in_progress: false,
        },
        // Santos 0 x 0 Palmeiras
        {
          home_team_id: 18,
          home_team_goals: 0,
          away_team_id: 16,
          away_team_goals: 0,
          in_progress: false,
        },
        // Flamengo 1 x 0 Corinthians
        {
          home_team_id: 10,
          home_team_goals: 1,
          away_team_id: 6,
          away_team_goals: 0,
          in_progress: false,
        },
        // Grêmio 3 x 1 Internacional
        {
          home_team_id: 14,
          home_team_goals: 3,
          away_team_id: 15,
          away_team_goals: 1,
          in_progress: false,
        },
        // Cruzeiro 0 x 1 Cuiabá
        {
          home_team_id: 8,
          home_team_goals: 0,
          away_team_id: 9,
          away_team_goals: 1,
          in_progress: false,
        },
        // Round 8
        // Athletico-PR 1 x 2 Grêmio
        {
          home_team_id: 2,
          home_team_goals: 1,
          away_team_id: 14,
          away_team_goals: 2,
          in_progress: false,
        },
        // Fortaleza 2 x 0 Vasco da Gama
        {
          home_team_id: 12,
          home_team_goals: 2,
          away_team_id: 20,
          away_team_goals: 0,
          in_progress: false,
        },
        // Flamengo 1 x 1 Cruzeiro
        {
          home_team_id: 10,
          home_team_goals: 1,
          away_team_id: 8,
          away_team_goals: 1,
          in_progress: false,
        },
        // Cuiabá 1 x 1 Coritiba
        {
          home_team_id: 9,
          home_team_goals: 1,
          away_team_id: 7,
          away_team_goals: 1,
          in_progress: false,
        },
        // São Paulo 2 x 1 Goiás
        {
          home_team_id: 19,
          home_team_goals: 2,
          away_team_id: 13,
          away_team_goals: 1,
          in_progress: false,
        },
        // Internacional 2 x 0 Bahia
        {
          home_team_id: 15,
          home_team_goals: 2,
          away_team_id: 4,
          away_team_goals: 0,
          in_progress: false,
        },
        // Corinthians 2 x 0 Fluminense
        {
          home_team_id: 6,
          home_team_goals: 2,
          away_team_id: 11,
          away_team_goals: 0,
          in_progress: false,
        },
        // Atlético-MG 1 x 1 Palmeiras
        {
          home_team_id: 3,
          home_team_goals: 1,
          away_team_id: 16,
          away_team_goals: 1,
          in_progress: false,
        },
        // Botafogo 2 x 0 América-MG
        {
          home_team_id: 5,
          home_team_goals: 2,
          away_team_id: 1,
          away_team_goals: 0,
          in_progress: false,
        },
        // Red Bull Bragantino 2 x 0 Santos
        {
          home_team_id: 17,
          home_team_goals: 2,
          away_team_id: 18,
          away_team_goals: 0,
          in_progress: false,
        },
        // Round 9 (Ongoing)
        // Fortaleza 0 x 0 Bahia
        {
          home_team_id: 12,
          home_team_goals: 0,
          away_team_id: 4,
          away_team_goals: 0,
          in_progress: true,
        },
        // Athletico-PR 1 x 0 Botafogo
        {
          home_team_id: 2,
          home_team_goals: 1,
          away_team_id: 5,
          away_team_goals: 0,
          in_progress: true,
        },
        // Santos 1 x 1 Internacional
        {
          home_team_id: 18,
          home_team_goals: 1,
          away_team_id: 15,
          away_team_goals: 1,
          in_progress: true,
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('matches', {});
  },
}
