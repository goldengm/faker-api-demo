import axios from 'axios';
import { FakerApiResponse } from '../types/FakerData';

const API_URL = 'https://fakerapi.it/api/v1/images?_width=380';

export const fetchFakerData = async (): Promise<FakerApiResponse> => {
  const response = await axios.get<FakerApiResponse>(API_URL);
  return response.data;
};