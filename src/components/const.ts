import * as countryData from 'country-data';
import { Country } from './types';

export const countries: Country[] = countryData.countries.all
  .filter((c) => c.status === 'assigned' && c.countryCallingCodes.length > 0 && c.currencies.length > 0 && c.languages.length > 0)
  .map((c) => ({
    alpha2: c.alpha2,
    alpha3: c.alpha3,
    countryCallingCode: c.countryCallingCodes[0] ?? '',
    currency: c.currencies[0] ?? '',
    emoji: c.emoji,
    ioc: c.ioc,
    language: c.languages[0] ?? '',
    name: c.name,
  }));
