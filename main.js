const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=froaen
The quick brown fox fjmps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)