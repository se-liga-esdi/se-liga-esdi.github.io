interface objectNiveis {
  campos: Array<{ dica: string }>;
  response: string;
  request: Array<string>;
}

export const useNiveis = () => {
  return useState<Array<objectNiveis>>("niveis", () => [
    {
      campos: [
        { dica: "66" },
        { dica: "666" },
        { dica: "55" },
        { dica: "444" },
        { dica: "2" },
        { dica: "3333" },
        { dica: "3333" },
        { dica: "1" },
        { dica: "00" },
      ],
      response: "nokia3310",
      request: [],
    },
  ]).value;
};
