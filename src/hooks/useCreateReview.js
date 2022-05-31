import { useMutation } from "@apollo/client"
import { CREATE_REVIEW } from "../graphql/mutations"

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW)

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const intRating = parseInt(rating)
    const { data } = await mutate({
      variables: { repositoryName, ownerName, rating: intRating, text },
    })
    return data
  }

  return [createReview, result]
}

export default useCreateReview
