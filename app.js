let pronoun = ["the", "our"];
let adj = ["great", "big", "best"];
let noun = ["jogger", "racoon", "sport"];
let dot = [".com", ".es", ".io", ".net"];

for (let i in pronoun) {
  for (let a in adj) {
    for (let b in noun) {
      for (let c in dot) {
        console.log(pronoun[i] + adj[a] + noun[b] + dot[c]);
      }
    }
  }
}
