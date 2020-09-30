import {graphql, useStaticQuery} from "gatsby";
require('./arrayStringCount');

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
        .reduce((prev, current) => prev.concat(current));

    const totalLanguages = languages.length

    const languageCount = languages.stringCount();

    return languageCount.map(arr => {
        return {
            name: arr[0],
            percentage: Math.round((arr.length / totalLanguages * 100) * 10) / 10
        }
    });
}
