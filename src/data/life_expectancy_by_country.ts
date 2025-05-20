export type CountryLifeExpectancy = {
    country: string;
    code: string; // ISO 3166-1 alpha-2 or alpha-3 code
    male: number;
    female: number;
};

export const LIFE_EXPECTANCY_BY_COUNTRY: CountryLifeExpectancy[] = [
    { country: "United Kingdom", code: "GB", male: 79, female: 83 },
    { country: "Afghanistan", code: "AF", male: 61, female: 64 },
    { country: "Albania", code: "AL", male: 75, female: 79 },
    { country: "Algeria", code: "DZ", male: 74, female: 77 },
    { country: "Angola", code: "AO", male: 61, female: 65 },
    { country: "Argentina", code: "AR", male: 72, female: 79 },
    { country: "Australia", code: "AU", male: 81, female: 85 },
    { country: "Austria", code: "AT", male: 79, female: 84 },
    { country: "Bangladesh", code: "BD", male: 71, female: 74 },
    { country: "Belgium", code: "BE", male: 79, female: 84 },
    { country: "Brazil", code: "BR", male: 72, female: 79 },
    { country: "Canada", code: "CA", male: 80, female: 84 },
    { country: "China", code: "CN", male: 75, female: 80 },
    { country: "Egypt", code: "EG", male: 70, female: 74 },
    { country: "France", code: "FR", male: 80, female: 86 },
    { country: "Germany", code: "DE", male: 78, female: 83 },
    { country: "India", code: "IN", male: 68, female: 71 },
    { country: "Japan", code: "JP", male: 81, female: 87 },
    { country: "Kenya", code: "KE", male: 62, female: 67 },
    { country: "Nigeria", code: "NG", male: 54, female: 56 },
    { country: "South Africa", code: "ZA", male: 62, female: 68 },
    { country: "United States", code: "US", male: 76, female: 81 },
    // ...add more countries as needed
];