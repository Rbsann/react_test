import axios from "axios";
import { PokemonGetReturn } from "./types";

const getPokemon = async (): Promise<PokemonGetReturn> => {
  const { data }: { data: PokemonGetReturn } = await axios.get(
    `${process.env.REACT_APP_API_URL}/pokemon/`
  );
  return data;
};

export default getPokemon;
