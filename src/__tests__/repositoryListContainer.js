import RepositoryListContainer from "../components/RepositoryListContainer"
import React from "react"
import { render } from "@testing-library/react-native"
import { within } from "@testing-library/react-native"

var pow = Math.pow,
  floor = Math.floor,
  abs = Math.abs,
  log = Math.log
var abbrev = "kmb" // could be an array of strings: [' m', ' Mo', ' Md']

const round = (n, precision) => {
  var prec = Math.pow(10, precision)
  return Math.round(n * prec) / prec
}

const format = (n) => {
  var base = floor(log(abs(n)) / log(1000))
  var suffix = abbrev[Math.min(2, base - 1)]
  base = abbrev.indexOf(suffix) + 1
  return suffix ? round(n / pow(1000, base), 1) + suffix : "" + n
}

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      }
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      )

      const fullNames = getAllByTestId("fullName")
      const descriptions = getAllByTestId("description")
      const languages = getAllByTestId("language")
      const stars = getAllByTestId("Stars")
      const forks = getAllByTestId("Forks")
      const reviews = getAllByTestId("Reviews")
      const ratings = getAllByTestId("Rating")

      repositories.edges.forEach((repository, i) => {
        expect(fullNames[i]).toHaveTextContent(repository.node.fullName)
        expect(descriptions[i]).toHaveTextContent(repository.node.description)
        expect(languages[i]).toHaveTextContent(repository.node.language)
        expect(stars[i]).toHaveTextContent(
          format(repository.node.stargazersCount)
        )
        expect(forks[i]).toHaveTextContent(format(repository.node.forksCount))
        expect(reviews[i]).toHaveTextContent(repository.node.reviewCount)
        expect(ratings[i]).toHaveTextContent(repository.node.ratingAverage)
      })
    })
  })
})
