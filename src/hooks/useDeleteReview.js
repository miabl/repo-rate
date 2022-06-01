import { useMutation } from "@apollo/client"
import { DELETE_REVIEW } from "../graphql/mutations"

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW)

  const deleteUser = async ({ deleteReviewId }) => {
    await mutate({ variables: { deleteReviewId } })
  }

  return [deleteUser, result]
}

export default useDeleteReview
