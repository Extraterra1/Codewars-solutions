// Trilingual democracy
// Switzerland has four official languages: German, French, Italian, and Romansh.1

// When native speakers of one or more of these languages meet, they follow certain regulations to choose a language for the group.2 Here are the rules for groups of exactly three3 people:4

// When all three are native speakers of the same language, it also becomes their group's language.5a

// When two are native speakers of the same language, but the third person speaks a different language, all three will converse in the minority language.5b

// When native speakers of three different languages meet, they eschew these three languages and instead use the remaining of the four official languages.5c

// The languages are encoded by the letters D for Deutsch, F for Français, I for Italiano, and K for Rumantsch.6

const trilingualDemocracy = (group) => {
  for (let i = 0; i < group.length; i++) {
    if ([...group].every((e) => e === group[i])) return group[i];
    if ([...group].filter((e) => e === group[i]).length === 2) return [...group].find((e) => e !== group[i]);
    return ['D', 'F', 'I', 'K'].find((e) => ![...group].includes(e));
  }
};

console.log(trilingualDemocracy('FFF'));
console.log(trilingualDemocracy('FFK'));
console.log(trilingualDemocracy('FDI'));
console.log(trilingualDemocracy('IIK'));
console.log(trilingualDemocracy('DFK'));
console.log(trilingualDemocracy('IDD'));
