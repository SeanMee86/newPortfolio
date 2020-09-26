import {graphql, useStaticQuery} from "gatsby";

export const GetGithubData = () => {
    const data = useStaticQuery(graphql`
        query {
          github {
            user(login: "SeanMee86") {
                repositories(first: 100) {
                  edges {
                    node{
                      name
                      languages(first: 20) {
                        edges {
                          node {
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
          }
        }
    `)

    const {github: {user: {repositories: {edges}}}} = data;
    const languages = edges
        .map(edge => edge.node.languages.edges.map(language => language.node.name))
        .reduce((prev, current) => prev.concat(current))
        .sort();

    const totalLanguages = languages.length

    const languageCount = []
    let langInd = 0;
    languages.forEach((language, i) => {
        if(i === 0){
            languageCount.push([])
            languageCount[langInd].push(language)
        }else if(languages[i] === languages[i-1]){
            languageCount[langInd].push(language)
        }else {
            languageCount.push([])
            langInd++
            languageCount[langInd].push(language)
        }
    })

    return languageCount.map(arr => {
        return {
            name: arr[0],
            percentage: Math.round((arr.length / totalLanguages * 100) * 10) / 10
        }
    });
}
