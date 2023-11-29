// // 1

// async function numberFact() {
//     const res = await axios.get('http://numbersapi.com/42')
//     console.log(res.data)
// }

// numberFact()
// // 2

// async function multiNumberFact() {
//     const res = await axios.get('http://numbersapi.com/1..3,42?')
//     console.log(res.data)
// }

// multiNumberFact()
// 3

// async function numberMultiFacts() {
//     let baseURL = 'http://numbersapi.com';
//     let facts = await Promise.all([
//         axios.get(`${baseURL}/42`),
//         axios.get(`${baseURL}/42`),
//         axios.get(`${baseURL}/42`),
//         axios.get(`${baseURL}/42`)
//     ]);

//     console.log(facts[0].data)
//     console.log(facts[1].data)
//     console.log(facts[2].data)
//     console.log(facts[3].data)
// }

// numberMultiFacts()