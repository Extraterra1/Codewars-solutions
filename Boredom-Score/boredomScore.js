// Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

// You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

// Each department has a different boredom assessment score, as follows:

// accounts = 1
// finance = 2
// canteen = 10
// regulation = 3
// trading = 6
// change = 6
// IS = 8
// retail = 5
// cleaning = 4
// pissing about = 25

// Depending on the cumulative score of the team, return the appropriate sentiment:

// <=80: 'kill me now'
// < 100 & > 80: 'i can handle this'
// 100 or over: 'party time!!'

const boredomScore = (staff) => {
  const n = Object.keys(staff).reduce((acc, val) => {
    switch (staff[val]) {
      case 'accounts':
        return ++acc;
      case 'finance':
        return acc + 2;
      case 'canteen':
        return acc + 10;
      case 'regulation':
        return acc + 3;
      case 'trading':
        return acc + 6;
      case 'change':
        return acc + 6;
      case 'IS':
        return acc + 8;
      case 'retail':
        return acc + 5;
      case 'cleaning':
        return acc + 4;
      case 'pissing about':
        return acc + 25;
      default:
        return acc;
    }
  }, 0);
  return n >= 100 ? 'party time' : n > 80 ? 'i can handle this' : 'kill me now';
};

console.log(
  boredomScore({
    tim: 'change',
    jim: 'accounts',
    randy: 'canteen',
    sandy: 'change',
    andy: 'change',
    katie: 'IS',
    laura: 'change',
    saajid: 'IS',
    alex: 'trading',
    john: 'accounts',
    mr: 'finance'
  })
);

console.log(
  boredomScore({
    tim: 'IS',
    jim: 'finance',
    randy: 'pissing about',
    sandy: 'cleaning',
    andy: 'cleaning',
    katie: 'cleaning',
    laura: 'pissing about',
    saajid: 'regulation',
    alex: 'regulation',
    john: 'accounts',
    mr: 'canteen'
  })
);

console.log(
  boredomScore({
    tim: 'accounts',
    jim: 'accounts',
    randy: 'pissing about',
    sandy: 'finance',
    andy: 'change',
    katie: 'IS',
    laura: 'IS',
    saajid: 'canteen',
    alex: 'pissing about',
    john: 'retail',
    mr: 'pissing about'
  })
);

console.log(
  boredomScore({
    tim: 'pissing about',
    jim: 'canteen',
    randy: 'retail',
    sandy: 'regulation',
    andy: 'IS',
    katie: 'trading',
    laura: 'IS',
    saajid: 'accounts',
    alex: 'pissing about',
    john: 'accounts',
    mr: 'IS'
  })
);
