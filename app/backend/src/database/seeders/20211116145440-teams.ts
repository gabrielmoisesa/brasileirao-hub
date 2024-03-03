import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'teams',
      [
        {
          team_name: 'América',
          image_url:
            'https://logodetimes.com/times/america-mineiro/logo-america-mineiro-256.png',
        },
        {
          team_name: 'Athletico Paranaense',
          image_url:
            'https://logodetimes.com/times/atletico-paranaense/logo-atletico-paranaense-256.png',
        },
        {
          team_name: 'Atlético Mineiro',
          image_url:
            'https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-256.png',
        },
        {
          team_name: 'Bahia',
          image_url: 'https://logodetimes.com/times/bahia/logo-bahia-256.png',
        },
        {
          team_name: 'Botafogo',
          image_url:
            'https://logodetimes.com/times/botafogo/logo-botafogo-256.png',
        },
        {
          team_name: 'Corinthians',
          image_url:
            'https://logodetimes.com/times/corinthians/logo-corinthians-256.png',
        },
        {
          team_name: 'Coritiba',
          image_url:
            'https://logodetimes.com/times/coritiba/logo-coritiba-256.png',
        },
        {
          team_name: 'Cruzeiro',
          image_url:
            'https://logodetimes.com/times/cruzeiro/logo-cruzeiro-256.png',
        },
        {
          team_name: 'Cuiabá',
          image_url: 'https://logodetimes.com/times/cuiaba/logo-cuiaba-256.png',
        },
        {
          team_name: 'Flamengo',
          image_url:
            'https://logodetimes.com/times/flamengo/logo-flamengo-256.png',
        },
        {
          team_name: 'Fluminense',
          image_url:
            'https://logodetimes.com/times/fluminense/logo-fluminense-256.png',
        },
        {
          team_name: 'Fortaleza',
          image_url:
            'https://logodetimes.com/times/fortaleza/logo-fortaleza-256.png',
        },
        {
          team_name: 'Goiás',
          image_url:
            'https://logodetimes.com/times/goias/logo-goias-esporte-clube-256.png',
        },
        {
          team_name: 'Grêmio',
          image_url: 'https://logodetimes.com/times/gremio/logo-gremio-256.png',
        },
        {
          team_name: 'Internacional',
          image_url:
            'https://logodetimes.com/times/internacional/logo-internacional-256.png',
        },
        {
          team_name: 'Palmeiras',
          image_url:
            'https://logodetimes.com/times/palmeiras/logo-palmeiras-256.png',
        },
        {
          team_name: 'Red Bull Bragantino',
          image_url:
            'https://logodetimes.com/times/red-bull-bragantino/logo-red-bull-bragantino-256.png',
        },
        {
          team_name: 'Santos',
          image_url: 'https://logodetimes.com/times/santos/logo-santos-256.png',
        },
        {
          team_name: 'São Paulo',
          image_url:
            'https://logodetimes.com/times/sao-paulo/logo-sao-paulo-256.png',
        },
        {
          team_name: 'Vasco da Gama',
          image_url:
            'https://logodetimes.com/times/vasco-da-gama/logo-vasco-da-gama-256.png',
        },
      ],
      {}
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('teams', {});
  },
};
