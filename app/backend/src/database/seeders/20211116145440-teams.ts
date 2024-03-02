import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'teams',
      [
        { team_name: "América", image_url: "" },
        { team_name: "Athletico Paranaense", image_url: "" },
        { team_name: "Atlético Mineiro", image_url: "" },
        { team_name: "Bahia", image_url: "" },
        { team_name: "Botafogo", image_url: "" },
        { team_name: "Corinthians", image_url: "" },
        { team_name: "Coritiba", image_url: "" },
        { team_name: "Cruzeiro", image_url: "" },
        { team_name: "Cuiabá", image_url: "" },
        { team_name: "Flamengo", image_url: "" },
        { team_name: "Fluminense", image_url: "" },
        { team_name: "Fortaleza", image_url: "" },
        { team_name: "Goiás", image_url: "" },
        { team_name: "Grêmio", image_url: "" },
        { team_name: "Internacional", image_url: "" },
        { team_name: "Palmeiras", image_url: "" },
        { team_name: "Red Bull Bragantino", image_url: "" },
        { team_name: "Santos", image_url: "" },
        { team_name: "São Paulo", image_url: "" },
        { team_name: "Vasco da Gama", image_url: "" }
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('teams', {});
  },
};
