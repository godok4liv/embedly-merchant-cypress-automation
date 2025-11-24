

import { faker, Faker } from "@faker-js/faker";
export function generateNigerianPhone()
{ const prefixes =['080','090','070','091','081'];
  const prefix = faker.helpers.arrayElement(prefixes);
  const remaining = faker.string.numeric(8);
  return `${prefix}${remaining}`;
}